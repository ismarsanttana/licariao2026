'use client';

import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import * as d3 from 'd3-geo';
import type { FeatureCollection, Geometry } from 'geojson';
import {
  formatYears,
  getClientLocations,
  joinList,
  normalizeCityName,
  type ClientLocation,
  type StateCode,
} from '@/data/clients';
import styles from './ClientsMap.module.css';

type GeoJsonData = FeatureCollection<Geometry, { name: string }>;
type SelectedCity = ClientLocation & {
  x: number;
  y: number;
};

export default function ClientsMap() {
  const [activeState, setActiveState] = useState<StateCode>('PB');
  const [geoDataPB, setGeoDataPB] = useState<GeoJsonData | null>(null);
  const [geoDataRN, setGeoDataRN] = useState<GeoJsonData | null>(null);
  const [geoDataCE, setGeoDataCE] = useState<GeoJsonData | null>(null);
  const [geoDataPE, setGeoDataPE] = useState<GeoJsonData | null>(null);
  const [geoDataRO, setGeoDataRO] = useState<GeoJsonData | null>(null);
  const [selectedCity, setSelectedCity] = useState<SelectedCity | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load datasets independently
    const loadData = async () => {
      try {
        const [pb, rn, ce, pe, ro] = await Promise.all([
          fetch('/data/pb-municipios.json').then(res => res.json()),
          fetch('/data/rn-municipios.json').then(res => res.json()),
          fetch('/data/ce-municipios.json').then(res => res.json()),
          fetch('/data/pe-municipios.json').then(res => res.json()),
          fetch('/data/ro-municipios.json').then(res => res.json())
        ]);
        setGeoDataPB(pb);
        setGeoDataRN(rn);
        setGeoDataCE(ce);
        setGeoDataPE(pe);
        setGeoDataRO(ro);
      } catch (err) {
        console.error('Error loading map data:', err);
      }
    };
    void loadData();
  }, []);

  const clientsByCity = useMemo(
    () => new Map(
      getClientLocations(activeState).map((location) => [normalizeCityName(location.city), location]),
    ),
    [activeState],
  );

  // Determine which data to show
  let currentGeoData = geoDataPB;
  if (activeState === 'RN') currentGeoData = geoDataRN;
  if (activeState === 'CE') currentGeoData = geoDataCE;
  if (activeState === 'PE') currentGeoData = geoDataPE;
  if (activeState === 'RO') currentGeoData = geoDataRO;

  // Auto-fit projection to the container
  const baseWidth = 800;
  const baseHeight = 500;
  
  // Zoom controls
  const handleZoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  }, []);

  const handleZoomReset = useCallback(() => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  // Mouse wheel zoom - using native listener to allow preventDefault
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        setZoomLevel(prev => Math.min(prev + 0.15, 3));
      } else {
        setZoomLevel(prev => Math.max(prev - 0.15, 0.5));
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const handleStateChange = (state: StateCode) => {
    setActiveState(state);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setSelectedCity(null);
  };
  
  // Update projection if data is loaded to fit extent
  const fittedPathGenerator = useMemo(() => {
    if (!currentGeoData) return null;
    const proj = d3.geoMercator().fitSize([baseWidth, baseHeight], currentGeoData);
    return d3.geoPath().projection(proj);
  }, [currentGeoData]);

  // Calculate viewBox based on zoom level and pan offset
  const viewBox = useMemo(() => {
    const vbWidth = baseWidth / zoomLevel;
    const vbHeight = baseHeight / zoomLevel;
    const vbX = (baseWidth - vbWidth) / 2 - panOffset.x;
    const vbY = (baseHeight - vbHeight) / 2 - panOffset.y;
    return `${vbX} ${vbY} ${vbWidth} ${vbHeight}`;
  }, [zoomLevel, panOffset]);

  // Drag/pan handlers
  const handleMouseDown = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    // Only left click
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    panStart.current = { ...panOffset };
    e.currentTarget.style.cursor = 'grabbing';
  }, [panOffset]);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    // Scale the drag delta by the zoom level and SVG-to-screen ratio
    const el = mapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const scaleX = (baseWidth / zoomLevel) / rect.width;
    const scaleY = (baseHeight / zoomLevel) / rect.height;
    setPanOffset({
      x: panStart.current.x + dx * scaleX,
      y: panStart.current.y + dy * scaleY,
    });
  }, [zoomLevel]);

  const handleMouseUp = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    isDraggingRef.current = false;
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    isDraggingRef.current = false;
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
  }, []);


  const handleCityClick = (event: React.MouseEvent, clientData: ClientLocation | null) => {
    if (!clientData) return;

    // Get relative position in the container
    const rect = mapRef.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setSelectedCity({ ...clientData, x, y });
    }
  };

  return (
    <section id="mapa" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nossa Atuação nos Estados</h2>
          <p className={styles.subtitle}>
            Presente em diversos municípios, levando gestão eficiente e tecnologia de ponta.
          </p>
        </div>

        <div className={styles.mapContainer}>
          {/* State Toggle Buttons */}
          <div className={styles.stateToggles}>
            <button 
              className={`${styles.toggleBtn} ${activeState === 'PB' ? styles.active : ''}`}
              onClick={() => handleStateChange('PB')}
              aria-pressed={activeState === 'PB'}
            >
              Paraíba
            </button>
            <button 
              className={`${styles.toggleBtn} ${activeState === 'RN' ? styles.active : ''}`}
              onClick={() => handleStateChange('RN')}
              aria-pressed={activeState === 'RN'}
            >
              Rio Grande do Norte
            </button>
            <button 
              className={`${styles.toggleBtn} ${activeState === 'CE' ? styles.active : ''}`}
              onClick={() => handleStateChange('CE')}
              aria-pressed={activeState === 'CE'}
            >
              Ceará
            </button>
            <button 
              className={`${styles.toggleBtn} ${activeState === 'PE' ? styles.active : ''}`}
              onClick={() => handleStateChange('PE')}
              aria-pressed={activeState === 'PE'}
            >
              Pernambuco
            </button>
            <button 
              className={`${styles.toggleBtn} ${activeState === 'RO' ? styles.active : ''}`}
              onClick={() => handleStateChange('RO')}
              aria-pressed={activeState === 'RO'}
            >
              Rondônia
            </button>
          </div>

          <div className={styles.mapWrapper} ref={mapRef}>
            {/* Zoom Controls */}
            <div className={styles.zoomControls}>
              <button className={styles.zoomBtn} onClick={handleZoomIn} title="Aumentar zoom">+</button>
              <button className={styles.zoomBtn} onClick={handleZoomReset} title="Resetar zoom">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                  <path d="M3 3v5h5"/>
                </svg>
              </button>
              <button className={styles.zoomBtn} onClick={handleZoomOut} title="Diminuir zoom">−</button>
            </div>

            {selectedCity && (
              <div 
                className={`${styles.tooltip} ${styles.visible}`}
                style={{ left: selectedCity.x + 15, top: selectedCity.y - 15 }}
              >
                <button 
                  className={styles.closeBtn}
                  onClick={() => setSelectedCity(null)}
                >
                  &times;
                </button>
                <strong>{selectedCity.city}</strong>
                <span className={styles.tooltipState}>
                  {selectedCity.state === 'PB' ? 'Paraíba' : 
                   selectedCity.state === 'RN' ? 'Rio Grande do Norte' : 
                   selectedCity.state === 'CE' ? 'Ceará' :
                   selectedCity.state === 'PE' ? 'Pernambuco' :
                   selectedCity.state === 'RO' ? 'Rondônia' :
                   selectedCity.state}
                </span>
                <div className={styles.tooltipDivider}></div>
                {selectedCity.contracts.map((contract) => (
                  <div key={contract.orgao} className={styles.tooltipContract}>
                    <div className={styles.tooltipType}>{contract.orgao}</div>
                    <div className={styles.tooltipDesc}>{joinList(contract.services)}</div>
                    {contract.years.length > 0 && (
                      <div className={styles.tooltipYears}>{formatYears(contract.years)}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <svg
              viewBox={viewBox}
              style={{ width: '100%', height: 'auto', transition: isDragging ? 'none' : 'all 0.3s ease', cursor: 'grab' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {currentGeoData && fittedPathGenerator && currentGeoData.features.map((feature, i) => {
                const cityName = feature.properties?.name || '';
                const clientData = clientsByCity.get(normalizeCityName(cityName)) ?? null;
                const isClient = !!clientData;

                return (
                  <path
                    key={i}
                    d={fittedPathGenerator(feature) || ''}
                    className={styles.cityPath}
                    fill={isClient ? 'var(--accent)' : 'rgba(0,0,0,0.1)'}
                    stroke={isClient ? 'var(--primary)' : 'rgba(0,0,0,0.05)'}
                    strokeWidth={isClient ? 1 : 0.5}
                    onClick={(e) => handleCityClick(e, clientData)}
                    style={{
                      fill: isClient ? '#3E95EF' : 'rgba(150, 150, 150, 0.2)', // Blue as requested for clients
                      stroke: '#fff',
                      transition: 'all 0.3s ease',
                      cursor: isClient ? 'pointer' : 'default'
                    }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
        
        <div className={styles.legend}>
            <div className={styles.legendItem}>
                <div className={styles.legendColor} style={{ background: '#3E95EF' }}></div>
                <span>Municípios Atendidos</span>
            </div>
            <div className={styles.legendItem}>
                <div className={styles.legendColor} style={{ background: 'rgba(150, 150, 150, 0.2)' }}></div>
                <span>Outros Municípios</span>
            </div>
        </div>
      </div>
    </section>
  );
}

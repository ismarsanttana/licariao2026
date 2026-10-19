export type StateCode = 'PB' | 'RN' | 'CE' | 'PE' | 'RO';
export type Orgao = 'Prefeitura' | 'Câmara' | 'Instituto de Previdência' | 'AMDE Agência';

// One entry per contract (city + órgão). The same city + órgão may appear more
// than once: its entries are merged, joining the years and the services.
export interface Client {
  city: string;
  state: StateCode;
  orgao: Orgao;
  services: string[];
  years: number[];
}

export interface Contract {
  orgao: Orgao;
  services: string[];
  years: number[];
}

export interface ClientLocation {
  city: string;
  state: StateCode;
  contracts: Contract[];
}

const TRANSPARENCIA = 'Assessoria em Transparência';
const HORUS = 'Locação do Software Horus';
const LOCACAO = 'Locação de Software';
const LOCACAO_SOLUCOES = 'Locação de Soluções de Sistemas em Transparência Diversos';
const ESOCIAL = 'Assessoria em eSocial';
const FOLHA = 'Folha de Pagamento';
const PUBLICACOES = 'Assessoria em Publicação de Documentos';
const INSTITUCIONAL = 'Assessoria Institucional e Relacional';
const OUTRAS = 'Outras Soluções';

export const clients: Client[] = [
  // Paraíba (PB) — atualizacoes-jp/RELACAO DOS CLIENTES - ATUALIZADO E COM ANO.docx
  { city: 'Bonito de Santa Fé', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Monte Horebe', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Bonito de Santa Fé', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Santa Inês', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Mãe d\'Água', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [2024, 2025, 2026] },
  { city: 'Condado', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024, 2025, 2026] },
  { city: 'Malta', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024, 2025, 2026] },
  { city: 'São Bento', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Belém do Brejo do Cruz', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, LOCACAO], years: [2024, 2025] },
  { city: 'Santa Luzia', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Tenório', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Tenório', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Juazeirinho', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Soledade', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [2024, 2025, 2026] },
  { city: 'Soledade', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024] },
  { city: 'Olivedos', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Cubati', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Pedra Lavrada', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024] },
  { city: 'Damião', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024] },
  { city: 'Puxinanã', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024] },
  { city: 'Borborema', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024] },
  { city: 'Sossêgo', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024] },
  { city: 'Areial', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024, 2025, 2026] },
  { city: 'Cuité', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024, 2025, 2026] },
  { city: 'Nova Palmeira', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Barra de Santa Rosa', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS], years: [2025, 2026] },
  { city: 'Nova Floresta', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Mataraca', state: 'PB', orgao: 'Câmara', services: [HORUS], years: [2026] },
  { city: 'Lucena', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024] },
  { city: 'Santa Rita', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024] },
  { city: 'Zabelê', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [2026] },
  { city: 'São João do Tigre', state: 'PB', orgao: 'Prefeitura', services: [LOCACAO], years: [2025, 2026] },
  { city: 'Gado Bravo', state: 'PB', orgao: 'Prefeitura', services: [LOCACAO], years: [2025, 2026] },
  { city: 'São Sebastião do Umbuzeiro', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Zabelê', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, ESOCIAL, HORUS], years: [2025, 2026] },
  { city: 'Monteiro', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, ESOCIAL], years: [2024, 2025, 2026] },
  { city: 'Prata', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Ouro Velho', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025] },
  { city: 'Amparo', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Amparo', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Serra Branca', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [2024] },
  { city: 'Coxixola', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2026] },
  { city: 'São Domingos do Cariri', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Caraúbas', state: 'PB', orgao: 'Câmara', services: [HORUS, ESOCIAL, FOLHA], years: [2025, 2026] },
  { city: 'São José dos Cordeiros', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Livramento', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS], years: [2025, 2026] },
  { city: 'São João do Cariri', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024, 2025, 2026] },
  { city: 'Taperoá', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Cabaceiras', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Parari', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024, 2025, 2026] },
  { city: 'Alcantil', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024, 2025] },
  { city: 'Riacho de Santo Antônio', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024, 2025, 2026] },
  { city: 'Barra de Santana', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS], years: [2025, 2026] },
  { city: 'Barra de Santana', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Boa Vista', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Caturité', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Fagundes', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS], years: [2024, 2025, 2026] },
  { city: 'São Vicente do Seridó', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2025, 2026] },
  { city: 'Belém', state: 'PB', orgao: 'Instituto de Previdência', services: [PUBLICACOES], years: [2026] },
  { city: 'Riachão', state: 'PB', orgao: 'Instituto de Previdência', services: [PUBLICACOES], years: [2026] },
  { city: 'Campina Grande', state: 'PB', orgao: 'AMDE Agência', services: [PUBLICACOES], years: [2026] },
  { city: 'Baraúna', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2026] },
  { city: 'Solânea', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2026] },

  // Paraíba (PB) — já constavam no site antes da relação com anos
  { city: 'Alcantil', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Amparo', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Areial', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [] },
  { city: 'Areial', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Barra de Santana', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [] },
  { city: 'Barra de Santana', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS], years: [] },
  { city: 'Barra de Santa Rosa', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS], years: [] },
  { city: 'Belém do Brejo do Cruz', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Borborema', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Bonito de Santa Fé', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [] },
  { city: 'Boa Vista', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [] },
  { city: 'Cabaceiras', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Caraúbas', state: 'PB', orgao: 'Câmara', services: [HORUS, ESOCIAL, FOLHA], years: [] },
  { city: 'Caturité', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Condado', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Coxixola', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Cubati', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Cuité', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Damião', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Fagundes', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS], years: [] },
  { city: 'Fagundes', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [] },
  { city: 'Gado Bravo', state: 'PB', orgao: 'Prefeitura', services: [LOCACAO_SOLUCOES], years: [] },
  { city: 'Juazeirinho', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA, HORUS], years: [] },
  { city: 'Livramento', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS], years: [] },
  { city: 'Lucena', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Mãe d\'Água', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [] },
  { city: 'Malta', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Mataraca', state: 'PB', orgao: 'Prefeitura', services: [HORUS], years: [] },
  { city: 'Monteiro', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS, ESOCIAL, FOLHA], years: [] },
  { city: 'Nova Floresta', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Nova Palmeira', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Olivedos', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS], years: [] },
  { city: 'Ouro Velho', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Parari', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Pedra Lavrada', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Prata', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Puxinanã', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Riacho de Santo Antônio', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS], years: [] },
  { city: 'Santa Luzia', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Santa Rita', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'São Sebastião do Umbuzeiro', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'São Bento', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'São Domingos do Cariri', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'São João do Cariri', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'São João do Tigre', state: 'PB', orgao: 'Prefeitura', services: [LOCACAO_SOLUCOES], years: [] },
  { city: 'São José dos Cordeiros', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS], years: [] },
  { city: 'São Vicente do Seridó', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Serra Branca', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [] },
  { city: 'Serra Branca', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Soledade', state: 'PB', orgao: 'Prefeitura', services: [TRANSPARENCIA], years: [] },
  { city: 'Soledade', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Sossêgo', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Sumé', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Taperoá', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Tenório', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA], years: [] },
  { city: 'Zabelê', state: 'PB', orgao: 'Câmara', services: [TRANSPARENCIA, HORUS, ESOCIAL, FOLHA], years: [] },

  // Rio Grande do Norte (RN) — todos em 2024
  { city: 'Ceará-Mirim', state: 'RN', orgao: 'Câmara', services: [TRANSPARENCIA], years: [2024] },
  { city: 'Equador', state: 'RN', orgao: 'Câmara', services: [OUTRAS], years: [2024] },
  { city: 'Parelhas', state: 'RN', orgao: 'Câmara', services: [OUTRAS], years: [2024] },
  { city: 'Jaçanã', state: 'RN', orgao: 'Câmara', services: [OUTRAS], years: [2024] },

  // Ceará (CE) — todos em 2026
  { city: 'Viçosa do Ceará', state: 'CE', orgao: 'Câmara', services: [INSTITUCIONAL], years: [2026] },
  { city: 'Amontada', state: 'CE', orgao: 'Câmara', services: [INSTITUCIONAL], years: [2026] },
  { city: 'Amontada', state: 'CE', orgao: 'Prefeitura', services: [INSTITUCIONAL], years: [2026] },

  // Pernambuco (PE) — só em 2025
  { city: 'Jataúba', state: 'PE', orgao: 'Prefeitura', services: [HORUS], years: [2025] },

  // Rondônia (RO) — só em 2026
  { city: 'Cujubim', state: 'RO', orgao: 'Instituto de Previdência', services: [HORUS], years: [2026] },
];

export const normalizeCityName = (name: string) =>
  name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const union = <T,>(a: T[], b: T[]) => [...new Set([...a, ...b])];

// Groups contracts by city; the same órgão listed more than once keeps a single
// entry with the years and services of every listing combined.
export const getClientLocations = (state: StateCode): ClientLocation[] => {
  const locations = new Map<string, ClientLocation>();

  for (const client of clients.filter((c) => c.state === state)) {
    const key = normalizeCityName(client.city);
    let location = locations.get(key);
    if (!location) {
      location = { city: client.city, state, contracts: [] };
      locations.set(key, location);
    }

    const existing = location.contracts.find((c) => c.orgao === client.orgao);
    if (existing) {
      existing.years = union(existing.years, client.years).sort();
      existing.services = union(existing.services, client.services);
    } else {
      location.contracts.push({
        orgao: client.orgao,
        services: [...client.services],
        years: [...client.years].sort(),
      });
    }
  }

  return [...locations.values()];
};

// ['a', 'b', 'c'] -> "a, b e c"
export const joinList = (items: (string | number)[]) =>
  items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} e ${items[items.length - 1]}`;

// [2024, 2025, 2026] -> "2024 a 2026", [2025, 2026] -> "2025 e 2026"
export const formatYears = (years: number[]) => {
  const isContiguous = years.every((y, i) => i === 0 || y === years[i - 1] + 1);
  if (years.length >= 3 && isContiguous) return `${years[0]} a ${years[years.length - 1]}`;
  return joinList(years);
};

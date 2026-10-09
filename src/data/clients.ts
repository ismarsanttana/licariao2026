export type ClientType = 'Prefeitura' | 'Câmara' | 'Ambos' | 'Instituto';

export interface Client {
  city: string;
  state: 'PB' | 'RN' | 'CE' | 'PE' | 'RO';
  type: ClientType;
  description: string;
}

export const clients: Client[] = [
  // Paraíba (PB)
  { city: 'Alcantil', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria Transparência' },
  { city: 'Amparo', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Areial', state: 'PB', type: 'Ambos', description: 'Prefeitura e Câmara Assessoria Transparência' },
  { city: 'Barra de Santana', state: 'PB', type: 'Ambos', description: 'Prefeitura e Câmara Assessoria em Transparência ambos e software HORUS NA CÂMARA' },
  { city: 'Barra de Santa Rosa', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência e software HORUS' },
  { city: 'Belém do Brejo do Cruz', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Borborema', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Bonito de Santa Fé', state: 'PB', type: 'Prefeitura', description: 'Prefeitura Assessoria em Transparência' },
  { city: 'Boa Vista', state: 'PB', type: 'Prefeitura', description: 'Prefeitura Assessoria em Transparência' },
  { city: 'Cabaceiras', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Caraúbas', state: 'PB', type: 'Câmara', description: 'Câmara Software Horus e Assessoria de E-social e Folha de Pagamento' },
  { city: 'Caturité', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Condado', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Coxixola', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Cubati', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Cuité', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Damião', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Fagundes', state: 'PB', type: 'Ambos', description: 'Câmara e Prefeitura Assessoria em Transparência e CÂMARA SOFTWARE HORUS' },
  { city: 'Gado Bravo', state: 'PB', type: 'Prefeitura', description: 'Prefeitura Locação de Soluções de Sistemas em Transparência Diversos' },
  { city: 'Juazeirinho', state: 'PB', type: 'Prefeitura', description: 'Prefeitura Assessoria em Transparência e Software Horus' },
  { city: 'Livramento', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência e Software Horus' },
  { city: 'Lucena', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Mãe d\'Água', state: 'PB', type: 'Prefeitura', description: 'Prefeitura Assessoria em Transparência' },
  { city: 'Malta', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Mataraca', state: 'PB', type: 'Prefeitura', description: 'Software Horus' },
  { city: 'Monteiro', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência, Software Horus, Assessoria em eSocial e Folha de Pagamento' },
  { city: 'Nova Floresta', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Nova Palmeira', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Olivedos', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência e Software Horus' },
  { city: 'Ouro Velho', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Parari', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Pedra Lavrada', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Prata', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Puxinanã', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Riacho do Santo Antônio', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência e Software Horus' },
  { city: 'Santa Luzia', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Santa Rita', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'São Sebastião do Umbuzeiro', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'São Bento', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'São Domingos do Cariri', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'São João do Cariri', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'São João do Tigre', state: 'PB', type: 'Prefeitura', description: 'Prefeitura Locação de Soluções de Sistemas em Transparência Diversos' },
  { city: 'São José dos Cordeiros', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência e Software Horus' },
  { city: 'São Vicente do Seridó', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Serra Branca', state: 'PB', type: 'Ambos', description: 'Prefeitura e Câmara Assessoria em Transparência' },
  { city: 'Soledade', state: 'PB', type: 'Ambos', description: 'Prefeitura e Câmara Assessoria em Transparência' },
  { city: 'Sossego', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Sumé', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Taperoá', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Tenório', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Zabelê', state: 'PB', type: 'Câmara', description: 'Câmara Assessoria em Transparência, Software Horus, Assessoria em eSocial e Folha de Pagamento' },

  // Rio Grande do Norte (RN)
  { city: 'Ceará-Mirim', state: 'RN', type: 'Câmara', description: 'Câmara Assessoria em Transparência' },
  { city: 'Equador', state: 'RN', type: 'Câmara', description: 'Câmara Outras Soluções' },
  { city: 'Parelhas', state: 'RN', type: 'Câmara', description: 'Câmara Outras Soluções' },
  { city: 'Jaçanã', state: 'RN', type: 'Câmara', description: 'Câmara Outras Soluções' },

  // Ceará (CE)
  { city: 'Viçosa do Ceará', state: 'CE', type: 'Câmara', description: 'Câmara Assessoria Institucional e Relacional' }, // Assumed Viçosa do Ceará
  { city: 'Amontada', state: 'CE', type: 'Ambos', description: 'Câmara e Prefeitura Assessoria Institucional e Relacional' },

  // Pernambuco (PE)
  { city: 'Jataúba', state: 'PE', type: 'Prefeitura', description: 'Prefeitura Software Horus' },

  // Rondônia (RO)
  { city: 'Cujubim', state: 'RO', type: 'Instituto', description: 'Instituto de Previdência Software Horus' },
];

// Helper to check if a city is a client
export const getClientData = (cityName: string) => {
  // Normalize string for comparison (remove accents, lowercase)
  const normalize = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  
  const clientEntry = clients.find(c => normalize(c.city) === normalize(cityName));
  
  return clientEntry || null;
};

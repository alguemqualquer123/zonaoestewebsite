export const STORE_BASE_URL =
  process.env.NEXT_PUBLIC_STORE_URL || "https://zosprp.centralcart.ai";

const CDN = "https://zosprp.centralcart.ai/cdn/stores/26654/packages";

export type StoreProduct = {
  name: string;
  price: string;
  href: string;
  image?: string;
  tag?: string;
};

export type VipPackage = StoreProduct & {
  label: string;
  copy: string;
  benefits: string[];
  tone: "vip-basic" | "vip-featured" | "vip-premium" | "vip-restricted";
};

export type StoreCategory = {
  id: string;
  name: string;
  description: string;
  products: StoreProduct[];
};

export const vipPackages: VipPackage[] = [
  {
    name: "VIP Prata",
    label: "entrada",
    price: "R$ 59,90",
    href: "/package/VIP-PRATA",
    image: `${CDN}/d3200209-3e20-4680-803b-1a00ab9a6be0.png`,
    copy: "Ideal para quem está começando e quer aproveitar a jornada com mais benefícios.",
    benefits: [
      "R$ 5.000 — depósito direto na conta",
      "R$ 1.200 a cada 30 minutos online",
      "+1 slot de roupa · +5 kg de mochila",
      "Volkswagen Nivus durante a vigência",
    ],
    tone: "vip-basic",
  },
  {
    name: "VIP Ouro",
    label: "mais escolhido",
    price: "R$ 119,90",
    href: "/package/VIP-OURO",
    image: `${CDN}/acdf3140-86ab-48dd-a0ef-55b2b54b59fe.png`,
    copy: "Mais dinheiro, progressão acelerada e um veículo de alto padrão.",
    benefits: [
      "R$ 10.000 — depósito direto na conta",
      "R$ 1.700 a cada 30 minutos online",
      "+2 slots de roupa · +10 kg de mochila",
      "Spotify por 30 dias",
      "McLaren 720S durante a vigência",
    ],
    tone: "vip-featured",
  },
  {
    name: "VIP Policial",
    label: "uso restrito",
    price: "R$ 97,90",
    href: "/package/vip-premium-policial",
    image: `${CDN}/d6623ba3-3139-46c5-bec2-285c3cbf6457.png`,
    copy: "Exclusivo para membros das forças policiais da Zona Oeste SP.",
    benefits: [
      "60 Gemas creditadas imediatamente",
      "+40% de bônus salarial da polícia",
      "IBEX 450 por 30 dias",
      "Comandos /cam e /som por 30 dias",
      "Proteção da mochila ao morrer",
    ],
    tone: "vip-restricted",
  },
  {
    name: "VIP Platina",
    label: "avançado",
    price: "R$ 177,90",
    href: "/package/VIP-PLATINA",
    image: `${CDN}/a1cf4d4b-c156-43d0-8843-f0a91eed2db5.png`,
    copy: "Experiência completa com vantagens financeiras e recursos extras.",
    benefits: [
      "R$ 15.000 — depósito direto na conta",
      "R$ 2.400 a cada 30 minutos online",
      "+3 slots de roupa · +15 kg de mochila",
      "Comando /cam · -5% no /gg · Spotify",
      "SW4 2022 durante a vigência",
    ],
    tone: "vip-basic",
  },
  {
    name: "VIP Diamante",
    label: "alto padrão",
    price: "R$ 269,90",
    href: "/package/VIP-DIAMANTE",
    image: `${CDN}/c0fbc5b1-760c-4ff0-81fd-6303edaf83d1.png`,
    copy: "Nível superior na cidade, com dois veículos e comandos exclusivos.",
    benefits: [
      "R$ 20.000 — depósito direto na conta",
      "R$ 3.200 a cada 30 minutos online",
      "+4 slots de roupa · +20 kg de mochila",
      "Comando /cam · -10% no /gg · Spotify",
      "Range Rover Velar + Africa Twin",
    ],
    tone: "vip-featured",
  },
  {
    name: "VIP Esmeralda",
    label: "top da cidade",
    price: "R$ 489,90",
    href: "/package/VIP-ESMERALDA",
    image: `${CDN}/9e8661dd-9e8f-4f26-a190-2627f2a0beb0.png`,
    copy: "A experiência definitiva, com uma garagem de alto padrão.",
    benefits: [
      "R$ 25.000 — depósito direto na conta",
      "R$ 4.000 a cada 30 minutos online",
      "+5 slots de roupa · +25 kg de mochila",
      "+10 vagas de garagem · -15% no /gg",
      "Ferrari Daytona SP3 · Purosangue",
      "Triumph Tiger 1200 · Volatus",
    ],
    tone: "vip-premium",
  },
];

export const storeCategories: StoreCategory[] = [
  {
    id: "cartoes",
    name: "Cartões BZO",
    description: "O cartão da Zona Oeste: status, vantagens e benefícios exclusivos.",
    products: [
      {
        name: "Cartão BZO Classic",
        price: "R$ 29,90",
        href: "/package/cartao-classic",
        image: `${CDN}/6ea02969-97f1-4078-8fa4-68e669d5c5a1.png`,
      },
      {
        name: "Cartão BZO Gold",
        price: "R$ 49,90",
        href: "/package/cartao-gold",
        image: `${CDN}/ace5a6ae-5817-4128-bbc6-c337c8dc869b.png`,
      },
      {
        name: "Cartão BZO Platinum",
        price: "R$ 69,90",
        href: "/package/cartao-platinum",
        image: `${CDN}/5e9a43e9-9535-4003-ab3b-cc64012c1eda.png`,
      },
      {
        name: "Cartão BZO Black",
        price: "R$ 89,90",
        href: "/package/cartao-black",
        image: `${CDN}/10fe1e36-03aa-4963-8fcb-aa45d3855dab.png`,
      },
      {
        name: "Cartão BZO Infinite",
        price: "R$ 109,90",
        href: "/package/cartao-infinite",
        image: `${CDN}/8d844f60-4b28-4a0d-8a65-bf174fe14d6a.png`,
      },
    ],
  },
  {
    id: "gemas",
    name: "Gemas",
    description: "Moeda premium para turbinar sua jornada com praticidade.",
    products: [
      {
        name: "10 Gemas",
        price: "R$ 10,00",
        href: "/package/10-gemas",
        image: `${CDN}/86d9613b-f055-4d09-8693-76599f11b9dd.png`,
      },
      {
        name: "50 Gemas",
        price: "R$ 39,90",
        href: "/package/50-gemas",
        image: `${CDN}/1d36b1c6-5fe9-48be-85db-275d6ce4635e.png`,
      },
      {
        name: "100 Gemas",
        price: "R$ 74,90",
        href: "/package/100-gemas",
        image: `${CDN}/fc64085d-ff42-4dc7-9d66-b9c61b50dd33.png`,
      },
      {
        name: "500 Gemas",
        price: "R$ 324,90",
        href: "/package/500-gemas",
        image: `${CDN}/8804dcc8-2031-484e-b3da-01eb9e2ce336.png`,
      },
      {
        name: "1000 Gemas",
        price: "R$ 549,90",
        href: "/package/1.000-gemas",
        image: `${CDN}/ead95f22-5e6c-4790-8832-d63ad1a9d811.png`,
      },
    ],
  },
  {
    id: "exclusivos",
    name: "Exclusivos",
    description: "Pacotes únicos e itens que marcam presença na cidade.",
    products: [
      {
        name: "Pacote Primeiro Passo",
        price: "R$ 49,90",
        href: "/package/combo-primeiro-passo",
        image: `${CDN}/7df5bedb-f946-4205-84b9-14b5639c79ab.png`,
      },
      {
        name: "Pacote Vivência SP",
        price: "R$ 69,90",
        href: "/package/combo-essencia-sp-(mandrake)",
        image: `${CDN}/ca92c640-dfc0-4050-9139-3386203b222e.png`,
      },
      {
        name: "Pacote Classe A",
        price: "R$ 129,90",
        href: "/package/combo-alto-padrao",
        image: `${CDN}/ac926af4-d301-4b4b-aae5-89be9d7ae6a7.png`,
      },
      {
        name: "Pacote Praiou Exclusivo",
        price: "R$ 219,90",
        href: "/package/combo-guaruja",
      },
      {
        name: "Pacote Progresso",
        price: "R$ 349,90",
        href: "/package/combo-forja-(bigode)",
        image: `${CDN}/d5ac5ddc-95b7-41e7-b911-24d21d5ca8b6.png`,
      },
      {
        name: "Pacote Força Máxima (Policial)",
        price: "R$ 450,00",
        href: "/package/PACOTE-FORCA-MAXINA-(POLICIAL)",
        tag: "policial",
      },
      {
        name: "Pacote BMW Exclusivo",
        price: "R$ 749,90",
        href: "/package/pacote-bmw-x6m-2026",
        image: `${CDN}/ff37d196-2693-4858-a3dd-aac40425dbe8.png`,
      },
      {
        name: "Caminhão Exclusivo",
        price: "R$ 800,00",
        href: "/package/caminhao-exclusivo",
      },
      {
        name: "Telão Exclusivo",
        price: "R$ 1.000,00",
        href: "/package/telao-exclusivo",
        image: `${CDN}/5ee957b6-66c9-49f6-94f4-466932afec50.png`,
      },
      {
        name: "Pacote Edição Limitada",
        price: "R$ 1.499,00",
        href: "/package/combo-z0-sp-edicao-limitada",
        image: `${CDN}/9a0e4118-12ce-420b-8f2b-63beb7d2ccd4.png`,
        tag: "edição limitada",
      },
    ],
  },
  {
    id: "combos",
    name: "Combos",
    description: "Pacotes prontos para começar ou evoluir seu roleplay.",
    products: [
      { name: "Combo Primeiro Role", price: "R$ 19,90", href: "/package/combo-primeiro-role" },
      { name: "Combo Primeiro Role 2", price: "R$ 49,90", href: "/package/combo-primeiro-role-2" },
      { name: "Combo XRE", price: "R$ 49,90", href: "/package/combo-xre" },
      { name: "Combo Baile de Favela", price: "R$ 69,90", href: "/package/combo-baile-de-favela" },
      { name: "Combo Trecho Máximo", price: "R$ 79,90", href: "/package/combo-trecho-maximo" },
      { name: "Combo Africa V.", price: "R$ 89,90", href: "/package/combo-africa-v." },
      { name: "Combo Africa A.", price: "R$ 89,90", href: "/package/combo-africa-a." },
      { name: "Combo Trampo e Role", price: "R$ 119,90", href: "/package/combo-trampo-e-role" },
      { name: "Combo Trampo e Role 2", price: "R$ 129,90", href: "/package/combo-trampo-e-role-2" },
      { name: "Combo Trident", price: "R$ 129,90", href: "/package/combo-trident" },
      { name: "Combo Mãe e Filha", price: "R$ 149,90", href: "/package/combo-mae-e-filha" },
      { name: "Combo 2025", price: "R$ 179,90", href: "/package/combo-2025" },
      { name: "Combo F900", price: "R$ 179,90", href: "/package/combo-f900" },
      { name: "Combo Raul de Franja", price: "R$ 189,90", href: "/package/combo-raul-de-franja" },
      { name: "Combo De Luxo", price: "R$ 199,90", href: "/package/combo-de-luxo" },
      { name: "Combo Fazendeiro", price: "R$ 239,90", href: "/package/combo-fazendeiro" },
      { name: "Combo do Chefe", price: "R$ 249,90", href: "/package/combo-do-chefe" },
      { name: "Combo Futurista", price: "R$ 269,90", href: "/package/combo-futurista" },
      { name: "Combo Favela Venceu", price: "R$ 269,90", href: "/package/combo-favela-venceu" },
    ],
  },
];

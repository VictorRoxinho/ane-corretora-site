export type Empreendimento = {
  slug: string;
  cidade: string;
  cidadeLabel: string;
  bairro: string;
  estado: string;
  nome: string;
  construtora: string;
  status: "lancamento" | "em-obras" | "pronto";
  entrega?: string;
  faixaMCMV: "Faixa 1" | "Faixa 2" | "Faixa 3";
  rendaFamiliarMax: number;
  parcelaMin: number;
  valorMin: number;
  quartos: number[];
  descricao: string;
  diferenciais: string[];
  fotos: string[];
  ogImage: string;
  whatsappMsg: string;
  mapsUrl: string;
  faq: { pergunta: string; resposta: string }[];
};

export const empreendimentos: Empreendimento[] = [
  {
    slug: "mrv-bela-vista",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Pernambués",
    estado: "BA",
    nome: "MRV Bela Vista",
    construtora: "MRV",
    status: "lancamento",
    entrega: "2026",
    faixaMCMV: "Faixa 2",
    rendaFamiliarMax: 8000,
    parcelaMin: 800,
    valorMin: 180000,
    quartos: [2],
    descricao: `O MRV Bela Vista é um empreendimento do programa Minha Casa Minha Vida localizado no bairro de Pernambués, uma das regiões mais valorizadas de Salvador. Com apartamentos de 2 quartos projetados para oferecer conforto e praticidade, o condomínio conta com área de lazer completa incluindo piscina, churrasqueira, playground e salão de festas.\n\nAtravés do subsídio do Minha Casa Minha Vida, famílias com renda de até R$ 8.000 podem adquirir o apartamento com parcelas a partir de R$ 800 por mês — valores muito abaixo do que seria pago de aluguel na mesma região. O subsídio pode chegar a R$ 55.000, reduzindo significativamente o valor financiado.\n\nA localização em Pernambués oferece fácil acesso ao centro de Salvador, shoppings, escolas e hospitais, além de uma rede de transporte público consolidada. É uma oportunidade real para sair do aluguel e conquistar o imóvel próprio com segurança jurídica e condições facilitadas pelo governo federal.`,
    diferenciais: [
      "Piscina adulto e infantil",
      "Churrasqueira coberta",
      "Playground",
      "Salão de festas",
      "Portaria 24h",
      "Área de convivência",
      "Vaga de garagem",
    ],
    fotos: [
      "/images/banner-mrv-bela-vista.jpeg",
    ],
    ogImage: "/images/banner-mrv-bela-vista.jpeg",
    whatsappMsg: "Olá Ane! Tenho interesse no MRV Bela Vista em Pernambués, Salvador. Pode me passar mais informações?",
    mapsUrl: "https://maps.google.com/?q=Pernambués,+Salvador,+BA",
    faq: [
      {
        pergunta: "Qual a renda mínima para financiar o MRV Bela Vista?",
        resposta: "O MRV Bela Vista é enquadrado no Minha Casa Minha Vida Faixa 2, destinado a famílias com renda bruta mensal de até R$ 8.000. Não há renda mínima definida, mas o valor da parcela não pode ultrapassar 30% da renda familiar.",
      },
      {
        pergunta: "Quanto é o subsídio do governo no MRV Bela Vista?",
        resposta: "O subsídio pode chegar a R$ 55.000 dependendo da renda familiar e da composição do grupo familiar. Quanto menor a renda, maior o subsídio. Entre em contato para fazer uma simulação personalizada.",
      },
      {
        pergunta: "Preciso ter entrada para comprar o apartamento?",
        resposta: "Sim, geralmente é necessário um valor de entrada de 5% a 20% do preço do imóvel, que pode ser pago com FGTS. Em muitos casos o FGTS cobre integralmente a entrada necessária.",
      },
      {
        pergunta: "Posso usar o FGTS para comprar no MRV Bela Vista?",
        resposta: "Sim. O FGTS pode ser usado como entrada, para abater parcelas ou para amortizar o saldo devedor. Para isso é necessário ter pelo menos 3 anos de carteira assinada (contínuos ou não).",
      },
      {
        pergunta: "Qual o prazo de entrega do MRV Bela Vista?",
        resposta: "A previsão de entrega é para 2026. A corretora Ane França pode te informar o cronograma atualizado e te avisar quando houver novas torres disponíveis.",
      },
    ],
  },
  {
    slug: "conquista-vila-verde",
    cidade: "camacari",
    cidadeLabel: "Camaçari",
    bairro: "Abrantes",
    estado: "BA",
    nome: "Conquista Vila Verde",
    construtora: "Direcional",
    status: "lancamento",
    entrega: "2026",
    faixaMCMV: "Faixa 2",
    rendaFamiliarMax: 8000,
    parcelaMin: 700,
    valorMin: 211000,
    quartos: [1, 2],
    descricao: `O Conquista Vila Verde é um condomínio da Direcional Engenharia localizado em Abrantes, Camaçari — um dos municípios de maior crescimento da região metropolitana de Salvador. Com opções de apartamentos de 1 e 2 quartos, o empreendimento é ideal para casais, jovens e famílias que buscam sair do aluguel com parcelas acessíveis.\n\nO condomínio oferece lazer completo com piscina, churrasqueira e área verde, proporcionando qualidade de vida em um bairro tranquilo e em plena expansão. Abrantes fica a poucos quilômetros do centro de Camaçari e tem acesso rápido à BA-099 (Estrada do Coco), conectando os moradores a Salvador e às praias do litoral norte.\n\nAtravés do Minha Casa Minha Vida, famílias com renda de até R$ 8.000 podem adquirir unidades com subsídio de até R$ 55.000, pagando parcelas a partir de R$ 700 por mês. É a oportunidade de sair do aluguel e investir em patrimônio próprio em uma das regiões com maior valorização do estado.`,
    diferenciais: [
      "Piscina adulto e infantil",
      "Churrasqueira",
      "Área verde",
      "Playground",
      "Portaria com controle de acesso",
      "Apartamentos de 1 e 2 quartos",
    ],
    fotos: [
      "/images/banner-conquista-vila-verde.png",
    ],
    ogImage: "/images/banner-conquista-vila-verde.png",
    whatsappMsg: "Olá Ane! Tenho interesse no Conquista Vila Verde em Abrantes, Camaçari. Pode me passar mais informações?",
    mapsUrl: "https://maps.google.com/?q=Abrantes,+Camaçari,+BA",
    faq: [
      {
        pergunta: "Qual a renda necessária para comprar no Conquista Vila Verde?",
        resposta: "O Conquista Vila Verde é enquadrado no MCMV Faixa 2, para famílias com renda bruta de até R$ 8.000 mensais. A parcela não pode ultrapassar 30% da renda familiar.",
      },
      {
        pergunta: "Qual a diferença entre apartamento de 1 e 2 quartos no Conquista Vila Verde?",
        resposta: "Os apartamentos de 1 quarto são ideais para pessoas sozinhas ou casais sem filhos, com valores de entrada e parcelas menores. Os de 2 quartos atendem melhor famílias com filhos. Ambos são financiáveis pelo MCMV.",
      },
      {
        pergunta: "Posso usar o FGTS para comprar no Conquista Vila Verde?",
        resposta: "Sim. O FGTS pode ser utilizado como entrada, para complementar o financiamento ou abater parcelas. É necessário ter ao menos 3 anos de contribuição ao FGTS.",
      },
      {
        pergunta: "Como é a localização de Abrantes, Camaçari?",
        resposta: "Abrantes fica na região costeira de Camaçari, com acesso rápido pela BA-099 (Estrada do Coco). A região está em forte crescimento, com shoppings, escolas e serviços de saúde, além de proximidade com as praias do litoral norte baiano.",
      },
      {
        pergunta: "Quanto é o subsídio no Conquista Vila Verde?",
        resposta: "O subsídio pode chegar a R$ 55.000 dependendo da renda e composição familiar. Para saber o valor exato do seu subsídio, entre em contato para uma simulação gratuita e personalizada.",
      },
    ],
  },
];

export function getEmpreendimento(cidade: string, slug: string): Empreendimento | undefined {
  return empreendimentos.find(e => e.cidade === cidade && e.slug === slug);
}

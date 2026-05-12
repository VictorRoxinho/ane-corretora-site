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
  area?: string;
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
    area: "42 m²",
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
      "/images/empreendimentos/mrv-bela-vista/piscina.png",
      "/images/empreendimentos/mrv-bela-vista/capa.jpeg",
      "/images/empreendimentos/mrv-bela-vista/fachada.png",
      "/images/empreendimentos/mrv-bela-vista/churrasqueira.png",
      "/images/empreendimentos/mrv-bela-vista/playground.png",
      "/images/empreendimentos/mrv-bela-vista/quarto1.jpg",
      "/images/empreendimentos/mrv-bela-vista/quarto2.jpg",
      "/images/empreendimentos/mrv-bela-vista/quarto3.jpg",
      "/images/empreendimentos/mrv-bela-vista/salao-de-festas.png",
    ],
    ogImage: "/images/empreendimentos/mrv-bela-vista/capa.jpeg",
    whatsappMsg:
      "Olá Ane! Tenho interesse no MRV Bela Vista em Pernambués, Salvador. Pode me passar mais informações?",
    mapsUrl: "https://maps.google.com/?q=Pernambués,+Salvador,+BA",
    faq: [
      {
        pergunta: "Qual a renda mínima para financiar o MRV Bela Vista?",
        resposta:
          "O MRV Bela Vista é enquadrado no Minha Casa Minha Vida Faixa 2, destinado a famílias com renda bruta mensal de até R$ 8.000. Não há renda mínima definida, mas o valor da parcela não pode ultrapassar 30% da renda familiar.",
      },
      {
        pergunta: "Quanto é o subsídio do governo no MRV Bela Vista?",
        resposta:
          "O subsídio pode chegar a R$ 55.000 dependendo da renda familiar e da composição do grupo familiar. Quanto menor a renda, maior o subsídio. Entre em contato para fazer uma simulação personalizada.",
      },
      {
        pergunta: "Preciso ter entrada para comprar o apartamento?",
        resposta:
          "Sim, geralmente é necessário um valor de entrada de 5% a 20% do preço do imóvel, que pode ser pago com FGTS. Em muitos casos o FGTS cobre integralmente a entrada necessária.",
      },
      {
        pergunta: "Posso usar o FGTS para comprar no MRV Bela Vista?",
        resposta:
          "Sim. O FGTS pode ser usado como entrada, para abater parcelas ou para amortizar o saldo devedor. Para isso é necessário ter pelo menos 3 anos de carteira assinada (contínuos ou não).",
      },
      {
        pergunta: "Qual o prazo de entrega do MRV Bela Vista?",
        resposta:
          "A previsão de entrega é para 2026. A corretora Ane França pode te informar o cronograma atualizado e te avisar quando houver novas torres disponíveis.",
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
    area: "40,67–47,50 m²",
    parcelaMin: 700,
    valorMin: 211000,
    quartos: [1, 2],
    descricao: `O Conquista Vila Verde é um lançamento da Direcional Engenharia localizado na Av. Rio Paramirim, em Abrantes, Camaçari — dentro do bairro planejado Cidade Arbo, seguindo o sucesso dos empreendimentos Conquista Litoral Norte e Conquista Estrada do Coco. São 34 torres com 680 unidades de 1 e 2 quartos, com área privativa de 40,67 m² a 47,50 m², além de 68 opções garden com espaço externo privativo pavimentado. Todas as áreas de lazer são entregues totalmente mobiliadas e equipadas.\n\nPelo Minha Casa Minha Vida, famílias com renda de até R$ 8.000 podem adquirir o apartamento com subsídio de até R$ 55.000 — desconto direto no valor do imóvel que não precisa ser devolvido. O FGTS pode ser usado como entrada, reduzindo ainda mais o custo do financiamento. O condomínio conta com controle de acesso automatizado em todos os blocos, medição de água individualizada e bicicletas compartilhadas.\n\nAbrantes é uma das regiões de maior crescimento de Camaçari, a apenas 3 minutos do Shopping Busca Vida, 8 minutos do Novo Mix Supermercados e da Farmácia Drogasil, 10 minutos do Outlet Premium Salvador e 13 minutos da Praia de Jauá. O ponto de ônibus fica a 7 minutos a pé, com fácil acesso a escolas, restaurantes e toda a infraestrutura da região metropolitana de Salvador.`,
    diferenciais: [
      "Piscina adulto com deck molhado e piscina infantil",
      "Churrasqueiras cobertas mobiliadas",
      "Salão de festas com varanda",
      "Playground e Playbaby",
      "Quadra de esportes descoberta",
      "Espaço Fitness",
      "Espaço Pet",
      "Guarita com portão automatizado",
    ],
    fotos: ["/images/empreendimentos/conquista-vila-verde/capa.png"],
    ogImage: "/images/empreendimentos/conquista-vila-verde/capa.png",
    whatsappMsg:
      "Olá Ane! Tenho interesse no Conquista Vila Verde em Abrantes, Camaçari. Pode me passar mais informações?",
    mapsUrl:
      "https://maps.google.com/?q=Av.+Rio+Paramirim,+s/n,+Abrantes,+Camaçari,+BA",
    faq: [
      {
        pergunta: "Quais são as opções de apartamento no Conquista Vila Verde?",
        resposta:
          "O empreendimento oferece apartamentos de 1 quarto studio (40,67 m²) e 2 quartos tipo (40,67 m²) ou garden (47,50 m²). As unidades garden ficam no térreo e têm área externa privativa pavimentada. Todos são entregues com piso em todos os cômodos.",
      },
      {
        pergunta: "Qual a renda necessária para comprar no Conquista Vila Verde?",
        resposta:
          "O Conquista Vila Verde é financiável pelo MCMV para famílias com renda de até R$ 8.000 mensais. Quanto menor a renda, maior o subsídio — que pode chegar a R$ 55.000 de desconto direto no valor do imóvel.",
      },
      {
        pergunta: "Posso usar o FGTS para comprar no Conquista Vila Verde?",
        resposta:
          "Sim. O FGTS pode ser utilizado como entrada, para complementar o financiamento ou abater parcelas. É necessário ter pelo menos 3 anos de contribuição ao FGTS, contínuos ou não.",
      },
      {
        pergunta: "Como é a localização do Conquista Vila Verde em Abrantes?",
        resposta:
          "O empreendimento fica na Av. Rio Paramirim, s/n, em Abrantes — a 3 minutos do Shopping Busca Vida, 8 minutos do Novo Mix Supermercados e da Farmácia Drogasil, 10 minutos do Outlet Premium Salvador e 13 minutos da Praia de Jauá. Ponto de ônibus a 7 minutos a pé.",
      },
      {
        pergunta: "O condomínio tem apartamento adaptado para PCD?",
        resposta:
          "Sim. São 21 unidades PCD com adaptações como barras de apoio, banco no chuveiro e torneiras de alavanca, realizadas mediante solicitação no momento da vistoria do apartamento.",
      },
      {
        pergunta: "Qual é a estrutura de lazer do Conquista Vila Verde?",
        resposta:
          "O lazer é entregue totalmente mobiliado e equipado: piscina adulto com deck molhado e piscina infantil, churrasqueiras, salão de festas com varanda, playground, playbaby, espaço fitness, espaço pet e quadra de esportes descoberta.",
      },
    ],
  },
  {
    slug: "solaris-camacari",
    cidade: "camacari",
    cidadeLabel: "Camaçari",
    bairro: "Industrial",
    estado: "BA",
    nome: "Solaris Camaçari",
    construtora: "Tenda",
    status: "lancamento",
    entrega: "A confirmar",
    faixaMCMV: "Faixa 1",
    rendaFamiliarMax: 4400,
    area: "40,53 m²",
    parcelaMin: 499,
    valorMin: 0, // colocar quando Ane confirmar o valor com a Tenda
    quartos: [2],
    descricao: `O Solaris Camaçari é um lançamento da Construtora Tenda no bairro Industrial, em Camaçari/BA, pelo programa Minha Casa Minha Vida. Com apartamentos de 2 quartos e 40,53m², o condomínio reúne lazer completo e infraestrutura de condomínio fechado para toda a família.\n\nLocalizado a 650 metros do Boulevard Shopping Camaçari e a 300 metros do Atacadão, o empreendimento oferece praticidade no dia a dia com acesso fácil a comércios, serviços e transporte. Camaçari é uma das regiões metropolitanas de maior crescimento da Bahia, com infraestrutura consolidada e forte valorização imobiliária.\n\nPelas condições do Minha Casa Minha Vida, famílias com renda de até R$ 4.400 podem adquirir o apartamento com subsídio de até R$ 55.000 e entrada parcelada em até 100x a partir de R$ 499/mês. ITBI e registro são gratuitos. É a oportunidade de sair do aluguel com parcelas que cabem no bolso.`,
    diferenciais: [
      "Piscina adulto e infantil",
      "Churrasqueira",
      "Churrasqueira gourmet",
      "Salão de festas",
      "Playkids",
      "Playbaby",
      "Pet place",
      "Bicicletário",
      "Praça de jogos",
      "Praça dos sabores",
      "Portaria com controle de acesso",
    ],
    fotos: ["/images/empreendimentos/solaris-camacari/capa.jpg"],
    ogImage: "/images/empreendimentos/solaris-camacari/capa.jpg",
    whatsappMsg:
      "Olá Ane! Tenho interesse no Solaris Camaçari no bairro Industrial. Pode me passar mais informações?",
    mapsUrl:
      "https://maps.google.com/?q=Avenida+das+Palmeiras,+Industrial,+Camaçari,+BA",
    faq: [
      {
        pergunta: "Qual a renda necessária para comprar no Solaris Camaçari?",
        resposta:
          "O Solaris Camaçari é enquadrado no MCMV Faixa 1, para famílias com renda bruta de até R$ 4.400 mensais. Quanto menor a renda dentro dessa faixa, maior o subsídio recebido.",
      },
      {
        pergunta: "Quanto é o subsídio no Solaris Camaçari?",
        resposta:
          "Famílias nas faixas 1 e 2 do MCMV podem receber subsídio de até R$ 55.000 — esse valor é um desconto dado pelo governo e não precisa ser pago de volta. Entre em contato para simular o valor exato para o seu perfil.",
      },
      {
        pergunta: "Como funciona a entrada parcelada no Solaris Camaçari?",
        resposta:
          "A Tenda permite parcelar a entrada em até 100 vezes, com valores a partir de R$ 499/mês. Você também pode usar o saldo do FGTS para complementar ou quitar a entrada.",
      },
      {
        pergunta: "Posso usar o FGTS para comprar no Solaris Camaçari?",
        resposta:
          "Sim. O FGTS pode ser usado como entrada, para abater parcelas ou amortizar o saldo devedor. É necessário ter pelo menos 3 anos de contribuição ao FGTS, que não precisam ser contínuos.",
      },
      {
        pergunta: "Qual o endereço do Solaris Camaçari?",
        resposta:
          "O empreendimento fica na Avenida das Palmeiras, S/N, bairro Industrial, Camaçari/BA. Fica a 650 metros do Boulevard Shopping Camaçari e a 300 metros do Atacadão.",
      },
    ],
  },
  {
    slug: "roof-aero",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "São Cristóvão",
    estado: "BA",
    nome: "Roof Aero",
    construtora: "3i Incorporações",
    status: "em-obras",
    entrega: "Junho/2026",
    faixaMCMV: "Faixa 2",
    rendaFamiliarMax: 8000,
    area: "40 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2],
    descricao: `O Roof Aero é um empreendimento da 3i Incorporações localizado no coração do bairro São Cristóvão, Salvador — a apenas 450 metros do Salvador Norte Shopping. Com 3 torres, 7 pavimentos, 168 unidades e 1 elevador por torre, o condomínio combina localização privilegiada com lazer completo para toda a família.\n\nOs apartamentos têm 40m², 2 quartos, sala de estar/jantar, banheiro social, cozinha e área de serviço. Há opções com garden para quem quer um espaço externo privativo. O condomínio conta com 123 vagas rotativas para carros e motos e guarita com controle de acesso 24h.\n\nA localização é um dos maiores diferenciais: além do shopping a 450 metros, o empreendimento tem acesso fácil ao metrô (estações Aeroporto e Mussurunga), praias a apenas 5km, supermercados, faculdades, cinemas e toda a infraestrutura de serviços do bairro. Pelo Minha Casa Minha Vida, é possível adquirir o apartamento com subsídio de até R$ 55.000 e utilizar o FGTS como entrada.`,
    diferenciais: [
      "Piscina adulto e infantil com deck molhado",
      "Espaço gourmet",
      "Salão de festas",
      "Salão de jogos",
      "Academia",
      "Quadra poliesportiva",
      "Playground",
      "Bicicletário",
      "Elevador por torre",
      "Guarita com controle de acesso 24h",
      "Iluminação LED nas áreas comuns",
      "Preparação para medição individualizada de água",
    ],
    fotos: [
      "/images/banner-roof-aero.jpg", // adicionar imagem em public/images/
    ],
    ogImage: "/images/banner-roof-aero.jpg",
    whatsappMsg:
      "Olá Ane! Tenho interesse no Roof Aero em São Cristóvão, Salvador. Pode me passar mais informações?",
    mapsUrl:
      "https://maps.google.com/?q=Rua+Pedro+Cachoeira,+São+Cristóvão,+Salvador,+BA",
    faq: [
      {
        pergunta: "Qual a renda necessária para comprar no Roof Aero?",
        resposta:
          "O Roof Aero é financiável pelo Minha Casa Minha Vida para famílias com renda de até R$ 8.000 mensais. Quanto menor a renda (até R$ 4.400), maior o subsídio — podendo chegar a R$ 55.000 de desconto.",
      },
      {
        pergunta: "Quando o Roof Aero será entregue?",
        resposta:
          "A previsão de entrega é junho de 2026. A obra está em andamento e com 77% de conclusão geral em outubro de 2025 — fundação, terraplenagem e serviços preliminares já foram concluídos.",
      },
      {
        pergunta: "O Roof Aero tem elevador?",
        resposta:
          "Sim. Cada uma das 3 torres tem 1 elevador, um diferencial importante nos empreendimentos MCMV de Salvador.",
      },
      {
        pergunta: "Como é a localização do Roof Aero em São Cristóvão?",
        resposta:
          "O empreendimento fica na Rua Pedro Cachoeira, a 450 metros do Salvador Norte Shopping, perto das estações de metrô do Aeroporto e Mussurunga, e a 5km das praias. O bairro tem supermercados, farmácias, escolas e faculdades nas proximidades.",
      },
      {
        pergunta: "Posso usar o FGTS para comprar no Roof Aero?",
        resposta:
          "Sim. O FGTS pode ser utilizado como entrada, para amortizar o financiamento ou reduzir o prazo. É necessário ter no mínimo 3 anos de contribuição, contínuos ou não.",
      },
    ],
  },
  {
    slug: "encanto-piata",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Piatã",
    estado: "BA",
    nome: "Encanto Piatã",
    construtora: "Tenda",
    status: "lancamento",
    entrega: "Novembro/2026",
    faixaMCMV: "Faixa 1",
    rendaFamiliarMax: 4400,
    area: "38–39 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 200000, // a partir de R$ 200.000 conforme anúncios — confirmar valor atualizado
    quartos: [2],
    descricao: `O Encanto Piatã é um lançamento da Construtora Tenda no bairro de Piatã, Salvador — uma das regiões mais valorizadas da cidade, conhecida pela tranquilidade, praias e infraestrutura completa. São 8 torres com apartamentos de 2 quartos entre 38,54m² e 38,78m², com ITIV e documentação grátis.\n\nA localização é um dos maiores diferenciais: próximo às praias de Piatã e Itapuã, a poucos minutos do Shopping Paralela e com fácil acesso a supermercados, farmácias, faculdades e transporte público. O bairro de Piatã está entre Itapuã e Patamares, com infraestrutura consolidada e forte valorização imobiliária.\n\nPelo Minha Casa Minha Vida, famílias com renda de até R$ 4.400 podem receber subsídio de até R$ 55.000, reduzindo significativamente o custo do financiamento. O FGTS pode ser usado como entrada. É a oportunidade de morar a 1km da praia com parcelas que cabem no bolso.`,
    diferenciais: [
      "Salão de festas com coworking",
      "Salão de festas gourmet",
      "Churrasqueira e churrasqueira gourmet",
      "Praça de jogos",
      "Playkids e Playbaby",
      "Play Pet",
      "Brinquedoteca",
      "Fitness externo",
      "Espaço Relaxa",
      "Espaço Cultivo",
      "Bicicletário",
      "Portaria com controle de acesso 24h",
      "Elevador",
      "ITIV e documentação grátis",
      "Medição individualizada de água",
    ],
    fotos: [
      "/images/banner-encanto-piata.jpg", // adicionar imagem em public/images/
    ],
    ogImage: "/images/banner-encanto-piata.jpg",
    whatsappMsg:
      "Olá Ane! Tenho interesse no Encanto Piatã em Salvador. Pode me passar mais informações?",
    mapsUrl:
      "https://maps.google.com/?q=Rua+Colina+das+Esmeraldas,+163,+Piatã,+Salvador,+BA",
    faq: [
      {
        pergunta: "Qual a renda necessária para comprar no Encanto Piatã?",
        resposta:
          "O Encanto Piatã é enquadrado no MCMV Faixa 1, para famílias com renda bruta de até R$ 4.400 mensais. Quanto menor a renda, maior o subsídio — que pode chegar a R$ 55.000.",
      },
      {
        pergunta: "Qual o valor do apartamento no Encanto Piatã?",
        resposta:
          "Os apartamentos partem de R$ 200.000. Os valores podem variar conforme a unidade e as condições de pagamento. Entre em contato para uma simulação personalizada com sua renda.",
      },
      {
        pergunta: "O Encanto Piatã tem ITIV e documentação grátis?",
        resposta:
          "Sim. O ITIV (imposto de transmissão) e os custos de documentação são grátis, o que representa uma economia significativa na hora de fechar o negócio.",
      },
      {
        pergunta: "Como é a localização do Encanto Piatã?",
        resposta:
          "O empreendimento fica na Rua Colina das Esmeraldas, 163, no bairro de Piatã — a 1km da praia de Piatã, próximo a Itapuã e Patamares. Tem fácil acesso ao Shopping Paralela, supermercados, farmácias e transporte público.",
      },
      {
        pergunta: "Posso usar o FGTS para comprar no Encanto Piatã?",
        resposta:
          "Sim. O FGTS pode ser utilizado como entrada, para complementar o financiamento ou abater parcelas. É necessário ter pelo menos 3 anos de contribuição, contínuos ou não.",
      },
    ],
  },
];

export function getEmpreendimento(
  cidade: string,
  slug: string,
): Empreendimento | undefined {
  return empreendimentos.find((e) => e.cidade === cidade && e.slug === slug);
}

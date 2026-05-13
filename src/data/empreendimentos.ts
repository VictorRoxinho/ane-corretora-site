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
    fotos: [
      "/images/empreendimentos/solaris-camacari/capa.jpg",
      "/images/empreendimentos/solaris-camacari/piscina.jpg",
      "/images/empreendimentos/solaris-camacari/salao-de-festas.jpg",
      "/images/empreendimentos/solaris-camacari/churrasqueira.jpg",
      "/images/empreendimentos/solaris-camacari/playground.jpg",
      "/images/empreendimentos/solaris-camacari/espaco-fit.jpg",
      "/images/empreendimentos/solaris-camacari/espaco-pet.jpg",
      "/images/empreendimentos/solaris-camacari/mini-mercado.jpg",
      "/images/empreendimentos/solaris-camacari/carro-compartilhado.jpg",
      "/images/empreendimentos/solaris-camacari/sala.jpg",
      "/images/empreendimentos/solaris-camacari/cozinha.jpg",
      "/images/empreendimentos/solaris-camacari/quarto1.jpg",
    ],
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
  {
    slug: "art-studio-tancredo",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Caminho das Árvores",
    estado: "BA",
    nome: "Art Studio Tancredo",
    construtora: "André Guimarães",
    status: "lancamento",
    entrega: "Junho/2029",
    faixaMCMV: "Faixa 3", // Não é MCMV — produto de investimento; confirmar com Ane
    rendaFamiliarMax: 0, // Confirmar com Ane — não é MCMV
    area: "20–58 m²",
    parcelaMin: 0, // Confirmar com Ane
    valorMin: 314000,
    quartos: [1, 2],
    descricao: `A Avenida Tancredo Neves concentra hoje a maior densidade de escritórios, hospitais e centros comerciais de Salvador — e é exatamente esse fluxo que sustenta demanda constante por short stay e locação corporativa. O Art Studio Tancredo, com unidades a partir de R$ 314.000, foi estruturado para operar como ativo de renda em um dos endereços com menor vacância histórica da cidade. Três formas de pagamento disponíveis: à vista em até 12x, parcelado em até 42x direto com a construtora, ou 40% durante a obra com 60% via financiamento bancário.

Torre única de 27 pavimentos com 420 unidades — studios de 20 a 21 m², 1 quarto sem varanda de 22 m², 1 quarto com varanda de 29 m² e 2 quartos de 58 m². O mix foi calculado para atender perfis distintos de locação sem área desperdiçada. A infraestrutura inclui rooftop com piscina aquecida e skybar, Wellness Center de 280 m² com academia assinada por Julião Castello, duas salas de massagem, coworking com workplaces gourmet, market 24h operado pela Market4you, robô delivery porta a porta e lavanderia operada pela OMO.

Inserido no Caminho das Árvores, ao lado do Banco do Brasil e próximo ao Salvador Shopping, com acesso direto à Avenida Paralela, ao metrô e ao Centro de Convenções. A André Guimarães Incorporações assina o projeto com histórico de entregas na região e leitura consistente do mercado de alto padrão em Salvador. Previsão de entrega: junho de 2029.`,
    diferenciais: [
      "Rooftop com piscina aquecida e skybar panorâmico",
      "Wellness Center de ~280 m² com academia assinada por Julião Castello",
      "Duas salas de massagem individuais e sala funcional",
      "Coworking com três workplaces gourmet",
      "Market 24h (Market4you) com robô delivery porta a porta",
      "Lavanderia compartilhada operada pela OMO",
      "Controle de acesso por biometria facial e fechaduras eletrônicas",
      "Previsão de IPTU Verde – Selo Ouro com desconto no imposto",
    ],
    fotos: [
      "/images/banner-art-studio-tancredo.jpg",
      "/images/art-studio-tancredo-fachada-.jpg",
      "/images/art-studio-tancredo-academia.jpg",
      "/images/art-studio-tancredo-conviviencia.jpg",
      "/images/art-studio-tancredo-entrada.jpg",
      "/images/art-studio-tancredo-entrada-.jpg",
      "/images/art-studio-tancredo-gourmet.jpg",
      "/images/art-studio-tancredo-jogos.jpg",
      "/images/art-studio-tancredo-lavanderia.jpg",
      "/images/art-studio-tancredo-piscina.jpg",
      "/images/art-studio-tancredo-quarto.jpg",
      "/images/art-studio-tancredo-recepcao.jpg",
      "/images/art-studio-tancredo-rooftop.jpg",
      "/images/art-studio-tancredo-spa.jpg",
      "/images/art-studio-tancredo-studio.jpg",
      "/images/art-studio-tancredo-studio-.jpg",
    ],
    ogImage: "/images/banner-art-studio-tancredo.jpg",
    whatsappMsg:
      "Olá! Tenho interesse no Art Studio Tancredo (Caminho das Árvores, Salvador). Pode me passar mais informações?",
    mapsUrl:
      "https://maps.google.com/?q=Av.+Tancredo+Neves,+Caminho+das+%C3%81rvores,+Salvador,+BA",
    faq: [
      {
        pergunta: "O Art Studio Tancredo é vinculado ao Minha Casa Minha Vida?",
        resposta:
          "Não. É um empreendimento de alto padrão voltado para investidores e moradia urbana premium, sem vinculação ao programa MCMV. Os valores partem de R$ 314.000 para studios.",
      },
      {
        pergunta: "Quais são as formas de pagamento disponíveis?",
        resposta:
          "Três opções: à vista com parcelamento em até 12x direto com a construtora; Venda Direta em até 42x com a André Guimarães; ou entrada de 40% durante a obra com saldo de 60% via financiamento bancário na entrega.",
      },
      {
        pergunta: "Quais tipologias estão disponíveis?",
        resposta:
          "Studios de 20 a 21 m² (82 unidades), 1 quarto sem varanda de 22 m² (150 unidades), 1 quarto com varanda de 29 m² (168 unidades) e 2 quartos de 58 m² (20 unidades) — 420 unidades no total em torre única de 27 pavimentos.",
      },
      {
        pergunta: "O imóvel é indicado para locação por temporada?",
        resposta:
          "Sim. O produto foi concebido para short stay e long stay na Av. Tancredo Neves, principal eixo corporativo de Salvador. A proximidade com Salvador Shopping, metrô e Centro de Convenções gera demanda permanente de executivos e turistas corporativos.",
      },
      {
        pergunta: "Qual é a previsão de entrega?",
        resposta: "A entrega está prevista para junho de 2029.",
      },
      {
        pergunta: "O que é o IPTU Verde mencionado no material?",
        resposta:
          "O projeto prevê obter o Selo Ouro de sustentabilidade, que garante desconto no IPTU municipal de Salvador — vantagem financeira recorrente tanto para uso próprio quanto para unidades em locação.",
      },
    ],
  },
  {
    slug: "brotas-prime",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Brotas",
    estado: "BA",
    nome: "Residencial Brotas Prime",
    construtora: "Bauhaus",
    status: "lancamento",
    entrega: "Dezembro/2026",
    faixaMCMV: "Faixa 2", // confirmar com Ane
    rendaFamiliarMax: 0, // confirmar com Ane
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2],
    descricao: `Dois quartos em suíte com varanda num dos bairros mais centrais de Salvador — esse é o conjunto que explica a demanda constante pelo Brotas Prime tanto para morar quanto para investir. A entrega prevista para dezembro de 2026 permite planejar a saída do aluguel com tempo hábil, e as condições de financiamento podem ser detalhadas por um dos nossos especialistas.

As unidades têm 2 suítes, varanda, porcelanato em todos os ambientes, teto em gesso e isolamento acústico, com opções de 1 ou 2 vagas cobertas e depósito. A área de lazer entrega piscina com raia de 15m, academia, salão de festas, salão de jogos, brinquedoteca, quadra poliesportiva e home office — estrutura que atende diferentes perfis no mesmo condomínio, sem custo de manutenção excessivo.

Na Rua Campinas de Brotas, nº 594, o acesso rápido à Av. Bonocô, Av. ACM, supermercados, shoppings e hospitais é um diferencial concreto para quem precisa de mobilidade urbana. Um bairro já formado, com comércio e serviços disponíveis no entorno imediato, reforça o potencial de locação e reduz o tempo de vacância para quem compra como investimento.`,
    diferenciais: [
      "Piscina com raia de 15m",
      "Academia equipada",
      "Salão de festas e salão de jogos",
      "Brinquedoteca",
      "Quadra poliesportiva",
      "Home office / coworking",
      "Churrasqueira e espaço zen",
      "Apartamentos entregues com porcelanato e teto em gesso",
    ],
    fotos: [
      "/images/banner-brotas-prime.jpg",
      "/images/brotas-prime-academia.jpg",
      "/images/brotas-prime-brinquedoteca.jpg",
      "/images/brotas-prime-implantacao.jpg",
      "/images/brotas-prime-ofice.jpg",
      "/images/brotas-prime-piscina.jpg",
      "/images/brotas-prime-quadra.jpg",
      "/images/brotas-prime-quiosque.jpg",
      "/images/brotas-prime-salao-festas.jpg",
      "/images/brotas-prime-salao-jogos.jpg",
    ],
    ogImage: "/images/banner-brotas-prime.jpg",
    whatsappMsg:
      "Olá! Tenho interesse no Residencial Brotas Prime (Brotas, Salvador). Pode me passar mais informações?",
    mapsUrl:
      "https://maps.google.com/?q=Rua+Campinas+de+Brotas,+594,+Brotas,+Salvador,+BA",
    faq: [
      {
        pergunta: "Quantos quartos têm os apartamentos do Brotas Prime?",
        resposta:
          "Todos os apartamentos têm 2 quartos em suíte com varanda, opções de 1 ou 2 vagas cobertas e depósito.",
      },
      {
        pergunta: "Qual é a previsão de entrega?",
        resposta:
          "A entrega está prevista para dezembro de 2026. O edifício tem 21 pavimentos, sendo 16 andares tipo com 6 apartamentos por andar e 2 elevadores.",
      },
      {
        pergunta: "O imóvel é indicado para investimento?",
        resposta:
          "Sim. Brotas é um dos bairros com maior centralidade de Salvador, com acesso rápido à Av. Bonocô, Av. ACM, shoppings e hospitais — o que garante demanda constante de locação e boa liquidez.",
      },
      {
        pergunta: "Quais são os diferenciais de lazer?",
        resposta:
          "Piscina com raia de 15m, academia, salão de festas, salão de jogos, brinquedoteca, quadra poliesportiva, home office e churrasqueira.",
      },
      {
        pergunta: "O acabamento é entregue ou preciso reformar?",
        resposta:
          "Os apartamentos são entregues com porcelanato em todos os ambientes e teto em gesso com isolamento acústico — sem necessidade de reforma básica na entrega.",
      },
    ],
  },
  {
    slug: "terraco-cabula",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Cabula",
    estado: "BA",
    nome: "Terraço Cabula",
    construtora: "BRL Incorp",
    status: "pronto",
    faixaMCMV: "Faixa 2", // confirmar com Ane
    rendaFamiliarMax: 0, // confirmar com Ane
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2, 3],
    descricao: `Pronto para morar significa uma decisão objetiva — você visita, avalia e já pode se organizar para mudar, sem esperar obra ou lidar com atrasos. O Terraço Cabula está entregue com apartamentos 100% no piso e preparação para split em todos os quartos. As condições de financiamento podem ser detalhadas pela nossa equipe de especialistas.

São 2 torres de 13 andares com 2 elevadores e 2 halls de entrada cada, mantendo um condomínio com circulação organizada. As unidades de 2 ou 3 quartos têm suíte e varanda integrada à sala. A estrutura de lazer inclui rooftop com área gourmet e terraço com vista para a Reserva Florestal do 19º BC e o mar ao fundo, piscina adulto com deck molhado e raia, piscina infantil, academia, espaço fitness, sala de massagem, pet play e pista de cooper interna.

No Cabula, ao lado da Drogaria São Paulo e na rotatória de acesso ao Hospital Roberto Santos, o endereço resolve o dia a dia com eficiência: comércio, serviços de saúde e mobilidade para as principais vias de Salvador sem grandes deslocamentos. A BRL Incorp, com 40 anos de atuação, entrega o projeto pronto — sem promessas futuras.`,
    diferenciais: [
      "Rooftop com área gourmet e vista para Reserva Florestal do 19º BC e mar",
      "Piscina adulto com deck molhado e raia de natação",
      "Piscina infantil e parque infantil cercado",
      "Academia e espaço fitness",
      "Sala de massagem",
      "Pet play e pista de cooper interna",
      "Portaria 24h em condomínio de apenas 2 torres",
      "Apartamentos entregues 100% no piso com preparação para split",
    ],
    fotos: [
      "/images/banner-terraco-cabula.jpg",
      "/images/terraco-cabula-rooftop.jpg",
      "/images/terraco-cabula-piscina.jpg",
      "/images/terraco-cabula-academia.jpg",
      "/images/terraco-cabula-2quartos.jpg",
      "/images/terraco-cabula-3quartos.jpg",
      "/images/terraco-cabula-quarto.jpg",
      "/images/terraco-cabula-sala.jpg",
      "/images/terraco-cabula-salao-festa.jpg",
      "/images/terraco-cabula-cowork.jpg",
      "/images/terraco-cabula-entrada.jpg",
      "/images/terraco-cabula-vista.jpg",
    ],
    ogImage: "/images/banner-terraco-cabula.jpg",
    whatsappMsg:
      "Olá! Tenho interesse no Terraço Cabula (Cabula, Salvador). Pode me passar mais informações?",
    mapsUrl:
      "https://maps.google.com/?q=Terraco+Cabula,+Cabula,+Salvador,+BA",
    faq: [
      {
        pergunta: "O Terraço Cabula já está pronto para morar?",
        resposta:
          "Sim. O empreendimento está concluído. Você pode visitar as unidades, avaliar o acabamento e já se organizar para a mudança sem aguardar obra.",
      },
      {
        pergunta: "Quais são os tipos de apartamento disponíveis?",
        resposta:
          "2 quartos com suíte e varanda, e 3 quartos com suíte e varanda. Todos entregues 100% no piso e com preparação para instalação de split nos quartos.",
      },
      {
        pergunta: "Qual é a estrutura de lazer do condomínio?",
        resposta:
          "Rooftop com área gourmet e vista para a Reserva Florestal do 19º BC, piscina adulto com deck e raia, piscina infantil, academia, espaço fitness, sala de massagem, salão de festas, brinquedoteca, parque infantil cercado, pet play e pista de cooper interna.",
      },
      {
        pergunta: "Como é a segurança do condomínio?",
        resposta:
          "Portaria 24 horas, 2 halls de entrada por torre e 2 elevadores por torre. O condomínio tem apenas 2 torres, o que facilita o controle de circulação e acesso.",
      },
      {
        pergunta: "Quem é a BRL Incorp?",
        resposta:
          "A BRL Incorp tem 40 anos de atuação e integra um grupo econômico consolidado. O histórico de entregas reforça a segurança de adquirir um imóvel já concluído e disponível para morar.",
      },
    ],
  },
  {
    slug: "conquista-boulevard-park",
    cidade: "camacari",
    cidadeLabel: "Camaçari",
    bairro: "Bairro Industrial",
    estado: "BA",
    nome: "Conquista Boulevard Park",
    construtora: "Direcional",
    status: "lancamento",
    entrega: "Março/2028",
    faixaMCMV: "Faixa 2", // confirmar com Ane
    rendaFamiliarMax: 4400, // Faixa 2
    area: "36,24–51,34 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 210000,
    quartos: [1, 2],
    descricao: `O subsídio do Minha Casa Minha Vida pode chegar a R$ 55.000 no Conquista Boulevard Park — o que reduz diretamente o valor financiado e permite parcelas próximas ao valor de um aluguel. FGTS disponível na entrada parcelável em até 84x, financiamento em até 35 anos e isenção de ITIV para renda de até 4 salários mínimos. Com entrega prevista para março de 2028 e a Direcional — maior construtora do Brasil segundo o Ranking INTEC 2024 — como responsável pela obra, a segurança para planejar a saída do aluguel está nos dois lados da equação.

São 520 unidades em 26 blocos (térreo + 4 andares), com apartamentos a partir de 36,24 m² e opções garden de até 51,34 m². Entregues com piso laminado na sala e quartos e infraestrutura para split. O lazer é completo, mobiliado e equipado: piscina adulto com deck molhado, piscina infantil, quadra recreativa, salão de festas com área externa, churrasqueira, espaço fitness, playground, petplace, webgarden e área de piquenique.

Na Av. Camassarys, em frente ao Boulevard Shopping Camaçari, com o Assaí a 1 minuto, o Hospital Geral de Camaçari e a Maternidade Regional a 3 minutos, e a Faculdade Anhanguera a 4 minutos. O entorno ainda conta com Atacadão, Atakarejo, SENAI e acesso direto à Av. Jorge Amado e à BA-535 — vias que reduzem o tempo de deslocamento para quem trabalha em Camaçari ou em Salvador.`,
    diferenciais: [
      "Subsídio MCMV de até R$ 55.000 e entrada parcelável em até 84x",
      "Lazer entregue completo, mobiliado e equipado",
      "Piscina adulto com deck molhado e piscina infantil",
      "Quadra recreativa e espaço fitness",
      "Salão de festas com área externa e churrasqueira",
      "Playground, petplace e webgarden",
      "Infraestrutura para ar-condicionado split nos quartos",
      "Opções garden de até 51,34 m² com área externa privativa",
    ],
    fotos: [
      "/images/banner-conquista-boulevard-park.jpg",
      "/images/conquista-boulevard-park-piscina.jpg",
      "/images/conquista-boulevard-park-salao-festas.jpg",
      "/images/conquista-boulevard-park-quadra.jpg",
      "/images/conquista-boulevard-park-fitness.jpg",
      "/images/conquista-boulevard-park-gourmet.jpg",
      "/images/conquista-boulevard-park-garden.jpg",
      "/images/conquista-boulevard-park-play.jpg",
      "/images/conquista-boulevard-park-pet.jpg",
      "/images/conquista-boulevard-park-churrasqueira.jpg",
      "/images/conquista-boulevard-park-entrada.jpg",
    ],
    ogImage: "/images/banner-conquista-boulevard-park.jpg",
    whatsappMsg:
      "Olá! Tenho interesse no Conquista Boulevard Park (Camaçari). Pode me passar mais informações?",
    mapsUrl:
      "https://maps.google.com/?q=Av.+Camassarys,+Bairro+Industrial,+Cama%C3%A7ari,+BA",
    faq: [
      {
        pergunta: "Posso usar o FGTS na compra do Conquista Boulevard Park?",
        resposta:
          "Sim. O FGTS pode ser usado na entrada, para abater o saldo devedor ou reduzir as parcelas. Combine com o subsídio de até R$ 55.000 do MCMV para diminuir ainda mais o valor financiado.",
      },
      {
        pergunta: "Qual é o valor mínimo dos apartamentos?",
        resposta:
          "A partir de R$ 210.000, com entrada parcelável em até 84x e financiamento em até 35 anos via Caixa Econômica Federal.",
      },
      {
        pergunta: "Quais tipologias estão disponíveis?",
        resposta:
          "Apartamentos de 1 quarto (studio) e 2 quartos tipo a partir de 36,24 m², e opções garden de até 51,34 m² com área externa privativa. São 520 unidades em 26 blocos.",
      },
      {
        pergunta: "O lazer é entregue pronto?",
        resposta:
          "Sim. Todo o lazer é entregue mobiliado e equipado, incluindo piscinas, quadra, espaço fitness, salão de festas, churrasqueira, playground e petplace.",
      },
      {
        pergunta: "Qual é a localização e o que tem no entorno?",
        resposta:
          "Na Av. Camassarys, em frente ao Boulevard Shopping Camaçari. Assaí e ponto de ônibus a 1 minuto, Hospital Geral e Maternidade Regional a 3 minutos, Faculdade Anhanguera a 4 minutos. Acesso direto à Av. Jorge Amado e BA-535.",
      },
    ],
  },
  {
    slug: "conquista-lauro-de-freitas",
    cidade: "lauro-de-freitas",
    cidadeLabel: "Lauro de Freitas",
    bairro: "Lauro de Freitas",
    estado: "BA",
    nome: "Conquista Lauro de Freitas",
    construtora: "Direcional",
    status: "lancamento",
    faixaMCMV: "Faixa 2", // confirmar com Ane
    rendaFamiliarMax: 4400, // Faixa 2
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [1, 2],
    descricao: `Sair do aluguel em Lauro de Freitas pelo Minha Casa Minha Vida é a proposta central do Conquista Lauro de Freitas — com subsídio do Governo Federal conforme a renda, FGTS disponível na entrada, financiamento em até 35 anos e parcelas que podem sair abaixo do valor do aluguel. A equipe da Imob faz a simulação completa e cuida de toda a documentação, sem burocracia.

Apartamentos de 1 ou 2 quartos com sala integrada, cozinha com área de serviço e janela, piso laminado na sala e nos quartos, e infraestrutura para split. O condomínio fechado oferece mais de 15 itens de lazer, entregues equipados: piscina adulto e infantil, salão gourmet, churrasqueiras, quadra recreativa coberta, playground, playbaby, espaço fitness ao ar livre, espaço jogos, espaço pet, redário, espaço zen e espaço yoga.

A localização coloca o Atacadão a 9 minutos a pé, a Unifacs a 11 minutos a pé, o Parque Shopping Bahia a 10 minutos de carro e o Hospital Aeroporto a 15 minutos de carro. Guarita com controle de acesso, portões motorizados e medição individualizada de água garantem segurança e eficiência no dia a dia. A Direcional, com mais de 40 anos e 220 mil unidades entregues, assina o empreendimento.`,
    diferenciais: [
      "Subsídio MCMV + FGTS na entrada com parcelas menores que o aluguel",
      "Mais de 15 itens de lazer entregues equipados",
      "Piscina adulto e infantil",
      "Quadra recreativa coberta e espaço fitness ao ar livre",
      "Espaço zen, espaço yoga e redário",
      "Playground e playbaby",
      "Espaço pet",
      "Condomínio fechado com guarita e portões automatizados",
    ],
    fotos: [
      "/images/banner-conquista-lauro-de-freitas.jpg",
      "/images/conquista-lauro-de-freitas-piscina.jpg",
      "/images/conquista-lauro-de-freitas-festas-interno.jpg",
      "/images/conquista-lauro-de-freitas-salao-festas.jpg",
      "/images/conquista-lauro-de-freitas-fitness.jpg",
      "/images/conquista-lauro-de-freitas-churrasqueira.jpg",
      "/images/conquista-lauro-de-freitas-play.jpg",
      "/images/conquista-lauro-de-freitas-quadra.jpg",
      "/images/conquista-lauro-de-freitas-jogos.jpg",
      "/images/conquista-lauro-de-freitas-petplace.jpg",
      "/images/conquista-lauro-de-freitas-redario.jpg",
      "/images/conquista-lauro-de-freitas-yoga.jpg",
      "/images/conquista-lauro-de-freitas-guarita.jpg",
    ],
    ogImage: "/images/banner-conquista-lauro-de-freitas.jpg",
    whatsappMsg:
      "Olá! Tenho interesse no Conquista Lauro de Freitas. Pode me passar mais informações?",
    mapsUrl:
      "https://maps.google.com/?q=Conquista+Lauro+de+Freitas,+Lauro+de+Freitas,+BA",
    faq: [
      {
        pergunta: "O Conquista Lauro de Freitas é do programa MCMV?",
        resposta:
          "Sim. É um empreendimento Minha Casa Minha Vida com subsídio do Governo Federal conforme a renda, possibilidade de usar FGTS na entrada, entrada facilitada e financiamento em até 35 anos.",
      },
      {
        pergunta: "Quais tipologias estão disponíveis?",
        resposta:
          "Apartamentos de 1 quarto, 2 quartos e unidades garden no térreo. Todas as unidades têm sala integrada, cozinha com área de serviço e janela, piso laminado e infraestrutura para split.",
      },
      {
        pergunta: "Quantos itens de lazer o condomínio oferece?",
        resposta:
          "Mais de 15 itens, entregues equipados: piscina adulto e infantil, salão gourmet, churrasqueiras, quadra recreativa coberta, playground, playbaby, espaço fitness, espaço jogos, espaço pet, redário, espaço zen e espaço yoga.",
      },
      {
        pergunta: "Qual é a segurança do condomínio?",
        resposta:
          "Condomínio fechado com guarita, controle de acesso automatizado em todos os blocos e portão automatizado de acesso a veículos.",
      },
      {
        pergunta: "Quem é a Direcional?",
        resposta:
          "A Direcional tem mais de 40 anos de atuação e mais de 220 mil unidades entregues ou incorporadas no Brasil, sendo reconhecida como uma das maiores construtoras do país.",
      },
    ],
  },
  {
    slug: "viv-rio-vermelho",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Rio Vermelho",
    estado: "BA",
    nome: "VIV Rio Vermelho",
    construtora: "Direcional",
    status: "lancamento",
    entrega: "2º semestre/2027",
    faixaMCMV: "Faixa 3", // Não é MCMV — médio/alto padrão; confirmar com Ane
    rendaFamiliarMax: 0, // confirmar com Ane — não é MCMV
    area: "49,08–61,16 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 538000,
    quartos: [2, 3],
    descricao: `Rio Vermelho tem histórico de liquidez acima da média em Salvador — tanto para locação tradicional quanto para temporada — e o VIV Rio Vermelho coloca isso ao alcance de quem decide comprar antes da entrega prevista para o segundo semestre de 2027. Unidades a partir de R$ 538.000, com ITIV e taxas cartorárias gratuitas no associativo. Condições de financiamento disponíveis com a equipe da Imob.

São 2 torres com 15 pavimentos e 238 unidades, com plantas de 49,08 a 61,16 m², opções garden com área externa privativa, piso laminado nos quartos e infraestrutura para split. O lazer foi distribuído pelo térreo em múltiplos ambientes: piscina adulto com deck, piscina infantil, academia, espaço Crossfit, salão de festas, churrasqueira com pergolado, espaço minimercado, brinquedoteca, playground e pet place. Arquitetura assinada pela Mundi Projetos, paisagismo pela URBAN.P (SP) e ambientação por Vanessa Araujo (CE).

Na Rua Francisco Rosa, s/n, no coração do Rio Vermelho: Mirante do Quartel a 5 minutos, Largo da Mariquita a 5 minutos, restaurantes, Drogasil, supermercado e a Praia do Buracão nas proximidades. A Direcional — maior construtora do Brasil segundo o Ranking INTEC 2024, com mais de 43 anos de mercado e mais de 200 mil unidades entregues — assina o empreendimento.`,
    diferenciais: [
      "Localização no coração do Rio Vermelho com alta liquidez de locação",
      "Piscina adulto com deck molhado e piscina infantil",
      "Academia e espaço Crossfit",
      "Salão de festas, churrasqueira com pergolado e redário",
      "Espaço minimercado, brinquedoteca e playground",
      "Opções garden com área externa privativa",
      "Paisagismo pela URBAN.P (SP) e ambientação por Vanessa Araujo (CE)",
      "ITIV e taxas cartorárias gratuitas no associativo",
    ],
    fotos: [
      "/images/banner-viv-rio-vermelho.jpg",
      "/images/viv-rio-vermelho-piscina.jpg",
      "/images/viv-rio-vermelho-academia.jpg",
      "/images/viv-rio-vermelho-salao-festas.jpg",
      "/images/viv-rio-vermelho-gourmet.jpg",
      "/images/viv-rio-vermelho-churrasqueira.jpg",
      "/images/viv-rio-vermelho-jogos.jpg",
      "/images/viv-rio-vermelho-play.jpg",
      "/images/viv-rio-vermelho-kids.jpg",
      "/images/viv-rio-vermelho-quarto.jpg",
      "/images/viv-rio-vermelho-sala.jpg",
      "/images/viv-rio-vermelho-jardim.jpg",
      "/images/viv-rio-vermelho-pet.jpg",
      "/images/viv-rio-vermelho-lazer.jpg",
      "/images/viv-rio-vermelho-mercado.jpg",
    ],
    ogImage: "/images/banner-viv-rio-vermelho.jpg",
    whatsappMsg:
      "Olá! Tenho interesse no VIV Rio Vermelho. Pode me passar mais informações?",
    mapsUrl:
      "https://maps.google.com/?q=Rua+Francisco+Rosa,+Rio+Vermelho,+Salvador,+BA",
    faq: [
      {
        pergunta: "O VIV Rio Vermelho é um produto MCMV?",
        resposta:
          "Não. É um empreendimento de médio/alto padrão com unidades a partir de R$ 538.000. ITIV e taxas cartorárias são gratuitos no associativo.",
      },
      {
        pergunta: "Quais são as tipologias disponíveis?",
        resposta:
          "Unidades de 2 e 3 quartos com áreas de 49,08 a 61,16 m², com opções de suíte, varanda e versões garden com área externa privativa.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscina adulto com deck, piscina infantil, academia, espaço Crossfit, salão de festas, churrasqueira com pergolado, espaço minimercado, brinquedoteca, playground, pet place, redário e área de piquenique.",
      },
      {
        pergunta: "O imóvel é indicado para locação por temporada?",
        resposta:
          "Sim. O Rio Vermelho tem demanda histórica alta por locação tradicional e por temporada, com Airbnb ativo pela concentração de bares, restaurantes, praia e vida cultural. Um produto novo com lazer completo nesse endereço tem posicionamento estratégico.",
      },
      {
        pergunta: "Qual é a previsão de entrega?",
        resposta: "A entrega está prevista para o segundo semestre de 2027.",
      },
    ],
  },
  // ─── Vivver Exclusive – Sussuarana ──────────────────────────────────────
  {
    slug: "vivver-exclusive-sussuarana",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Sussuarana",
    estado: "BA",
    nome: "Vivver Exclusive",
    construtora: "Pejota",
    status: "lancamento",
    faixaMCMV: "Faixa 3", // não MCMV — confirmar com Ane
    rendaFamiliarMax: 8000, // confirmar com Ane
    area: "52 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2],
    descricao:
      "O Vivver Exclusive é o mais recente lançamento da Pejota em Sussuarana, com 20 anos de histórico de entregas na região. Apartamentos de 2 quartos com suíte e varanda, em 3 opções de planta (~52 m²), lazer completo entregue equipado e decorado e energia solar nas áreas comuns — tudo isso em 3 torres com segurança 24h e elevadores.\n\nSussuarana tem infraestrutura consolidada, acesso rápido ao CAB, Av. Gal Costa e metrô, e continua sendo um dos principais vetores de crescimento de Salvador. Um imóvel funcional para morar com qualidade ou investir com liquidez.",
    diferenciais: [
      "2 quartos com suíte + varanda",
      "3 tipologias de planta ~52 m²",
      "Lazer entregue equipado e decorado",
      "Energia solar nas áreas comuns",
      "3 torres, 2 elevadores por torre",
      "Segurança e portaria 24h",
      "Próximo ao CAB e Av. Gal Costa",
      "Campo Society, academia e espaço fitness",
    ],
    fotos: [
      "/images/banner-vivver-exclusive-sussuarana.jpg",
      "/images/vivver-exclusive-sussuarana-2quartos.jpg",
      "/images/vivver-exclusive-sussuarana-2quartos-2.jpg",
      "/images/vivver-exclusive-sussuarana-2quartos-3.jpg",
      "/images/vivver-exclusive-sussuarana-piscina.jpg",
      "/images/vivver-exclusive-sussuarana-sala.jpg",
      "/images/vivver-exclusive-sussuarana-quarto.jpg",
      "/images/vivver-exclusive-sussuarana-varanda.jpg",
      "/images/vivver-exclusive-sussuarana-academia.jpg",
      "/images/vivver-exclusive-sussuarana-fitness.jpg",
      "/images/vivver-exclusive-sussuarana-campo.jpg",
      "/images/vivver-exclusive-sussuarana-kids.jpg",
      "/images/vivver-exclusive-sussuarana-pet.jpg",
      "/images/vivver-exclusive-sussuarana-festas.jpg",
      "/images/vivver-exclusive-sussuarana-salao-festas.jpg",
      "/images/vivver-exclusive-sussuarana-guarita.jpg",
      "/images/vivver-exclusive-sussuarana-localizacao.jpg",
    ],
    ogImage: "/images/banner-vivver-exclusive-sussuarana.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Vivver Exclusive da Pejota em Sussuarana no site e quero saber mais sobre os apartamentos com suíte e varanda.",
    mapsUrl:
      "https://www.google.com/maps/search/Vivver+Exclusive+Pejota+Sussuarana+Salvador+BA",
    faq: [
      {
        pergunta: "O Vivver Exclusive é um imóvel MCMV?",
        resposta:
          "Não. O Vivver Exclusive é um empreendimento de médio padrão sem vínculo com o MCMV. O financiamento pode ser feito pelo sistema SBPE com os principais bancos.",
      },
      {
        pergunta: "Quais são as tipologias disponíveis?",
        resposta:
          "Apartamentos de 2 quartos com suíte, varanda e cerca de 52 m², com 3 opções de planta. Cada unidade inclui 1 vaga de garagem, com possibilidade de vagas extras.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscina adulto e infantil com deck, espaço gourmet com churrasqueira, salão de festas, salão de jogos, parque infantil, academia, espaço fitness, campo society, espaço pet e bicicletário — tudo entregue equipado e decorado.",
      },
      {
        pergunta: "Onde fica o Vivver Exclusive?",
        resposta:
          "Na Rua Albino Fernandes, 932, em Sussuarana – Novo Horizonte, Salvador. Próximo ao Centro Administrativo da Bahia (CAB), com fácil acesso à Av. Gal Costa, Av. Paralela e metrô.",
      },
    ],
  },

  // ─── Jardim das Tulipas – Pernambués ────────────────────────────────────
  {
    slug: "jardim-das-tulipas-pernambues",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Pernambués",
    estado: "BA",
    nome: "Jardim das Tulipas",
    construtora: "S3 Engenharia",
    status: "em-obras",
    entrega: "Dezembro de 2027",
    faixaMCMV: "Faixa 3", // não MCMV — confirmar com Ane
    rendaFamiliarMax: 8000, // confirmar com Ane
    area: "57 m²",
    parcelaMin: 2500, // confirmar com Ane
    valorMin: 378409,
    quartos: [2],
    descricao:
      "Exclusividade que raramente existe nessa faixa de mercado: o Jardim das Tulipas tem apenas 23 unidades e 3 apartamentos por andar. São 57 m² com 2 quartos (1 suíte), varanda e um padrão de acabamento acima da média para Pernambués — com opções de cobertura de 114 m² para quem quer ainda mais espaço.\n\nLocalizado no Jardim Brasília, em Pernambués, com fácil acesso a Shopping da Bahia, Salvador Shopping, metrô e todos os serviços da região. Um imóvel para morar com conforto e privacidade, ou para investir num ativo de alta liquidez, a partir de R$ 378.409.",
    diferenciais: [
      "Apenas 23 unidades — 3 por andar",
      "57 m² com suíte e varanda",
      "A partir de R$ 378.409",
      "Entrega prevista: dezembro/2027",
      "Opções de cobertura com 114 m²",
      "Piscina, churrasqueira e salão de festas",
      "Próximo a 3 shoppings e metrô",
      "Padrão de acabamento acima da média",
    ],
    fotos: [
      "/images/banner-jardim-das-tulipas.jpg",
      "/images/jardim-das-tulipas-2quartos.jpg",
      "/images/jardim-das-tulipas-2quartos-2.jpg",
      "/images/jardim-das-tulipas-2quartos-3.jpg",
      "/images/jardim-das-tulipas-cobertura.jpg",
      "/images/jardim-das-tulipas-cobertura-2.jpg",
      "/images/jardim-das-tulipas-piscina.jpg",
      "/images/jardim-das-tulipas-gourmet.jpg",
      "/images/jardim-das-tulipas-churrasqueira.jpg",
      "/images/jardim-das-tulipas-sala.jpg",
      "/images/jardim-das-tulipas-salao-festas.jpg",
    ],
    ogImage: "/images/banner-jardim-das-tulipas.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Jardim das Tulipas (S3 Engenharia) em Pernambués no site. Quero saber mais sobre os apartamentos a partir de R$ 378.409.",
    mapsUrl:
      "https://www.google.com/maps/search/Jardim+das+Tulipas+S3+Engenharia+Pernambues+Salvador+BA",
    faq: [
      {
        pergunta: "O Jardim das Tulipas é MCMV?",
        resposta:
          "Não. O empreendimento é financiado pelo SBPE (crédito imobiliário tradicional). A partir de R$ 378.409, é um produto de médio padrão voltado a quem busca exclusividade, conforto e boa localização.",
      },
      {
        pergunta: "Quantas unidades tem o empreendimento?",
        resposta:
          "Apenas 23 unidades no total, com 3 apartamentos por andar. Esse formato garante muito mais privacidade, silêncio e uma convivência mais tranquila do que em projetos maiores.",
      },
      {
        pergunta: "Quais são as tipologias disponíveis?",
        resposta:
          "Apartamentos de 57 m² com 2 quartos (1 suíte) e varanda. Também há opções de cobertura com 114 m², que ampliam o espaço privativo e oferecem um padrão de moradia diferenciado.",
      },
      {
        pergunta: "Qual a previsão de entrega?",
        resposta:
          "A previsão de entrega é dezembro de 2027. O empreendimento está em construção pela S3 Engenharia, com acompanhamento disponível durante todo o processo.",
      },
    ],
  },

  // ─── Sensia Patamares – Piatã ────────────────────────────────────────────
  {
    slug: "sensia-patamares-piata",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Piatã",
    estado: "BA",
    nome: "Sensia Patamares",
    construtora: "Sensia",
    status: "lancamento",
    faixaMCMV: "Faixa 3", // não MCMV — confirmar com Ane
    rendaFamiliarMax: 8000, // confirmar com Ane
    area: "64 a 83 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2, 3],
    descricao:
      "O Sensia Patamares é o empreendimento premium da Sensia (marca incorporadora da MRV&CO) em Piatã, Salvador. São 320 unidades de 2 e 3 quartos com suíte, varanda gourmet e plantas personalizáveis — com opções de vista para o mar e unidades giardino. A 3 minutos do Shopping Paralela e a 10 minutos da praia de Piatã.\n\nÁreas comuns entregues equipadas e decoradas, com piscinas, academia, espaço crossfit, sauna, quadra poliesportiva, coworking, market place e lavanderia. Personalização de revestimentos, bancadas, pisos e layout com acompanhamento profissional durante a obra.",
    diferenciais: [
      "Opções com vista para o mar",
      "Plantas e acabamentos personalizáveis",
      "Lazer entregue equipado e decorado",
      "Sauna, crossfit e quadra poliesportiva",
      "Coworking, market place e lavanderia",
      "3 min do Shopping Paralela",
      "10 min da Praia de Piatã",
      "Incorporadora premium MRV&CO",
    ],
    fotos: [
      "/images/banner-sensia-patamares-piata.jpg",
      "/images/sensia-patamares-piata-sala.jpg",
      "/images/sensia-patamares-piata-sala-2.jpg",
      "/images/sensia-patamares-piata-quarto.jpg",
      "/images/sensia-patamares-piata-quarto-2.jpg",
      "/images/sensia-patamares-piata-quarto-3.jpg",
      "/images/sensia-patamares-piata-varanda.jpg",
      "/images/sensia-patamares-piata-piscina.jpg",
      "/images/sensia-patamares-piata-academia.jpg",
      "/images/sensia-patamares-piata-fitness.jpg",
      "/images/sensia-patamares-piata-sauna.jpg",
      "/images/sensia-patamares-piata-quadra.jpg",
      "/images/sensia-patamares-piata-kids.jpg",
      "/images/sensia-patamares-piata-brinquedoteca.jpg",
      "/images/sensia-patamares-piata-convivencia.jpg",
      "/images/sensia-patamares-piata-play.jpg",
      "/images/sensia-patamares-piata-entrada.jpg",
      "/images/sensia-patamares-piata-hall.jpg",
    ],
    ogImage: "/images/banner-sensia-patamares-piata.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Sensia Patamares em Piatã no site e quero saber mais sobre os apartamentos e as condições de compra.",
    mapsUrl:
      "https://www.google.com/maps/search/Sensia+Patamares+Piata+Salvador+BA",
    faq: [
      {
        pergunta: "O Sensia Patamares é um empreendimento MCMV?",
        resposta:
          "Não. O Sensia Patamares é um produto premium da Sensia, incorporadora do grupo MRV&CO. O financiamento é feito pelo SBPE nos principais bancos.",
      },
      {
        pergunta: "Quais são as tipologias disponíveis?",
        resposta:
          "Apartamentos de 2 quartos com suíte (64,14 m²) e 3 quartos com suíte (83,01 m²), com varanda gourmet, integração sala-cozinha e possibilidade de unidades com vista para o mar ou giardino (área externa privativa).",
      },
      {
        pergunta: "Como funciona a personalização do apartamento?",
        resposta:
          "A Sensia oferece consultoria de personalização durante a obra, permitindo escolher revestimentos, bancadas, metais, louças, pisos e adaptar o layout. Paredes internas podem ser removidas para ampliar a sala ou criar um home office.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscinas, academia, espaço crossfit, sauna, quadra poliesportiva, playground, espaço kids, espaço zen, gazebo, pet place, salão de festas, gourmet multimídia, churrasqueira, coworking, bicicletário coberto, market place e lavanderia.",
      },
    ],
  },

  // ─── Sensia Urban – STIEP ────────────────────────────────────────────────
  {
    slug: "sensia-urban-stiep",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "STIEP",
    estado: "BA",
    nome: "Sensia Urban",
    construtora: "Sensia",
    status: "lancamento",
    faixaMCMV: "Faixa 3", // não MCMV — confirmar com Ane
    rendaFamiliarMax: 8000, // confirmar com Ane
    area: "61 a 63 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2],
    descricao:
      "O Sensia Urban está a 3 minutos do Salvador Shopping, no STIEP — um dos bairros mais conectados de Salvador, com acesso rápido à Av. Tancredo Neves, hospitais, faculdades e a Praia de Armação. Apartamentos de 2 quartos com suíte, varanda gourmet e plantas removíveis para quem quer adaptar o espaço ao estilo de vida.\n\n320 unidades em 2 torres, com fachada em ecogranito, previsão de vaga para carro elétrico, coworking e espaços de lazer que vão de piscina a sauna e salão de festas adulto e juvenil — tudo dentro do condomínio.",
    diferenciais: [
      "3 min do Salvador Shopping",
      "Plantas removíveis — adapte o layout",
      "Varanda gourmet + suíte",
      "Previsão de vaga para carro elétrico",
      "Fachada em ecogranito",
      "Coworking + bicicletário",
      "Sauna e academia equipada",
      "Salão de festas adulto e juvenil",
    ],
    fotos: [
      "/images/banner-sensia-urban-stiep.jpg",
      "/images/sensia-urban-stiep-2quartos.jpg",
      "/images/sensia-urban-stiep-2quartos-2.jpg",
      "/images/sensia-urban-stiep-sala.jpg",
      "/images/sensia-urban-stiep-sala-2.jpg",
      "/images/sensia-urban-stiep-quarto.jpg",
      "/images/sensia-urban-stiep-quarto-2.jpg",
      "/images/sensia-urban-stiep-quarto-3.jpg",
      "/images/sensia-urban-stiep-varanda.jpg",
      "/images/sensia-urban-stiep-varanda-2.jpg",
      "/images/sensia-urban-stiep-piscina.jpg",
      "/images/sensia-urban-stiep-academia.jpg",
      "/images/sensia-urban-stiep-academia-2.jpg",
      "/images/sensia-urban-stiep-sauna.jpg",
      "/images/sensia-urban-stiep-gourmet.jpg",
      "/images/sensia-urban-stiep-salao-festas.jpg",
      "/images/sensia-urban-stiep-coworking.jpg",
      "/images/sensia-urban-stiep-jardim.jpg",
      "/images/sensia-urban-stiep-jardim-2.jpg",
      "/images/sensia-urban-stiep-quadra.jpg",
      "/images/sensia-urban-stiep-jogos.jpg",
      "/images/sensia-urban-stiep-brinquedoteca.jpg",
      "/images/sensia-urban-stiep-pet.jpg",
      "/images/sensia-urban-stiep-bicicletario.jpg",
      "/images/sensia-urban-stiep-localizacao.jpg",
    ],
    ogImage: "/images/banner-sensia-urban-stiep.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Sensia Urban no STIEP no site e quero saber mais sobre os apartamentos e condições de compra.",
    mapsUrl:
      "https://www.google.com/maps/search/Sensia+Urban+STIEP+Salvador+BA",
    faq: [
      {
        pergunta: "O Sensia Urban é MCMV?",
        resposta:
          "Não. O Sensia Urban é um produto premium da Sensia (MRV&CO), financiado pelo SBPE. É voltado a quem busca localização estratégica, conforto e flexibilidade de planta.",
      },
      {
        pergunta: "Quais são as características dos apartamentos?",
        resposta:
          "Apartamentos de 2 quartos com suíte, varanda gourmet e área de 61,16 m² ou 63,22 m². Oferecem 1 ou 2 vagas de garagem, plantas com paredes removíveis, infraestrutura para chuveiro a gás e preparação para ar-condicionado.",
      },
      {
        pergunta: "O que há de diferente no projeto?",
        resposta:
          "Fachada em ecogranito (revestimento ecológico de alta durabilidade), previsão de vaga para carro elétrico e plantas removíveis que permitem ampliar a sala ou criar um home office.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscina adulto e infantil, academia equipada, quadra gramada, playground, espaço kids, salão de jogos, sauna, pet place, praça de convivência, salão de festas adulto e juvenil, espaço gourmet e coworking.",
      },
    ],
  },

  // ─── Selleto – Jardim das Margaridas ────────────────────────────────────
  {
    slug: "selleto-jardim-das-margaridas",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Jardim das Margaridas",
    estado: "BA",
    nome: "Selleto",
    construtora: "Sertenge",
    status: "lancamento",
    faixaMCMV: "Faixa 2",
    rendaFamiliarMax: 4400,
    area: "44 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2],
    descricao:
      "O Selleto é a 2ª fase de um condomínio fechado da Sertenge no Jardim das Margaridas, com apartamentos de 2 quartos (44,02 m²) e subsídio de até R$ 55.000 pelo Minha Casa Minha Vida. A menos de 5 minutos do Salvador Norte Shopping e com acesso rápido ao aeroporto, praias e eixo da Paralela.\n\nSão 320 unidades em 16 torres baixas, com lazer completo entregue equipado e decorado: piscinas, churrasqueira, salão de festas, arena multiesporte, fitness, playground e pomar. A planta de 2 quartos foi eleita a melhor pelos corretores — com janela panorâmica, cozinha em L e metragem bem aproveitada.",
    diferenciais: [
      "MCMV: subsídio de até R$ 55.000",
      "Lazer entregue equipado e decorado",
      "Arena multiesporte: crossfit + beach tênis",
      "Janela panorâmica + planta em L",
      "Opções garden com área privativa",
      "Próximo ao Salvador Norte Shopping",
      "Fácil acesso ao aeroporto e praias",
      "Condomínio fechado com portaria",
    ],
    fotos: [
      "/images/banner-selleto-jardim-das-margaridas.jpg",
      "/images/selleto-jardim-das-margaridas-2quartos.jpg",
      "/images/selleto-jardim-das-margaridas-garden.jpg",
      "/images/selleto-jardim-das-margaridas-garden-2.jpg",
      "/images/selleto-jardim-das-margaridas-1quarto.jpg",
      "/images/selleto-jardim-das-margaridas-sala.jpg",
      "/images/selleto-jardim-das-margaridas-sala-2.jpg",
      "/images/selleto-jardim-das-margaridas-piscina.jpg",
      "/images/selleto-jardim-das-margaridas-churrasqueira.jpg",
      "/images/selleto-jardim-das-margaridas-salao-festas.jpg",
      "/images/selleto-jardim-das-margaridas-quadra.jpg",
      "/images/selleto-jardim-das-margaridas-quadra-2.jpg",
      "/images/selleto-jardim-das-margaridas-academia.jpg",
      "/images/selleto-jardim-das-margaridas-play.jpg",
      "/images/selleto-jardim-das-margaridas-lazer.jpg",
      "/images/selleto-jardim-das-margaridas-bicicletario.jpg",
      "/images/selleto-jardim-das-margaridas-guarita.jpg",
      "/images/selleto-jardim-das-margaridas-implantacao.jpg",
    ],
    ogImage: "/images/banner-selleto-jardim-das-margaridas.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Selleto (Sertenge) no Jardim das Margaridas e quero simular o financiamento pelo Minha Casa Minha Vida.",
    mapsUrl:
      "https://www.google.com/maps/search/Selleto+Sertenge+Jardim+das+Margaridas+Salvador+BA",
    faq: [
      {
        pergunta: "O Selleto é MCMV?",
        resposta:
          "Sim. O Selleto faz parte do Minha Casa Minha Vida, com subsídio de até R$ 55.000, possibilidade de uso do FGTS e financiamento acessível conforme sua renda.",
      },
      {
        pergunta: "Quais são as tipologias disponíveis?",
        resposta:
          "Apartamentos de 2 quartos (44,02 m²), unidades garden (com área privativa descoberta, mantendo 44,02 m² internos) e studios de 1 quarto (33,68 m²). Todos com planta funcional e acabamento prático.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscinas adulto e infantil, quiosque gourmet, salão de festas, arena multiesporte (crossfit, funcional, vôlei, beach tênis), fitness, quadra de esportes, praça de jogos, área verde, pomar e bicicletário — tudo entregue equipado e decorado.",
      },
      {
        pergunta: "Onde fica o Selleto?",
        resposta:
          "Na Rua Panorama, 139, Jardim das Margaridas. A poucos minutos do Salvador Norte Shopping, do aeroporto e das praias do litoral norte, com fácil acesso a Salvador e Lauro de Freitas.",
      },
    ],
  },

  // ─── Alto Paralela – Itapuã ──────────────────────────────────────────────
  {
    slug: "alto-paralela-itapua",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Itapuã",
    estado: "BA",
    nome: "Alto Paralela",
    construtora: "Stanza",
    status: "lancamento",
    faixaMCMV: "Faixa 2",
    rendaFamiliarMax: 4400,
    area: "38 m²",
    parcelaMin: 1300, // confirmar com Ane
    valorMin: 239999,
    quartos: [2],
    descricao:
      "A partir de R$ 239.999, o Alto Paralela da Stanza é a oportunidade de morar na Av. Paralela com as facilidades do Minha Casa Minha Vida Faixa 2. São 672 unidades de 2 quartos com varanda (38 m²) em 7 torres — ao lado do metrô Mussurunga, próximo a Shopping Paralela, Salvador Norte e praias de Itapuã, Piatã e Stela Maris.\n\nFinanciamento CEF associativo com saldo devedor congelado, sem correções. Área comercial integrada ao condomínio, portaria remota, Wi-Fi nas áreas comuns e lazer completo para toda a família.",
    diferenciais: [
      "A partir de R$ 239.999 — MCMV Faixa 2",
      "Saldo do financiamento congelado",
      "ITIV e cartório grátis",
      "Ao lado do metrô Mussurunga",
      "Área comercial no próprio condomínio",
      "Portaria remota 24h com câmeras",
      "7 torres com 2 elevadores cada",
      "Perto de Itapuã, Piatã e Stela Maris",
    ],
    fotos: [
      "/images/banner-alto-paralela-itapua.jpg",
      "/images/alto-paralela-itapua-fachada-2.jpg",
      "/images/alto-paralela-itapua-aerea-lazer.jpg",
      "/images/alto-paralela-itapua-piscina.jpg",
      "/images/alto-paralela-itapua-piscina-2.jpg",
      "/images/alto-paralela-itapua-sala.jpg",
      "/images/alto-paralela-itapua-sala-2.jpg",
      "/images/alto-paralela-itapua-quarto.jpg",
      "/images/alto-paralela-itapua-quarto-2.jpg",
      "/images/alto-paralela-itapua-cozinha.jpg",
      "/images/alto-paralela-itapua-gourmet.jpg",
      "/images/alto-paralela-itapua-quadra.jpg",
      "/images/alto-paralela-itapua-playground.jpg",
      "/images/alto-paralela-itapua-pet.jpg",
      "/images/alto-paralela-itapua-bicicletario.jpg",
      "/images/alto-paralela-itapua-salao-festas.jpg",
      "/images/alto-paralela-itapua-comercial.jpg",
      "/images/alto-paralela-itapua-guarita.jpg",
    ],
    ogImage: "/images/banner-alto-paralela-itapua.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Alto Paralela (Stanza) em Itapuã no site e quero saber mais sobre os apartamentos e o financiamento pelo MCMV Faixa 2.",
    mapsUrl:
      "https://www.google.com/maps/search/Alto+Paralela+Stanza+Itapua+Salvador+BA",
    faq: [
      {
        pergunta: "O Alto Paralela é MCMV?",
        resposta:
          "Sim, enquadrado no MCMV Faixa 2. O financiamento é pela Caixa Econômica Federal (CEF associativo), com saldo devedor congelado, sem correções, entrada facilitada e ITIV + cartório grátis conforme campanha.",
      },
      {
        pergunta: "Qual o valor e as condições de compra?",
        resposta:
          "Unidades a partir de R$ 239.999, com entrada parcelada (poupança facilitada) e saldo financiado pelo MCMV Faixa 2 com parcelas que cabem no orçamento. Financiamento CEF com saldo congelado.",
      },
      {
        pergunta: "Quais são as tipologias?",
        resposta:
          "Apartamentos de 2 quartos com varanda (38 m²), com opções giardino de 20 a 38 m² de área privativa. Piso laminado nas áreas secas e cerâmico nas molhadas.",
      },
      {
        pergunta: "Qual é a estrutura do condomínio?",
        resposta:
          "Piscina adulto e infantil, deck, churrasqueira, salão de festas, quadra esportiva, parque infantil, pet play, bicicletário, portaria remota 24h, câmeras, Wi-Fi nas áreas comuns, gerador e 10 lojas comerciais.",
      },
    ],
  },

  // ─── Jardim Patamares – Stanza ───────────────────────────────────────────
  {
    slug: "jardim-patamares-stanza",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Patamares",
    estado: "BA",
    nome: "Jardim Patamares",
    construtora: "Stanza",
    status: "lancamento",
    faixaMCMV: "Faixa 3", // confirmar com Ane
    rendaFamiliarMax: 8000, // confirmar com Ane
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2],
    descricao:
      "O Jardim Patamares é o primeiro empreendimento da Stanza em Patamares — um bairro que combina fácil acesso à Av. Paralela com proximidade ao mar e áreas verdes. Apartamentos de 2 quartos com suíte, piso laminado, integração sala-cozinha e opções giardino para quem valoriza espaço ao ar livre em casa.\n\nArea de lazer diferenciada: piscina com raia de 20 metros, prainha, academia climatizada, salão de festas climatizado, espaço gourmet com 2 churrasqueiras, brinquedoteca, quadra esportiva e muito mais — um condomínio planejado para funcionar bem no dia a dia da família.",
    diferenciais: [
      "Piscina com raia de 20 m + prainha",
      "Academia e salão de festas climatizados",
      "2 quartos com suíte + piso laminado",
      "Opções giardino com área privativa",
      "Brinquedoteca + espaço gourmet com 2 churrasqueiras",
      "Próximo à Av. Paralela e à praia",
      "Infraestrutura para Wi-Fi e portaria remota",
      "Bairro em valorização constante",
    ],
    fotos: [
      "/images/banner-jardim-patamares-stanza.jpg",
      "/images/jardim-patamares-stanza-2quartos.jpg",
      "/images/jardim-patamares-stanza-3quartos.jpg",
      "/images/jardim-patamares-stanza-piscina.jpg",
      "/images/jardim-patamares-stanza-piscina-2.jpg",
      "/images/jardim-patamares-stanza-sala.jpg",
      "/images/jardim-patamares-stanza-sala-piscina.jpg",
      "/images/jardim-patamares-stanza-quarto.jpg",
      "/images/jardim-patamares-stanza-quarto-2.jpg",
      "/images/jardim-patamares-stanza-quarto-3.jpg",
      "/images/jardim-patamares-stanza-jantar.jpg",
      "/images/jardim-patamares-stanza-varanda.jpg",
      "/images/jardim-patamares-stanza-academia.jpg",
      "/images/jardim-patamares-stanza-fitness.jpg",
      "/images/jardim-patamares-stanza-quiosque.jpg",
      "/images/jardim-patamares-stanza-festas.jpg",
      "/images/jardim-patamares-stanza-quadra.jpg",
      "/images/jardim-patamares-stanza-play.jpg",
      "/images/jardim-patamares-stanza-pet.jpg",
      "/images/jardim-patamares-stanza-garden.jpg",
      "/images/jardim-patamares-stanza-bicicletario.jpg",
      "/images/jardim-patamares-stanza-entrada.jpg",
      "/images/jardim-patamares-stanza-entrada-2.jpg",
      "/images/jardim-patamares-stanza-implantacao.jpg",
      "/images/jardim-patamares-stanza-localizacao.jpg",
    ],
    ogImage: "/images/banner-jardim-patamares-stanza.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Jardim Patamares (Stanza) no site e quero saber mais sobre os apartamentos e as condições de compra.",
    mapsUrl:
      "https://www.google.com/maps/search/Jardim+Patamares+Stanza+Salvador+BA",
    faq: [
      {
        pergunta: "O Jardim Patamares é MCMV?",
        resposta:
          "As condições de financiamento precisam ser confirmadas. Entre em contato para simular sua condição e verificar enquadramento no MCMV ou SBPE.",
      },
      {
        pergunta: "Quais são as tipologias disponíveis?",
        resposta:
          "Apartamentos de 2 quartos com suíte, piso laminado na sala e quartos, integração sala-cozinha e varanda integrada. Opções com giardino ampliam a área privativa com espaço ao ar livre.",
      },
      {
        pergunta: "Qual é o diferencial da estrutura de lazer?",
        resposta:
          "Piscina com raia de 20 metros, prainha, deck, salão de festas climatizado com bar, espaço gourmet com 2 churrasqueiras, academia climatizada, academia externa, brinquedoteca, quadra esportiva, pet place e bicicletário.",
      },
      {
        pergunta: "Onde fica o Jardim Patamares?",
        resposta:
          "Em Patamares, Salvador — bairro próximo à Av. Paralela, com fácil acesso a supermercados, escolas, shoppings e praias. A região cresce com planejamento e apresenta forte potencial de valorização.",
      },
    ],
  },

  // ─── Ventura Patamares – Stanza ──────────────────────────────────────────
  {
    slug: "ventura-patamares",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Patamares",
    estado: "BA",
    nome: "Ventura Patamares",
    construtora: "Stanza",
    status: "em-obras",
    entrega: "2027",
    faixaMCMV: "Faixa 3", // confirmar com Ane
    rendaFamiliarMax: 8000, // confirmar com Ane
    area: "55 a 63 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2, 3],
    descricao:
      "O Ventura Patamares reúne apartamentos de 2 e 3 quartos com suíte, plantas bem resolvidas e varanda com guarda-corpo em vidro, em Patamares — a poucos minutos da praia, do Sesc Piatã e do Costa Verde Tênis Clube. Entrega prevista para 2027 com lazer já entregue equipado.\n\nPiscinas com deck e prainha, academia climatizada, salão de festas climatizado, espaço gourmet com 2 churrasqueiras, brinquedoteca, quadra esportiva, pet place e bicicletário. Um empreendimento equilibrado entre localização, lazer e custo-benefício para morar ou investir em Patamares.",
    diferenciais: [
      "2 e 3 quartos com suíte",
      "Varanda com guarda-corpo em vidro",
      "Entrega prevista 2027",
      "Piscinas + prainha + deck molhado",
      "Academia climatizada",
      "Salão de festas climatizado com bar",
      "Próximo à praia e ao Sesc Piatã",
      "Sensores de presença + lâmpadas LED",
    ],
    fotos: [
      "/images/banner-ventura-patamares.jpg",
      "/images/ventura-patamares-2quartos.jpg",
      "/images/ventura-patamares-3quartos.jpg",
      "/images/ventura-patamares-piscina.jpg",
      "/images/ventura-patamares-sala.jpg",
      "/images/ventura-patamares-jantar.jpg",
      "/images/ventura-patamares-quarto.jpg",
      "/images/ventura-patamares-quarto-2.jpg",
      "/images/ventura-patamares-quarto-3.jpg",
      "/images/ventura-patamares-varanda.jpg",
      "/images/ventura-patamares-academia.jpg",
      "/images/ventura-patamares-quiosque.jpg",
      "/images/ventura-patamares-salao-festas.jpg",
      "/images/ventura-patamares-quadra.jpg",
      "/images/ventura-patamares-play.jpg",
      "/images/ventura-patamares-kids.jpg",
      "/images/ventura-patamares-pet.jpg",
      "/images/ventura-patamares-bicicletario.jpg",
      "/images/ventura-patamares-implantacao.jpg",
    ],
    ogImage: "/images/banner-ventura-patamares.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Ventura Patamares (Stanza) no site e quero saber mais sobre os apartamentos com entrega em 2027.",
    mapsUrl:
      "https://www.google.com/maps/search/Ventura+Patamares+Stanza+Salvador+BA",
    faq: [
      {
        pergunta: "O Ventura Patamares é MCMV?",
        resposta:
          "As condições de financiamento precisam ser confirmadas. Fale com a Ane para simular sua condição e verificar o enquadramento mais adequado.",
      },
      {
        pergunta: "Quais são as tipologias?",
        resposta:
          "Apartamentos de 2 quartos com suíte (55,67 m²) e 3 quartos com suíte (63,73 m²). Todos com varanda de guarda-corpo em vidro, sala integrada, piso laminado e infraestrutura para ar-condicionado tipo split.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscinas adulto e infantil, deck, deck molhado, prainha, salão de festas climatizado com bar, espaço gourmet com 2 churrasqueiras, academia climatizada, quadra esportiva, brinquedoteca, parque infantil, pet place e bicicletário.",
      },
      {
        pergunta: "Qual é a previsão de entrega?",
        resposta:
          "A entrega está prevista para 2027. O empreendimento está em fase de construção com vagas de garagem para todas as unidades.",
      },
    ],
  },

  // ─── Morada Real – Porto Seco Pirajá ────────────────────────────────────
  {
    slug: "morada-real-porto-seco",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Porto Seco Pirajá",
    estado: "BA",
    nome: "Morada Real",
    construtora: "Tenda",
    status: "em-obras",
    entrega: "Fevereiro de 2028",
    faixaMCMV: "Faixa 3",
    rendaFamiliarMax: 8000,
    area: "36 m²",
    parcelaMin: 1400, // confirmar com Ane
    valorMin: 248000,
    quartos: [2],
    descricao:
      "A partir de R$ 248.000 pelo Minha Casa Minha Vida, o Morada Real da Tenda está em Porto Seco Pirajá, a 1,4 km do metrô Campinas, ao lado da Caixa Econômica Federal e perto de Assaí, Atakarejo e GBarbosa. Entrega prevista para fevereiro de 2028, em 2 torres com 443 unidades.\n\nSão apartamentos de 2 quartos (36 m²) com e sem varanda, condomínio fechado com portaria 24h, piscinas, playground, quadra gramada, brinquedoteca, espaço fitness e salão de festas com coworking. Dispositivos economizadores de água e energia em LED nas áreas comuns.",
    diferenciais: [
      "A partir de R$ 248.000 com MCMV",
      "Entrega prevista: fevereiro/2028",
      "1,4 km do metrô Campinas de Pirajá",
      "Perto de Assaí, Atakarejo e GBarbosa",
      "Portaria 24h + condomínio fechado",
      "Dispositivos economizadores de água",
      "Iluminação LED nas áreas comuns",
      "Wi-Fi nas áreas comuns",
    ],
    fotos: [
      "/images/banner-morada-real-porto-seco.jpg",
      "/images/morada-real-porto-seco-2quartos.jpg",
      "/images/morada-real-porto-seco-varanda.jpg",
      "/images/morada-real-porto-seco-piscina.jpg",
      "/images/morada-real-porto-seco-play.jpg",
      "/images/morada-real-porto-seco-brinquedoteca.jpg",
      "/images/morada-real-porto-seco-quadra.jpg",
      "/images/morada-real-porto-seco-pet.jpg",
      "/images/morada-real-porto-seco-guarita.jpg",
      "/images/morada-real-porto-seco-implantacao.jpg",
    ],
    ogImage: "/images/banner-morada-real-porto-seco.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Morada Real (Tenda) em Porto Seco Pirajá no site e quero simular o financiamento pelo MCMV.",
    mapsUrl:
      "https://www.google.com/maps/search/Morada+Real+Tenda+Porto+Seco+Piraja+Salvador+BA",
    faq: [
      {
        pergunta: "Qual o valor do Morada Real e como funciona o financiamento?",
        resposta:
          "A partir de R$ 248.000, com financiamento pelo Minha Casa Minha Vida. Você pode usar FGTS, acessar subsídio do governo conforme renda e pagar parcelas compatíveis com o orçamento familiar.",
      },
      {
        pergunta: "Quais são as características do apartamento?",
        resposta:
          "Apartamentos de 2 quartos com cerca de 36 m², com e sem varanda, com e sem vaga de garagem. Unidades reversíveis para PCD no térreo.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscinas adulto e infantil, brinquedoteca, playground baby, quadra gramada, espaço fitness, salão de festas com coworking, espaço office, play pet e espaço food truck.",
      },
      {
        pergunta: "Qual é a previsão de entrega?",
        resposta:
          "A entrega está prevista para fevereiro de 2028. São 2 torres com 443 unidades distribuídas em térreo + 15 pavimentos.",
      },
    ],
  },

  // ─── Vale das Tulipas – Sussuarana ──────────────────────────────────────
  {
    slug: "vale-das-tulipas-sussuarana",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Sussuarana",
    estado: "BA",
    nome: "Vale das Tulipas",
    construtora: "Tenda",
    status: "lancamento",
    faixaMCMV: "Faixa 2",
    rendaFamiliarMax: 4400,
    area: "35 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2],
    descricao:
      "O Vale das Tulipas é o condomínio-clube da Tenda em Sussuarana: 819 unidades de 2 quartos em 3 torres, com uma estrutura de lazer normalmente encontrada em produtos de padrão mais alto — piscina, salão gourmet, academia, quadra gramada, sport bar, brinquedoteca e play pet, tudo dentro do MCMV.\n\nLocalizado na Rua Vale do Abaré, em Sussuarana, a 800 m do Atacadão Mata Escura e 950 m do Colégio Costa Dom Bosco. Dispositivos economizadores de água, individualização de consumo, LED nas áreas comuns e previsão de minimercado.",
    diferenciais: [
      "MCMV Faixa 2 + FGTS",
      "Sport bar, gourmet e academia",
      "Piscina + quadra gramada",
      "Individualização de água",
      "LED + dispositivos de economia",
      "800 m do Atacadão Mata Escura",
      "Previsão de minimercado",
      "819 unidades — escala de condomínio-clube",
    ],
    fotos: [
      "/images/banner-vale-das-tulipas-sussuarana.jpg",
      "/images/vale-das-tulipas-sussuarana-2quartos.jpg",
      "/images/vale-das-tulipas-sussuarana-varanda.jpg",
      "/images/vale-das-tulipas-sussuarana-piscina.jpg",
      "/images/vale-das-tulipas-sussuarana-sala.jpg",
      "/images/vale-das-tulipas-sussuarana-jantar.jpg",
      "/images/vale-das-tulipas-sussuarana-cozinha.jpg",
      "/images/vale-das-tulipas-sussuarana-banheiro.jpg",
      "/images/vale-das-tulipas-sussuarana-churrasqueira.jpg",
      "/images/vale-das-tulipas-sussuarana-salao-festas.jpg",
      "/images/vale-das-tulipas-sussuarana-sportbar.jpg",
      "/images/vale-das-tulipas-sussuarana-academia.jpg",
      "/images/vale-das-tulipas-sussuarana-play.jpg",
      "/images/vale-das-tulipas-sussuarana-play-2.jpg",
      "/images/vale-das-tulipas-sussuarana-play-3.jpg",
      "/images/vale-das-tulipas-sussuarana-play-4.jpg",
      "/images/vale-das-tulipas-sussuarana-varanda-2.jpg",
      "/images/vale-das-tulipas-sussuarana-guarita.jpg",
      "/images/vale-das-tulipas-sussuarana-implantacao.jpg",
      "/images/vale-das-tulipas-sussuarana-localizacao.jpg",
    ],
    ogImage: "/images/banner-vale-das-tulipas-sussuarana.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Vale das Tulipas (Tenda) em Sussuarana no site e quero simular o financiamento pelo Minha Casa Minha Vida.",
    mapsUrl:
      "https://www.google.com/maps/search/Vale+das+Tulipas+Tenda+Sussuarana+Salvador+BA",
    faq: [
      {
        pergunta: "O Vale das Tulipas é MCMV?",
        resposta:
          "Sim, enquadrado no MCMV. Com renda de até R$ 4.400, você pode acessar subsídios, usar o FGTS e financiar com juros reduzidos em parcelas que cabem no orçamento.",
      },
      {
        pergunta: "Quais são as características dos apartamentos?",
        resposta:
          "Apartamentos de 2 quartos com área entre 35,37 m² e 35,73 m², opção com varanda, piso cerâmico na cozinha e área de serviço, entregues prontos para morar.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscina, salão de festas gourmet, churrasqueira gourmet, sport bar, fitness, funcional externo, quadra gramada, playground kids e baby, brinquedoteca, play pet, espaço delivery e sugestão de minimercado.",
      },
      {
        pergunta: "Onde fica o Vale das Tulipas?",
        resposta:
          "Na Rua Vale do Abaré, 694, Sussuarana, Salvador. A 800 m do Atacadão Mata Escura, 950 m do Colégio Costa Dom Bosco e 4,1 km da Estação de Metrô Bom Juá.",
      },
    ],
  },

  // ─── Vila Laura Prime – Matatu ───────────────────────────────────────────
  {
    slug: "vila-laura-prime-matatu",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Matatu",
    estado: "BA",
    nome: "Vila Laura Prime",
    construtora: "Tenda",
    status: "em-obras",
    entrega: "Agosto de 2027",
    faixaMCMV: "Faixa 2",
    rendaFamiliarMax: 4400,
    area: "38 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2],
    descricao:
      "O Vila Laura Prime está no coração de Salvador, no Matatu — a 100 m do Agromix, 270 m da Rede Mix, 600 m do Shopping Sete Portas e 7 min da Arena Fonte Nova. Com entrega prevista para agosto de 2027, é uma das opções mais centrais da Tenda dentro do Minha Casa Minha Vida.\n\nApartamentos de 2 quartos (~38 m²), gás individualizado, portaria 24h e mais de 10 áreas de lazer entregues equipadas: quadra coberta, churrasqueira, sport bar, salão de festas, espaço teen, espaço relax, brinquedoteca, play pet e carro compartilhado. Possui o Selo Casa Azul+ Caixa de sustentabilidade.",
    diferenciais: [
      "Localização central — Matatu, Salvador",
      "100 m do Agromix, 600 m do Shopping",
      "Entrega prevista: agosto/2027",
      "Selo Casa Azul+ Caixa (sustentabilidade)",
      "Mais de 10 áreas de lazer equipadas",
      "Quadra coberta + sport bar",
      "Carro compartilhado + bicicletário",
      "Gás individualizado + portaria 24h",
    ],
    fotos: [
      "/images/banner-vila-laura-prime-matatu.jpg",
      "/images/vila-laura-prime-matatu-fachada-2.jpg",
      "/images/vila-laura-prime-matatu-2quartos.jpg",
      "/images/vila-laura-prime-matatu-quarto.jpg",
      "/images/vila-laura-prime-matatu-quarto-2.jpg",
      "/images/vila-laura-prime-matatu-sala.jpg",
      "/images/vila-laura-prime-matatu-cozinha.jpg",
      "/images/vila-laura-prime-matatu-banheiro.jpg",
      "/images/vila-laura-prime-matatu-churrasqueira.jpg",
      "/images/vila-laura-prime-matatu-festas.jpg",
      "/images/vila-laura-prime-matatu-jogos.jpg",
      "/images/vila-laura-prime-matatu-quadra.jpg",
      "/images/vila-laura-prime-matatu-academia.jpg",
      "/images/vila-laura-prime-matatu-play.jpg",
      "/images/vila-laura-prime-matatu-play-2.jpg",
      "/images/vila-laura-prime-matatu-play-3.jpg",
      "/images/vila-laura-prime-matatu-brinquedoteca.jpg",
      "/images/vila-laura-prime-matatu-conveniencia.jpg",
      "/images/vila-laura-prime-matatu-carro.jpg",
      "/images/vila-laura-prime-matatu-entrada.jpg",
      "/images/vila-laura-prime-matatu-implantacao.jpg",
      "/images/vila-laura-prime-matatu-localizacao.jpg",
    ],
    ogImage: "/images/banner-vila-laura-prime-matatu.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Vila Laura Prime (Tenda) no Matatu e quero simular o financiamento pelo Minha Casa Minha Vida. Entrega em agosto de 2027.",
    mapsUrl:
      "https://www.google.com/maps/search/Vila+Laura+Prime+Tenda+Matatu+Salvador+BA",
    faq: [
      {
        pergunta: "O Vila Laura Prime é MCMV?",
        resposta:
          "Sim. Com renda de até R$ 4.400, você pode acessar subsídios, usar o FGTS, financiar com juros reduzidos e pagar parcelas adaptadas à renda familiar.",
      },
      {
        pergunta: "Qual é a localização?",
        resposta:
          "Travessa Ribeiro dos Santos, 58, Matatu, Salvador. A 100 m do Agromix, 600 m do Shopping Sete Portas, 7 min da Arena Fonte Nova e 5 min do Hospital Santa Izabel.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Quadra coberta, área fitness interna e externa, espaço relax, churrasqueira, salão de festas com coworking, sport bar, espaço teen, espaço oficina, playground kids e baby, brinquedoteca, espaço pet, carro compartilhado e sugestão de minimercado.",
      },
      {
        pergunta: "Qual é a previsão de entrega?",
        resposta:
          "A previsão de conclusão é agosto de 2027. O Vila Laura Prime possui o Selo Casa Azul+ Caixa, reconhecimento por práticas sustentáveis e eficiência de recursos.",
      },
    ],
  },

  // ─── Vivenda Real – Porto Seco Pirajá ────────────────────────────────────
  {
    slug: "vivenda-real-porto-seco",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Porto Seco Pirajá",
    estado: "BA",
    nome: "Vivenda Real",
    construtora: "Tenda",
    status: "em-obras",
    entrega: "Junho de 2027",
    faixaMCMV: "Faixa 2",
    rendaFamiliarMax: 4400,
    area: "36 m²",
    parcelaMin: 1200, // confirmar com Ane
    valorMin: 240000,
    quartos: [2],
    descricao:
      "O Vivenda Real é a oportunidade da Tenda em Porto Seco Pirajá para sair do aluguel com parcelas menores do que você paga hoje. A partir de R$ 240.000 pelo MCMV, com FGTS, subsídio do governo, ITBI grátis e taxas sem tarifas bancárias. Entrega prevista para junho de 2027.\n\nSão 571 unidades de 2 quartos (36 m²) com e sem varanda, a 900 m do metrô Campinas de Pirajá e da Caixa Econômica Federal. Condomínio fechado com portão duplo de segurança, piscinas, quadra gramada, churrasqueira gourmet, academia, pet play e mais de 10 áreas de convivência.",
    diferenciais: [
      "A partir de R$ 240.000 com MCMV",
      "ITBI grátis + sem tarifas bancárias",
      "Renda a partir de R$ 3.300",
      "Entrega prevista: junho/2027",
      "900 m do metrô Campinas de Pirajá",
      "Portão duplo de segurança",
      "Condomínio fechado + portaria 24h",
      "Churrasqueira gourmet + piscinas",
    ],
    fotos: [
      "/images/banner-vivenda-real-porto-seco.jpg",
      "/images/vivenda-real-porto-seco-2quartos.jpg",
      "/images/vivenda-real-porto-seco-varanda.jpg",
      "/images/vivenda-real-porto-seco-sala.jpg",
      "/images/vivenda-real-porto-seco-quarto.jpg",
      "/images/vivenda-real-porto-seco-quarto-2.jpg",
      "/images/vivenda-real-porto-seco-cozinha.jpg",
      "/images/vivenda-real-porto-seco-banheiro.jpg",
      "/images/vivenda-real-porto-seco-piscina.jpg",
      "/images/vivenda-real-porto-seco-churrasqueira.jpg",
      "/images/vivenda-real-porto-seco-salao-festas.jpg",
      "/images/vivenda-real-porto-seco-quadra.jpg",
      "/images/vivenda-real-porto-seco-play.jpg",
      "/images/vivenda-real-porto-seco-play-2.jpg",
      "/images/vivenda-real-porto-seco-pet.jpg",
      "/images/vivenda-real-porto-seco-entrada.jpg",
      "/images/vivenda-real-porto-seco-implantacao.jpg",
      "/images/vivenda-real-porto-seco-localizacao.jpg",
    ],
    ogImage: "/images/banner-vivenda-real-porto-seco.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Vivenda Real (Tenda) em Porto Seco Pirajá no site. Quero simular minha condição pelo Minha Casa Minha Vida. Entrega em junho de 2027.",
    mapsUrl:
      "https://www.google.com/maps/search/Vivenda+Real+Tenda+Porto+Seco+Piraja+Salvador+BA",
    faq: [
      {
        pergunta: "Qual o valor e como funciona o financiamento?",
        resposta:
          "A partir de R$ 240.000 pelo MCMV, com renda a partir de R$ 3.300. Você pode usar FGTS, acessar subsídio do governo, parcelamento facilitado, ITBI grátis e sem tarifas bancárias.",
      },
      {
        pergunta: "Quais são as características do apartamento?",
        resposta:
          "Apartamentos de 2 quartos com cerca de 36 m², com e sem varanda. Cozinha e área de serviço entregues com piso cerâmico, banheiro com box revestido, unidades térreo reversíveis para PCD.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscinas adulto e infantil, quadra gramada, salão de festas com coworking, churrasqueira gourmet, playground kids e baby, play pet, área fitness, bicicletário, espaço delivery e carro compartilhado.",
      },
      {
        pergunta: "Qual é a previsão de entrega?",
        resposta:
          "A entrega está prevista para junho de 2027. São 571 unidades em 3 blocos (térreo + 15 pavimentos), no bairro Porto Seco Pirajá, com acesso rápido ao metrô e à nova rodoviária.",
      },
    ],
  },

  // ─── Golf Riviera – Jardim Cajazeiras ───────────────────────────────────
  {
    slug: "golf-riviera-pau-da-lima",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Jardim Cajazeiras",
    estado: "BA",
    nome: "Golf Riviera",
    construtora: "MRV",
    status: "lancamento",
    faixaMCMV: "Faixa 3",
    rendaFamiliarMax: 8000,
    area: "37 a 41 m²",
    parcelaMin: 1500, // confirmar com Ane
    valorMin: 252990,
    quartos: [2],
    descricao:
      "Conquiste seu primeiro apartamento com as condições do Minha Casa Minha Vida no Golf Riviera, da MRV. A partir de R$ 252.990, com FGTS na entrada, subsídio do governo e parcelas que cabem no orçamento — em Jardim Cajazeiras, com fácil acesso à BR-324 e próximo ao metrô.\n\nSão 576 unidades em 4 torres, com apartamentos de 2 quartos (37 a 41 m²), opções com varanda e garden, e lazer completo para toda a família. Piscinas, churrasqueira, playground, miniquadra, pet place e muito mais — tudo para aproveitar sem sair de casa.",
    diferenciais: [
      "A partir de R$ 252.990 com MCMV",
      "FGTS na entrada + subsídio do governo",
      "Financiamento em até 420 meses",
      "Piscina adulto e infantil + miniquadra",
      "Pet place, playground e bicicletário",
      "576 unidades em 4 torres",
      "Fácil acesso à BR-324 e Av. Gal Costa",
      "Próximo às estações de metrô Campinas e Pirajá",
    ],
    fotos: [
      "/images/banner-golf-riviera-pau-da-lima.jpg",
      "/images/golf-riviera-pau-da-lima-foto-1.jpg",
      "/images/golf-riviera-pau-da-lima-foto-2.jpg",
      "/images/golf-riviera-pau-da-lima-piscina.jpg",
      "/images/golf-riviera-pau-da-lima-sala.jpg",
      "/images/golf-riviera-pau-da-lima-quarto.jpg",
      "/images/golf-riviera-pau-da-lima-2quartos.jpg",
      "/images/golf-riviera-pau-da-lima-2quartos-2.jpg",
      "/images/golf-riviera-pau-da-lima-varanda.jpg",
      "/images/golf-riviera-pau-da-lima-garden.jpg",
      "/images/golf-riviera-pau-da-lima-churrasqueira.jpg",
      "/images/golf-riviera-pau-da-lima-salao-festas.jpg",
      "/images/golf-riviera-pau-da-lima-play.jpg",
      "/images/golf-riviera-pau-da-lima-quadra.jpg",
      "/images/golf-riviera-pau-da-lima-implantacao.jpg",
      "/images/golf-riviera-pau-da-lima-planta.jpg",
      "/images/golf-riviera-pau-da-lima-localizacao.jpg",
      "/images/golf-riviera-pau-da-lima-vista.jpg",
    ],
    ogImage: "/images/banner-golf-riviera-pau-da-lima.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Golf Riviera (MRV) no site e quero simular o financiamento pelo Minha Casa Minha Vida. Apartamento de 2 quartos em Jardim Cajazeiras.",
    mapsUrl:
      "https://www.google.com/maps/search/Golf+Riviera+MRV+Jardim+Cajazeiras+Salvador+BA",
    faq: [
      {
        pergunta: "Qual o valor do Golf Riviera e como funciona o financiamento?",
        resposta:
          "Os apartamentos do Golf Riviera estão a partir de R$ 252.990. Com o Minha Casa Minha Vida, você pode usar o FGTS na entrada, acessar subsídio do governo (conforme renda) e financiar em até 420 meses com juros reduzidos.",
      },
      {
        pergunta: "Quais são os tipos de apartamento?",
        resposta:
          "Apartamentos de 2 quartos com área entre 37,74 m² e 41,12 m². Há opções com varanda, unidades garden (com área privativa de até 30 m²) e plantas adaptadas para PCD.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscina adulto e infantil, salão de festas, área gourmet, churrasqueiras, miniquadra, playground, playbaby, pet place, bicicletário e praças temáticas.",
      },
      {
        pergunta: "Onde fica o Golf Riviera?",
        resposta:
          "Na Avenida Aliomar Baleeiro, em Jardim Cajazeiras, Salvador. Com fácil acesso à BR-324, Av. Gal Costa e Av. 29 de Março, e próximo às estações de metrô de Campinas e Pirajá.",
      },
    ],
  },

  // ─── Parque dos Condes – Mussurunga / Cidade Sete Sóis ──────────────────
  {
    slug: "parque-dos-condes",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Mussurunga",
    estado: "BA",
    nome: "Parque dos Condes",
    construtora: "MRV",
    status: "lancamento",
    faixaMCMV: "Faixa 3",
    rendaFamiliarMax: 8000,
    area: "41 m²",
    parcelaMin: 1500, // confirmar com Ane
    valorMin: 254990,
    quartos: [2],
    descricao:
      "O Parque dos Condes faz parte da Cidade Sete Sóis Paralela — a maior Smartcidade planejada da MRV em Salvador. Apartamentos de 2 quartos a partir de R$ 254.990 com MCMV, ao lado do Alphaville II, com acesso direto à Av. Paralela, ao aeroporto e ao metrô.\n\nUm bairro completo com ciclovias, áreas verdes, comércio a até 15 minutos a pé, lazer de condomínio e tecnologia integrada — como medição individual de água e estrutura para energia renovável. Mais do que um apartamento, é uma nova forma de viver Salvador.",
    diferenciais: [
      "Cidade Sete Sóis — Smartcidade planejada",
      "A partir de R$ 254.990 com MCMV",
      "Subsídio de até R$ 55.000 + FGTS",
      "Ao lado do Alphaville II, 1 min da Av. Paralela",
      "Lazer completo com piscinas e fitness",
      "Ciclovias, áreas verdes e praças no bairro",
      "Estrutura para energia renovável e Wi-Fi nas áreas comuns",
      "Próximo ao aeroporto e metrô",
    ],
    fotos: [
      "/images/banner-parque-dos-condes.jpg",
      "/images/parque-dos-condes-ap.jpg",
      "/images/parque-dos-condes-ap-2.jpg",
      "/images/parque-dos-condes-ap-3.jpg",
      "/images/parque-dos-condes-piscina.jpg",
      "/images/parque-dos-condes-lazer.jpg",
      "/images/parque-dos-condes-gourmet.jpg",
      "/images/parque-dos-condes-salao-festas.jpg",
      "/images/parque-dos-condes-brinquedoteca.jpg",
      "/images/parque-dos-condes-garden.jpg",
      "/images/parque-dos-condes-2quartos-garden.jpg",
      "/images/parque-dos-condes-2quartos-2.jpg",
      "/images/parque-dos-condes-guarita.jpg",
      "/images/parque-dos-condes-implantacao.jpg",
      "/images/parque-dos-condes-implantacao-2.jpg",
      "/images/parque-dos-condes-planta.jpg",
    ],
    ogImage: "/images/banner-parque-dos-condes.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Parque dos Condes (MRV) na Cidade Sete Sóis Paralela e quero saber mais sobre os apartamentos e o financiamento pelo MCMV.",
    mapsUrl:
      "https://www.google.com/maps/search/Parque+dos+Condes+MRV+Mussurunga+Salvador+BA",
    faq: [
      {
        pergunta: "O que é a Cidade Sete Sóis Paralela?",
        resposta:
          "É uma Smartcidade planejada da MRV — um bairro completo com calçadas adaptadas, ciclovias, praças, áreas verdes, comércio e serviços integrados. O Parque dos Condes é um dos empreendimentos residenciais dentro desse bairro.",
      },
      {
        pergunta: "Qual o valor e condições de compra?",
        resposta:
          "Apartamentos a partir de R$ 254.990, com financiamento pelo Minha Casa Minha Vida: use FGTS na entrada, acesse subsídio de até R$ 55.000 (conforme renda) e financie em até 420 meses com juros reduzidos.",
      },
      {
        pergunta: "Quais são as tipologias?",
        resposta:
          "Apartamentos de 2 quartos com 41,40 m², opções com área privativa externa (garden) e 1 ou 2 vagas de garagem. Plantas adaptadas para PCD e entregues com todo o piso instalado.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscinas adulto e infantil, espaço gourmet com churrasqueira, salão de festas, espaço kids, playground, área fitness ao ar livre e áreas de convivência integradas — tudo dentro de condomínio fechado e planejado.",
      },
    ],
  },

  // ─── Reserva da Mata – Sussuarana ────────────────────────────────────────
  {
    slug: "reserva-da-mata-sussuarana",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Sussuarana",
    estado: "BA",
    nome: "Reserva da Mata",
    construtora: "MRV",
    status: "lancamento",
    faixaMCMV: "Faixa 2",
    rendaFamiliarMax: 4400,
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2],
    descricao:
      "O Reserva da Mata é o condomínio fechado da MRV em Sussuarana, com apartamentos de 2 quartos, lazer completo e condições facilitadas pelo Minha Casa Minha Vida. Ideal para famílias que querem sair do aluguel com segurança, planejamento e estrutura.\n\nCom subsídio de até R$ 55.000, FGTS na entrada e financiamento em até 420 meses, o Reserva da Mata coloca o imóvel próprio ao alcance. Localizado próximo ao Centro Administrativo da Bahia, escolas e comércio, com acesso facilitado pelas Avenidas Cardeal Avelar Brandão Villela e Ulysses Guimarães.",
    diferenciais: [
      "MCMV: subsídio de até R$ 55.000",
      "FGTS na entrada + financiamento 420 meses",
      "Condomínio fechado com 2 elevadores por torre",
      "Lazer completo com piscinas e playground",
      "Pet place, espaço gourmet e bicicletário",
      "Próximo ao Centro Administrativo da Bahia",
      "5 anos de garantia MRV",
      "Previsão de pomar no condomínio",
    ],
    fotos: [
      "/images/banner-reserva-da-mata-sussuarana.jpg",
      "/images/reserva-da-mata-sussuarana-2quartos.jpg",
      "/images/reserva-da-mata-sussuarana-2quartos-2.jpg",
      "/images/reserva-da-mata-sussuarana-1quarto.jpg",
      "/images/reserva-da-mata-sussuarana-garden.jpg",
      "/images/reserva-da-mata-sussuarana-garden-2.jpg",
      "/images/reserva-da-mata-sussuarana-piscina.jpg",
      "/images/reserva-da-mata-sussuarana-churrasqueira.jpg",
      "/images/reserva-da-mata-sussuarana-cozinha.jpg",
      "/images/reserva-da-mata-sussuarana-quarto.jpg",
      "/images/reserva-da-mata-sussuarana-quarto-2.jpg",
      "/images/reserva-da-mata-sussuarana-play.jpg",
      "/images/reserva-da-mata-sussuarana-guarita.jpg",
      "/images/reserva-da-mata-sussuarana-implantacao.jpg",
      "/images/reserva-da-mata-sussuarana-localizacao.jpg",
    ],
    ogImage: "/images/banner-reserva-da-mata-sussuarana.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Reserva da Mata (MRV) em Sussuarana no site e quero simular o financiamento pelo Minha Casa Minha Vida.",
    mapsUrl:
      "https://www.google.com/maps/search/Reserva+da+Mata+MRV+Sussuarana+Salvador+BA",
    faq: [
      {
        pergunta: "Como funciona o financiamento pelo MCMV?",
        resposta:
          "Com renda de até R$ 4.400 mensais, você pode acessar subsídio de até R$ 55.000, usar o FGTS na entrada e financiar em até 420 meses com juros reduzidos — pagando parcelas que podem se aproximar ou substituir o valor do aluguel.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscina adulto e infantil, playground, espaço kids, salão de festas, copa, espaço gourmet, pet place, bicicletário e previsão de pomar. Tudo dentro de condomínio fechado com guarita.",
      },
      {
        pergunta: "Qual é a infraestrutura do condomínio?",
        resposta:
          "Cada torre conta com 2 elevadores. O condomínio tem guarita, administração, previsão de apoio para PCD, estação de tratamento de esgoto e estrutura de gás.",
      },
      {
        pergunta: "Onde fica o Reserva da Mata?",
        resposta:
          "Em Sussuarana, Salvador, com fácil acesso pelas Avenidas Cardeal Avelar Brandão Villela e Ulysses Guimarães. Próximo ao Centro Administrativo da Bahia, escolas e comércio local.",
      },
    ],
  },

  // ─── Solar dos Cajueiros – Abrantes, Camaçari ───────────────────────────
  {
    slug: "solar-dos-cajueiros-abrantes",
    cidade: "camacari",
    cidadeLabel: "Camaçari",
    bairro: "Abrantes",
    estado: "BA",
    nome: "Solar dos Cajueiros",
    construtora: "MRV",
    status: "lancamento",
    faixaMCMV: "Faixa 2",
    rendaFamiliarMax: 4400,
    area: "a partir de 38 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2],
    descricao:
      "O Solar dos Cajueiros é o condomínio da MRV em Abrantes, Camaçari, ideal para quem quer sair do aluguel e morar bem em uma região que cresce e se valoriza na Região Metropolitana de Salvador. São 420 apartamentos de 2 quartos com lazer completo, vaga de garagem e condições facilitadas pelo Minha Casa Minha Vida.\n\nCom fácil acesso à Estrada do Coco, próximo a escolas, mercados e comércio local, o Solar dos Cajueiros combina tranquilidade residencial com praticidade urbana — e vagas de garagem com previsão de carregamento elétrico para os que já pensam no futuro.",
    diferenciais: [
      "MCMV: subsídio + FGTS na entrada",
      "420 aptos em 21 blocos, condomínio fechado",
      "Vaga de garagem + previsão para carro elétrico",
      "Lazer completo com piscinas e espaço kids",
      "Pet place e bicicletário",
      "Fácil acesso à Estrada do Coco",
      "Região com forte crescimento e valorização",
      "5 anos de garantia MRV",
    ],
    fotos: [
      "/images/banner-solar-dos-cajueiros-abrantes.jpg",
      "/images/solar-dos-cajueiros-abrantes-2quartos.jpg",
      "/images/solar-dos-cajueiros-abrantes-2quartos-2.jpg",
      "/images/solar-dos-cajueiros-abrantes-garden.jpg",
      "/images/solar-dos-cajueiros-abrantes-garden-2.jpg",
      "/images/solar-dos-cajueiros-abrantes-piscina.jpg",
      "/images/solar-dos-cajueiros-abrantes-sala.jpg",
      "/images/solar-dos-cajueiros-abrantes-quarto.jpg",
      "/images/solar-dos-cajueiros-abrantes-quarto-2.jpg",
      "/images/solar-dos-cajueiros-abrantes-varanda.jpg",
      "/images/solar-dos-cajueiros-abrantes-churrasqueira.jpg",
      "/images/solar-dos-cajueiros-abrantes-salao-festas.jpg",
      "/images/solar-dos-cajueiros-abrantes-kids.jpg",
      "/images/solar-dos-cajueiros-abrantes-entrada.jpg",
      "/images/solar-dos-cajueiros-abrantes-implantacao.jpg",
      "/images/solar-dos-cajueiros-abrantes-localizacao.jpg",
    ],
    ogImage: "/images/banner-solar-dos-cajueiros-abrantes.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Solar dos Cajueiros (MRV) em Abrantes, Camaçari no site e quero saber mais sobre os apartamentos e o financiamento pelo MCMV.",
    mapsUrl:
      "https://www.google.com/maps/search/Solar+dos+Cajueiros+MRV+Abrantes+Camacari+BA",
    faq: [
      {
        pergunta: "O Solar dos Cajueiros é MCMV?",
        resposta:
          "Sim. O empreendimento se enquadra no Programa Minha Casa Minha Vida. Você pode usar FGTS na entrada, acessar subsídio do governo conforme sua renda e financiar com taxas reduzidas em até 420 meses.",
      },
      {
        pergunta: "Quais são os apartamentos disponíveis?",
        resposta:
          "Apartamentos de 2 quartos com área a partir de 38,40 m², opções com varanda e garden, vagas de garagem (incluindo previsão para veículo elétrico) e plantas adaptadas para PCD.",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscinas adulto e infantil, salão de festas, espaço gourmet, espaço kids, playground, pet place, bicicletário e previsão para pomar — estrutura completa para toda a família.",
      },
      {
        pergunta: "Onde fica o Solar dos Cajueiros?",
        resposta:
          "Em Abrantes, Camaçari, com fácil acesso à Estrada do Coco. Próximo a escolas, mercados e farmácias, em um bairro com comércio consolidado e forte potencial de valorização.",
      },
    ],
  },

  // ─── Ocean Side Jaguaribe ───────────────────────────────────────────────
  {
    slug: "ocean-side-jaguaribe",
    cidade: "salvador",
    cidadeLabel: "Salvador",
    bairro: "Jaguaribe",
    estado: "BA",
    nome: "Ocean Side Jaguaribe",
    construtora: "JVX",
    status: "lancamento",
    faixaMCMV: "Faixa 3", // não MCMV — confirmar com Ane
    rendaFamiliarMax: 8000, // confirmar com Ane
    area: "a partir de 63 m²",
    parcelaMin: 0, // confirmar com Ane
    valorMin: 0, // confirmar com Ane
    quartos: [2, 3],
    descricao:
      "Ocean Side Jaguaribe é o seu endereço de frente para o mar em Salvador. São apartamentos de 2 e 3 quartos — com opção de cobertura — numa das praias mais tranquilas e em valorização do litoral baiano, com toda a infraestrutura de lazer entregue mobiliada e equipada.\n\nTorre única com apenas 4 apartamentos por andar, fachada 100% pastilhada, vagas com infraestrutura para carregamento elétrico e Categoria Ouro no IPTU Verde. Uma escolha para quem quer viver à beira-mar com qualidade ou investir em uma região de alta demanda, com acesso rápido à Av. Paralela e aos principais eixos de Salvador.",
    diferenciais: [
      "Em frente à praia de Jaguaribe",
      "Torre única com 4 aptos por andar",
      "Fachada 100% pastilhada",
      "Lazer entregue mobiliado e equipado",
      "Portaria remota 24 horas",
      "Vagas com infraestrutura para carregamento elétrico",
      "Categoria Ouro no IPTU Verde",
      "Coberturas de até 130 m²",
    ],
    fotos: [
      "/images/banner-ocean-side-jaguaribe.jpg",
      "/images/ocean-side-jaguaribe-fachada-2.jpg",
      "/images/ocean-side-jaguaribe-cobertura.jpg",
      "/images/ocean-side-jaguaribe-cobertura-2.jpg",
      "/images/ocean-side-jaguaribe-piscina.jpg",
      "/images/ocean-side-jaguaribe-gourmet.jpg",
      "/images/ocean-side-jaguaribe-gourmet-2.jpg",
      "/images/ocean-side-jaguaribe-sala.jpg",
      "/images/ocean-side-jaguaribe-sala-2.jpg",
      "/images/ocean-side-jaguaribe-quarto.jpg",
      "/images/ocean-side-jaguaribe-quarto-2.jpg",
      "/images/ocean-side-jaguaribe-2quartos.jpg",
      "/images/ocean-side-jaguaribe-3quartos.jpg",
      "/images/ocean-side-jaguaribe-varanda.jpg",
      "/images/ocean-side-jaguaribe-varanda-2.jpg",
      "/images/ocean-side-jaguaribe-cozinha.jpg",
      "/images/ocean-side-jaguaribe-academia.jpg",
      "/images/ocean-side-jaguaribe-churrasqueira.jpg",
      "/images/ocean-side-jaguaribe-churrasqueira-2.jpg",
      "/images/ocean-side-jaguaribe-brinquedoteca.jpg",
      "/images/ocean-side-jaguaribe-play.jpg",
      "/images/ocean-side-jaguaribe-entrada.jpg",
      "/images/ocean-side-jaguaribe-localizacao.jpg",
    ],
    ogImage: "/images/banner-ocean-side-jaguaribe.jpg",
    whatsappMsg:
      "Olá, Ane! Vi o Ocean Side Jaguaribe no site e quero saber mais sobre os apartamentos de frente para o mar em Jaguaribe, Salvador.",
    mapsUrl:
      "https://www.google.com/maps/search/Ocean+Side+Jaguaribe+Salvador+BA",
    faq: [
      {
        pergunta: "O Ocean Side Jaguaribe é um imóvel MCMV?",
        resposta:
          "Não. O Ocean Side Jaguaribe é um empreendimento de médio-alto padrão, sem vínculo com o programa Minha Casa Minha Vida. O financiamento pode ser realizado pelo sistema SBPE (crédito imobiliário tradicional) nos principais bancos.",
      },
      {
        pergunta: "Quais são as tipologias disponíveis?",
        resposta:
          "O empreendimento oferece apartamentos de 2 quartos com suíte (a partir de 63 m²), 3 quartos com suíte (cerca de 79 m²) e coberturas de 2 e 3 quartos com áreas que chegam a mais de 130 m².",
      },
      {
        pergunta: "Qual é a estrutura de lazer?",
        resposta:
          "Piscina com deck, espaço gourmet, salão de festas, churrasqueira, academia equipada, cinema, brinquedoteca, playground, parque infantil e home office — tudo entregue mobiliado e equipado.",
      },
      {
        pergunta: "Quais são os diferenciais construtivos?",
        resposta:
          "Torre única com apenas 4 apartamentos por andar, fachada 100% pastilhada, portaria remota 24 horas, vagas com infraestrutura para carregamento elétrico e Categoria Ouro no IPTU Verde, garantindo desconto no imposto.",
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

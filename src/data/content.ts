export const content = {
  profile: {
    name: 'Diego Maximo',
    role: 'Desenvolvedor Júnior em IA',
    secondaryRole: 'Iniciante em Backend',
    availability: 'Disponível para trabalho',
    location: 'Florianópolis, SC',
    origin: 'Natural de Guarulhos, SP',
    bio: 'Profissional com experiência comercial e de gestão, atualmente direcionando essa experiência para tecnologia, Inteligência Artificial, AI Coding e desenvolvimento de soluções digitais.',
    age: 35,
    family: 'Casado • 1 filha',
    yearsInFloripa: 10,
    photo: '/profile.jpg',
    cv: '/Diego-Maximo-CV.pdf',
    social: {
      linkedin: 'https://www.linkedin.com/in/diego-maximo-69bb7a428/',
      instagram: 'https://www.instagram.com/diegomaximoofc/',
      github: 'https://github.com/',
    },
    contact: {
      whatsapp: 'https://web.whatsapp.com/',
      phone: '48 9644-8423',
      email: 'diegosmaximo@icloud.com',
    },
  },

  stats: [
    { value: 3, suffix: '+', label: 'Projetos' },
    { value: 1, suffix: '+', label: 'Anos de estudos em IA' },
    { value: 3, suffix: '', label: 'Experiências profissionais' },
    { value: 10, suffix: '+', label: 'Anos em Florianópolis' },
  ],

  experience: [
    {
      role: 'Gerente Comercial',
      company: 'Pró Síndico SC — Cobranças Condominiais',
      period: '2023 — 2026',
      description: 'Gestão comercial, relacionamento com clientes, negociação e acompanhamento de resultados.',
    },
    {
      role: 'Empreendedor',
      company: 'Site próprio — Cosméticos profissionais',
      period: '2020 — 2023',
      description: 'Atuação empreendedora com foco em vendas de cosméticos profissionais para salões de beleza e presença digital.',
    },
    {
      role: 'Gerente de Loja',
      company: 'Santos Madeiras',
      period: '2017 — 2019',
      description: 'Gestão de loja, equipe, atendimento, vendas e rotina operacional.',
    },
  ],

  projects: [
  {
    title: 'Meu Portfólio',
    category: 'Portfólio profissional',
    detail: 'Meu site profissional para apresentar minha trajetória, experiência, projetos e formação em tecnologia.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    url: 'https://www.diegomaximo.com.br/',
  },
  {
    title: 'Boho Studio',
    category: 'Sistema para salão de beleza',
    detail: 'Projeto de sistema para salão de beleza, desenvolvido durante meus estudos em ferramentas no-code, inteligência artificial e desenvolvimento de aplicações.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    url: 'https://beleza-central--diegosmaximos.replit.app/studio-belleza/',
  },
  {
    title: 'Projeto Lovable 1',
    category: 'Vibe Coding',
    detail: 'Aplicação desenvolvida utilizando Lovable, explorando criação de soluções digitais com inteligência artificial.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    url: 'https://lovable.dev/projects/2a588833-365f-5771-b3c2-75f2024fe583',
  },
  {
    title: 'Projeto Lovable 2',
    category: 'Vibe Coding',
    detail: 'Projeto desenvolvido com Lovable como parte da minha evolução prática em desenvolvimento de aplicações com inteligência artificial.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    url: 'https://lovable.dev/projects/0268a517-7429-405b-a1f7-328b36deacad',
  },
],

 education: [
  {
    title: 'Formação Vibe Builder',
    institution: 'No Code Startup',
    period: 'Finalizando',
    description: 'Formação voltada à criação de aplicações e soluções digitais utilizando ferramentas no-code, inteligência artificial e desenvolvimento orientado por IA.',
  },
  {
    title: 'Agentic Builder',
    institution: 'No Code Startup',
    period: 'A iniciar',
    description: 'Formação voltada à construção de soluções utilizando agentes e inteligência artificial.',
  },
  {
    title: 'Agentes 2.0',
    institution: 'No Code Startup',
    period: 'A iniciar',
    description: 'Formação voltada ao aprofundamento em agentes de inteligência artificial e automação.',
  },
],

  tools: [
    { name: 'Lovable', category: 'Vibe coding' },
    { name: 'Supabase', category: 'Backend / Banco de dados' },
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'UI / CSS' },
    { name: 'GitHub', category: 'Versionamento' },
    { name: 'IA / AI Coding', category: 'Inteligência Artificial' },
  ],
} as const

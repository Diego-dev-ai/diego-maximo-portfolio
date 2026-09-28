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
      title: 'Projeto em IA',
      category: 'Inteligência Artificial',
      detail: 'Projeto demonstrativo — substitua por seu projeto publicado.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
      url: 'https://github.com/',
    },
    {
      title: 'Automação Digital',
      category: 'AI Coding',
      detail: 'Projeto demonstrativo para apresentar uma solução digital.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      url: 'https://github.com/',
    },
    {
      title: 'Aplicação Web',
      category: 'Vibe Coding',
      detail: 'Placeholder para seu próximo projeto web.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      url: 'https://github.com/',
    },
    {
      title: 'Projeto Adicional',
      category: 'Tecnologia',
      detail: 'Edite este cartão em src/data/content.ts.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      url: 'https://github.com/',
    },
  ],

  education: [
    {
      title: 'Lovable e Supabase',
      institution: 'No Code Startup',
      period: 'Cursando',
      description: 'Estudos voltados à criação de aplicações, prototipação, banco de dados e desenvolvimento no-code/low-code.',
    },
    {
      title: 'Formação complementar em tecnologia',
      institution: 'Em atualização',
      period: '—',
      description: 'Área reservada para adicionar novos cursos e certificações.',
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

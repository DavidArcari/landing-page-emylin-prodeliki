export const SITE_CONFIG = {
  name: 'Dra. Emylin Prodeliki',
  title: 'Biomédica Estéta - Harmonização Facial',
  description: 'Harmonização facial com naturalidade e precisão',
  url: 'https://draemylinprodeliki.com.br',
  phone: '11999999999', // Replace with actual phone number
  email: 'contato@draemylinprodeliki.com.br', // Replace with actual email
  address: {
    street: 'Rua das Flores, 123',
    neighborhood: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567',
  },
  social: {
    instagram: 'https://instagram.com/draemylinprodeliki', // Replace with actual handle
    whatsapp: 'https://wa.me/5511999999999', // Replace with actual number
  },
  calendly: 'https://calendly.com/draemylinprodeliki', // Replace with actual Calendly link
  crbm: '12345', // Replace with actual CRBM number
  experience: '6+',
} as const;

export const SERVICES = [
  {
    id: 'harmonizacao-facial',
    title: 'Harmonização Facial',
    description: 'Procedimentos personalizados para harmonizar e equilibrar os traços faciais com naturalidade.',
    icon: 'Face',
  },
  {
    id: 'preenchimento',
    title: 'Preenchimento',
    description: 'Preenchimentos com ácido hialurônico para suavizar linhas e restaurar volume facial.',
    icon: 'Droplets',
  },
  {
    id: 'toxina-botulinica',
    title: 'Toxina Botulínica',
    description: 'Tratamento seguro para suavizar rugas dinâmicas e prevenir formação de novas linhas.',
    icon: 'Zap',
  },
  {
    id: 'bioestimuladores',
    title: 'Bioestimuladores',
    description: 'Estimulação natural da produção de colágeno para rejuvenescimento duradouro.',
    icon: 'Sparkles',
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Consulta',
    description: 'Avaliação detalhada e planejamento personalizado do seu tratamento.',
    icon: 'Stethoscope',
  },
  {
    step: 2,
    title: 'Tratamento',
    description: 'Execução dos procedimentos com técnicas avançadas e materiais de qualidade.',
    icon: 'Syringe',
  },
  {
    step: 3,
    title: 'Acompanhamento',
    description: 'Seguimento pós-tratamento para garantir resultados satisfatórios.',
    icon: 'Heart',
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Os procedimentos são seguros?',
    answer: 'Sim, todos os procedimentos são realizados com materiais certificados pela ANVISA e seguindo rigorosos protocolos de segurança. A Dra. Emylin possui formação especializada e experiência comprovada.',
  },
  {
    question: 'Quanto tempo duram os resultados?',
    answer: 'A duração dos resultados varia conforme o procedimento e características individuais. Preenchimentos podem durar de 8 a 18 meses, enquanto toxina botulínica de 4 a 6 meses.',
  },
  {
    question: 'Há contraindicações?',
    answer: 'Sim, algumas condições podem contraindicar os procedimentos. Durante a consulta, será feita uma avaliação completa do seu histórico médico para garantir segurança.',
  },
  {
    question: 'Posso fazer mais de um procedimento?',
    answer: 'Sim, muitos pacientes se beneficiam de tratamentos combinados. Durante a consulta, discutiremos as melhores opções para seus objetivos.',
  },
  {
    question: 'Como agendar uma consulta?',
    answer: 'Você pode agendar através do formulário de contato, WhatsApp ou Calendly. Responderemos em até 24 horas para confirmar sua consulta.',
  },
] as const;

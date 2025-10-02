# Landing Page - Dra. Emylin Prodeliki

Landing page profissional para Dra. Emylin Prodeliki, Biomédica Estéta especializada em harmonização facial. Desenvolvida com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS
- **Animações**: Framer Motion
- **Formulários**: React Hook Form + Zod
- **Ícones**: Lucide React
- **Testes**: Jest + React Testing Library
- **Deploy**: Vercel

## 📋 Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm/yarn

## 🛠️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <repository-url>
cd landing-page-emylin-prodeliki
```

### 2. Instale as dependências
```bash
pnpm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
# Email Configuration (escolha uma opção)

# Opção 1: SMTP com Nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app
SMTP_FROM=seu-email@gmail.com
CONTACT_EMAIL=contato@draemylinprodeliki.com.br

# Opção 2: SendGrid
SENDGRID_API_KEY=sua-api-key-sendgrid
SENDGRID_FROM_EMAIL=contato@draemylinprodeliki.com.br
CONTACT_EMAIL=contato@draemylinprodeliki.com.br

# Opção 3: Formspree
FORMSPREE_FORM_ID=seu-form-id-formspree

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://draemylinprodeliki.com.br
NEXT_PUBLIC_PHONE=11999999999
NEXT_PUBLIC_EMAIL=contato@draemylinprodeliki.com.br

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console (opcional)
GOOGLE_VERIFICATION_CODE=seu-codigo-verificacao
```

### 4. Execute o projeto
```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Executar build de produção
pnpm start

# Linting
pnpm lint

# Formatação de código
pnpm format

# Testes
pnpm test
```

## 📁 Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── api/               # API Routes
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página inicial
│   └── sitemap.ts        # Geração de sitemap
├── components/           # Componentes React
│   ├── ui/              # Componentes base (Button, Card, Modal, etc.)
│   ├── layout/          # Componentes de layout (Navbar, Footer)
│   ├── sections/        # Seções da landing page
│   ├── forms/          # Formulários
│   └── seo/            # Componentes de SEO
├── lib/                # Utilitários e configurações
├── public/             # Arquivos estáticos
└── __tests__/          # Testes
```

## 🎨 Personalização

### Cores e Design
As cores estão configuradas no `tailwind.config.js`:
- **Primary Black**: `#0B0B0B`
- **Primary White**: `#FFFFFF`
- **Primary Gray**: `#F5F5F5`
- **Primary Pink**: `#E75480`
- **Primary Muted**: `#6B6B6B`

### Informações da Dra. Emylin
Edite o arquivo `lib/constants.ts` para personalizar:
- Nome, CRBM, experiência
- Endereço e contatos
- Redes sociais
- Links do Calendly

### Imagens
Substitua as imagens placeholder em `public/images/`:
- `hero-dra-emylin.jpg` - Foto principal da Dra. Emylin
- `before-after-*.jpg` - Fotos de antes e depois
- `testimonial-*.jpg` - Fotos dos depoimentos

## 📧 Configuração de Email

### Opção 1: SMTP (Nodemailer)
```bash
# Instale o nodemailer
pnpm add nodemailer
pnpm add -D @types/nodemailer
```

Configure as variáveis SMTP no `.env.local` e descomente o código correspondente em `app/api/contact/route.ts`.

### Opção 2: SendGrid
```bash
# Instale o SendGrid
pnpm add @sendgrid/mail
```

Configure a API key do SendGrid e descomente o código correspondente.

### Opção 3: Formspree
Configure um formulário no Formspree e use o ID fornecido.

## 📱 Integração WhatsApp

O link do WhatsApp é gerado automaticamente usando o número configurado em `SITE_CONFIG.phone`. Para personalizar a mensagem padrão, edite a função `generateWhatsAppLink` em `lib/utils.ts`.

## 📅 Integração Calendly

1. Crie uma conta no Calendly
2. Configure sua disponibilidade
3. Copie o link do seu Calendly
4. Atualize `SITE_CONFIG.calendly` em `lib/constants.ts`

## 🚀 Deploy no Vercel

### 1. Conecte o repositório
- Faça push do código para GitHub
- Conecte o repositório no Vercel

### 2. Configure as variáveis de ambiente
No dashboard do Vercel, adicione todas as variáveis do `.env.local`.

### 3. Deploy
O Vercel fará o deploy automaticamente. O arquivo `vercel.json` já está configurado.

## 🧪 Testes

```bash
# Executar todos os testes
pnpm test

# Executar testes em modo watch
pnpm test:watch

# Executar testes com coverage
pnpm test -- --coverage
```

## 📊 SEO e Performance

### Meta Tags
- Meta tags configuradas em `app/layout.tsx`
- Open Graph e Twitter Cards
- Structured Data (JSON-LD) para MedicalBusiness

### Performance
- Imagens otimizadas com `next/image`
- Fontes carregadas com `next/font`
- Lazy loading implementado
- Bundle otimizado

### Analytics
Para adicionar Google Analytics, configure `NEXT_PUBLIC_GA_ID` e adicione o script no `app/layout.tsx`.

## 🔧 Scripts Disponíveis

```bash
pnpm dev          # Servidor de desenvolvimento
pnpm build        # Build para produção
pnpm start        # Servidor de produção
pnpm lint         # ESLint
pnpm format       # Prettier
pnpm test         # Jest
```

## 📋 Checklist de Lançamento

### Antes do Deploy
- [ ] Substituir todas as imagens placeholder
- [ ] Atualizar informações pessoais em `lib/constants.ts`
- [ ] Configurar serviço de email
- [ ] Testar formulário de contato
- [ ] Verificar links do WhatsApp e Calendly
- [ ] Configurar domínio personalizado

### Conteúdo Legal
- [ ] Criar página de Política de Privacidade (`/privacidade`)
- [ ] Criar página de Termos de Uso (`/termos`)
- [ ] Adicionar disclaimer médico (já incluído no footer)
- [ ] Verificar conformidade com LGPD

### SEO e Marketing
- [ ] Configurar Google Search Console
- [ ] Configurar Google Analytics
- [ ] Criar conta no Google My Business
- [ ] Otimizar imagens para web
- [ ] Testar em diferentes dispositivos

### Certificações e Credenciais
- [ ] Upload de certificações
- [ ] Verificar número do CRBM
- [ ] Adicionar fotos profissionais
- [ ] Preparar depoimentos reais

## 🆘 Solução de Problemas

### Erro de Build
```bash
# Limpe o cache
rm -rf .next
pnpm build
```

### Problemas com Fontes
Verifique se as fontes Google Fonts estão carregando corretamente no `app/layout.tsx`.

### Problemas com Email
- Verifique as credenciais SMTP
- Teste com diferentes provedores de email
- Verifique logs do servidor

## 📞 Suporte

Para dúvidas sobre o projeto, consulte:
- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do React Hook Form](https://react-hook-form.com/)

## 📄 Licença

Este projeto foi desenvolvido especificamente para Dra. Emylin Prodeliki. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para profissionais da área da saúde**

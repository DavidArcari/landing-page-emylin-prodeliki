# 🚀 Instruções de Execução Rápida

## 1. Instalar Dependências
```bash
pnpm install
```

## 2. Configurar Variáveis de Ambiente
```bash
# Copie o arquivo de exemplo
cp env.example .env.local

# Edite o arquivo .env.local com suas configurações
```

## 3. Executar o Projeto
```bash
# Modo desenvolvimento
pnpm dev

# O projeto estará disponível em http://localhost:3000
```

## 4. Personalizar Informações
Edite o arquivo `lib/constants.ts` para personalizar:
- Nome da Dra. Emylin
- Número do CRBM
- Telefone e email
- Endereço
- Links das redes sociais

## 5. Adicionar Imagens
Substitua as imagens placeholder em `public/images/`:
- `hero-dra-emylin.jpg` - Foto principal
- `before-after-*.jpg` - Galeria (6 imagens)
- `testimonial-*.jpg` - Depoimentos (3 imagens)

## 6. Configurar Email (Opcional)
Descomente uma das opções em `app/api/contact/route.ts`:
- SMTP com Nodemailer
- SendGrid
- Formspree

## 7. Deploy
```bash
# Build para produção
pnpm build

# Deploy no Vercel
# Conecte o repositório no Vercel e configure as variáveis de ambiente
```

## ✅ Pronto!
Seu projeto está funcionando localmente e pronto para deploy!

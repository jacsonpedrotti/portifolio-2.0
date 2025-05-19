# Portfólio Pessoal

Este é um portfólio profissional desenvolvido com Next.js, TypeScript, Tailwind CSS e outras tecnologias modernas.

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [EmailJS](https://www.emailjs.com/)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-portfolio.git
cd seu-portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto e adicione suas credenciais do EmailJS:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`.

## 🔧 Configuração

### EmailJS

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Crie um novo serviço de email
3. Crie um template de email
4. Copie as credenciais para o arquivo `.env.local`

### Personalização

1. Substitua as imagens em `public/` com suas próprias imagens
2. Atualize as informações pessoais em:
   - `src/components/Hero.tsx`
   - `src/components/Projects.tsx`
   - `src/components/Contact.tsx`
   - `src/app/layout.tsx`

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

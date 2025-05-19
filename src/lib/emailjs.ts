import { init } from '@emailjs/browser';

// Inicializa o EmailJS com a chave pública
if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
  init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
} else {
  console.warn('EmailJS public key não encontrada nas variáveis de ambiente.');
} 
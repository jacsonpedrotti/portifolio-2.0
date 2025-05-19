'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiMapPin, FiPhone, FiMessageSquare } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-white" id="contato">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">Entre em Contato</h2>
          <p className="text-black max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a
            transformar suas ideias em realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-4 bg-blue-50 rounded-full">
                  <FiMail className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-black">Email</h3>
                <p className="text-black font-medium">pedrottijacson@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-4 bg-blue-50 rounded-full">
                  <FiPhone className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-black">Telefone</h3>
                <p className="text-black font-medium">(48) 99683-2721</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-4 bg-blue-50 rounded-full">
                  <FiMapPin className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-black">Localização</h3>
                <p className="text-black font-medium">São José - Santa Catarina</p>
              </div>
            </div>

            <motion.a
              href="https://wa.me/5548996832721"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#25D366]/90 transition-colors mt-4"
            >
              <FiMessageSquare className="mr-2" />
              Falar no WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Nome é obrigatório' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder-gray-500"
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido',
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder-gray-500"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Assunto é obrigatório' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder-gray-500"
                  placeholder="Assunto da mensagem"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Mensagem é obrigatória' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder-gray-500"
                  placeholder="Digite sua mensagem aqui..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">
                  Mensagem enviada com sucesso! Retornaremos em breve.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">
                  Erro ao enviar mensagem. Por favor, tente novamente.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
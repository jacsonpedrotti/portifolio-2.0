'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiUser } from 'react-icons/fi';

const ResumeIframe = () => {
  return (
    <iframe
      src="https://jacsonpedrotti.github.io/meu-curriculo/"
      className="w-full h-full border-0"
      title="Meu Currículo"
      loading="lazy"
    />
  );
};

const About = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="sobre">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center justify-items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <ResumeIframe />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <div className="text-center">
                <FiUser size={24} className="mx-auto mb-1 sm:size-8" />
                <span className="text-xs sm:text-sm font-medium">Front-end</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6 w-full max-w-xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center md:text-left">
              Desenvolvedor Front-end
            </h3>
            <p className="text-white leading-relaxed text-center md:text-left">
              Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em busca de novos desafios e aprendizados. Minha jornada na área de desenvolvimento é movida pela curiosidade constante e pelo desejo de criar soluções que façam a diferença.
            </p>
            <p className="text-white leading-relaxed text-center md:text-left">
              Mantenho-me constantemente atualizado com as últimas tendências e tecnologias do mercado, participando ativamente da comunidade de desenvolvimento e buscando aprimorar minhas habilidades através de projetos desafiadores e inovadores.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <motion.a
                href="https://jacsonpedrotti.github.io/meu-curriculo/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                <FiExternalLink className="mr-2" />
                Ver Currículo
              </motion.a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-800 mb-2 text-center sm:text-left">Front-end</h4>
                <p className="text-gray-600 text-sm text-center sm:text-left">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-800 mb-2 text-center sm:text-left">Back-end</h4>
                <p className="text-gray-600 text-sm text-center sm:text-left">
                  Node.js, Express, PostgreSQL, MongoDB
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
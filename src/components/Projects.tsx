'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: {
    name: string;
    icon: React.ElementType;
    color: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'ACJ Lajes Treliçadas',
    description: 'Site institucional moderno e responsivo para a ACJ Lajes Treliçadas, empresa especializada em lajes treliçadas. O projeto inclui catálogo de produtos, formulário de contato e integração com WhatsApp para orçamentos.',
    image: '/logo.png',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'React', icon: SiReact, color: 'text-blue-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
    ],
    githubUrl: 'https://github.com/jacsonpedrotti/site-acj-lajes-responsivo',
    liveUrl: 'https://site-acj-lajes-responsivo.vercel.app/'
  },

  {
    title: 'R.V.N Entulhos',
    description: 'Site institucional para a R.V.N Entulhos, especializada em coleta e transporte de resíduos da construção civil. O projeto inclui apresentação dos serviços, galeria de fotos e formulário de contato integrado com WhatsApp.',
    image: '/logo-rvn.png',
    technologies: [
      { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    ],
    githubUrl: 'https://github.com/jacsonpedrotti/rvn-entulhos-responsivo',
    liveUrl: 'https://jacsonpedrotti.github.io/rvn-entulhos-responsivo/'
  },

  {
    title: 'Map, Reduce e Filter',
    description: 'Aplicação desenvolvida para praticar os conceitos de Map, Reduce e Filter.',
    image: '/logo-javascript.png',
    technologies: [
      { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    ],
    githubUrl: 'https://github.com/jacsonpedrotti/map-reduce-filter',
    liveUrl: 'https://jacsonpedrotti.github.io/map-reduce-filter/'
  },
  // Adicione mais projetos aqui
];

const Projects = () => {
  return (
    <section className="py-20 bg-card" id="projetos">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Meus Projetos</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi. Cada um representa um desafio único
            e uma oportunidade de aprendizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden group flex flex-col h-full"
            >
              <div className="flex flex-col h-full">
                <div className="relative h-44 w-full overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-center mb-auto">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-6 mb-6">
                    {project.technologies.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <motion.div
                          key={tech.name}
                          whileHover={{ y: -3 }}
                          className="flex flex-col items-center"
                        >
                          <Icon className={`text-2xl ${tech.color}`} />
                          <span className="text-xs mt-1 text-gray-400">{tech.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center gap-6 mt-auto">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <FiGithub className="mr-2" />
                        Código
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        <FiExternalLink className="mr-2" />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
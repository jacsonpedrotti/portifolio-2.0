'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Skill {
  name: string;
  description: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: 'JavaScript',
    description: 'Linguagem de programação versátil e dinâmica, essencial para desenvolvimento web moderno e interatividade do lado do cliente.',
    icon: '/skills/javascript.svg',
  },
  {
    name: 'React',
    description: 'Biblioteca JavaScript para construção de interfaces de usuário interativas e reativas com componentes reutilizáveis.',
    icon: '/skills/react.svg',
  },
  {
    name: 'Node.js',
    description: 'Ambiente de execução JavaScript do lado do servidor que permite construir aplicações escaláveis e de alta performance.',
    icon: '/skills/nodejs.svg',
  },
  {
    name: 'Tailwind CSS',
    description: 'Framework CSS utilitário que permite criar designs modernos e responsivos com rapidez e flexibilidade.',
    icon: '/skills/tailwind.svg',
  },
  {
    name: 'Next.js',
    description: 'Framework React que oferece renderização híbrida, roteamento automático e otimização de performance.',
    icon: '/skills/nextjs.svg',
  },
  {
    name: 'TypeScript',
    description: 'Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade e manutenibilidade do código.',
    icon: '/skills/typescript.svg',
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-card" id="habilidades">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Minhas Habilidades</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções digitais modernas e eficientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass-effect rounded-xl p-6 relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div 
                className="relative flex items-center mb-4"
                initial={{ x: 0 }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-12 h-12 mr-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </h3>
              </motion.div>
              
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 relative z-10">
                {skill.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="section-content container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Olá, eu sou{' '}
              <span className="gradient-text">
                Jacson Pedrotti
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/jacsonpedrotti"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-all"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/jacsonpedrotti"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-[#0077B5] text-white rounded-full hover:bg-[#0077B5]/80 transition-all"
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:jacsonpedrotti@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition-all"
              >
                <FiMail size={24} />
              </motion.a>
              <motion.a
                href="https://wa.me/5554999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-[#25D366] text-white rounded-full hover:bg-[#25D366]/80 transition-all"
              >
                <FiPhone size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px]"
          >
            <Image
              src="/img-web.png"
              alt="Web Development"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
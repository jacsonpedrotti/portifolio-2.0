'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="fixed w-full z-50 hidden md:block">
      <nav className="glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Jacson Pedrotti
            </motion.div>

            {/* Desktop Menu */}
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
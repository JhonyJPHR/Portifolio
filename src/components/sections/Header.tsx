'use client';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/50 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold">Jhony W. Laurindo</span>
          <nav className="hidden md:flex gap-8">
            <a href="#projects" className="text-neutral-300 hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#skills" className="text-neutral-300 hover:text-cyan-400 transition-colors">Habilidades</a>
            <a href="#contact" className="text-neutral-300 hover:text-cyan-400 transition-colors">Contato</a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
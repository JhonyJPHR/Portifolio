'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

export function HeroSection() {
  return (
    <motion.section variants={itemVariants} className="text-center pt-20">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Jhony Wesley Laurindo
      </motion.h1>
      <motion.p className="mt-4 text-xl text-neutral-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
        Estrategista Digital & Desenvolvedor Python
      </motion.p>
      <motion.p className="mt-4 max-w-2xl mx-auto text-neutral-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
        Transformo dados brutos em insights estratégicos e construo aplicações inteligentes para resolver problemas complexos.
      </motion.p>
      <motion.div className="mt-8 flex justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}>
        <Button variant="outline" size="icon" asChild><a href="https://github.com/JhonyJPHR" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a></Button>
        <Button variant="outline" size="icon" asChild><a href="https://www.linkedin.com/in/jhony-wesley-02b6a8288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button>
        <Button variant="outline" size="icon" asChild><a href="mailto:wesleyjhony933@gmail.com" aria-label="Email"><Mail /></a></Button>
      </motion.div>
    </motion.section>
  );
}
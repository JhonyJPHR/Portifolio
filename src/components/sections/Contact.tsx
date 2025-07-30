'use client';
import { motion, Variants } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

export function ContactSection() {
  return (
    <motion.section id="contact" variants={itemVariants} className="text-center">
      <h2 className="text-3xl font-bold">Vamos Conversar?</h2>
      <p className="mt-4 text-neutral-400">Estou sempre aberto a novas oportunidades e colaborações.</p>
      <Button size="lg" className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
        <a href="mailto:wesleyjhony933@gmail.com">Entre em Contato <Mail className="ml-2 h-4 w-4" /></a>
      </Button>
    </motion.section>
  );
}
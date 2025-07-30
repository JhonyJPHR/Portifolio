'use client';

// STEP 1: Import 'Variants' from framer-motion
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function PortfolioPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // STEP 2: Add the explicit 'Variants' type to the constant
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const skills = ["Python", "Flask", "XGBoost", "Pandas", "SQLAlchemy", "Scikit-learn", "JavaScript", "React", "Next.js", "Tailwind CSS"];

  return (
    <div className="min-h-screen bg-grid-white/[0.05] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-24"
        >
          {/* Seção Hero */}
          <motion.section variants={itemVariants} className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Jhony Wesley Laurindo
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl text-neutral-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Estrategista Digital & Desenvolvedor Python
            </motion.p>
            <motion.p 
              className="mt-4 max-w-2xl mx-auto text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Transformo dados brutos em insights estratégicos e construo aplicações inteligentes para resolver problemas complexos.
            </motion.p>
            <motion.div 
              className="mt-8 flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/JhonyJPHR" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/jhony-wesley-02b6a8288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="wesleyjhony933@gmail.com" aria-label="Email"><Mail /></a>
              </Button>
            </motion.div>
          </motion.section>

          {/* Seção Projeto em Destaque */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-10">Projeto em Destaque</h2>
            <Card className="bg-gray-900/50 border-cyan-500/20 shadow-lg shadow-cyan-500/5">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400">Analisador Estratégico de Roleta</CardTitle>
                <CardDescription>
                  Uma aplicação web com IA para análise estatística e predição de padrões em tempo real.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-neutral-300">
                  Este projeto nasceu da minha fascinação por estatística e machine learning. O sistema processa um histórico de resultados, identifica dezenas de padrões heurísticos e utiliza um modelo XGBoost para prever as próximas jogadas. A arquitetura foi projetada para ser modular, eficiente e escalável, com um back-end em Flask e um front-end reativo.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "Flask", "XGBoost", "Pandas", "SQLAlchemy"].map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-cyan-900/50 text-cyan-300 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild>
                    <a href="https://github.com/JhonyJPHR/AnaliseQuanty" target="_blank" rel="noopener noreferrer">
                      Ver Código no GitHub <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="secondary" disabled>
                    Demo ao Vivo (Em breve)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Seção de Habilidades */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-10">Stack Tecnológico</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-neutral-200"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Seção de Contato */}
          <motion.section variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold">Vamos Conversar?</h2>
            <p className="mt-4 text-neutral-400">Estou sempre aberto a novas oportunidades e colaborações.</p>
            <Button size="lg" className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
              <a href="mailto:seu-email@exemplo.com">
                Entre em Contato <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.section>
        </motion.main>
      </div>
    </div>
  );
}
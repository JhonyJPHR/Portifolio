'use client';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

// Estrutura de dados para os projetos
const projects = [
  {
    title: "Analisador Estratégico de Roleta",
    description: "Uma aplicação web com IA para análise estatística e predição de padrões em tempo real.",
    longDescription: "Este projeto nasceu da minha fascinação por estatística e machine learning. O sistema processa um histórico de resultados, identifica dezenas de padrões heurísticos e utiliza um modelo XGBoost para prever as próximas jogadas. A arquitetura foi projetada para ser modular, eficiente e escalável, com um back-end em Flask e um front-end reativo.",
    tags: ["Python", "Flask", "XGBoost", "Pandas", "SQLAlchemy"],
    githubUrl: "https://github.com/JhonyJPHR/AnaliseQuanty",
    liveUrl: null
  },
  // ADICIONE SEU PRÓXIMO PROJETO AQUI
  // {
  //   title: "Seu Outro Projeto Incrível",
  //   description: "Uma descrição curta e impactante.",
  //   longDescription: "Uma descrição mais detalhada sobre os desafios e soluções.",
  //   tags: ["Node.js", "Prisma", "PostgreSQL"],
  //   githubUrl: "https://github.com/seu-usuario/outro-projeto",
  //   liveUrl: "https://seu-projeto.vercel.app"
  // },
];

export function ProjectsSection() {
  return (
    <motion.section id="projects" variants={itemVariants}>
      <h2 className="text-3xl font-bold text-center mb-10">Projetos</h2>
      <div className="grid gap-8 md:grid-cols-1">
        {projects.map(project => (
          <Card key={project.title} className="bg-gray-900/50 border-cyan-500/20 shadow-lg shadow-cyan-500/5">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-neutral-300">{project.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-cyan-900/50 text-cyan-300 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild><a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Ver Código <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
                <Button variant="secondary" disabled={!project.liveUrl} asChild>
                  {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Demo ao Vivo</a> : <a>Demo (Em breve)</a>}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
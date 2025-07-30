'use client';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const projects = [
  {
    title: "Analisador Estratégico de Roleta",
    description: "Uma aplicação web com IA para análise estatística e predição de padrões em tempo real.",
    longDescription: "Este projeto nasceu da minha fascinação por estatística e machine learning. O sistema processa um histórico de resultados, identifica dezenas de padrões heurísticos e utiliza um modelo XGBoost para prever as próximas jogadas. A arquitetura foi projetada para ser modular, eficiente e escalável, com um back-end em Flask e um front-end reativo.",
    tags: ["Python", "Flask", "XGBoost", "Pandas", "SQLAlchemy"],
    githubUrl: "https://github.com/JhonyJPHR/AnaliseQuanty",
    liveUrl: null, // Mude para o link quando tiver um
    learnings: "O maior desafio foi otimizar as dezenas de análises heurísticas para rodarem em tempo real sem comprometer a performance. Aprendi a importância de caching e consultas eficientes, além de aprofundar meus conhecimentos em feature engineering para o modelo XGBoost."
  },
  // ADICIONE SEU PRÓXIMO PROJETO AQUI
];

export function ProjectsSection() {
  return (
    <motion.section id="projects" variants={itemVariants}>
      <h2 className="text-3xl font-bold text-center mb-10">Projetos</h2>
      <div className="grid gap-8 md:grid-cols-1">
        {projects.map(project => (
          // O 'key' deve estar no elemento mais externo do loop
          <motion.div key={project.title} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Card className="bg-gray-900/50 border-cyan-500/20 shadow-lg shadow-cyan-500/5 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-neutral-300">{project.longDescription}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Desafios e Aprendizados</h4>
                  <p className="text-neutral-400 text-sm">{project.learnings}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-cyan-900/50 text-cyan-300 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild><a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Ver Código <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
                  
                  {/* ESTRUTURA CORRIGIDA DO BOTÃO */}
                  {project.liveUrl ? (
                    <Button variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Demo ao Vivo</a>
                    </Button>
                  ) : (
                    <Button variant="secondary" disabled>
                      Demo (Em breve)
                    </Button>
                  )}

                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
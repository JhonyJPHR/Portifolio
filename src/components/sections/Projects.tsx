'use client';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, BrainCircuit } from 'lucide-react'; // Ícone novo
import Image from 'next/image'; // Importar o componente Image do Next.js
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const projects = [
  // NOSSO NOVO PROJETO ADICIONADO AQUI
  {
    title: "Projeto Cygnus: Mensageiro Interestelar com IA",
    description: "Um framework de IA que simula a criação e decodificação de uma mensagem universal baseada em matemática.",
    longDescription: "Este projeto explora como poderíamos nos comunicar com uma inteligência extraterrestre. Utiliza Redes Adversariais Generativas (WGANs) para 'ensinar' conceitos matemáticos puros (primos, Fibonacci, etc.) a uma IA, que então os traduz em uma mensagem visual. Uma segunda IA (1D-CNN) atua como um 'rádio telescópio', aprendendo a distinguir esses sinais artificiais de ruídos cósmicos, com sua capacidade de generalização testada em um conceito que nunca viu: a constante Pi (π).",
    tags: ["Python", "TensorFlow", "Keras", "WGANs", "CNNs", "Scikit-learn"],
    githubUrl: "https://github.com/JhonyJPHR/Projeto-Cygnus", // Verifique se este é o link correto
    liveUrl: null,
    imageUrl: "/cygnus-card.png", // Imagem do projeto
    learnings: "O principal desafio foi o design e treinamento de múltiplas WGANs para conceitos abstratos e a construção de um classificador de sinais robusto com data augmentation. Aprofundei meus conhecimentos em arquiteturas generativas, processamento de sinais com 1D-CNNs e na criação de um pipeline de ML de ponta a ponta."
  },
  {
    title: "Analisador Estratégico de Roleta",
    description: "Uma aplicação web com IA para análise estatística e predição de padrões em tempo real.",
    longDescription: "Este projeto nasceu da minha fascinação por estatística e machine learning. O sistema processa um histórico de resultados, identifica dezenas de padrões heurísticos e utiliza um modelo XGBoost para prever as próximas jogadas. A arquitetura foi projetada para ser modular, eficiente e escalável, com um back-end em Flask e um front-end reativo.",
    tags: ["Python", "Flask", "XGBoost", "Pandas", "SQLAlchemy"],
    githubUrl: "https://github.com/JhonyJPHR/AnaliseQuanty",
    liveUrl: null, 
    imageUrl: "/GHOST.png", // Adicionei um placeholder de imagem para este também
    learnings: "O maior desafio foi otimizar as dezenas de análises heurísticas para rodarem em tempo real sem comprometer a performance. Aprendi a importância de caching e consultas eficientes, além de aprofundar meus conhecimentos em feature engineering para o modelo XGBoost."
  },
];

export function ProjectsSection() {
  return (
    <motion.section id="projects" variants={itemVariants}>
      <h2 className="text-3xl font-bold text-center mb-10">Projetos de Destaque</h2>
      <div className="grid gap-12 md:grid-cols-1">
        {projects.map(project => (
          <motion.div key={project.title} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Card className="bg-gray-900/50 border-cyan-500/20 shadow-lg shadow-cyan-500/5 h-full flex flex-col">
              <CardHeader>
                {/* Seção da Imagem (NOVO) */}
                {project.imageUrl && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-cyan-500/20">
                    <Image
                      src={project.imageUrl}
                      alt={`Preview do projeto ${project.title}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <CardTitle className="text-2xl text-cyan-400 flex items-center gap-2">
                  <BrainCircuit size={24} /> {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="mb-6 text-neutral-300 flex-grow">{project.longDescription}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Desafios e Aprendizados</h4>
                  <p className="text-neutral-400 text-sm">{project.learnings}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-cyan-900/50 text-cyan-300 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-800/50">
                  <Button asChild><a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Ver Código <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
                  
                  {project.liveUrl ? (
                    <Button variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Demo ao Vivo</a>
                    </Button>
                  ) : (
                    <Button variant="secondary" disabled>
                      Demo (Conceitual)
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

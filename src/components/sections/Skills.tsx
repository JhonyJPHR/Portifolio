'use client';
import { motion, Variants } from 'framer-motion';
// A LINHA QUE FALTAVA: Importando os componentes do Tooltip
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

// Estrutura de dados com nome e descrição para cada habilidade
const skills = [
  { name: "Python", description: "Backend, automação e análise de dados" },
  { name: "Flask", description: "Criação de APIs RESTful e aplicações web" },
  { name: "XGBoost", description: "Modelos de classificação e regressão de alta performance" },
  { name: "Pandas", description: "Manipulação e análise de grandes volumes de dados" },
  { name: "SQLAlchemy", description: "Mapeamento objeto-relacional (ORM) para bancos de dados" },
  { name: "Scikit-learn", description: "Biblioteca essencial para Machine Learning em Python" },
  { name: "JavaScript", description: "Interatividade e dinamismo para o front-end" },
  { name: "React", description: "Construção de interfaces de usuário reativas e componentizadas" },
  { name: "Next.js", description: "Framework React para produção com renderização no servidor e mais" },
  { name: "Tailwind CSS", description: "Framework CSS utility-first para designs rápidos e customizados" },
  { name: "TypeScript", description: "JavaScript com tipagem estática para maior robustez" },
  { name: "Git", description: "Sistema de controle de versão para gerenciamento de código" },
];

export function SkillsSection() {
  return (
    <motion.section id="skills" variants={itemVariants}>
      <h2 className="text-3xl font-bold text-center mb-10">Stack Tecnológico</h2>
      <TooltipProvider>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <motion.div
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-neutral-200 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  {skill.name}
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </motion.section>
  );
}
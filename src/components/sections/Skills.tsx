'use client';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const skills = [
    { name: "Python", description: "Mais de 3 anos de experiência em backend e análise de dados." },
    { name: "XGBoost", description: "Criação e otimização de modelos de classificação e regressão." },
    { name: "Next.js", description: "Construção de aplicações web full-stack reativas e performáticas." },
    { name: "Flask", description: "Desenvolvimento de APIs e servidores web." },
    { name: "Pandas", description: "Manipulação e análise de dados em Python." },
    { name: "SQLAlchemy", description: "Interação com bancos de dados relacionais." },
    { name: "Scikit-learn", description: "Machine learning em Python." },
    { name: "JavaScript", description: "Desenvolvimento de interfaces web interativas." },
    { name: "React", description: "Construção de interfaces de usuário reativas." },
    { name: "Tailwind CSS", description: "Estilização de interfaces web." },
    { name: "TypeScript", description: "Tipagem de código." },
    { name: "Git", description: "Controle de versões." },
    { name: "GitHub", description: "Gerenciamento de repositório." },];


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
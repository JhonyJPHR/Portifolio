'use client';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const skills = ["Python", "Flask", "XGBoost", "Pandas", "SQLAlchemy", "Scikit-learn", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript", "Git"];

export function SkillsSection() {
  return (
    <motion.section id="skills" variants={itemVariants}>
      <h2 className="text-3xl font-bold text-center mb-10">Stack Tecnológico</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-neutral-200"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
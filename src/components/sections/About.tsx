'use client';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

export function AboutSection() {
  return (
    <motion.section id="about" variants={itemVariants}>
      <h2 className="text-3xl font-bold text-center mb-10">Minha Jornada</h2>
      <div className="max-w-3xl mx-auto text-neutral-300 space-y-4 text-lg text-center">
        <p>
          Minha trajetória na tecnologia começou com uma profunda curiosidade sobre como a lógica e os dados poderiam prever e modelar o mundo ao nosso redor. Essa curiosidade me levou ao Python, não apenas como uma linguagem, mas como uma ferramenta para decifrar padrões complexos.
        </p>
        <p>
          Acredito que o melhor software é aquele que parece intuitivo e quase mágico para o usuário final, mas que é sustentado por uma arquitetura robusta e dados bem estruturados. Seja construindo um backend eficiente com Flask ou treinando um modelo de machine learning com XGBoost, meu objetivo é sempre o mesmo: criar soluções inteligentes que gerem valor real.
        </p>
      </div>
    </motion.section>
  );
}
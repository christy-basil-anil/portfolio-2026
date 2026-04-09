import { motion } from 'motion/react';
import { ALL_DESIGNS } from '../data/designs';
import GridMotion from './GridMotion';

export default function Design() {
  // Use first 28 for the grid motion
  const gridItems = ALL_DESIGNS.slice(0, 28).map(d => d.img);

  return (
    <section id="design" className="py-[120px] px-[clamp(1rem,5vw,2rem)] max-w-[1280px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-label">03 — design</div>
        <div className="flex justify-between items-end flex-wrap gap-4">
          <h2 className="section-title">Visual Creations</h2>
        </div>
      </motion.div>

      <div className="mt-12 overflow-hidden rounded-2xl">
        <GridMotion items={gridItems} gradientColor="rgba(59, 130, 246, 0.1)" />
      </div>
    </section>
  );
}

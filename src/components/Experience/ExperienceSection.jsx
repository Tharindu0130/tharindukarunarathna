import { motion } from 'framer-motion';
import Section from '../Layout/Section';
import { experience } from '../../data/portfolioData';

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass p-6 rounded-lg hover:border-accent/50 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-light mb-1">{exp.role}</h3>
          <p className="text-accent font-medium">{exp.company}</p>
        </div>
        <span className="text-slate text-sm bg-primary/50 px-3 py-1 rounded-full border border-accent/20">
          {exp.period}
        </span>
      </div>
      <p className="text-slate leading-relaxed">{exp.description}</p>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <Section id="experience" className="bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="flex items-center mb-12">
          <span className="text-accent font-mono text-lg mr-4">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-light">Work Experience</h2>
          <div className="ml-6 h-px bg-accent/30 flex-grow max-w-xs"></div>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default ExperienceSection;

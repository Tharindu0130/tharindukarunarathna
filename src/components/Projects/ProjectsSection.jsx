import { motion } from 'framer-motion';
import Section from '../Layout/Section';
import { projects } from '../../data/portfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="glass rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 h-full flex flex-col p-6">
        {/* Project Info */}
        <div className="flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-light group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
          </div>

          <p className="text-slate text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, techIdx) => (
              <span
                key={techIdx}
                className="text-xs text-accent font-mono bg-primary/50 px-3 py-1 rounded-full border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <Section id="projects" className="bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="flex items-center mb-12">
          <span className="text-accent font-mono text-lg mr-4">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-light">Projects & Portfolio</h2>
          <div className="ml-6 h-px bg-accent/30 flex-grow max-w-xs"></div>
        </div>

        <p className="text-slate text-lg mb-4 max-w-3xl">
          These are some of my development projects available on my GitHub.
        </p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Tharindu0130"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-primary font-bold rounded-md hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={20} />
            <span>View More Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProjectsSection;

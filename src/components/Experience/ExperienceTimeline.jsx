import { motion } from 'framer-motion';
import Section from '../Layout/Section';
import { education } from '../../data/portfolioData';

const ExperienceTimeline = () => {
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
          <span className="text-accent font-mono text-lg mr-4">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-light">Education & Experience</h2>
          <div className="ml-6 h-px bg-accent/30 flex-grow max-w-xs"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary shadow-lg shadow-accent/50 z-10 mt-2"></div>

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass p-6 rounded-lg hover:border-accent/50 transition-all duration-300">
                    {/* Period Badge */}
                    <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                      <span className="text-accent font-mono text-sm">{item.period}</span>
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl font-bold text-light mb-2">{item.degree}</h3>

                    {/* Institution */}
                    <p className="text-slate font-medium mb-4">{item.institution}</p>

                    {/* Description */}
                    <p className="text-slate text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skills Gained */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="text-xs text-accent font-mono bg-primary/50 px-3 py-1 rounded-full border border-accent/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-light mb-8 text-center">Additional Information</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🚀',
                  title: 'Continuous Learning',
                  description: 'Always exploring new technologies and frameworks to stay updated with industry trends.',
                },
                {
                  icon: '💡',
                  title: 'Problem Solving',
                  description: 'Passionate about solving complex problems through clean, efficient code.',
                },
                {
                  icon: '🤝',
                  title: 'Team Collaboration',
                  description: 'Experience working in agile teams using Git, code reviews, and collaborative tools.',
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="glass p-6 rounded-lg text-center hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h4 className="text-light font-bold mb-3">{card.title}</h4>
                  <p className="text-slate text-sm">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default ExperienceTimeline;

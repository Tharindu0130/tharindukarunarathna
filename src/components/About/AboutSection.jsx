import { motion } from 'framer-motion';
import Section from '../Layout/Section';
import { personalInfo } from '../../data/portfolioData';

const AboutSection = () => {
  return (
    <Section id="about" className="bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="flex items-center mb-12">
          <span className="text-accent font-mono text-lg mr-4">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-light">About Me</h2>
          <div className="ml-6 h-px bg-accent/30 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate text-lg leading-relaxed"
            >
              Hello! I'm <span className="text-accent font-semibold">{personalInfo.name}</span>, a passionate Computer Science undergraduate in my final year, specializing in <span className="text-accent">Web Development</span> and <span className="text-accent">Mobile App Development</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-slate text-lg leading-relaxed"
            >
              My journey in software development started with curiosity about how websites work, and has evolved into building full-stack applications using modern technologies like <span className="text-accent">React</span>, <span className="text-accent">Laravel</span>, and <span className="text-accent">MySQL</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate text-lg leading-relaxed"
            >
              I'm currently seeking <span className="text-accent font-semibold">Software Engineering/Web Development internship opportunities</span> where I can contribute to meaningful projects, learn from experienced professionals, and grow as a developer.
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-4 mt-8"
            >
              {[
                { icon: '🎓', text: 'BSc (Hons) Computer Science' },
                { icon: '💼', text: 'Seeking Internships' },
                { icon: '🌐', text: 'Web Development' },
                { icon: '📱', text: 'Mobile App Development' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 glass p-4 rounded-lg hover:border-accent/50 transition-all duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-light font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Location & Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 mt-8 text-slate"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{personalInfo.email}</span>
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent/10 border-2 border-accent text-accent rounded-lg hover:bg-accent/20 transition-all duration-300 font-medium mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download My CV</span>
            </motion.a>
          </div>

          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-light mb-4">Technologies I Work With</h3>
            <div className="space-y-3">
              {[
                { category: 'Frontend', skills: ['React', 'HTML', 'CSS', 'JavaScript'] },
                { category: 'Backend', skills: ['PHP', 'Laravel'] },
                { category: 'Database', skills: ['MySQL'] },
                { category: 'Tools', skills: ['Git', 'REST APIs'] },
              ].map((group, idx) => (
                <div key={idx} className="glass p-4 rounded-lg">
                  <h4 className="text-accent font-medium mb-2">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="text-sm text-slate bg-primary/50 px-3 py-1 rounded-full border border-accent/20 hover:border-accent/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default AboutSection;

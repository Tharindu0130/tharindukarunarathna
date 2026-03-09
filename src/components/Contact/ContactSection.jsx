import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../Layout/Section';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend service
    // For now, we'll just show a success message
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);

    console.log('Form submitted:', formData);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-primary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent text-light placeholder-slate transition-colors duration-300"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-light mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-primary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent text-light placeholder-slate transition-colors duration-300"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-light mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-primary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent text-light placeholder-slate transition-colors duration-300"
          placeholder="Project Inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full px-4 py-3 bg-primary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent text-light placeholder-slate resize-none transition-colors duration-300"
          placeholder="Tell me about your project or opportunity..."
        ></textarea>
      </div>

      <motion.button
        type="submit"
        className="w-full px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>

      {formStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center"
        >
          Message sent successfully! I'll get back to you soon.
        </motion.div>
      )}
    </motion.form>
  );
};

const ContactSection = () => {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="flex items-center mb-12">
          <span className="text-accent font-mono text-lg mr-4">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-light">Get In Touch</h2>
          <div className="ml-6 h-px bg-accent/30 flex-grow max-w-xs"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-light mb-4">Let's Connect</h3>
              <p className="text-slate text-lg leading-relaxed mb-8">
                I'm currently looking for new opportunities and would love to hear from you. 
                Whether you have a question, a project idea, or just want to say hi, 
                feel free to reach out!
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-accent text-xl" />
                  </div>
                  <div>
                    <p className="text-slate text-sm">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-light hover:text-accent transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate text-sm">Location</p>
                    <p className="text-light">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-slate text-sm mb-4">Connect with me on social media</p>
                <div className="flex space-x-4">
                  <motion.a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center text-slate hover:text-accent hover:border-accent/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center text-slate hover:text-accent hover:border-accent/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </motion.div>
    </Section>
  );
};

export default ContactSection;


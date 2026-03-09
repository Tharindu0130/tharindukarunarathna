import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import HeroSection from './components/Hero/HeroSection'
import AboutSection from './components/About/AboutSection'
import SkillsSection from './components/Skills/SkillsSection'
import ExperienceSection from './components/Experience/ExperienceSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import ExperienceTimeline from './components/Experience/ExperienceTimeline'
import ContactSection from './components/Contact/ContactSection'

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

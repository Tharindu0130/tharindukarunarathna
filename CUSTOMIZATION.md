# 🎨 Customization Guide

Make this portfolio truly yours by following this customization guide.

## 📝 Essential Updates

### 1. Personal Information

**File**: `src/data/portfolioData.js`

Update the `personalInfo` object:
```javascript
export const personalInfo = {
  name: 'Tharindu Damsara Karunarathna',
  title: 'BSc (Hons) Computer Science – Final Year',
  tagline: 'Aspiring Software Engineer | React & Laravel Developer',
  description: 'Your unique description here...',
  email: 'your.real.email@example.com',
  location: 'Your City, Country',
  availability: 'Open to Internship Opportunities',
};
```

### 2. Social Media Links

**File**: `src/data/portfolioData.js`

Update `socialLinks`:
```javascript
export const socialLinks = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  twitter: 'https://twitter.com/yourhandle',
};
```

### 3. Skills

**File**: `src/data/portfolioData.js`

Customize skills with your actual proficiency levels:
```javascript
export const skills = {
  frontend: [
    { name: 'React', level: 85 },  // Update percentage
    { name: 'JavaScript', level: 90 },
    // Add or remove skills
  ],
  backend: [
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
  ],
  // ... more categories
};
```

### 4. Projects

**File**: `src/data/portfolioData.js`

Replace placeholder projects with your actual work:
```javascript
export const projects = [
  {
    id: 1,
    title: 'Your Awesome Project',
    description: 'Detailed description of what you built...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/projects/your-project.jpg',
    github: 'https://github.com/you/your-project',
    live: 'https://your-project.vercel.app',
    featured: true,
  },
  // Add more projects
];
```

### 5. Education

**File**: `src/data/portfolioData.js`

Update your education details:
```javascript
export const education = [
  {
    id: 1,
    degree: 'Your Degree',
    institution: 'Your University',
    period: '2021 - 2025',
    description: 'Your description...',
    skills: ['Skill 1', 'Skill 2'],
  },
];
```

## 🖼️ Adding Images

### Profile Image
1. Add your photo to `public/images/profile.jpg`
2. Update HeroSection to use it:
```jsx
// In HeroSection.jsx, replace the emoji with:
<img 
  src="/images/profile.jpg" 
  alt="Your Name"
  className="w-64 h-64 rounded-full object-cover border-4 border-accent"
/>
```

### Project Images
1. Add screenshots to `public/images/projects/`
2. Name them descriptively: `ecommerce-platform.jpg`
3. Update the project data with correct paths

**Tip**: Use images around 800x600px for optimal performance.

## 🎨 Color Scheme Customization

**File**: `tailwind.config.js`

Change the color palette:
```javascript
colors: {
  primary: '#0a192f',      // Main background
  secondary: '#1d2d3f',    // Cards, sections
  accent: '#64ffda',       // Buttons, highlights
  light: '#ccd6f6',        // Primary text
  slate: '#8892b0',        // Secondary text
}
```

### Popular Color Combinations:

**Blue Theme:**
```javascript
primary: '#0f172a',
secondary: '#1e293b',
accent: '#38bdf8',
```

**Purple Theme:**
```javascript
primary: '#0f0a1e',
secondary: '#1f1530',
accent: '#a78bfa',
```

**Green Theme:**
```javascript
primary: '#061a10',
secondary: '#0f2d1f',
accent: '#34d399',
```

## ✏️ Font Customization

**File**: `src/index.css`

Import different Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', system-ui, sans-serif;
}
```

Popular developer fonts:
- Inter (current)
- Poppins
- Roboto
- Montserrat
- Fira Code (for code)

## 🔧 Component Customization

### Modify Section Order

**File**: `src/App.jsx`

Reorder components to change section sequence:
```jsx
function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />   {/* Moved up */}
        <AboutSection />
        <SkillsSection />
        <ContactSection />    {/* Removed Experience */}
      </main>
      <Footer />
    </div>
  )
}
```

### Remove a Section

Simply comment out or delete the component import and usage:
```jsx
// import ExperienceTimeline from './components/Experience/ExperienceTimeline'

function App() {
  return (
    // ...
    <main>
      <HeroSection />
      <AboutSection />
      {/* <ExperienceTimeline /> */}  {/* Commented out */}
      <ContactSection />
    </main>
    // ...
  )
}
```

## 📱 Responsive Adjustments

### Modify Mobile Breakpoints

**File**: `tailwind.config.js`

Add custom breakpoints:
```javascript
theme: {
  extend: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  }
}
```

## 🚀 Advanced Features

### Add Blog Section

1. Create new component: `src/components/Blog/BlogSection.jsx`
2. Import blog posts from a markdown file or CMS
3. Add to App.jsx

### Add Dark/Light Mode Toggle

1. Add state management for theme
2. Create alternate color palette
3. Add toggle button in Navbar
4. Apply theme class to root element

### Add Testimonials

1. Create TestimonialsSection component
2. Add testimonial data to portfolioData.js
3. Include quotes, names, and photos

### Add Download Resume Button

**File**: `src/components/Hero/HeroSection.jsx`

Add button:
```jsx
<motion.a
  href="/resume.pdf"
  download
  className="px-8 py-4 bg-secondary text-accent border-2 border-accent rounded-md hover:bg-accent/10 transition-all duration-300"
  whileHover={{ scale: 1.05 }}
>
  Download Resume
</motion.a>
```

Place your PDF in `public/resume.pdf`

## 🔌 Integrations

### EmailJS for Contact Form

1. Install: `npm install @emailjs/browser`
2. Sign up at emailjs.com
3. Get your keys
4. Update ContactForm.jsx:

```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  );
  
  setFormStatus('success');
};
```

### Google Analytics

Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add Animations on Scroll

Install Intersection Observer:
```bash
npm install react-intersection-observer
```

Use in components:
```jsx
import { useInView } from 'react-intersection-observer';

const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.1,
});

return (
  <div ref={ref} className={inView ? 'animate-fade-in' : ''}>
    {/* Content */}
  </div>
);
```

## 💡 Pro Tips

1. **Keep it Updated**: Regularly add new projects and skills
2. **Optimize Images**: Use WebP format, compress before uploading
3. **Test Everywhere**: Check on multiple devices and browsers
4. **Accessibility**: Add alt text, ensure keyboard navigation
5. **Performance**: Monitor bundle size, lazy load heavy components
6. **SEO**: Use proper meta tags, descriptive titles
7. **Analytics**: Track visitor behavior to improve UX

## 🐛 Common Issues & Solutions

### Issue: Emoji icons not displaying consistently
**Solution**: Replace with SVG icons from react-icons:
```jsx
import { FaCode, FaMobileAlt } from 'react-icons/fa';

<FaCode size={24} />
```

### Issue: Smooth scroll not working
**Solution**: Ensure `scroll-behavior: smooth` is in index.css

### Issue: Form not submitting
**Solution**: Integrate EmailJS or Formspree for backend-less forms

### Issue: Animations janky on mobile
**Solution**: Reduce animation complexity or disable on mobile:
```jsx
whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
```

## 📚 Resources

- **Unsplash**: Free high-quality images
- **Undraw**: Open-source illustrations
- **IconFinder**: Icons library
- **Coolors**: Color palette generator
- **TinyPNG**: Image compression

---

**Remember**: Your portfolio is a living representation of your skills. Keep it updated, keep it fresh! 🚀

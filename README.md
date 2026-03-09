# 🚀 Professional Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. Designed for software developers seeking internship opportunities.

## ✨ Features

- **Modern Dark Theme**: Professional developer-focused design with glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: Hover effects, scroll animations, and smooth transitions
- **Contact Form**: Integrated contact form with validation
- **Project Showcase**: Display your projects with descriptions and links
- **Skills Section**: Animated skill cards with progress indicators
- **Timeline Layout**: Education/experience displayed in an engaging timeline format

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📁 Project Structure

```
personal-web-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Section.jsx
│   │   ├── Hero/
│   │   │   └── HeroSection.jsx
│   │   ├── About/
│   │   │   └── AboutSection.jsx
│   │   ├── Skills/
│   │   │   ├── SkillsSection.jsx
│   │   │   └── SkillCard.jsx
│   │   ├── Projects/
│   │   │   ├── ProjectsSection.jsx
│   │   │   └── ProjectCard.jsx
│   │   ├── Experience/
│   │   │   └── ExperienceTimeline.jsx
│   │   ├── Contact/
│   │   │   ├── ContactSection.jsx
│   │   │   └── ContactForm.jsx
│   │   └── UI/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── SocialLinks.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd personal-web-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal details (name, email, location)
- Skills and proficiency levels
- Projects and descriptions
- Education information
- Social media links

### Color Scheme

Modify `tailwind.config.js` to change colors:
```javascript
colors: {
  primary: '#0a192f',      // Background color
  secondary: '#1d2d3f',    // Secondary background
  accent: '#64ffda',       // Accent color (cyan/teal)
  light: '#ccd6f6',        // Light text
  slate: '#8892b0',        // Muted text
}
```

### Adding Images

Place your images in:
- Profile image: `public/images/profile.jpg`
- Project images: `public/images/projects/`

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment.

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your hosting provider
3. Configure custom domain if needed

## 📱 Sections Included

1. **Hero Section**: Professional introduction with CTA buttons
2. **About Me**: Personal bio and career highlights
3. **Skills**: Animated skill cards organized by category
4. **Projects**: Project showcase with GitHub and live demo links
5. **Experience/Education**: Timeline-based layout
6. **Contact**: Contact form and social media links

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (optional):
```env
VITE_API_URL=your_api_url_here
```

### SEO Optimization

Update `index.html` with your meta tags:
```html
<meta name="description" content="Your professional description" />
<meta name="keywords" content="your, keywords, here" />
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips for Success

1. **Use High-Quality Images**: Replace emoji placeholders with actual project screenshots
2. **Add Real Content**: Update all placeholder text with your actual experience
3. **Test Responsiveness**: Check how your site looks on different devices
4. **Optimize Performance**: Compress images and minimize bundle size
5. **Add Analytics**: Consider adding Google Analytics or similar tools
6. **Custom Domain**: Purchase a custom domain for a professional touch

## 🎯 Next Steps

- [ ] Add your real project images
- [ ] Update social media links
- [ ] Customize color scheme if desired
- [ ] Add more detailed project descriptions
- [ ] Include testimonials or recommendations
- [ ] Add a blog section (optional)
- [ ] Integrate with a backend for contact form submissions

## 📞 Support

If you have any questions or need help, feel free to reach out!

---

**Built with ❤️ and React + Tailwind CSS**

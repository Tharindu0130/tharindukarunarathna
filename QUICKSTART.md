# ⚡ Quick Start Guide

Welcome to your new professional portfolio! Follow these steps to get up and running in minutes.

## 🎯 Step 1: Install Dependencies (Already Done!)

```bash
npm install
```

✅ **Status**: Completed

---

## 🎨 Step 2: Start Development Server (Already Running!)

```bash
npm run dev
```

✅ **Status**: Running at http://localhost:5173

Click the preview button above to view your portfolio!

---

## ✏️ Step 3: Customize Your Information

### Update Personal Details

Open `src/data/portfolioData.js` and update:

```javascript
export const personalInfo = {
  name: 'Tharindu Damsara Karunarathna',
  email: 'your.email@example.com',  // ← Change this
  location: 'Your City, Country',    // ← Change this
};

export const socialLinks = {
  github: 'https://github.com/yourusername',      // ← Change
  linkedin: 'https://linkedin.com/in/yourprofile', // ← Change
  twitter: 'https://twitter.com/yourhandle',       // ← Change
};
```

### Add Your Projects

In the same file, replace the sample projects with your actual work:

```javascript
export const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'What does it do? What problem does it solve?',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/projects/your-project.jpg',
    github: 'https://github.com/you/your-project',
    live: 'https://your-project.vercel.app',
  },
  // Add more projects...
];
```

### Update Skills

Adjust skill levels to match your proficiency:

```javascript
export const skills = {
  frontend: [
    { name: 'React', level: 80 },  // 0-100
    { name: 'JavaScript', level: 85 },
  ],
  // Add/remove skills as needed
};
```

---

## 🖼️ Step 4: Add Images (Optional but Recommended)

### Profile Photo
1. Add a professional photo to `public/images/profile.jpg`
2. The Hero section will automatically use it (you may need to uncomment the image tag)

### Project Screenshots
1. Take screenshots of your projects
2. Save them in `public/images/projects/`
3. Update the image paths in `portfolioData.js`

**Image Tips:**
- Use JPG or PNG format
- Optimize images before uploading (use TinyPNG.com)
- Recommended size: 800x600px for project images

---

## 🚀 Step 5: Deploy to the Internet

### Option A: Vercel (Easiest - Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts, and your site will be live in seconds!

### Option B: Netlify

```bash
# Build
npm run build

# Deploy (if using Netlify CLI)
netlify deploy --prod --dir=dist
```

### Option C: GitHub Pages

1. Push your code to GitHub
2. Use GitHub Actions or gh-pages package
3. See DEPLOYMENT.md for detailed instructions

---

## 📝 Essential Files to Customize

| File | Purpose | Priority |
|------|---------|----------|
| `src/data/portfolioData.js` | All your personal info | 🔴 High |
| `public/images/` | Your photos | 🔴 High |
| `index.html` | SEO meta tags | 🟡 Medium |
| `tailwind.config.js` | Colors & theme | 🟢 Low |

---

## ✅ Pre-Launch Checklist

Before sharing your portfolio publicly:

- [ ] Updated personal information (name, email, location)
- [ ] Changed all social media links
- [ ] Added real projects with descriptions
- [ ] Updated skills to reflect your abilities
- [ ] Added profile photo (optional)
- [ ] Added project screenshots
- [ ] Tested on mobile device
- [ ] Tested contact form
- [ ] Checked all links work
- [ ] Updated SEO meta tags in index.html
- [ ] Deployed to hosting platform

---

## 🎨 Common Customizations

### Change Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#0a192f',   // Background
  accent: '#64ffda',    // Highlights
  // ... change these hex codes
}
```

### Modify Sections

Edit `src/App.jsx` to reorder, add, or remove sections.

### Add More Content

Simply duplicate existing components or create new ones following the same pattern.

---

## 🆘 Need Help?

### Quick Fixes

**Issue**: Changes not showing?
- **Solution**: Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

**Issue**: Port already in use?
- **Solution**: The app is already running. Stop other processes or use a different port.

**Issue**: Build errors?
- **Solution**: Delete node_modules and run `npm install` again

### Documentation Files

- **README.md** - Complete project documentation
- **DEPLOYMENT.md** - Detailed deployment guides
- **CUSTOMIZATION.md** - Advanced customization tips
- **QUICKSTART.md** - This file!

---

## 🎉 Next Steps

1. **Customize** your content (30-60 minutes)
2. **Add** your images (15-30 minutes)
3. **Deploy** to Vercel (5-10 minutes)
4. **Share** your portfolio link!

---

## 💡 Pro Tips

✨ **First Impressions Matter**: Make sure your hero section is compelling
📱 **Mobile First**: Most recruiters will view on mobile initially
🎯 **Be Specific**: Quantify achievements (e.g., "Improved performance by 40%")
🔄 **Keep Updating**: Add new projects and skills regularly
📊 **Track Analytics**: Add Google Analytics after deployment

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React**: https://react.dev/learn

---

**You're all set! Start customizing and you'll have an impressive portfolio ready in no time! 🚀**

Remember: This is YOUR portfolio. Make it reflect your unique personality and skills!

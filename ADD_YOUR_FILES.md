# 📸 Add Your Profile Picture & CV

## ✅ What's Been Added

I've updated your portfolio to include:

1. **Profile Picture Section** - In the Hero section (right side on desktop)
2. **Download CV Button** - In the Hero section (next to "View Projects" button)
3. **Download CV Button** - In the About section (bottom)

---

## 🖼️ Step 1: Add Your Profile Picture

### Location:
```
public/images/profile.jpg
```

### Requirements:
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 400x400px (square) or similar ratio
- **Quality**: High quality but optimized (under 500KB ideal)
- **Background**: Professional or clean background recommended

### How to Add:
1. Save your photo as `profile.jpg`
2. Place it in: `C:\Users\USER\Desktop\personal web\personal-web-portfolio\public\images\profile.jpg`
3. Refresh your browser - it will appear automatically!

### Tips:
- Use a professional headshot or friendly casual photo
- Make sure your face is clearly visible
- Good lighting is key
- Square crops work best for circular frames

---

## 📄 Step 2: Add Your CV/Resume

### Location:
```
public/resume.pdf
```

### Requirements:
- **Format**: PDF (recommended) or DOCX
- **File Size**: Keep under 2MB for fast loading
- **Name**: Save as `resume.pdf` or `cv.pdf`

### How to Add:
1. Export your CV as a PDF
2. Rename it to `resume.pdf`
3. Place it in: `C:\Users\USER\Desktop\personal web\personal-web-portfolio\public\resume.pdf`
4. Done! Visitors can now download it

### CV Tips:
- Include your contact information at the top
- Highlight relevant projects and skills
- Keep it 1-2 pages maximum
- Use a clean, professional format
- Proofread for typos!

---

## 🎯 Where These Appear on Your Site

### Profile Picture:
- ✅ Hero section (desktop view only - right side)
- Shows in a circular glassmorphism frame
- Animated entrance with decorative spinning circles
- Falls back to emoji if no image is found

### Download CV Button:
- ✅ Hero section (below main CTA buttons)
- ✅ About section (at the bottom)
- Both buttons trigger the PDF download
- Styled with icon and hover effects

---

## 🔧 Testing

After adding your files:

1. **Refresh the page** (Ctrl + R or F5)
2. **Check the profile picture** appears in the hero section
3. **Click "Download CV"** button to test the download works
4. **Test on mobile** to ensure responsive design works

---

## 💡 Pro Tips

### For Profile Pictures:
- **Professional look**: Business casual attire
- **Expression**: Friendly smile
- **Background**: Neutral or blurred background
- **Lighting**: Natural light or soft artificial light
- **Edit tools**: Canva, Photoshop, or remove.bg for backgrounds

### For Your CV:
- **Tailor it**: Customize for software engineering roles
- **Highlight tech stack**: React, Laravel, MySQL prominently
- **Add projects**: Include 2-3 key projects with impact
- **Quantify**: Use numbers where possible (e.g., "Improved performance by 40%")
- **Clean design**: Use a modern, readable template

### File Optimization:
- Compress images with TinyPNG.com
- Optimize PDFs with SmallPDF or ILovePDF
- Keep total file sizes reasonable for fast loading

---

## 🆘 Troubleshooting

### Profile picture not showing?
1. Check file path is correct: `/images/profile.jpg`
2. Verify file extension matches (.jpg vs .jpeg)
3. Clear browser cache (Ctrl + Shift + Delete)
4. Check browser console for errors (F12)

### CV download not working?
1. Ensure file is named exactly `resume.pdf`
2. Check it's in the `public` folder (not `src`)
3. Try clearing browser cache
4. Test in incognito mode

### Image looks stretched or cropped weirdly?
- Use a square image (1:1 ratio)
- Or adjust the CSS in `HeroSection.jsx`
- Recommended: 400x400px or 800x800px

---

## 📁 Final Folder Structure

Your public folder should look like this:

```
public/
├── images/
│   └── profile.jpg          ← YOUR PHOTO HERE
└── resume.pdf               ← YOUR CV HERE
```

---

## ✨ What Happens Next

Once you add these files:

1. **Profile picture** will display with smooth animations
2. **CV download** will be available to all visitors
3. **Recruiters** can easily save your resume
4. **Your site** looks more professional and personal

---

**Ready to add your files? Just drop them in the folders above and refresh!** 🚀

Need help optimizing your files? Let me know, bro!

# Professional Portfolio Website

A modern, responsive portfolio website built with React featuring beautiful animations, professional design, and optimized performance.

## 🌟 Features

- **Modern Design**: Clean, professional UI with gradient accents and glassmorphism effects
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging transitions and hover effects
- **Optimized Performance**: Fast loading times and smooth scrolling
- **Accessible**: Built with accessibility best practices
- **SEO Friendly**: Semantic HTML and meta tags

## 📁 Project Structure

```
src/
├── assets/              # Images and media files
│   ├── port.jpg        # Hero background image
│   ├── pro1.jpg        # Project 1 image
│   ├── pro2.jpg        # Project 2 image
│   └── pro3.jpg        # Project 3 image
├── components/         # Reusable components
│   ├── Navbar.jsx
│   ├── NavbarStyles.css
│   ├── Heroimg.jsx
│   ├── Heroimgstyles.css
│   ├── Heroimg2.jsx
│   ├── Heroimg2styles.css
│   ├── AboutContent.jsx
│   ├── AboutContentStyles.css
│   ├── Skills.jsx
│   ├── Skillsstyles.css
│   ├── Work.jsx
│   ├── Workcard.jsx
│   ├── Workcarddata.jsx
│   ├── Workcardstyles.css
│   ├── Form.jsx
│   ├── FormStyles.css
│   ├── Footer1.jsx
│   └── Footerstyles.css
├── routes/            # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── App.js            # Main app component
├── index.js          # Entry point
└── index.css         # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Copy all files** to your React project's `src` folder

2. **Install required dependencies**:
```bash
npm install react-router-dom react-icons
```

3. **Copy your asset images** to the `src/assets/` folder:
   - port.jpg (your main hero background image)
   - pro1.jpg, pro2.jpg, pro3.jpg (your project images)

4. **Start the development server**:
```bash
npm start
```

5. **Build for production**:
```bash
npm run build
```

## 🎨 Customization

### Updating Personal Information

#### 1. **Navbar Logo** (`components/Navbar.jsx`):
```jsx
<span className="logo-text">YourFirstName</span>
<span className="logo-accent">YourLastName</span>
```

#### 2. **Hero Section** (`components/Heroimg.jsx`):
```jsx
<span className="name-highlight">Your Full Name</span>
const roles = ['Your Role 1', 'Your Role 2', 'Your Role 3'];
```

#### 3. **About Content** (`components/AboutContent.jsx`):
Update the description paragraphs and highlights to match your skills and experience.

#### 4. **Skills** (`components/Skills.jsx`):
Modify the `skillCategories` array with your own skills and proficiency levels.

#### 5. **Projects** (`components/Workcarddata.jsx`):
Update project information:
```jsx
{
  imgsrc: yourImage,
  title: 'Your Project Title',
  text: 'Your project description',
  technologies: ['Tech1', 'Tech2'],
  view: 'live-demo-url',
  source: 'github-url'
}
```

#### 6. **Contact Info** (`components/Footer1.jsx`):
Update your contact details, location, and social media links.

### Color Scheme

To change colors, modify the CSS variables in `index.css`:

```css
:root {
  --primary-color: #667eea;
  --primary-dark: #764ba2;
  --accent-color: #f5576c;
  /* ... more colors */
}
```

### Fonts

The default fonts are Inter and Space Grotesk from Google Fonts. To change:

```css
@import url('your-google-fonts-url');

body {
  font-family: 'YourFont', sans-serif;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: below 768px

## ✨ Key Components

### Navbar
- Sticky navigation with scroll effect
- Mobile-responsive hamburger menu
- Active link highlighting
- Smooth animations

### Hero Section
- Animated gradient background
- Typewriter effect for roles
- Floating particles
- Social media links
- CTA buttons

### About Section
- Feature highlights
- Statistics display
- Animated cards
- Responsive grid layout

### Skills
- Categorized skills
- Animated progress bars
- Icon integration
- Responsive design

### Projects
- Card-based layout
- Hover overlay effects
- Technology tags
- External links

### Contact Form
- Validation
- Loading states
- Responsive design
- Accessible inputs

### Footer
- Multi-column layout
- Social links
- Quick navigation
- Scroll-to-top button

## 🔧 Technologies Used

- React 18
- React Router DOM
- React Icons
- CSS3 with custom properties
- Flexbox & Grid
- CSS Animations

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance Tips

1. Optimize images before adding them to `assets/`
2. Use WebP format for better compression
3. Enable lazy loading for images
4. Minimize CSS and JavaScript for production

## 🙏 Credits

Designed and developed by Nithish Bhavan Varanasi

## 📄 License

This project is open source and available for personal use.

---

**Need help?** Feel free to reach out at varanasinithish@gmail.com

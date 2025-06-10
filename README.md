# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS to showcase frontend development skills and projects.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Animated skill bars, hover effects, and transitions
- **Contact Form**: Functional contact form for potential clients/employers

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal introduction and social links
- **Skills**: Interactive skill bars showing proficiency levels
- **Projects**: Showcase of featured projects with technology tags
- **Contact**: Contact form and social media links

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icons

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Customization

To customize this portfolio for your use:

1. **Personal Information**: Update the name, description, and contact details in `src/App.jsx`
2. **Profile Image**: Replace the Unsplash image URL in the About section with your photo
3. **Skills**: Modify the skills array to reflect your expertise
4. **Projects**: Update the projects array with your actual projects
5. **Social Links**: Add your actual GitHub, LinkedIn, and email links
6. **Colors**: Customize the color scheme in `tailwind.config.js`

## Project Structure

```
├── public/
│   └── portfolio-icon.svg
├── src/
│   ├── App.jsx          # Main component with all sections
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles and Tailwind imports
├── package.json
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.js       # Vite configuration
```

## Deployment

This portfolio can be easily deployed to:
- **Vercel**: `npm run build` then drag and drop the `dist` folder
- **Netlify**: Connect your GitHub repo for automatic deployments
- **GitHub Pages**: Use GitHub Actions to build and deploy

## License

Feel free to use this template for your own portfolio. Attribution is appreciated but not required.
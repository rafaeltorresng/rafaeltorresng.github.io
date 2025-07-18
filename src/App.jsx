import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Globe,
  Brain,
  Server,
  Phone
} from 'lucide-react'
import TiltedCard from './components/TiltedCard'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const services = [
    {
      title: 'Data Science',
      description: 'Analyzing complex datasets to extract meaningful insights and patterns using statistical methods and visualization techniques.',
      icon: Database
    },
    {
      title: 'Machine Learning',
      description: 'Implementing computer vision and data analysis solutions that solve complex real-world challenges using AI algorithms.',
      icon: Brain
    },
    {
      title: 'Software Engineering',
      description: 'Building robust, scalable applications using modern development practices, clean code principles, and efficient architectures.',
      icon: Code
    }
  ]

  const experience = [
    {
      title: 'AI Engineering Intern',
      company: 'MGI Tech (in partnership with LASER and LAGID/UFPB)',
      period: '04/2025 - Present',
      description: 'Implementing AI models into company systems, collaborating with engineering teams to integrate machine learning solutions into production environments. Contributing to system architecture, data engineering, and model deployment across multiple domains.',
      current: true
    },
    {
      title: 'Volunteer Researcher',
      company: 'TRIL Lab',
      period: '12/2024 - 04/2025',
      description: 'Assisted in AI research projects including data collection, preprocessing, and exploratory analysis. Implemented multi-agent systems for sales pipelines and contact automation. Learned machine learning techniques and mastered CrewAI frameworks.',
      current: false
    },
    {
      title: 'Treinee',
      company: 'Trilha Program',
      period: '08/2024 - 12/2024',
      description: 'Developed foundational skills in artificial intelligence, programming logic, and Python libraries (pandas, NumPy). Learned essential software development tools and best practices for mentorship. Led the TARG project for stock-forecasting website development.',
      current: false
    },
    {
      title: 'Workshop Facilitator',
      company: 'LAGID/UFPB GPT API Workshop',
      period: '2024',
      description: 'Conducted comprehensive workshop on GPT API usage, covering authentication, endpoint calls, and prompting strategies. Implemented a Database-Integrated Chatbot project demonstrating practical applications of AI integration.',
      current: false
    }
  ]

  const projects = [
    {
      title: 'TARG: Time-series Analysis Report Generator',
      description: 'An advanced stock forecasting platform that predicts stock prices for the next 5 days using sophisticated LSTM time series models. Integrates real-time financial news through web scraping with sentiment analysis to enhance prediction accuracy and provide comprehensive market insights.',
      image: 'targ-presentation.png',
      tech: ['Python', 'LSTM', 'NLP', 'Web Scraping', 'Time Series', 'Sentiment Analysis'],
      github: 'https://github.com/Vitoreism/TARG'
    },
    {
      title: 'Blonded AI',
      description: 'An intelligent music recommendation system built using Spotify audio embeddings and PCA. Features a sophisticated feature extraction pipeline, similarity computation algorithms, and a personalized recommendation engine with Spotify integration.',
      image: 'blonded-ai.png',
      tech: ['Python', 'Spotify API', 'PCA', 'Audio Processing', 'Machine Learning', 'Embeddings'],
      github: 'https://github.com/rafaeltorresng/Blonded-AI'
    },
    {
      title: 'Brazilian Championship Simulator',
      description: 'A Java and Spring Boot web application designed to simulate the Brazilian Football Championship (Brasileirão). It features dynamic data loading for teams and players, automated match scheduling, realistic game simulation incorporating team strength and randomness, and real-time updates of league standings and top scorer statistics, all accessible via an interactive web interface.',
      image: 'brasileirao-adr.png',
      tech: ['Java', 'Spring Boot', 'OOP', 'Web Application', 'Database', 'Sports Simulation'],
      github: 'https://github.com/arturpereira12/poo_brasileirao'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
            {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.h1 
              className="text-xl font-semibold text-white"
              whileHover={{ scale: 1.02 }}
            >
              RT.
            </motion.h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4 md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-gray-900 border-t border-gray-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-6 py-4 space-y-2">
              {['About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Rafael Torres
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mt-4 leading-relaxed">
                  Computer Science student passionate about exploring the realms of and Data Science, Software Development and AI Engineering.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Rafael_Torres_Resume.pdf"
                  className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium shadow-lg text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download CV
                </motion.a>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}eu.png`}
                  alt="Rafael Torres - Computer Science Student"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-white"
                  style={{
                    objectFit: 'cover',
                    objectPosition: '90% center',
                    transform: 'scale(1.2)'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-4xl md:text-6xl shadow-2xl border-4 border-white" 
                  style={{display: 'none'}}
                >
                  RT
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-brand-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-300 leading-relaxed text-lg">
              <p>
              I am a Computer Science undergraduate at the Federal University of Paraíba (UFPB), passionate about solving real-world problems through intelligent systems, with a focus on Data Science and Software Development; currently working as an AI Research Intern at MGI Tech (in collaboration with LASER and LAGID labs), developing machine learning applications for demand forecasting and sentiment analysis, while also leading personal projects like TARG (a stock prediction and news sentiment analysis platform) and Blonded AI (a music recommendation system using Spotify embeddings and PCA), reflecting my dedication to combining technical knowledge with creativity and usability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interests
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 border border-gray-800 group"
              >
                <service.icon className="text-brand-300 mb-4" size={28} />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Academic & Professional Experience
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title} at {exp.company}
                    </h3>
                                         {exp.current && (
                       <span className="inline-block px-3 py-1 bg-brand-900 text-brand-200 text-sm rounded-full mt-2 font-medium">
                         Current
                       </span>
                     )}
                  </div>
                  <span className="text-gray-400 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-700 flex flex-col h-full"
              >
                <TiltedCard
                  imageSrc={`${import.meta.env.BASE_URL}${project.image}`}
                  altText={project.title}
                  containerHeight="192px"
                  containerWidth="100%"
                  imageHeight="192px"
                  imageWidth="100%"
                  scaleOnHover={1.05}
                  rotateAmplitude={10}
                  showMobileWarning={false}
                  showTooltip={false}
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-brand-300 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow tech enthusiasts
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">Let's Connect</h3>
                
                <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Mail className="text-brand-300" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Email</p>
                      <a 
                        href="mailto:rafaeltorresng@gmail.com" 
                        className="text-gray-400 hover:text-brand-300 transition-colors text-sm"
                      >
                        rafaeltorresng@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Phone className="text-brand-300" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Phone</p>
                      <p className="text-gray-400 text-sm">+55 81 98251-2792</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Linkedin className="text-brand-300" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/rafaeltng" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-300 transition-colors text-sm"
                      >
                        linkedin.com/in/rafaeltng
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Github className="text-brand-300" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">GitHub</p>
                      <a 
                        href="https://github.com/rafaeltorresng" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-300 transition-colors text-sm"
                      >
                        github.com/rafaeltorresng
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-medium text-white mb-4">Languages</h4>
                <div className="flex justify-center space-x-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🇧🇷</span>
                    <span className="text-gray-300">Portuguese (Native)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-gray-300">English (Fluent)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🇪🇸</span>
                    <span className="text-gray-300">Spanish (Basic)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open to Opportunities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Open to Opportunities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm always eager to dive into new projects—whether it's exploring machine learning, building full-stack solutions, or developing cutting-edge AI applications. I'm especially drawn to opportunities where technology drives meaningful, real-world change.
            </p>
          </motion.div>
        </div>
      </section>


    </div>
  )
}

export default App
import { motion } from 'framer-motion'
import Home from '../pages/Home'
import Experiences from '../pages/Experiences'
import Projects from '../pages/Projects'
import Books from '../pages/Books'
import Contact from '../pages/Contact'
import CollapsibleSection from './CollapsibleSection'

const MobileLayout = ({ darkMode, accentColor }) => {
    return (
        <div className="px-6 sm:px-12 pt-10 pb-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Intro Section - Always Visible */}
                <section className="mb-6">
                    <Home darkMode={darkMode} accentColor={accentColor} isMobileSection={true} />
                </section>

                {/* Collapsible Sections */}
                <div className="space-y-0">
                    <CollapsibleSection title="Experiences" darkMode={darkMode} accentColor={accentColor}>
                        <Experiences darkMode={darkMode} accentColor={accentColor} isMobileSection={true} />
                    </CollapsibleSection>

                    <CollapsibleSection title="Projects" darkMode={darkMode} accentColor={accentColor}>
                        <Projects darkMode={darkMode} accentColor={accentColor} isMobileSection={true} />
                    </CollapsibleSection>

                    <CollapsibleSection title="Refs" darkMode={darkMode} accentColor={accentColor}>
                        <Books darkMode={darkMode} accentColor={accentColor} isMobileSection={true} />
                    </CollapsibleSection>

                    <CollapsibleSection title="Contact" darkMode={darkMode} accentColor={accentColor}>
                        <Contact darkMode={darkMode} accentColor={accentColor} isMobileSection={true} />
                    </CollapsibleSection>
                    
                    {/* Bottom separator line */}
                    <div className="border-t transition-colors duration-500" style={{ borderColor: `${accentColor}33` }} />
                </div>
            </motion.div>
        </div>
    )
}

export default MobileLayout

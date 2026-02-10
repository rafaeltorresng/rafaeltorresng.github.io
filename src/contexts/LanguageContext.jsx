import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en')
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language')
        if (savedLanguage) {
            setLanguage(savedLanguage)
        }
    }, [])

    const toggleLanguage = () => {
        setIsTransitioning(true)
        const newLanguage = language === 'en' ? 'pt' : 'en'
        
        // Small delay before changing language for smoother transition
        setTimeout(() => {
            setLanguage(newLanguage)
            localStorage.setItem('language', newLanguage)
            
            // Keep transitioning state for animations to complete
            setTimeout(() => {
                setIsTransitioning(false)
            }, 2000) // Increased to match slower typing speed
        }, 100)
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, isTransitioning }}>
            {children}
        </LanguageContext.Provider>
    )
}

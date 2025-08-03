import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './App.css'
// import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    let animationFrame: number
    
    const updateMousePosition = (e: MouseEvent) => {
      // Cancel previous frame if it hasn't run yet
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
      
      // Use requestAnimationFrame to throttle updates
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.matches('button, a, [role="button"], .elegant-button')) {
        setIsHovering(true)
      }
    }
    
    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.matches('button, a, [role="button"], .elegant-button')) {
        setIsHovering(false)
      }
    }

    // Track mouse position with throttling
    window.addEventListener('mousemove', updateMousePosition, { passive: true })
    
    // Use event delegation for hover states
    document.addEventListener('mouseover', handleMouseEnter, { passive: true })
    document.addEventListener('mouseout', handleMouseLeave, { passive: true })

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  // Handle loading completion
  const handleLoadComplete = () => {
    setIsLoading(false)
    setShowContent(true)
    
    // Animate content entrance
    setTimeout(() => {
      gsap.fromTo('.main-content', 
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out'
        }
      )
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadComplete={handleLoadComplete} />
      )}

      {/* Main Content - Only show after loading */}
      {showContent && (
        <div className="main-content">
          {/* Custom Cursor */}
          <div 
            className={`custom-cursor ${isHovering ? 'hover' : ''}`}
            style={{
              left: `${mousePosition.x - 10}px`,
              top: `${mousePosition.y - 10}px`,
            }}
          />
          
          {/* <Navbar /> */}
          <HeroSection />
          <AboutSection />
        </div>
      )}
    </div>
  )
}

export default App

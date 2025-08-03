import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

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

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${mousePosition.x - 10}px`,
          top: `${mousePosition.y - 10}px`,
        }}
      />
      
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  )
}

export default App

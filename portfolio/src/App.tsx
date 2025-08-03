import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
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

    // Track mouse position
    window.addEventListener('mousemove', updateMousePosition)
    
    // Use event delegation for hover states
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
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
      <HeroSection />
    </div>
  )
}

export default App

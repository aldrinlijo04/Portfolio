import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const RunwayAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Billboard text messages - reduced for performance
    const messages = [
      "AI SYSTEMS ARCHITECT",
      "FULL STACK DEVELOPER", 
      "RUST & GO SPECIALIST",
      "MACHINE LEARNING ENGINEER"
    ]

    // Create text elements
    const textElements: HTMLDivElement[] = []
    
    messages.forEach((message, index) => {
      const element = document.createElement('div')
      element.textContent = message
      element.className = 'billboard-text font-aldrich'
      element.style.cssText = `
        position: absolute;
        font-size: clamp(36px, 5vw, 64px);
        font-weight: 700;
        color: rgba(255, 255, 255, 0.8);
        white-space: nowrap;
        top: ${50 + index * 120}px;
        left: -100vw;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
        letter-spacing: 3px;
      `
      container.appendChild(element)
      textElements.push(element)
    })

    // Animate text elements from left to right with performance optimizations
    const animateBillboard = () => {
      textElements.forEach((element, index) => {
        gsap.fromTo(element, 
          {
            x: 0,
            opacity: 0
          },
          {
            x: window.innerWidth + element.offsetWidth,
            opacity: 1,
            duration: 12,
            delay: index * 2,
            repeat: -1,
            ease: "none",
            force3D: true, // Enable hardware acceleration
            will: "transform", // Optimize for transform changes
            onStart: () => {
              gsap.set(element, { opacity: 1 })
            },
            onRepeat: () => {
              // Reset position for seamless loop
              gsap.set(element, { x: 0, opacity: 0 })
            }
          }
        )
      })
    }

    // Start animation
    animateBillboard()

    return () => {
      // Cleanup
      textElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element)
        }
      })
      gsap.killTweensOf(textElements)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ 
        zIndex: 5,
        opacity: 0.7
      }}
    />
  )
}

export default RunwayAnimation

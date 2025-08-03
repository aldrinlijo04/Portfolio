import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const progressFillRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement[]>([])
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const logo = logoRef.current
    const progressBar = progressBarRef.current
    const progressFill = progressFillRef.current

    if (!container || !logo || !progressBar || !progressFill) return

    // Set initial states
    gsap.set(logo, { opacity: 0, y: 50 })
    gsap.set(progressBar, { opacity: 0 })
    gsap.set(progressFill, { width: '0%' })

    // Preload critical resources
    const preloadResources = async () => {
      const resources = [
        // Add any critical images, fonts, or other resources here
        '/images/aldrin/aldrin_profile.JPG',
        '/images/aldrin/aldrin_profile2.jpeg'
      ]

      let loadedCount = 0
      const totalResources = resources.length + 3 // +3 for simulated loading steps

      // Simulate loading steps
      const loadingSteps = [
        { name: 'Initializing Components', delay: 500 },
        { name: 'Loading WebGL Shaders', delay: 800 },
        { name: 'Preparing Animations', delay: 600 }
      ]

      // Load resources
      const loadPromises = resources.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image()
          img.onload = () => {
            loadedCount++
            setLoadingProgress((loadedCount / totalResources) * 100)
            resolve()
          }
          img.onerror = () => {
            loadedCount++
            setLoadingProgress((loadedCount / totalResources) * 100)
            resolve()
          }
          img.src = src
        })
      })

      // Add simulated loading steps
      const stepPromises = loadingSteps.map((step, index) => {
        return new Promise<void>((resolve) => {
          setTimeout(() => {
            loadedCount++
            setLoadingProgress((loadedCount / totalResources) * 100)
            resolve()
          }, step.delay * (index + 1))
        })
      })

      await Promise.all([...loadPromises, ...stepPromises])
      
      // Ensure minimum loading time for smooth experience
      const minLoadTime = 3000
      const elapsed = Date.now() - startTime
      if (elapsed < minLoadTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadTime - elapsed))
      }
    }

    const startTime = Date.now()

    // Create loading sequence
    const tl = gsap.timeline()

    // Logo entrance
    tl.to(logo, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })

    // Progress bar entrance
    .to(progressBar, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")

    // Start resource loading
    preloadResources().then(() => {
      // Exit animation
      gsap.to(container, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power3.in",
        onComplete: onLoadingComplete
      })
    })

    // Animate loading dots
    dotsRef.current.forEach((dot, index) => {
      if (dot) {
        gsap.to(dot, {
          scale: 1.2,
          opacity: 0.3,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          delay: index * 0.2,
          ease: "power2.inOut"
        })
      }
    })

    return () => {
      tl.kill()
    }
  }, [onLoadingComplete])

  // Update progress bar based on loading progress
  useEffect(() => {
    if (progressFillRef.current) {
      gsap.to(progressFillRef.current, {
        width: `${loadingProgress}%`,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }, [loadingProgress])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
    >
      {/* Logo/Brand */}
      <div 
        ref={logoRef}
        className="font-aldrich text-white text-center mb-12"
      >
        <h1 className="text-6xl font-bold mb-4 tracking-wider">
          ALDRIN LIJO
        </h1>
        <p className="text-xl text-gray-300 tracking-[0.2em]">
          PORTFOLIO
        </p>
      </div>

      {/* Progress Bar */}
      <div 
        ref={progressBarRef}
        className="w-80 h-1 bg-gray-800 rounded-full overflow-hidden mb-8"
      >
        <div 
          ref={progressFillRef}
          className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full"
        />
      </div>

      {/* Loading Dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) dotsRef.current[index] = el
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        ))}
      </div>

      {/* Loading Text */}
      <p className="font-aldrich text-gray-400 text-sm mt-8 tracking-widest">
        INITIALIZING EXPERIENCE
      </p>
    </div>
  )
}

export default LoadingScreen

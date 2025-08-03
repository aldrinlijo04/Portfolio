import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { usePreloader } from '../hooks/usePreloader'

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const { isLoaded, loadingProgress } = usePreloader()
  const [loadingText, setLoadingText] = useState('INITIALIZING...')

  useEffect(() => {
    // Update loading text based on progress
    if (loadingProgress < 20) {
      setLoadingText('INITIALIZING...')
    } else if (loadingProgress < 40) {
      setLoadingText('LOADING ASSETS...')
    } else if (loadingProgress < 60) {
      setLoadingText('CONFIGURING WEBGL...')
    } else if (loadingProgress < 80) {
      setLoadingText('OPTIMIZING ANIMATIONS...')
    } else if (loadingProgress < 100) {
      setLoadingText('PREPARING EXPERIENCE...')
    } else {
      setLoadingText('READY TO LAUNCH')
    }
  }, [loadingProgress])

  useEffect(() => {
    if (isLoaded) {
      // Wait a moment before triggering exit animation
      setTimeout(() => {
        // Exit animation
        gsap.to('.loading-screen', {
          opacity: 0,
          scale: 1.1,
          duration: 1,
          ease: 'power2.inOut',
          onComplete: onLoadComplete
        })
      }, 500)
    }
  }, [isLoaded, onLoadComplete])

  return (
    <div className="loading-screen fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="neural-pattern"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="font-aldrich text-6xl md:text-8xl font-bold text-white tracking-wider">
            ALDRIN LIJO
          </h1>
          <p className="font-aldrich text-lg md:text-xl text-gray-400 mt-4 tracking-widest">
            SYSTEMS ARCHITECT
          </p>
        </div>

        {/* Loading Progress */}
        <div className="w-80 md:w-96 mx-auto">
          {/* Progress Bar */}
          <div className="relative mb-6">
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            {/* Progress Glow Effect */}
            <div 
              className="absolute top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 blur-sm transition-all duration-500 ease-out rounded-full"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>

          {/* Loading Text */}
          <div className="text-center">
            <p className="font-aldrich text-sm md:text-base text-gray-300 tracking-widest">
              {loadingText}
            </p>
            <p className="font-aldrich text-xs text-gray-500 mt-2">
              {loadingProgress}%
            </p>
          </div>
        </div>

        {/* Loading Animation Dots */}
        <div className="flex justify-center space-x-1 mt-8">
          <div className="loading-dot w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="loading-dot w-2 h-2 bg-blue-500 rounded-full loading-dot-delay-1"></div>
          <div className="loading-dot w-2 h-2 bg-blue-500 rounded-full loading-dot-delay-2"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

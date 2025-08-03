import { useState, useEffect } from 'react'

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setScreenWidth(width)
      setIsMobile(width <= 768)
    }

    // Initial check
    checkScreenSize()

    // Add event listener
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  return { isMobile, screenWidth }
}

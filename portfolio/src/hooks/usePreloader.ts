import { useEffect, useState } from 'react'

export const usePreloader = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const preloadAssets = async () => {
      const assets = [
        // Preload any images
        '/images/aldrin/aldrin_profile.JPG',
        '/images/aldrin/aldrin_profile2.jpeg',
        // Add any other critical assets here
      ]

      let loadedCount = 0
      const totalAssets = assets.length

      // Simulate minimum loading time for better UX
      const minimumLoadTime = 2000 // 2 seconds

      const startTime = Date.now()

      const loadAsset = (url: string): Promise<void> => {
        return new Promise((resolve) => {
          if (url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
            // Image asset
            const img = new Image()
            img.onload = () => {
              loadedCount++
              setLoadingProgress((loadedCount / totalAssets) * 80) // Reserve 20% for final steps
              resolve()
            }
            img.onerror = () => {
              loadedCount++
              setLoadingProgress((loadedCount / totalAssets) * 80)
              resolve() // Continue even if image fails to load
            }
            img.src = url
          } else {
            // Other assets (simulate loading)
            setTimeout(() => {
              loadedCount++
              setLoadingProgress((loadedCount / totalAssets) * 80)
              resolve()
            }, 100)
          }
        })
      }

      try {
        // Load all assets
        await Promise.all(assets.map(loadAsset))
        
        // Ensure minimum loading time has passed
        const elapsedTime = Date.now() - startTime
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime)
        
        if (remainingTime > 0) {
          // Gradually increase progress to 100% during remaining time
          const progressInterval = setInterval(() => {
            setLoadingProgress(prev => {
              const newProgress = prev + (100 - prev) * 0.1
              if (newProgress >= 99) {
                clearInterval(progressInterval)
                setLoadingProgress(100)
                setTimeout(() => setIsLoaded(true), 200)
                return 100
              }
              return newProgress
            })
          }, remainingTime / 20) // Update 20 times during remaining time
        } else {
          setLoadingProgress(100)
          setTimeout(() => setIsLoaded(true), 200)
        }
      } catch (error) {
        console.warn('Some assets failed to load:', error)
        // Continue anyway
        setLoadingProgress(100)
        setTimeout(() => setIsLoaded(true), 200)
      }
    }

    preloadAssets()
  }, [])

  return { isLoaded, loadingProgress }
}

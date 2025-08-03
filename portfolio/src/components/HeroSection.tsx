import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const aldrinRef = useRef<HTMLHeadingElement>(null)
  const lRef = useRef<HTMLHeadingElement>(null)
  const iRef = useRef<HTMLHeadingElement>(null)
  const joRef = useRef<HTMLHeadingElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([])
  
  // Navigation items array
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide everything
      gsap.set([aldrinRef.current, lRef.current, iRef.current, joRef.current, navRef.current], { 
        opacity: 0, 
        y: 50 
      })
      gsap.set(imageRef.current, { 
        y: "-100%"
      })
      gsap.set(overlayRef.current, { 
        opacity: 0 
      })
      
      // Hide navigation items initially (for left-to-right slide)
      navItemsRef.current.forEach((item) => {
        if (item) {
          gsap.set(item, {
            opacity: 0,
            x: -32
          })
        }
      })

      // Master timeline for entrance animation
      const tl = gsap.timeline()

      // Curtain fall effect first
      tl.to(imageRef.current, {
        y: "0%",
        duration: 1.5,
        ease: "power3.out"
      })
      
      // Overlay fade in
      .to(overlayRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, "-=1")
      
      // Text animations with stagger - including I
      .to([aldrinRef.current, lRef.current, iRef.current, navRef.current, joRef.current], {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out"
      }, "-=0.5")

    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Navigation hover animations - for "O" with left-to-right slide
  const handleNavHover = () => {
    // Subtle scale for the "O" letter
    gsap.to(navRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    })
    
    // Show ALL nav items sliding from left to right
    navItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.killTweensOf(item) // Kill any existing animations
        gsap.to(item, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power2.out"
        })
      }
    })
  }

  const handleNavLeave = () => {
    // Reset "O" letter scale
    gsap.to(navRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    })
    
    // Hide ALL nav items sliding back to left
    navItemsRef.current.forEach((item) => {
      if (item) {
        gsap.killTweensOf(item) // Kill any existing animations
        gsap.to(item, {
          x: -32,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        })
      }
    })
  }

  return (
    <main ref={containerRef} className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background Image - Curtain Effect with rounded bottom corners, cut above text */}
      <div className="absolute top-0 left-0 right-0 h-[calc(100vh-300px)]">
        <div className="w-full h-full rounded-b-[3rem] overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
          <div ref={imageRef} className="w-full h-full rounded-b-[3rem] overflow-hidden">
            <img 
              src="/images/aldrin/aldrin_profile2.jpeg" 
              alt="Aldrin Lijo - Full Stack Developer Portfolio" 
              className="w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* Bottom Text Section - Well structured with rounded top corners, positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2rem] h-[250px] flex items-center">
        <div className="flex items-end justify-between px-12 py-6 w-full mt-12">
          
          {/* ALDRIN Text - Left Side */}
          <div className="flex-1 flex justify-end pr-16">
            <h1 
              ref={aldrinRef}
              className="uniform-text font-black text-black tracking-tight leading-none font-aldrich"
            >
              ALDRIN
            </h1>
          </div>
          
          {/* LIJO Text with Navigation on "O" - Right Side */}
          <div className="flex-1 flex justify-start pl-16">
            <div className="flex items-end">
              
              {/* L */}
              <h1 
                ref={lRef}
                className="uniform-text font-black text-black tracking-tight leading-none font-aldrich"
              >
                L
              </h1>
              
              {/* I */}
              <h1 
                ref={iRef}
                className="uniform-text font-black text-black tracking-tight leading-none font-aldrich"
              >
                I
              </h1>
              
              {/* J */}
              <h1 
                ref={joRef}
                className="uniform-text font-black text-black tracking-tight leading-none font-aldrich"
              >
                J
              </h1>
              
              {/* O with Navigation - Special styling with line through center */}
              <div className="relative">
                <div 
                  ref={navRef}
                  onMouseEnter={handleNavHover}
                  onMouseLeave={handleNavLeave}
                  className="relative cursor-pointer group"
                >
                  <h1 className="uniform-text font-black text-black tracking-tight leading-none font-aldrich hover:text-gray-700 transition-colors">
                    O
                  </h1>
                  
                  {/* Horizontal line through the center of O */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-3 bg-black rounded-full group-hover:bg-gray-700 transition-colors"></div>
                </div>
                
                {/* Navigation Items - Slide from left to right but arranged vertically */}
                {/* Extended hover area to prevent premature closing */}
                <div 
                  className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4 z-50"
                  onMouseEnter={handleNavHover}
                  onMouseLeave={handleNavLeave}
                >
                  {/* Invisible bridge to maintain hover */}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-8 h-32 bg-transparent"></div>
                  
                  <div className="flex flex-col space-y-1">
                    {navItems.map((item, index) => (
                      <a
                        key={item}
                        href="#"
                        ref={(el) => {
                          if (el) navItemsRef.current[index] = el
                        }}
                        className="opacity-0 translate-x-[-32px]"
                      >
                        <span className="block bg-black text-white font-aldrich text-xs px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap text-center">
                          {item}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}

export default HeroSection

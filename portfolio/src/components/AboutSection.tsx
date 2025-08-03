import { useRef, useState } from 'react'
import DarkVeil from './DarkVeil/DarkVeil'

const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null)
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState("I'm passionate about AI, systems, and networking. I've built a Rust-based ML OS, Go microservices with gRPC, and use tools like LangGraph and Gemini for smart automation. I thrive on building, optimizing, and learning fast.")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to your chatbot backend API
    console.log('Query submitted:', query)
    // For now, just show a placeholder response
    setResponse("This is where your chatbot response will appear. Connect your backend API here!")
  }

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      
      {/* DarkVeil Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <DarkVeil 
          hueShift={0}
          noiseIntensity={0.1}
          scanlineIntensity={0.05}
          speed={0.3}
          scanlineFrequency={0.5}
          warpAmount={0.2}
          resolutionScale={1.0}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div 
          style={{ 
            position: 'relative',
            width: '100vw',
            maxWidth: '1920px',
            height: '800px',
            margin: '0 auto',
            padding: '0 5vw'
          }}
        >
          
          {/* Left Side - Query Input - Increased Sizing */}
          <div style={{ 
            position: 'absolute',
            top: '0px',
            left: '5%',
            width: 'clamp(600px, 40vw, 800px)',
            height: 'clamp(100px, 8vw, 140px)'
          }}>
            <form onSubmit={handleSubmit} style={{ width: '100%', height: '100%' }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Get to know me?"
                  className="font-aldrich border-none outline-none transition-colors duration-300 placeholder-white placeholder-opacity-75"
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    padding: 'clamp(18px, 2vw, 25px) clamp(25px, 2.5vw, 35px)',
                    fontSize: 'clamp(28px, 3vw, 38px)',
                    fontWeight: '500',
                    backgroundColor: '#6b7280',
                    color: 'white',
                    borderRadius: 'clamp(70px, 6vw, 100px)',
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box'
                  }}
                />
                <button
                  type="submit"
                  className="transition-colors duration-300"
                  style={{
                    position: 'absolute',
                    right: 'clamp(10px, 1.2vw, 15px)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#374151',
                    color: 'white',
                    padding: 'clamp(10px, 1.2vw, 15px) clamp(18px, 2vw, 25px)',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 'clamp(16px, 1.5vw, 22px)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#777b82ff'}
                >
                  →
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Response Container - Increased Sizing */}
          <div style={{ 
            position: 'absolute',
            top: '0px',
            right: '5%',
            width: 'clamp(650px, 45vw, 850px)',
            height: 'clamp(700px, 50vw, 900px)'
          }}>
            <div 
              className="font-aldrich crystal-glass"
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                padding: 'clamp(50px, 5vw, 70px)',
                borderRadius: '26px',
                boxSizing: 'border-box',
                
                // Crystal glass base - adjusted for dark background
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(15px) saturate(120%)',
                
                // Lighter borders for glass depth
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  -12px -12px 24px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.4),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.15),
                  inset 1px 0 0 rgba(255, 255, 255, 0.15),
                  inset -1px 0 0 rgba(255, 255, 255, 0.1),
                  0 20px 40px rgba(0, 0, 0, 0.1)
                `,
                
                // Glass refraction effect for dark background
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.12) 0%,
                    rgba(255, 255, 255, 0.04) 25%,
                    rgba(255, 255, 255, 0.02) 50%,
                    rgba(255, 255, 255, 0.06) 75%,
                    rgba(255, 255, 255, 0.1) 100%
                  )
                `
              }}
            >
              {/* Glass highlight overlay */}
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                right: '10px',
                height: '40%',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%)',
                borderRadius: '20px 20px 0 0',
                pointerEvents: 'none'
              }} />
              
              {/* Water ripple effect overlay */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                height: '30px',
                background: `
                  radial-gradient(ellipse at center, 
                    rgba(255, 255, 255, 0.05) 0%,
                    rgba(255, 255, 255, 0.02) 30%,
                    transparent 70%
                  )
                `,
                borderRadius: '50%',
                filter: 'blur(2px)',
                opacity: 0.4,
                pointerEvents: 'none'
              }} />
              
              <p 
                className="crystal-glass-content"
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  lineHeight: '1.8',
                  color: '#ffffff',
                  margin: '0',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                {response}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection

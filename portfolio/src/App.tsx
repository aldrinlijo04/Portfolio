import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HorizontalNavigation from './components/HorizontalNavigation'
import HeroSection from './components/HeroSection'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <HorizontalNavigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <HeroSection />
    </div>
  )
}

export default App

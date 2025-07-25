interface NavbarProps {
  isNavOpen: boolean
  setIsNavOpen: (isOpen: boolean) => void
}

const Navbar = ({ isNavOpen, setIsNavOpen }: NavbarProps) => {
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="w-full px-6">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleNav}
            className="relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-gray-700 transform transition-all duration-300 origin-center ${isNavOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gray-700 transition-all duration-300 ${isNavOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-full bg-gray-700 transform transition-all duration-300 origin-center ${isNavOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
          
          {/* Logo/Name - Home Button */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.location.reload()}
              className="text-xl font-bold text-gray-900 font-aldrich hover:text-gray-700 transition-colors duration-200 cursor-pointer"
            >
              ALDRIN LIJO
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

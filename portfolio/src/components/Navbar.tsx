const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-6">
        <div className="flex justify-center items-center h-16">
          {/* Logo/Name - Home Button - Centered */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.location.reload()}
              className="text-xl font-bold text-white font-aldrich hover:text-gray-300 transition-colors duration-200 cursor-pointer"
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

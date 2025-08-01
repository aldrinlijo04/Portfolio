const HeroSection = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Curtain Effect (no top space, rounded bottom) */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full px-8 pb-8">
          <img 
            src="/images/aldrin/aldrin_profile2.jpeg" 
            alt="Aldrin Lijo presenting" 
            className="w-full h-full object-cover object-center rounded-b-3xl"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-x-8 top-0 bottom-8 bg-black/30 rounded-b-3xl"></div>
        </div>
      </div>

      {/* Bottom Text Section - Enlarged */}
      <div className="absolute bottom-0 left-0 right-0 bg-white">
        <div className="flex items-center justify-center px-16 py-12">
          {/* ALDRIN Text */}
          <div className="flex-1 text-right pr-12">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black text-black tracking-tight leading-none font-aldrich">
              ALDRIN
            </h1>
          </div>
          
          {/* Center Navigation Element - Vertical */}
          <div className="flex-shrink-0 mx-12">
            <div className="group relative">
              {/* Vertical Elongated Button */}
              <button className="elegant-button py-12 px-4 bg-black rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black/50">
                <div className="w-1 h-8 bg-white rounded-full"></div>
              </button>
              
              {/* Hover Navigation Menu */}
              <div className="nav-hover-menu absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                <div className="bg-black rounded-2xl px-8 py-6 shadow-2xl backdrop-blur-lg">
                  <div className="flex flex-col space-y-4 min-w-[180px]">
                    <a href="#home" className="text-white font-aldrich text-xl hover:text-gray-300 transition-colors duration-200 text-center py-2">Home</a>
                    <a href="#about" className="text-white font-aldrich text-xl hover:text-gray-300 transition-colors duration-200 text-center py-2">About</a>
                    <a href="#projects" className="text-white font-aldrich text-xl hover:text-gray-300 transition-colors duration-200 text-center py-2">Projects</a>
                    <a href="#skills" className="text-white font-aldrich text-xl hover:text-gray-300 transition-colors duration-200 text-center py-2">Skills</a>
                    <a href="#contact" className="text-white font-aldrich text-xl hover:text-gray-300 transition-colors duration-200 text-center py-2">Contact</a>
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className="w-3 h-3 bg-black rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* LIJO Text */}
          <div className="flex-1 text-left pl-12">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black text-black tracking-tight leading-none font-aldrich">
              LIJO
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection

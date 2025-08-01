const HeroSection = () => {
  return (
    <main>
      <div className="h-screen flex items-center justify-center bg-white relative overflow-hidden">
        {/* Background Text - ALDRIN */}
        <div className="absolute left-[5%] md:left-[8%] lg:left-[10%] top-[50%] md:top-[30%] lg:top-[60%] transform -translate-y-1/2 z-10">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[18vw] font-black text-black tracking-tighter leading-none select-none font-aldrich opacity-90 max-w-none">
            ALD
          </h1>
        </div>

        {/* Background Text - RIN */}
        <div className="absolute right-[5%] md:right-[8%] lg:right-[13%] top-[35%] md:top-[30%] lg:top-[60%] transform -translate-y-1/2 z-10">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[18vw] font-black text-black tracking-tighter leading-none select-none font-aldrich opacity-90 max-w-none">
            RIN
          </h1>
        </div>

        {/* Foreground - Profile Image (Higher z-index) */}
        <div className="relative z-20 flex-shrink-0">
          {/* Glass frame container */}
          <div className="relative p-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl shadow-black/10">
            {/* Inner glass border */}
            <div className="relative rounded-xl overflow-hidden border border-white/30 shadow-inner">
              <div className="w-[55vw] h-[73vw] sm:w-[45vw] sm:h-[60vw] md:w-[38vw] md:h-[50vw] lg:w-[32vw] lg:h-[42vw] xl:w-[28vw] xl:h-[37vw] max-w-[450px] max-h-[600px]">
                <img 
                  src="/images/aldrin/aldrin_profile.JPG" 
                  alt="Aldrin Lijo" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Glass overlay with subtle highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Background Text - LIJO (Behind image) */}
        <div className="absolute bottom-[2%] md:bottom-[3%] lg:bottom-[0%] left-1/2 transform -translate-x-1/2 z-10">
          <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[5vw] xl:text-[18vw] font-black text-black tracking-wider leading-none select-none font-aldrich opacity-90 max-w-none">
            LIJO
          </h2>
        </div>
      </div>
    </main>
  )
}

export default HeroSection

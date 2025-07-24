const HeroSection = () => {
  return (
    <main className="pt-16">
      <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
        {/* Background Text - ALDRIN */}
        <div className="absolute left-[5%] md:left-[8%] lg:left-[12%] top-1/2 transform -translate-y-1/2 z-10">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[18vw] font-black text-black tracking-tighter leading-none select-none font-aldrich opacity-90 max-w-none">
            ALD
          </h1>
        </div>

        {/* Background Text - RIN */}
        <div className="absolute right-[5%] md:right-[8%] lg:right-[14%] top-1/2 transform -translate-y-1/2 z-10">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[18vw] font-black text-black tracking-tighter leading-none select-none font-aldrich opacity-90 max-w-none">
            RIN
          </h1>
        </div>

        {/* Foreground - Profile Image (Higher z-index) */}
        <div className="relative z-20 flex-shrink-0">
          <div className="w-[45vw] h-[60vw] sm:w-[35vw] sm:h-[46vw] md:w-[28vw] md:h-[37vw] lg:w-[22vw] lg:h-[29vw] xl:w-[18vw] xl:h-[24vw] max-w-[320px] max-h-[427px] overflow-hidden rounded-lg shadow-2xl">
            <img 
              src="/images/aldrin/aldrin_profile.JPG" 
              alt="Aldrin Lijo" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Background Text - LIJO (Behind image) */}
        <div className="absolute bottom-[5%] md:bottom-[8%] lg:bottom-[10%] left-1/2 transform -translate-x-1/2 z-10">
          <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[5vw] xl:text-[18vw] font-black text-black tracking-wider leading-none select-none font-aldrich opacity-90 max-w-none">
            LIJO
          </h2>
        </div>
      </div>
    </main>
  )
}

export default HeroSection

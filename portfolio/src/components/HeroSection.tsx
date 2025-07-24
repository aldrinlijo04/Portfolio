const HeroSection = () => {
  return (
    <main className="pt-16">
      <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
        {/* Background Text - ALDRIN */}
        <div className="absolute left-[5%] md:left-[8%] lg:left-[20%] top-1/2 transform -translate-y-1/2 z-10">
          <h1 className="text-[120px] md:text-[250px] lg:text-[250px] font-black text-black tracking-tighter leading-none select-none font-aldrich opacity-90">
            ALD
          </h1>
        </div>

        {/* Background Text - RIN */}
        <div className="absolute right-[5%] md:right-[8%] lg:right-[20%] top-1/2 transform -translate-y-1/2 z-10">
          <h1 className="text-[120px] md:text-[250px] lg:text-[250px] font-black text-black tracking-tighter leading-none select-none font-aldrich opacity-90">
            RIN
          </h1>
        </div>

        {/* Foreground - Profile Image (Higher z-index) */}
        <div className="relative z-20">
          <div className="w-30 h-70 md:w-80 md:h-[32rem] lg:w-96 lg:h-[32rem] overflow-hidden rounded-lg shadow-2xl">
            <img 
              src="/images/aldrin/aldrin_profile.JPG" 
              alt="Aldrin Lijo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Background Text - LIJO (Behind image) */}
        <div className="absolute bottom-[5%] md:bottom-[8%] lg:bottom-[10%] left-1/2 transform -translate-x-1/2 z-10">
          <h2 className="text-[150px] md:text-[200px] lg:text-[200px] font-black text-black tracking-wider leading-none select-none font-aldrich opacity-90">
            LIJO
          </h2>
        </div>
      </div>
    </main>
  )
}

export default HeroSection

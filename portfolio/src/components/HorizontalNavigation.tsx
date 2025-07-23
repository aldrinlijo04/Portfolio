interface HorizontalNavigationProps {
  isNavOpen: boolean
  setIsNavOpen: (isOpen: boolean) => void
}

const HorizontalNavigation = ({ isNavOpen, setIsNavOpen }: HorizontalNavigationProps) => {
  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      {/* Horizontal Popup Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-40 bg-black transform transition-transform duration-500 ease-out ${isNavOpen ? 'translate-y-16' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-8">
            <div className="flex space-x-8 md:space-x-12">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsNavOpen(false)}
                  className={`text-white font-medium text-lg font-aldrich hover:text-gray-300 transform hover:scale-110 transition-all duration-300 opacity-0 animate-slide-in-left`}
                  style={{
                    animationDelay: isNavOpen ? `${index * 150}ms` : '0ms',
                    animationFillMode: 'forwards'
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isNavOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsNavOpen(false)}
        />
      )}
    </>
  )
}

export default HorizontalNavigation

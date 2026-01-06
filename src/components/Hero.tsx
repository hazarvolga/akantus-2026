'use client'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-slate-900 py-20 min-h-[60vh]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl text-red-500 mb-4">
            AKANTUS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto rounded-full" />
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Modern Yapı Çözümleri
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Akantus Yapı Sistemleri olarak mimari tasarımdan inşaat süreçlerine kadar her aşamada 
            yenilikçi yaklaşımlarla geleceğin yapılarını bugünden inşa ediyoruz.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
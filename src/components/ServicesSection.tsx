'use client'

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 relative bg-slate-800">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/20">
              Hizmetlerimiz
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Kapsamlı</span> Çözümler
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mimari tasarımdan inşaat süreçlerine kadar her aşamada 
            profesyonel hizmet anlayışımızla yanınızdayız.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto border border-slate-600">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Projenizi <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Birlikte</span> Planlayalım
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Uzman ekibimizle iletişime geçin ve hayalinizdeki projeyi gerçeğe dönüştürme yolculuğuna başlayın.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-400 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              İletişime Geç
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'

export default function AboutSection() {
  const features = [
    {
      icon: '🏗️',
      title: 'Modern Tasarım',
      description: 'Çağdaş mimari anlayışı ile estetik ve fonksiyonel yapılar'
    },
    {
      icon: '⚡',
      title: 'Hızlı Çözüm',
      description: 'Teknoloji destekli süreçlerle zamanında teslim garantisi'
    },
    {
      icon: '🌱',
      title: 'Sürdürülebilir',
      description: 'Çevre dostu malzemeler ve enerji verimli sistemler'
    },
    {
      icon: '🎯',
      title: 'Kalite Odaklı',
      description: 'Uluslararası standartlarda kalite kontrol ve güvence'
    }
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 via-transparent to-blue-500/20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
              Hakkımızda
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Geleceği</span> İnşa Ediyoruz
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Akantus Yapı Sistemleri ve Ticaret LTD ŞTİ olarak, modern mimari çözümler ve yenilikçi inşaat teknolojileri 
            ile sektörde fark yaratmaya hazırlanıyoruz.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group glass rounded-3xl p-8 hover:bg-surface/70 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-4 text-text">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass rounded-3xl p-12 text-center">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-text-muted font-medium">Yıllık Deneyim</div>
            </div>
            <div className="group">
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-text-muted font-medium">Tamamlanan Proje</div>
            </div>
            <div className="group">
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-text-muted font-medium">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
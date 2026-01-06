'use client'

export default function Footer() {

  return (
    <footer className="relative py-20 px-6 overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="text-center mb-16">
          {/* Contact Info in single line */}
          <h4 className="text-xl font-semibold mb-6 text-white">
            İletişim Bilgileri
          </h4>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-red-500">📍</span>
              <span>Karlıktepe Mah. Orhan Veli Sok. Yuvakur Sit. A Blok No: 2A/14, Kartal, İstanbul</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">📞</span>
              <span>0 533 242 63 10</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">✉️</span>
              <span>info@akantusyapi.com</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-700 pt-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Copyright */}
            <div className="text-gray-400 text-center">
              <p>&copy; 2026 Akantus Yapı Sistemleri ve Ticaret LTD ŞTİ. Tüm hakları saklıdır.</p>
              <p className="text-sm mt-1">
                Design and Develop By{' '}
                <a 
                  href="https://hazarvolga.com.tr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-orange-400 transition-colors duration-300"
                >
                  Hazar Volga Ekiz
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-slate-800/50 backdrop-blur-sm rounded-full p-4 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 border border-slate-700"
            aria-label="Sayfa başına dön"
          >
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akantus Yapı - Yakında',
  description: 'Modern yapı çözümleri ve mimari hizmetler için bizi takip edin. Akantus Yapı Sistemleri ve Ticaret LTD ŞTİ olarak size en iyi hizmeti sunmak için hazırlanıyoruz.',
  keywords: ['yapı', 'inşaat', 'mimari', 'tasarım', 'akantus', 'yapı sistemleri'],
  authors: [{ name: 'Akantus Yapı Sistemleri' }],
  openGraph: {
    title: 'Akantus Yapı - Yakında',
    description: 'Modern yapı çözümleri ve mimari hizmetler için bizi takip edin.',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akantus Yapı - Yakında',
    description: 'Modern yapı çözümleri ve mimari hizmetler için bizi takip edin.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${orbitron.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-ui antialiased">
        {children}
      </body>
    </html>
  )
}
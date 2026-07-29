import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import MobileDesktopNotice from "@/components/mobile-desktop-notice";
import { Geist, Geist_Mono, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  weight: ['400', '500', '600', '700']
})
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Ragam & Co. – Music Intelligence & Cultural Platform',
  description: 'Premium music intelligence platform offering analysis, research, and opportunities for artists, organizers, labels, and cultural institutions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0f0e0c' },
  ],
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${geistMono.variable} dark bg-background`}>
      <body className="antialiased font-sans">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Ragam & Co.",
      url: "https://ragam-co.vercel.app",
      logo: "https://ragam-co.vercel.app/logo.png",
      description:
        "Ragam & Co. is a music research and strategy company focused on the Telugu music industry. We help artists, independent bands, music labels and brands grow through research, audience insights, strategy and meaningful music experiences.",
      email: "hello.ragamandco@gmail.com",
      sameAs: [
        "https://www.instagram.com/ragamandco/",
        "https://www.linkedin.com/company/ragamandco/"
      ]
    }),
  }}
/>
        <Navigation />
        <MobileDesktopNotice />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

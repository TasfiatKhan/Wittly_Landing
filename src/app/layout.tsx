import type { Metadata } from 'next'
import { Lora, DM_Sans } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Witly — Social Intelligence, Made Natural',
  description:
    'Witly helps you navigate real conversations with more ease, confidence, and warmth. AI-powered social intelligence for texting, live moments, and ongoing relationships.',
  keywords: [
    'AI social assistant', 'conversation help', 'social confidence',
    'texting advice', 'social anxiety', 'conversational intelligence',
    'dating advice', 'social copilot',
  ],
  authors: [{ name: 'Witly' }],
  metadataBase: new URL('https://witly.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://witly.app',
    siteName: 'Witly',
    title: 'Witly — Social Intelligence, Made Natural',
    description: 'An AI social copilot that helps you feel more comfortable, natural, and confident in every conversation.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Witly' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Witly — Social Intelligence, Made Natural',
    description: 'An AI social copilot that helps you feel more comfortable, natural, and confident in every conversation.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}

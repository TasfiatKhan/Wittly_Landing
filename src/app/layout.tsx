import type { Metadata } from 'next'
import { Lora, DM_Sans } from 'next/font/google'
import Providers from '@/components/Providers'
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
  title: 'Livadra — Social Intelligence, Made Natural',
  description:
    'Livadra helps you navigate real conversations with more ease, confidence, and warmth. Now available on Google Play for Android — texting, live moments, and ongoing relationships.',
  keywords: [
    'social assistant', 'conversation help', 'social confidence',
    'texting advice', 'social anxiety', 'conversational intelligence',
    'dating advice', 'Android app', 'Google Play',
  ],
  authors: [{ name: 'Livadra' }],
  metadataBase: new URL('https://livadra.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://livadra.com',
    siteName: 'Livadra',
    title: 'Livadra — Social Intelligence, Made Natural',
    description: 'Now available on Google Play. Livadra helps you feel more comfortable, natural, and confident in every conversation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Livadra — Social Intelligence, Made Natural',
    description: 'Now available on Google Play. Livadra helps you feel more comfortable, natural, and confident in every conversation.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('livadra-theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light')}catch(e){}` }} />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

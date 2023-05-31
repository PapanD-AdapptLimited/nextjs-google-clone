import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientOnly from '@/components/ClientOnly'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Google App',
  description: 'Build a search engine similar to google.',
  authors: [{name: "Papan Das", url: "https://adappt.ai"}],
  creator: "Papan Das",
  publisher: "A Company Published this."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>

          
          {children}

          {/* FOOTER */}
          <Footer/>
        </ClientOnly>
      </body>
    </html>
  )
}

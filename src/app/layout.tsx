import { Metadata } from 'next'
import ClientOnly from './components/ClientOnly'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Google App',
  description: 'Build a search engine similar to google.',
  authors: [{name: "Papan Das", url: "https://varahabazaar.com"}],
  creator: "Papan Das",
  publisher: "Jal Jaivik Bazaar Private Limited"
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
        </ClientOnly>
      </body>
    </html>
  )
}

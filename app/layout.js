import LeftMenu from '@/components/LeftMenu'
import './globals.css'
import { Inter } from 'next/font/google'
import ModalWrapper from '@/components/ModalWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex relative min-h-screen flex-wrap overflow-hidden">
          <LeftMenu />
          <section className="bg-sky-50 relative flex flex-1 min-h-full flex-col items-center justify-between">
            {children}
            <ModalWrapper />
          </section>
        </main>
      </body>
    </html>
  )
}

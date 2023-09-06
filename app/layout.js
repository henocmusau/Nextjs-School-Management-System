import LeftMenu from '@/components/LeftMenu'
import './globals.css'
import { Inter } from 'next/font/google'
import ModalWrapper from '@/components/ModalWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SchoolX - La meilleure applicarion de gestion de votre école',
  description: 'Facilitez-vous la gestion de votre établissement scolaire avec SchoolX.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex relative min-h-screen flex-wrap overflow-hidden`}>
        <LeftMenu />
        <main className="bg-sky-50 relative flex flex-1 min-h-full flex-col items-center justify-between">
          {children}
          <ModalWrapper />
        </main>
      </body>
    </html>
  )
}

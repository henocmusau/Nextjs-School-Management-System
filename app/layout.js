import LeftMenu from '@/components/LeftMenu'
import './globals.css'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/utils/context/theme'

import ModalWrapper from '@/components/ModalWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SchoolX - La meilleure applicarion de gestion de votre école',
  description: 'Facilitez-vous la gestion de votre établissement scolaire avec SchoolX.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} flex relative min-h-screen flex-wrap text-primary dark:text-secondaryDark`}>
          <LeftMenu />
          <main className="bg-primary dark:bg-primaryDark max-h-screen overflow-y-auto flex flex-1 min-h-full flex-col items-center justify-between">
            {children}
            <ModalWrapper />
          </main>
        </body>
      </ThemeProvider>
    </html>
  )
}

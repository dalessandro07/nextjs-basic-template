import { Inter } from 'next/font/google'

import Footer from '@/core/components/layout/Footer'
import { APP_INDEX_DESCRIPTION, APP_INDEX_TITLE } from '@/core/constants'

import type { Metadata } from 'next'
import '../../globals.css'

export const metadata: Metadata = {
  title: APP_INDEX_TITLE,
  description: APP_INDEX_DESCRIPTION
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${inter.className}`}>
        <div className='flex flex-col gap-10 p-10 min-h-dvh'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

import './globals.css'
import React from 'react'
import Link from 'next/link'
import { Gift, PartyPopper } from 'lucide-react'
import { Cabin } from 'next/font/google'

const cabin = Cabin({subsets: ['latin']})

export const metadata = {
  title: 'Duda & Jedi',
  description: 'Site de casamento',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={cabin.className}>
      <body className='bg-blue-50 text-stone-900'>
      <div className="flex justify-center">
        
        <nav className='bg-stone-950 text-blue-50 flex justify-center space-x-6 py-6 flex-1'>
          <Link href="/festa" className="flex items-center gap-2 text-sm font-semibold">
            <PartyPopper />
            A festa
          </Link>
          <Link href="/" className='text-xl font-bold font-serif'>
            D&J
          </Link>
          <Link href="/presentes" className="flex items-center gap-2 text-sm font-semibold">
            <Gift />
            Presentes
          </Link>
        </nav>
      </div>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'

import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';



export const metadata: Metadata = {
  title: 'Trach App',
  description: 'Real Estate Comparison Hub',
  icons:{
    icon:'/logo.svg'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className='relative'>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}

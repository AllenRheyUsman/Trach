import type { Metadata } from 'next'

import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';
import { FlowbiteNavBar, Footer } from '@/components';



export const metadata: Metadata = {
  title: 'Trach App',
  description: 'Real Estate Comparison Hub',
  icons:{
    icon:'/favicon.ico'
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
      <FlowbiteNavBar/>
        {children}
        <Footer/>
        </body>
    </html>
    </ClerkProvider>
  )
}

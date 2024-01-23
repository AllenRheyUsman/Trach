import type { Metadata } from 'next'

import './globals.css'
import { Navbar, Footer, FlowbiteNavBar } from '@/components'
import { OffCanvasProvider } from '@/providers/OffCanvas-provider'


export const metadata: Metadata = {
  title: 'Trach App',
  description: 'Real Estate Comparison Hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <OffCanvasProvider>
      <body className='relative'>
        {/* <Navbar/> */}
        <FlowbiteNavBar/>
        {children}
        <Footer/>
        </body>
      </OffCanvasProvider>
    </html>
  )
}

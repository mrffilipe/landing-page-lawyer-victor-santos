import './globals.css'
import './fonts.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Victor Santos',
  description: 'Advogado experiente, formado pela Faculdade do Sudeste Goiano, especializado em oferecer soluções jurídicas personalizadas e eficazes. Comprometido com a excelência, ética e integridade, atuando em diversas áreas do direito. Focado em defender os interesses dos clientes com dedicação e profissionalismo. Consulte para orientação legal confiável.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
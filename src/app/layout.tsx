import './globals.css';

// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from './ui/components/Footer';
import Navbar from './ui/components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Humano Diverso',
  description: 'Descubra a experiência imersiva e única da Pedra do Salão em Rubim, Minas Gerais. Explore nosso legado e reserve sua aventura.',
  keywords: 'Humanos, Diversidade, Humanos Complexos, Filosofia, Comunidade LGBT, Negritude, Feminismo, Resistência',
  authors: [{ name: 'Camila Lacerda and Júlia Marçal' }],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-brand-light text-brand-dark antialiased`}>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
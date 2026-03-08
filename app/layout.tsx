import "./globals.css"
import Header from "@/componentes/layout/Header"
import Footer from "@/componentes/layout/Footer"
import { Playfair_Display, Montserrat } from "next/font/google"
import type { Metadata } from "next"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SolyMar - Sal Marina Premium | Sabor Auténtico para Tu Cocina",
  description: "Descubre SolyMar, sal marina premium de Perú. Cristales naturales sin aditivos para parrilla, mesa y cocina. Sabor auténtico que transforma tus platillos.",
  keywords: "sal marina, sal premium, sal parrillera, sal de mesa, sal peruana, sal natural, sal sin aditivos, SolyMar",
  authors: [{ name: "SolyMar" }],
  openGraph: {
    title: "SolyMar - Sal Marina Premium",
    description: "Sal marina premium de origen peruano. Cristales naturales para los que saben de sabor.",
    type: "website",
    locale: "es_PE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
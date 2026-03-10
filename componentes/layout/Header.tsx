"use client"

import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="bg-[#121212]/95 backdrop-blur-md text-white px-3 sm:px-4 md:px-6 fixed top-0 left-0 right-0 z-50 shadow-lg shadow-black/50 border-b border-[#C9A45C]/20">
      <div className="flex items-center justify-between py-2 sm:py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-1.5 sm:gap-2 transform hover:scale-105 transition-transform duration-300">
          <Image 
            src="/icono-salymar-sinfondo.png" 
            alt="SolyMar Logo" 
            width={45} 
            height={45}
            className="object-contain rotate-90 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-playfair">SolyMar</h1>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 md:gap-6 lg:gap-8 font-montserrat text-xs md:text-sm">
            <li>
              <a href="#inicio" className="hover:text-[#C9A45C] transition-all duration-300 relative group">
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A45C] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#beneficios" className="hover:text-[#C9A45C] transition-all duration-300 relative group">
                Beneficios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A45C] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#productos" className="hover:text-[#C9A45C] transition-all duration-300 relative group">
                Productos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A45C] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#preparacion" className="hover:text-[#C9A45C] transition-all duration-300 relative group">
                Preparación
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A45C] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#promociones" className="hover:text-[#C9A45C] transition-all duration-300 relative group">
                Promociones
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A45C] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#testimonios" className="hover:text-[#C9A45C] transition-all duration-300 relative group">
                Testimonios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A45C] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#bienestar" className="hover:text-[#C9A45C] transition-all duration-300 relative group">
                Bienestar
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A45C] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-[#C9A45C] transition-all duration-300 relative group">
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A45C] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none z-50 p-1"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <nav className={`md:hidden bg-[#121212] border-t border-[#C9A45C]/20 overflow-y-auto transition-all duration-300 ${isMenuOpen ? 'max-h-[calc(100vh-60px)] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col font-montserrat py-2">
          <li>
            <a href="#inicio" onClick={closeMenu} className="hover:bg-[#C9A45C]/10 hover:text-[#C9A45C] transition-colors duration-300 block py-2.5 px-6 text-base">
              Inicio
            </a>
          </li>
          <li>
            <a href="#beneficios" onClick={closeMenu} className="hover:bg-[#C9A45C]/10 hover:text-[#C9A45C] transition-colors duration-300 block py-2.5 px-6 text-base">
              Beneficios
            </a>
          </li>
          <li>
            <a href="#productos" onClick={closeMenu} className="hover:bg-[#C9A45C]/10 hover:text-[#C9A45C] transition-colors duration-300 block py-2.5 px-6 text-base">
              Productos
            </a>
          </li>
          <li>
            <a href="#preparacion" onClick={closeMenu} className="hover:bg-[#C9A45C]/10 hover:text-[#C9A45C] transition-colors duration-300 block py-2.5 px-6 text-base">
              Preparación
            </a>
          </li>
          <li>
            <a href="#promociones" onClick={closeMenu} className="hover:bg-[#C9A45C]/10 hover:text-[#C9A45C] transition-colors duration-300 block py-2.5 px-6 text-base">
              Promociones
            </a>
          </li>
          <li>
            <a href="#testimonios" onClick={closeMenu} className="hover:bg-[#C9A45C]/10 hover:text-[#C9A45C] transition-colors duration-300 block py-2.5 px-6 text-base">
              Testimonios
            </a>
          </li>
          <li>
            <a href="#bienestar" onClick={closeMenu} className="hover:bg-[#C9A45C]/10 hover:text-[#C9A45C] transition-colors duration-300 block py-2.5 px-6 text-base">
              Bienestar
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={closeMenu} className="hover:bg-[#C9A45C]/10 hover:text-[#C9A45C] transition-colors duration-300 block py-2.5 px-6 text-base">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
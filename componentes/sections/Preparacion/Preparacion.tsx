'use client'

import Image from "next/image"
import { useState } from "react"

export default function Preparacion() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const preparaciones = [
    {
      id: 1,
      titulo: "SAL GRANO GRUESO",
      descripcion: "Ideales para parrillas y carnes a la brasa. Su tamaño permite que la sal se adhiera mejor y se disuelva lentamente, realzando el sabor natural de asados, pescados, pollo y costillas.",
      imagen: "/preparacion-hd1.png",
      alt: "Sal grano grueso",
      layout: "text-left" // Texto izquierda
    },
    {
      id: 2,
      titulo: "SAL GRANO FINO",
      descripcion: "Perfectos para el uso diario en la cocina. Se disuelven con facilidad y realzan el sabor de arroces, sopas, guisos y menestras, aportando una sazón equilibrada y natural en cada preparación.",
      imagen: "/preparacion-hd3.png",
      alt: "Sal grano fino",
      layout: "text-right" // Texto derecha
    },
    {
      id: 3,
      titulo: "SAL GRANO MEDIO",
      descripcion: "Ideales para el toque final de tus comidas. Su textura ligera permite una distribución uniforme, resaltando el sabor de ensaladas, huevos, papas fritas y snacks con una sazón equilibrada.",
      imagen: "/preparacion-hd2.png",
      alt: "Sal grano medio",
      layout: "text-left" // Texto izquierda
    }
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % preparaciones.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + preparaciones.length) % preparaciones.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section id="preparacion" className="relative bg-[#121212] py-12 sm:py-16 md:py-20 px-4 pt-20 sm:pt-24 md:pt-32 overflow-hidden">
      {/* Textura de fondo */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/fondo1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Gradiente de transición suave desde Productos */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-[#121212] to-transparent"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-48 h-48 md:w-64 md:h-64 border-2 border-[#C9A45C]/10 rounded-full animate-pulse-slow"></div>
      <div className="hidden sm:block absolute bottom-1/4 right-10 w-64 h-64 md:w-80 md:h-80 border-2 border-[#C9A45C]/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#C9A45C]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair text-center text-white mb-4 sm:mb-5 md:mb-6 animate-fade-in px-2 sm:px-4">
          EL SABOR SE CREA EN LA PREPARACIÓN
        </h2>
        
        {/* Línea decorativa debajo del título */}
        <div className="flex justify-center mb-10 sm:mb-14 md:mb-16">
          <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent"></div>
        </div>

        {/* Carrusel Container */}
        <div className="relative py-8 sm:py-10 md:py-12">
          {/* Botón Anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-20 bg-[#C9A45C] hover:bg-[#b8934d] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(201,164,92,0.5)] transition-all duration-300 transform hover:scale-110"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Botón Siguiente */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-20 bg-[#C9A45C] hover:bg-[#b8934d] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(201,164,92,0.5)] transition-all duration-300 transform hover:scale-110"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {preparaciones.map((prep, index) => (
                <div key={prep.id} className="w-full flex-shrink-0 px-4 sm:px-8 md:px-12">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center min-h-[450px] sm:min-h-[500px] md:min-h-[550px] ${prep.layout === 'text-right' ? 'md:grid-flow-dense' : ''}`}>
                    {/* Texto */}
                    <div className={`space-y-4 sm:space-y-5 md:space-y-6 px-2 sm:px-4 ${prep.layout === 'text-right' ? 'md:col-start-2' : ''}`}>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair text-[#C9A45C] mb-3 sm:mb-4">
                        {prep.titulo}
                      </h3>
                      
                      {/* Línea decorativa pequeña */}
                      <div className="w-16 sm:w-20 h-0.5 bg-[#C9A45C] mb-3 sm:mb-4"></div>
                      
                      <p className="font-montserrat text-gray-300 text-base sm:text-lg leading-relaxed">
                        {prep.descripcion}
                      </p>
                    </div>
                    
                    {/* Imagen con decoración */}
                    <div className={`flex justify-center items-center relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px] ${prep.layout === 'text-right' ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      {/* Cuadrado decorativo de fondo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] border-2 sm:border-4 border-[#C9A45C]/30 rounded-lg transform rotate-6 transition-all duration-700"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] md:w-[380px] md:h-[380px] bg-[#C9A45C]/5 rounded-lg transform -rotate-3 transition-all duration-700"></div>
                      </div>
                      
                      {/* Imagen */}
                      <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-md z-10">
                        <Image 
                          src={prep.imagen}
                          alt={prep.alt}
                          width={500} 
                          height={500}
                          className="object-contain w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicadores de puntos */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10">
          {preparaciones.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-[#C9A45C]' 
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Ir a preparación ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
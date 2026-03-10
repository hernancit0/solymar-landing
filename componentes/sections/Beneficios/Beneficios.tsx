'use client'

import Image from "next/image"
import { useState } from "react"

export default function Beneficios() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }
  const beneficios = [
    {
      icono: "🌊",
      titulo: "100% Natural",
      descripcion: "Extraída directamente del mar peruano, sin procesos químicos",
      imagen: "/beneficios-1.jpg"
    },
    {
      icono: "🤲",
      titulo: "Artesanal",
      descripcion: "Producción tradicional que preserva sus propiedades originales",
      imagen: "/beneficios-artesanal.avif"
    },
    {
      icono: "💪",
      titulo: "Rica en Minerales",
      descripcion: "Contiene minerales esenciales que benefician tu salud",
      imagen: "/beneficios-minerales.jpg"
    },
    {
      icono: "✨",
      titulo: "Sin Aditivos",
      descripcion: "Libre de yodo artificial, conservantes y químicos añadidos",
      imagen: "/beneficios-3.webp"
    },
    {
      icono: "🇵🇪",
      titulo: "Producto Peruano",
      descripcion: "Apoyamos la producción local y la economía nacional",
      imagen: "/beneficios-4.jpg"
    },
    {
      icono: "❤️",
      titulo: "Cuida tu Corazón",
      descripcion: "Menos procesada que la sal refinada, mejor para tu salud",
      imagen: "/beneficio-salud.jpg"
    }
  ]

  return (
    <section id="beneficios" className="relative bg-gradient-to-br from-[#E9E2D6] via-[#E9E2D6] to-[#d6cbb8] py-12 sm:py-16 md:py-20 px-4 pt-20 sm:pt-24 md:pt-32 overflow-hidden">
      {/* Gradiente de transición suave desde Hero */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-[#121212] to-transparent"></div>
      
      {/* Cristales de sal decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cristales grandes */}
        <div className="absolute top-[8%] left-[4%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/30 backdrop-blur-sm transform rotate-[18deg] rounded-sm shadow-lg"></div>
        <div className="absolute top-[12%] right-[6%] w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 bg-white/35 backdrop-blur-sm transform -rotate-[42deg] rounded-sm shadow-lg"></div>
        <div className="absolute bottom-[18%] left-[7%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/25 backdrop-blur-sm transform rotate-[55deg] rounded-sm shadow-md"></div>
        <div className="absolute bottom-[12%] right-[9%] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/30 backdrop-blur-sm transform -rotate-[28deg] rounded-sm shadow-lg"></div>
        
        {/* Cristales medianos */}
        <div className="absolute top-[35%] left-[10%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/40 backdrop-blur-sm transform rotate-[65deg] rounded-sm shadow-md"></div>
        <div className="absolute top-[42%] right-[12%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/35 backdrop-blur-sm transform -rotate-[50deg] rounded-sm shadow-md"></div>
        <div className="absolute bottom-[35%] left-[15%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/30 backdrop-blur-sm transform rotate-[22deg] rounded-sm shadow-md"></div>
        <div className="absolute top-[68%] right-[8%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/35 backdrop-blur-sm transform -rotate-[38deg] rounded-sm shadow-lg"></div>
        
        {/* Cristales pequeños */}
        <div className="absolute top-[22%] right-[18%] w-6 h-6 sm:w-8 sm:h-8 bg-white/40 backdrop-blur-sm transform rotate-[75deg] rounded-sm shadow-sm"></div>
        <div className="absolute top-[52%] left-[6%] w-7 h-7 sm:w-9 sm:h-9 bg-white/35 backdrop-blur-sm transform -rotate-[15deg] rounded-sm shadow-sm"></div>
        <div className="absolute bottom-[28%] right-[20%] w-6 h-6 sm:w-8 sm:h-8 bg-white/30 backdrop-blur-sm transform rotate-[48deg] rounded-sm shadow-sm"></div>
        <div className="absolute top-[78%] left-[25%] w-8 h-8 sm:w-10 sm:h-10 bg-white/40 backdrop-blur-sm transform -rotate-[62deg] rounded-sm shadow-sm"></div>
        <div className="absolute bottom-[45%] right-[32%] w-6 h-6 sm:w-7 sm:h-7 bg-white/25 backdrop-blur-sm transform rotate-[33deg] rounded-sm shadow-sm"></div>
        <div className="absolute top-[58%] left-[28%] w-7 h-7 sm:w-8 sm:h-8 bg-white/30 backdrop-blur-sm transform -rotate-[70deg] rounded-sm shadow-sm"></div>
        
        {/* Cristales con brillo dorado */}
        <div className="absolute top-[28%] right-[28%] w-10 h-10 sm:w-12 sm:h-12 bg-[#C9A45C]/15 backdrop-blur-sm border border-[#C9A45C]/40 transform rotate-[25deg] rounded-sm shadow-md"></div>
        <div className="absolute bottom-[22%] left-[22%] w-8 h-8 sm:w-10 sm:h-10 bg-[#C9A45C]/20 backdrop-blur-sm border border-[#C9A45C]/40 transform -rotate-[58deg] rounded-sm shadow-md"></div>
        <div className="absolute top-[48%] right-[38%] w-9 h-9 sm:w-11 sm:h-11 bg-[#C9A45C]/12 backdrop-blur-sm border border-[#C9A45C]/35 transform rotate-[80deg] rounded-sm shadow-md"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-gray-900 mb-3 sm:mb-4 animate-fade-in">
            BENEFICIOS
          </h2>
          
          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat text-gray-700 mb-4 sm:mb-6">
            ¿Por qué elegir SolyMar?
          </p>
          
          {/* Línea decorativa */}
          <div className="flex justify-center">
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent"></div>
          </div>
        </div>
        
        {/* Grid 3x2 de beneficios con flip cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index}
              className="group relative aspect-square perspective-1000 cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              {/* Contenedor del flip */}
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                flippedCards.includes(index) ? 'rotate-y-180' : ''
              } md:group-hover:rotate-y-180`}>
                {/* Cara frontal - Imagen */}
                <div className="absolute inset-0 backface-hidden overflow-hidden shadow-lg">
                  <Image 
                    src={beneficio.imagen}
                    alt={beneficio.titulo}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay oscuro sutil */}
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                
                {/* Cara trasera - Texto */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white shadow-lg p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center">
                  {/* Icono - oculto en móvil */}
                  <div className="hidden sm:block text-3xl md:text-4xl lg:text-5xl mb-2">
                    {beneficio.icono}
                  </div>
                  
                  {/* Título */}
                  <h3 className="font-playfair text-xs sm:text-sm md:text-base lg:text-lg text-[#C9A45C] mb-1 sm:mb-2 font-semibold leading-tight">
                    {beneficio.titulo}
                  </h3>
                  
                  {/* Línea decorativa - oculta en móvil */}
                  <div className="hidden sm:block w-8 sm:w-12 h-0.5 bg-[#C9A45C] mb-2 sm:mb-3"></div>
                  
                  {/* Descripción */}
                  <p className="font-montserrat text-[0.65rem] sm:text-xs md:text-sm text-gray-600 leading-tight px-1">
                    {beneficio.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}
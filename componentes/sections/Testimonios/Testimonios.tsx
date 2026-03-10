'use client'

import { useRef, useState, useEffect } from 'react'

export default function Testimonios() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  
  const testimonios = [
    {
      id: 1,
      nombre: "Hernán Morales",
      profesion: "Analista de Datos",
      comentario: "La sal de SolyMar transformó completamente mis parrilladas. Los cristales gruesos se distribuyen perfectamente y el sabor es incomparable.",
      estrellas: 5
    },
    {
      id: 2,
      nombre: "María González",
      profesion: "Chef Profesional",
      comentario: "Como chef, la calidad es fundamental. SolyMar ofrece una pureza excepcional que resalta los sabores naturales de cada ingrediente.",
      estrellas: 5
    },
    {
      id: 3,
      nombre: "Carlos Ramírez",
      profesion: "Restaurantero",
      comentario: "Mis clientes notan la diferencia. Desde que uso SolyMar en mi restaurante, los comentarios sobre el sabor han aumentado notablemente.",
      estrellas: 5
    },
    {
      id: 4,
      nombre: "Ana Jiménez",
      profesion: "Ama de Casa",
      comentario: "Perfecta para el uso diario. La textura es ideal y la presentación del envase le da un toque premium a mi cocina.",
      estrellas: 5
    },
    {
      id: 5,
      nombre: "Roberto Silva",
      profesion: "Parrillero Profesional",
      comentario: "Llevo años haciendo parrilladas y esta es la mejor sal que he probado. El grano medio es perfecto para carnes a la parrilla.",
      estrellas: 5
    }
  ];

  // Duplicamos los testimonios múltiples veces para crear el efecto infinito perfecto
  const testimoniosInfinitos = [...testimonios, ...testimonios, ...testimonios, ...testimonios];

  // Auto-scroll cuando no se está arrastrando
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let animationFrameId: number

    const autoScroll = () => {
      if (!isDragging && scrollContainer) {
        scrollContainer.scrollLeft += 0.5
        
        // Reiniciar el scroll cuando llega a la mitad (efecto infinito)
        const maxScroll = scrollContainer.scrollWidth / 4
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll)
    }

    animationFrameId = requestAnimationFrame(autoScroll)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isDragging])

  // Handlers para drag-to-scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Multiplicador para velocidad de scroll
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
  }

  return (
    <section id="testimonios" className="relative bg-[#D7D7D7] py-12 sm:py-16 md:py-20 pt-24 sm:pt-28 md:pt-32 overflow-hidden">
      {/* Gradiente de transición suave desde Promociones */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#121212] to-transparent"></div>
      
      {/* Cristales de sal decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cristales grandes */}
        <div className="absolute top-[10%] left-[5%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm transform rotate-12 rounded-sm shadow-lg"></div>
        <div className="absolute top-[15%] right-[8%] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/25 backdrop-blur-sm transform -rotate-45 rounded-sm shadow-lg"></div>
        <div className="absolute top-[60%] left-[10%] w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 bg-white/15 backdrop-blur-sm transform rotate-[30deg] rounded-sm shadow-md"></div>
        <div className="absolute bottom-[20%] right-[12%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm transform -rotate-12 rounded-sm shadow-lg"></div>
        
        {/* Cristales medianos */}
        <div className="absolute top-[30%] left-[15%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/30 backdrop-blur-sm transform rotate-45 rounded-sm shadow-md"></div>
        <div className="absolute top-[45%] right-[20%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/25 backdrop-blur-sm transform -rotate-[60deg] rounded-sm shadow-md"></div>
        <div className="absolute bottom-[15%] left-[20%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm transform rotate-[75deg] rounded-sm shadow-md"></div>
        <div className="absolute top-[70%] right-[5%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/25 backdrop-blur-sm transform rotate-[15deg] rounded-sm shadow-lg"></div>
        
        {/* Cristales pequeños */}
        <div className="absolute top-[25%] right-[15%] w-6 h-6 sm:w-8 sm:h-8 bg-white/35 backdrop-blur-sm transform rotate-[20deg] rounded-sm shadow-sm"></div>
        <div className="absolute top-[50%] left-[8%] w-7 h-7 sm:w-9 sm:h-9 bg-white/30 backdrop-blur-sm transform -rotate-[35deg] rounded-sm shadow-sm"></div>
        <div className="absolute bottom-[30%] right-[25%] w-6 h-6 sm:w-8 sm:h-8 bg-white/25 backdrop-blur-sm transform rotate-[50deg] rounded-sm shadow-sm"></div>
        <div className="absolute top-[80%] left-[30%] w-8 h-8 sm:w-10 sm:h-10 bg-white/30 backdrop-blur-sm transform -rotate-[25deg] rounded-sm shadow-sm"></div>
        <div className="absolute bottom-[40%] left-[35%] w-6 h-6 sm:w-7 sm:h-7 bg-white/20 backdrop-blur-sm transform rotate-[65deg] rounded-sm shadow-sm"></div>
        
        {/* Cristales con brillo dorado */}
        <div className="absolute top-[35%] right-[30%] w-10 h-10 sm:w-12 sm:h-12 bg-[#C9A45C]/10 backdrop-blur-sm border border-[#C9A45C]/30 transform rotate-[40deg] rounded-sm shadow-md"></div>
        <div className="absolute bottom-[25%] left-[25%] w-8 h-8 sm:w-10 sm:h-10 bg-[#C9A45C]/15 backdrop-blur-sm border border-[#C9A45C]/30 transform -rotate-[55deg] rounded-sm shadow-md"></div>
      </div>
      
      {/* Título */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-12 sm:mb-14 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-center text-[#121212] mb-4 sm:mb-5 md:mb-6 animate-fade-in">
          TESTIMONIOS
        </h2>
        
        {/* Línea decorativa debajo del título */}
        <div className="flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent"></div>
        </div>
      </div>
      
      {/* Contenedor del carrusel infinito */}
      <div className="relative">
        {/* Gradientes laterales para efecto de fundido */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-[#D7D7D7] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-[#D7D7D7] to-transparent z-10 pointer-events-none"></div>
        
        {/* Carrusel animado - Loop infinito con drag control */}
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`overflow-x-auto scrollbar-hide select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-4 sm:gap-6">
            {testimoniosInfinitos.map((testimonio, index) => (
            <div
              key={`${testimonio.id}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[400px] bg-[#F5F3EF] rounded-lg p-4 sm:p-5 md:p-6 shadow-lg"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonio.estrellas)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-[#C9A45C]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              
              {/* Comentario */}
              <p className="font-montserrat text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6 min-h-[100px] sm:min-h-[110px] md:min-h-[120px]">
                "{testimonio.comentario}"
              </p>
              
              {/* Usuario */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Icono de usuario */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#C9A45C] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-white" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                
                {/* Nombre y profesión */}
                <div>
                  <p className="font-montserrat font-bold text-[#121212] text-sm sm:text-base">
                    {testimonio.nombre}
                  </p>
                  <p className="font-montserrat text-gray-600 text-xs sm:text-sm">
                    {testimonio.profesion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
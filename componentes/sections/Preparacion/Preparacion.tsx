import Image from "next/image"

export default function Preparacion() {
  return (
    <section id="preparacion" className="relative bg-[#121212] py-12 sm:py-16 md:py-20 px-4 pt-20 sm:pt-24 md:pt-32">
      {/* Gradiente de transición suave desde Productos */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-[#121212] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair text-center text-white mb-4 sm:mb-5 md:mb-6 animate-fade-in px-2 sm:px-4">
          EL SABOR SE CREA EN LA PREPARACIÓN
        </h2>
        
        {/* Línea decorativa debajo del título */}
        <div className="flex justify-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent"></div>
        </div>
        
        {/* Primera fila - Texto izquierda, Imagen derecha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
          {/* Texto */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 animate-fade-in px-2 sm:px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair text-[#C9A45C] mb-3 sm:mb-4">
              PERFECTA PARA EL FUEGO
            </h3>
            
            {/* Línea decorativa pequeña */}
            <div className="w-16 sm:w-20 h-0.5 bg-[#C9A45C] mb-3 sm:mb-4"></div>
            
            <p className="font-montserrat text-gray-300 text-base sm:text-lg leading-relaxed">
              Sus cristales gruesos permiten un sazonado uniforme, manteniendo la jugosidad y resaltando el sabor natural de la carne.
            </p>
          </div>
          
          {/* Imagen con decoración */}
          <div className="flex justify-center relative animate-fade-in-delay">
            {/* Cuadrado decorativo de fondo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] border-2 sm:border-4 border-[#C9A45C]/30 rounded-lg transform rotate-6"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] bg-[#C9A45C]/5 rounded-lg transform -rotate-3"></div>
            </div>
            
            {/* Imagen */}
            <div className="relative w-full max-w-md z-10 px-4 sm:px-6 md:px-4">
              <Image 
                src="/preparacion1-solymar-hd.png" 
                alt="Perfecta para el fuego" 
                width={500} 
                height={500}
                className="object-contain w-full h-full rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Segunda fila - Imagen izquierda, Texto derecha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Imagen con decoración */}
          <div className="flex justify-center relative order-2 md:order-1 animate-fade-in">
            {/* Cuadrado decorativo de fondo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] border-2 sm:border-4 border-[#C9A45C]/30 rounded-lg transform -rotate-6"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] bg-[#C9A45C]/5 rounded-lg transform rotate-3"></div>
            </div>
            
            {/* Imagen */}
            <div className="relative w-full max-w-md z-10 px-4 sm:px-6 md:px-4">
              <Image 
                src="/preparacion2-solymar-hd.png" 
                alt="Versátil para cada día" 
                width={500} 
                height={500}
                className="object-contain w-full h-full rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
          
          {/* Texto */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 md:order-2 animate-fade-in-delay px-2 sm:px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair text-[#C9A45C] mb-3 sm:mb-4">
              VERSÁTIL PARA CADA DÍA
            </h3>
            
            {/* Línea decorativa pequeña */}
            <div className="w-16 sm:w-20 h-0.5 bg-[#C9A45C] mb-3 sm:mb-4"></div>
            
            <p className="font-montserrat text-gray-300 text-base sm:text-lg leading-relaxed">
              Su textura equilibrada permite controlar mejor el sabor, ideal para recetas diarias y preparaciones saludables.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
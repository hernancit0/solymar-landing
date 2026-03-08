import Image from "next/image"

export default function Productos() {
  return (
    <section id="productos" className="relative bg-[#121212] py-12 sm:py-16 md:py-20 px-4 pt-20 sm:pt-24 md:pt-32">
      {/* Gradiente de transición suave desde Beneficios */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-[#E9E2D6] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair text-center text-white mb-3 sm:mb-4 px-2">
          NUESTRA LÍNEA DE SALES <span className="text-[#C9A45C]">PREMIUM</span>
        </h2>
        
        {/* Subtítulo */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-montserrat text-center text-gray-300 mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-2">
          Diferentes texturas y usos para cada tipo de preparación.
        </p>
        
        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Sal Parrillera */}
          <div className="bg-gradient-to-br from-[#E9E2D6] via-[#ddd5c7] to-[#d1c9bb] rounded-lg p-5 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
            {/* Efecto de brillo sutil */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair text-gray-900 mb-3 sm:mb-4 md:mb-6 relative z-10">
              SAL PARRILLERA
            </h3>
            
            {/* Línea divisoria */}
            <div className="w-full h-px bg-gray-800 mb-3 sm:mb-4 md:mb-6 relative z-10"></div>
            
            <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-3 sm:mb-4 md:mb-6 relative z-10">
              <Image 
                src="/salymar-sinfondo-hd.png" 
                alt="Sal Parrillera" 
                width={192} 
                height={192}
                className="object-contain w-full h-full"
              />
            </div>
            
            {/* Línea divisoria */}
            <div className="w-full h-px bg-gray-800 mb-3 sm:mb-4 md:mb-6 relative z-10"></div>
            
            <p className="font-montserrat text-gray-700 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed relative z-10">
              Cristales gruesos ideales para carnes y parrillas. Realza el sabor natural y aporta una textura perfecta al cocinar al fuego.
            </p>
            
            <button className="bg-[#C9A45C] text-white font-montserrat px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#b8934d] transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold mt-auto shadow-lg hover:shadow-xl relative z-10">
              Comprar ahora
            </button>
          </div>
          
          {/* Card 2 - Sal de Mesa */}
          <div className="bg-gradient-to-br from-[#C9A45C] via-[#b8934d] to-[#a68243] rounded-lg p-5 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[#C9A45C]/50 relative overflow-hidden">
            {/* Efecto de brillo sutil */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair text-white mb-3 sm:mb-4 md:mb-6 relative z-10">
              SAL DE MESA
            </h3>
            
            {/* Línea divisoria */}
            <div className="w-full h-px bg-white/50 mb-3 sm:mb-4 md:mb-6 relative z-10"></div>
            
            <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-3 sm:mb-4 md:mb-6 relative z-10">
              <Image 
                src="/salymar-sinfondo-hd.png" 
                alt="Sal de Mesa" 
                width={192} 
                height={192}
                className="object-contain w-full h-full"
              />
            </div>
            
            {/* Línea divisoria */}
            <div className="w-full h-px bg-white/50 mb-3 sm:mb-4 md:mb-6 relative z-10"></div>
            
            <p className="font-montserrat text-white/90 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed relative z-10">
              Grano fino y uniforme, perfecta para el uso diario en la cocina. Disuelve fácilmente y permite un sazonado equilibrado.
            </p>
            
            <button className="bg-[#121212] text-white font-montserrat px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold mt-auto shadow-lg hover:shadow-xl relative z-10">
              Comprar ahora
            </button>
          </div>
          
          {/* Card 3 - Sal Grano Medio */}
          <div className="bg-gradient-to-br from-[#E9E2D6] via-[#ddd5c7] to-[#d1c9bb] rounded-lg p-5 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
            {/* Efecto de brillo sutil */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair text-gray-900 mb-3 sm:mb-4 md:mb-6 relative z-10">
              SAL GRANO MEDIO
            </h3>
            
            {/* Línea divisoria */}
            <div className="w-full h-px bg-gray-800 mb-3 sm:mb-4 md:mb-6 relative z-10"></div>
            
            <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-3 sm:mb-4 md:mb-6 relative z-10">
              <Image 
                src="/salymar-sinfondo-hd.png" 
                alt="Sal Grano Medio" 
                width={192} 
                height={192}
                className="object-contain w-full h-full"
              />
            </div>
            
            {/* Línea divisoria */}
            <div className="w-full h-px bg-gray-800 mb-3 sm:mb-4 md:mb-6 relative z-10"></div>
            
            <p className="font-montserrat text-gray-700 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed relative z-10">
              Textura versátil que combina control y sabor. Ideal para quienes buscan equilibrio entre precisión y presencia en el plato.
            </p>
            
            <button className="bg-[#C9A45C] text-white font-montserrat px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#b8934d] transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold mt-auto shadow-lg hover:shadow-xl relative z-10">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
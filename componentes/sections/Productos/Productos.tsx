import Image from "next/image"

export default function Productos() {
  const whatsappGruesoUrl = `https://wa.me/51979369586?text=${encodeURIComponent("¡Hola SolyMar! 👋 Quiero comprar SAL GRANO GRUESO. ¿Me comparten precio, presentación y disponibilidad?")}`
  const whatsappFinoUrl = `https://wa.me/51979369586?text=${encodeURIComponent("¡Hola SolyMar! 👋 Quiero comprar SAL GRANO FINO. ¿Me comparten precio, presentación y disponibilidad?")}`
  const whatsappMedioUrl = `https://wa.me/51979369586?text=${encodeURIComponent("¡Hola SolyMar! 👋 Quiero comprar SAL GRANO MEDIO. ¿Me comparten precio, presentación y disponibilidad?")}`

  return (
    <section id="productos" className="relative bg-[#121212] py-12 sm:py-16 md:py-20 px-4 pt-20 sm:pt-24 md:pt-32 overflow-hidden">
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
      
      {/* Gradiente de transición suave desde Beneficios */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-[#E9E2D6] to-transparent"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-48 h-48 md:w-64 md:h-64 border-2 border-[#C9A45C]/10 rounded-full animate-pulse-slow"></div>
      <div className="hidden sm:block absolute bottom-1/4 right-10 w-64 h-64 md:w-80 md:h-80 border-2 border-[#C9A45C]/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#C9A45C]/5 rounded-full blur-3xl"></div>
      
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
          {/* Card 1 - Sal grano grueso */}
          <div className="bg-gradient-to-br from-[#E9E2D6] via-[#ddd5c7] to-[#d1c9bb] rounded-lg p-5 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
            {/* Efecto de brillo sutil */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair text-gray-900 mb-3 sm:mb-4 md:mb-6 relative z-10">
              SAL GRANO GRUESO
            </h3>
            
            {/* Línea divisoria */}
            <div className="w-full h-px bg-gray-800 mb-3 sm:mb-4 md:mb-6 relative z-10"></div>
            
            <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-3 sm:mb-4 md:mb-6 relative z-10">
              <Image 
                src="/salymar-granogrueso-sinfondo.png" 
                alt="Sal grano grueso" 
                width={192} 
                height={192}
                className="object-contain w-full h-full"
              />
            </div>
            
            {/* Línea divisoria */}
            <div className="w-full h-px bg-gray-800 mb-3 sm:mb-4 md:mb-6 relative z-10"></div>
            
            <div className="font-montserrat text-gray-700 mb-4 sm:mb-5 md:mb-6 relative z-10 text-left w-full">
              <p className="text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-3 text-center">
                Perfectas para brasas y parrillas
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A45C] mt-0.5 flex-shrink-0">✓</span>
                  <span>Parrillas y asados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A45C] mt-0.5 flex-shrink-0">✓</span>
                  <span>Pescados y mariscos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A45C] mt-0.5 flex-shrink-0">✓</span>
                  <span>Pollo y costillas</span>
                </li>
              </ul>
            </div>
            
            <a
              href={whatsappGruesoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A45C] text-white font-montserrat px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#b8934d] transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold mt-auto shadow-lg hover:shadow-xl relative z-10"
              aria-label="Comprar sal grano grueso por WhatsApp"
            >
              Comprar ahora
            </a>
          </div>
          
          {/* Card 2 - Sal grano fino */}
          <div className="bg-gradient-to-br from-[#C9A45C] via-[#b8934d] to-[#a68243] rounded-lg p-5 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[#C9A45C]/50 relative overflow-hidden">
            {/* Efecto de brillo sutil */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair text-white mb-3 sm:mb-4 md:mb-6 relative z-10">
              SAL GRANO FINO
            </h3>
            
            {/* Línea divisoria */}
            <div className="w-full h-px bg-white/50 mb-3 sm:mb-4 md:mb-6 relative z-10"></div>
            
            <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-3 sm:mb-4 md:mb-6 relative z-10">
              <Image 
                src="/salymar-granofino-sinfondo.png" 
                alt="Sal grano fino" 
                width={192} 
                height={192}
                className="object-contain w-full h-full"
              />
            </div>
            
            {/* Línea divisoria */}
            <div className="w-full h-px bg-white/50 mb-3 sm:mb-4 md:mb-6 relative z-10"></div>
            
            <div className="font-montserrat text-white/90 mb-4 sm:mb-5 md:mb-6 relative z-10 text-left w-full">
              <p className="text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-3 text-center">
                Ideal para cocina diaria
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5 flex-shrink-0">✓</span>
                  <span>Arroces y sopas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5 flex-shrink-0">✓</span>
                  <span>Guisos y menestras</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5 flex-shrink-0">✓</span>
                  <span>Sazonado general</span>
                </li>
              </ul>
            </div>
            
            <a
              href={whatsappFinoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121212] text-white font-montserrat px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold mt-auto shadow-lg hover:shadow-xl relative z-10"
              aria-label="Comprar sal grano fino por WhatsApp"
            >
              Comprar ahora
            </a>
          </div>
          
          {/* Card 3 - Sal grano medio */}
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
                src="/salymar-granomedio-sinfondo.png" 
                alt="Sal grano medio" 
                width={192} 
                height={192}
                className="object-contain w-full h-full"
              />
            </div>
            
            {/* Línea divisoria */}
            <div className="w-full h-px bg-gray-800 mb-3 sm:mb-4 md:mb-6 relative z-10"></div>
            
            <div className="font-montserrat text-gray-700 mb-4 sm:mb-5 md:mb-6 relative z-10 text-left w-full">
              <p className="text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-3 text-center">
                El toque final perfecto
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A45C] mt-0.5 flex-shrink-0">✓</span>
                  <span>Ensaladas frescas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A45C] mt-0.5 flex-shrink-0">✓</span>
                  <span>Huevos y desayunos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A45C] mt-0.5 flex-shrink-0">✓</span>
                  <span>Papas y snacks</span>
                </li>
              </ul>
            </div>
            
            <a
              href={whatsappMedioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A45C] text-white font-montserrat px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#b8934d] transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold mt-auto shadow-lg hover:shadow-xl relative z-10"
              aria-label="Comprar sal grano medio por WhatsApp"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
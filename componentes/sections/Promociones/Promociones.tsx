export default function Promociones() {
  return (
    <section id="promociones" className="relative bg-[#121212] py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32 overflow-hidden">
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
      
      {/* Gradiente de transición suave desde Preparación */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-[#121212] to-transparent"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-48 h-48 md:w-64 md:h-64 border-2 border-[#C9A45C]/10 rounded-full animate-pulse-slow"></div>
      <div className="hidden sm:block absolute bottom-1/4 right-10 w-64 h-64 md:w-80 md:h-80 border-2 border-[#C9A45C]/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#C9A45C]/5 rounded-full blur-3xl"></div>
      
      {/* Título */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-center text-white mb-4 sm:mb-5 md:mb-6 animate-fade-in">
          PROMOCIONES ESPECIALES
        </h2>
        
        {/* Línea decorativa debajo del título */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent"></div>
        </div>
      </div>
      
      {/* Franja negra con borde dorado brilloso - Full width */}
      <div className="relative mb-6 sm:mb-8 animate-fade-in-delay">
        {/* Brillo animado superior */}
        <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent animate-pulse-slow"></div>
        
        <div className="bg-black border-t-2 border-b-2 sm:border-t-4 sm:border-b-4 border-[#C9A45C] shadow-[0_0_20px_rgba(201,164,92,0.5)] overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#C9A45C]">
            {/* Promoción izquierda - 15% OFF */}
            <div className="p-6 sm:p-8 md:p-12 text-center space-y-3 sm:space-y-4 relative group">
              {/* Badge "NUEVO CLIENTE" */}
              <div className="inline-block bg-[#C9A45C] text-black text-[10px] sm:text-xs font-montserrat font-bold px-3 sm:px-4 py-1 rounded-full mb-1 sm:mb-2">
                NUEVO CLIENTE
              </div>
              
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-playfair text-[#C9A45C] font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                15% OFF
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-montserrat text-white font-semibold">
                en tu primera compra
              </p>
              
              {/* Línea decorativa */}
              <div className="flex justify-center py-1.5 sm:py-2">
                <div className="w-12 sm:w-16 h-0.5 bg-[#C9A45C]/50"></div>
              </div>
              
              <p className="font-montserrat text-gray-300 text-sm sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-4 max-w-sm mx-auto leading-relaxed px-2 sm:px-0">
                Descubre el sabor de SolyMar con un descuento especial de bienvenida.
              </p>
            </div>
            
            {/* Promoción derecha - Pack 3 variedades */}
            <div className="p-6 sm:p-8 md:p-12 text-center space-y-3 sm:space-y-4 relative group">
              {/* Badge "PACK COMPLETO" */}
              <div className="inline-block bg-[#C9A45C] text-black text-[10px] sm:text-xs font-montserrat font-bold px-3 sm:px-4 py-1 rounded-full mb-1 sm:mb-2">
                PACK COMPLETO
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair text-[#C9A45C] font-bold mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                Lleva las 3 variedades<br/>a precio especial
              </h3>
              
              {/* Línea decorativa */}
              <div className="flex justify-center py-1.5 sm:py-2">
                <div className="w-12 sm:w-16 h-0.5 bg-[#C9A45C]/50"></div>
              </div>
              
              <p className="font-montserrat text-white text-base sm:text-lg md:text-xl leading-relaxed">
                Grano grueso + Grano fino + Grano medio<br/>en un solo pack
              </p>
              
              {/* Puntos decorativos */}
              <div className="flex justify-center gap-1.5 sm:gap-2 pt-1.5 sm:pt-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C9A45C]"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C9A45C]"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C9A45C]"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Brillo animado inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent animate-pulse-slow"></div>
      </div>
      
      {/* Botón Obtener Oferta */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-2 sm:space-y-3 animate-fade-in">
          <button className="bg-[#C9A45C] hover:bg-[#B8934B] text-black font-montserrat font-bold text-base sm:text-lg px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(201,164,92,0.6)] transition-all duration-300 transform hover:scale-105 uppercase tracking-wider">
            Obtener Oferta
          </button>
          <p className="font-montserrat text-gray-400 text-xs sm:text-sm italic">
            promoción por tiempo limitado
          </p>
        </div>
      </div>
    </section>
  )
}
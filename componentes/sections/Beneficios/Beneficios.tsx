import Image from "next/image"

export default function Beneficios() {
  return (
    <section id="beneficios" className="relative bg-[#E9E2D6] py-12 sm:py-16 md:py-20 px-4 pt-20 sm:pt-24 md:pt-32">
      {/* Gradiente de transición suave desde Hero */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-[#121212] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-center text-gray-900 mb-3 sm:mb-4 animate-fade-in">
          BENEFICIOS
        </h2>
        
        {/* Subtítulo */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat text-center text-gray-700 mb-10 sm:mb-12 md:mb-14 lg:mb-16 animate-fade-in px-2">
          ¿Por qué comprar nuestra sal?
        </p>
        
        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {/* Beneficio 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-4 sm:mb-5 md:mb-6">
              {/* Sutil resplandor de fondo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#C9A45C]/10 to-transparent rounded-full blur-2xl"></div>
              </div>
              
              {/* Imagen */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg relative z-10 transform group-hover:scale-105 transition-all duration-300 ring-2 sm:ring-4 ring-white group-hover:ring-[#C9A45C]/30">
                <Image 
                  src="/beneficios-1.jpg" 
                  alt="Origen marino natural" 
                  width={192} 
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="font-montserrat text-gray-800 text-base sm:text-lg font-medium group-hover:text-[#C9A45C] transition-colors">
              Origen marino natural
            </p>
          </div>
          
          {/* Beneficio 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-4 sm:mb-5 md:mb-6">
              {/* Sutil resplandor de fondo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#C9A45C]/10 to-transparent rounded-full blur-2xl"></div>
              </div>
              
              {/* Imagen */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg relative z-10 transform group-hover:scale-105 transition-all duration-300 ring-2 sm:ring-4 ring-white group-hover:ring-[#C9A45C]/30">
                <Image 
                  src="/beneficios-2.jpg" 
                  alt="Ideal para parrilla y cocina diaria" 
                  width={192} 
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="font-montserrat text-gray-800 text-base sm:text-lg font-medium group-hover:text-[#C9A45C] transition-colors">
              Ideal para parrilla y cocina diaria
            </p>
          </div>
          
          {/* Beneficio 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-4 sm:mb-5 md:mb-6">
              {/* Sutil resplandor de fondo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#C9A45C]/10 to-transparent rounded-full blur-2xl"></div>
              </div>
              
              {/* Imagen */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg relative z-10 transform group-hover:scale-105 transition-all duration-300 ring-2 sm:ring-4 ring-white group-hover:ring-[#C9A45C]/30">
                <Image 
                  src="/beneficios-3.webp" 
                  alt="Sin yodo ni aditivos" 
                  width={192} 
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="font-montserrat text-gray-800 text-base sm:text-lg font-medium group-hover:text-[#C9A45C] transition-colors">
              Sin yodo ni aditivos
            </p>
          </div>
          
          {/* Beneficio 4 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-4 sm:mb-5 md:mb-6">
              {/* Sutil resplandor de fondo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#C9A45C]/10 to-transparent rounded-full blur-2xl"></div>
              </div>
              
              {/* Imagen */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg relative z-10 transform group-hover:scale-105 transition-all duration-300 ring-2 sm:ring-4 ring-white group-hover:ring-[#C9A45C]/30">
                <Image 
                  src="/beneficios-4.jpg" 
                  alt="Producto peruano" 
                  width={192} 
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="font-montserrat text-gray-800 text-base sm:text-lg font-medium group-hover:text-[#C9A45C] transition-colors">
              Producto peruano
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
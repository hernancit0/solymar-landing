import Image from "next/image"

export default function Bienestar() {
  const beneficios = [
    {
      icono: "💎",
      titulo: "Aporte natural de minerales",
      descripcion: "La sal marina puede contener pequeñas trazas de minerales como magnesio, calcio y potasio, presentes de forma natural en el agua de mar."
    },
    {
      icono: "🌿",
      titulo: "Menor procesamiento industrial",
      descripcion: "La sal marina se obtiene mediante evaporación natural, lo que permite conservar su composición mineral original."
    },
    {
      icono: "⚖️",
      titulo: "Equilibrio de electrolitos",
      descripcion: "El sodio es un electrolito esencial que participa en funciones como la hidratación celular y el funcionamiento muscular."
    },
    {
      icono: "⚡",
      titulo: "Apoyo a la función nerviosa y muscular",
      descripcion: "Los electrolitos presentes en la sal ayudan al correcto funcionamiento del sistema nervioso y muscular cuando se consumen en cantidades adecuadas."
    },
    {
      icono: "🌍",
      titulo: "Fuente tradicional en dietas naturales",
      descripcion: "Durante siglos la sal marina ha sido utilizada en distintas culturas como fuente natural de minerales en la alimentación diaria."
    }
  ]

  return (
    <section id="bienestar" className="relative bg-[#D7D7D7] py-12 sm:py-16 md:py-20 px-4 pt-20 sm:pt-24 md:pt-32 overflow-hidden">
      {/* Gradiente de transición suave desde Testimonios */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-[#D7D7D7] to-transparent"></div>
      
      {/* Cristales de sal decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cristales grandes */}
        <div className="absolute top-[12%] right-[7%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm transform -rotate-[25deg] rounded-sm shadow-lg"></div>
        <div className="absolute top-[20%] left-[6%] w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 bg-white/25 backdrop-blur-sm transform rotate-[35deg] rounded-sm shadow-lg"></div>
        <div className="absolute bottom-[15%] right-[10%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/15 backdrop-blur-sm transform rotate-[50deg] rounded-sm shadow-md"></div>
        <div className="absolute bottom-[25%] left-[8%] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm transform -rotate-[15deg] rounded-sm shadow-lg"></div>
        
        {/* Cristales medianos */}
        <div className="absolute top-[40%] right-[15%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/30 backdrop-blur-sm transform -rotate-[40deg] rounded-sm shadow-md"></div>
        <div className="absolute top-[55%] left-[12%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/25 backdrop-blur-sm transform rotate-[55deg] rounded-sm shadow-md"></div>
        <div className="absolute bottom-[35%] right-[22%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm transform -rotate-[70deg] rounded-sm shadow-md"></div>
        <div className="absolute top-[65%] left-[18%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/25 backdrop-blur-sm transform rotate-[20deg] rounded-sm shadow-lg"></div>
        
        {/* Cristales pequeños */}
        <div className="absolute top-[28%] left-[15%] w-6 h-6 sm:w-8 sm:h-8 bg-white/35 backdrop-blur-sm transform -rotate-[30deg] rounded-sm shadow-sm"></div>
        <div className="absolute top-[48%] right-[10%] w-7 h-7 sm:w-9 sm:h-9 bg-white/30 backdrop-blur-sm transform rotate-[45deg] rounded-sm shadow-sm"></div>
        <div className="absolute bottom-[45%] left-[25%] w-6 h-6 sm:w-8 sm:h-8 bg-white/25 backdrop-blur-sm transform -rotate-[60deg] rounded-sm shadow-sm"></div>
        <div className="absolute top-[75%] right-[28%] w-8 h-8 sm:w-10 sm:h-10 bg-white/30 backdrop-blur-sm transform rotate-[10deg] rounded-sm shadow-sm"></div>
        <div className="absolute bottom-[50%] right-[35%] w-6 h-6 sm:w-7 sm:h-7 bg-white/20 backdrop-blur-sm transform -rotate-[50deg] rounded-sm shadow-sm"></div>
        
        {/* Cristales con brillo dorado */}
        <div className="absolute top-[32%] right-[25%] w-10 h-10 sm:w-12 sm:h-12 bg-[#C9A45C]/10 backdrop-blur-sm border border-[#C9A45C]/30 transform -rotate-[45deg] rounded-sm shadow-md"></div>
        <div className="absolute bottom-[20%] left-[28%] w-8 h-8 sm:w-10 sm:h-10 bg-[#C9A45C]/15 backdrop-blur-sm border border-[#C9A45C]/30 transform rotate-[65deg] rounded-sm shadow-md"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-[#121212] mb-3 sm:mb-4 animate-fade-in leading-tight">
            BIENESTAR QUE COMIENZA
            <span className="block text-[#C9A45C] mt-2">CON LO NATURAL</span>
          </h2>
          
          {/* Línea decorativa */}
          <div className="flex justify-center mt-4 sm:mt-6 mb-4 sm:mb-6">
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent"></div>
          </div>
          
          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl font-montserrat text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Beneficios de la sal marina respaldados por nutrición y estudios científicos.
          </p>
        </div>
        
        {/* Contenido principal - Grid 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Imagen a la izquierda */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A45C]/10 to-transparent z-10 group-hover:from-[#C9A45C]/20 transition-all duration-500"></div>
              
              {/* Imagen */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4]">
                <Image 
                  src="/salud.png"
                  alt="Bienestar natural con sal marina"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Decoración de esquinas */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-[#C9A45C] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-[#C9A45C] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Círculo decorativo de fondo */}
            <div className="hidden lg:block absolute -z-10 -top-6 -left-6 w-32 h-32 bg-[#C9A45C]/20 rounded-full blur-2xl"></div>
            <div className="hidden lg:block absolute -z-10 -bottom-6 -right-6 w-40 h-40 bg-[#C9A45C]/15 rounded-full blur-2xl"></div>
          </div>
          
          {/* Beneficios a la derecha */}
          <div className="space-y-4 sm:space-y-5 order-1 lg:order-2">
            {beneficios.map((beneficio, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#C9A45C]/30 relative overflow-hidden"
              >
                {/* Brillo dorado en hover */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A45C] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#C9A45C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-start gap-3 sm:gap-4 relative z-10">
                  {/* Icono */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#C9A45C]/10 to-[#C9A45C]/5 rounded-full flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                    {beneficio.icono}
                  </div>
                  
                  {/* Contenido */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-playfair text-base sm:text-lg md:text-xl text-[#121212] mb-1.5 sm:mb-2 group-hover:text-[#C9A45C] transition-colors duration-300 font-semibold">
                      {beneficio.titulo}
                    </h3>
                    <p className="font-montserrat text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {beneficio.descripcion}
                    </p>
                  </div>
                </div>
                
                {/* Esquina decorativa */}
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-[#C9A45C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Nota científica opcional */}
        <div className="mt-10 sm:mt-12 md:mt-14 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm border-l-4 border-[#C9A45C] rounded-r-lg p-4 sm:p-5 md:p-6 shadow-md">
            <p className="font-montserrat text-xs sm:text-sm text-gray-700 leading-relaxed italic">
              <span className="font-semibold text-[#C9A45C] not-italic">Nota:</span> El consumo de sodio debe ser moderado y adaptado a las necesidades individuales. Consulte con un profesional de la salud para una dieta equilibrada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

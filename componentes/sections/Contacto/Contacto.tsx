import Image from "next/image"

export default function Contacto() {
  const whatsappUrl = "https://wa.me/51979369586?text=%C2%A1Hola%20SolyMar!%20%F0%9F%91%8B%20Vi%20su%20web%20y%20me%20interesa%20conocer%20sus%20sales%20premium%20(grano%20grueso%2C%20fino%20y%20medio).%20%C2%BFPodr%C3%ADan%20enviarme%20precios%2C%20presentaciones%20y%20promociones%20disponibles%3F%20%C2%A1Gracias!"

  return (
    <section id="contacto" className="relative bg-[#121212] py-12 sm:py-16 md:py-20 px-4 pt-20 sm:pt-24 md:pt-32 overflow-hidden">
      {/* Gradiente de transición suave desde Testimonios */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-[#D7D7D7] to-transparent"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-48 h-48 md:w-64 md:h-64 border-2 border-[#C9A45C]/10 rounded-full animate-pulse-slow"></div>
      <div className="hidden sm:block absolute bottom-1/4 right-10 w-64 h-64 md:w-80 md:h-80 border-2 border-[#C9A45C]/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#C9A45C]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título y subtítulo */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-white mb-3 sm:mb-4">
            HABLEMOS
          </h2>
          
          {/* Línea decorativa */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent"></div>
          </div>
          
          <p className="font-montserrat text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Escríbenos o contáctanos directamente por WhatsApp.
          </p>
        </div>
        
        {/* Grid de dos cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 animate-fade-in-delay">
          {/* Card Formulario - Izquierda */}
          <div className="bg-[#1F1F1F] rounded-lg p-5 sm:p-6 md:p-8 shadow-xl border border-[#C9A45C]/20 hover:border-[#C9A45C]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,164,92,0.2)]">
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-playfair text-white font-bold mb-2 sm:mb-3 text-center">
              ESCRÍBENOS
            </h3>
            
            <p className="text-center font-montserrat text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
              Completa el formulario y te responderemos pronto
            </p>
            
            {/* Línea decorativa */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 sm:w-20 h-0.5 bg-[#C9A45C]"></div>
            </div>
            
            <form className="space-y-4 sm:space-y-5">
              {/* Nombre y Apellidos */}
              <div className="group">
                <label htmlFor="nombre" className="block font-montserrat text-gray-300 text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 group-focus-within:text-[#C9A45C] transition-colors">
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    Nombre y Apellidos
                  </span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-[#121212] border-2 border-gray-700 focus:border-[#C9A45C] focus:outline-none font-montserrat transition-all duration-300 text-white placeholder-gray-500 hover:border-gray-600"
                  placeholder="Ingresa tu nombre completo"
                />
              </div>
              
              {/* Correo Electrónico */}
              <div className="group">
                <label htmlFor="email" className="block font-montserrat text-gray-300 text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 group-focus-within:text-[#C9A45C] transition-colors">
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Correo Electrónico
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-[#121212] border-2 border-gray-700 focus:border-[#C9A45C] focus:outline-none font-montserrat transition-all duration-300 text-white placeholder-gray-500 hover:border-gray-600"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>
              
              {/* Asunto */}
              <div className="group">
                <label htmlFor="asunto" className="block font-montserrat text-gray-300 text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 group-focus-within:text-[#C9A45C] transition-colors">
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    Asunto
                  </span>
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-[#121212] border-2 border-gray-700 focus:border-[#C9A45C] focus:outline-none font-montserrat transition-all duration-300 text-white placeholder-gray-500 hover:border-gray-600"
                  placeholder="¿Sobre qué quieres consultar?"
                />
              </div>
              
              {/* Descripción */}
              <div className="group">
                <label htmlFor="descripcion" className="block font-montserrat text-gray-300 text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 group-focus-within:text-[#C9A45C] transition-colors">
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                    Descripción
                  </span>
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-[#121212] border-2 border-gray-700 focus:border-[#C9A45C] focus:outline-none font-montserrat resize-none transition-all duration-300 text-white placeholder-gray-500 hover:border-gray-600"
                  placeholder="Cuéntanos más detalles..."
                ></textarea>
              </div>
              
              {/* Botón Enviar */}
              <button
                type="submit"
                className="w-full bg-[#C9A45C] hover:bg-[#B8934B] text-black font-montserrat font-bold text-base sm:text-lg py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(201,164,92,0.6)] transition-all duration-300 transform hover:scale-105 uppercase tracking-wider mt-4 sm:mt-6"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  Enviar Mensaje
                </span>
              </button>
            </form>
          </div>
          
          {/* Card WhatsApp - Derecha */}
          <div className="bg-[#1F1F1F] rounded-lg p-5 sm:p-6 md:p-8 shadow-xl border border-[#C9A45C]/20 hover:border-[#C9A45C]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,164,92,0.2)] flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            {/* Logo WhatsApp con efecto */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Image
                src="/wsp-logo.webp"
                alt="WhatsApp Logo"
                width={160}
                height={160}
                className="object-contain"
              />
              {/* Círculo decorativo animado */}
              <div className="absolute inset-0 border-4 border-[#25D366]/20 rounded-full animate-ping"></div>
            </div>
            
            {/* Textos */}
            <div className="text-center space-y-2 sm:space-y-3">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair text-white font-bold">
                ¿Prefieres atención rápida?
              </h3>
              
              {/* Línea decorativa */}
              <div className="flex justify-center py-1.5 sm:py-2">
                <div className="w-12 sm:w-16 h-0.5 bg-[#C9A45C]"></div>
              </div>
              
              <p className="font-montserrat text-gray-300 text-base sm:text-lg leading-relaxed">
                Respuesta rápida por Whatsapp
              </p>
              
              {/* Beneficios */}
              <div className="pt-3 sm:pt-4 space-y-1.5 sm:space-y-2">
                <p className="font-montserrat text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Atención inmediata
                </p>
                <p className="font-montserrat text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Disponible 24/7
                </p>
                <p className="font-montserrat text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Soporte personalizado
                </p>
              </div>
            </div>
            
            {/* Botón WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-montserrat font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:scale-105 mt-3 sm:mt-4"
              aria-label="Abrir chat de WhatsApp"
            >
              {/* Icono WhatsApp */}
              <Image
                src="/wsp-logo.webp"
                alt="WhatsApp"
                width={20}
                height={20}
                className="object-contain sm:w-6 sm:h-6"
              />
              Hablar por Whatsapp
            </a>
            
            {/* Texto adicional */}
            <p className="font-montserrat text-gray-500 text-xs text-center italic mt-1.5 sm:mt-2">
              Haz clic para iniciar una conversación
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
import Image from "next/image"

export default function Hero() {
  const whatsappUrl = `https://wa.me/51979369586?text=${encodeURIComponent("¡Hola SolyMar! 👋 Quiero comprar sal marina premium. ¿Podrían compartir precios, presentaciones y promociones disponibles?")}`

  return (
    <section id="inicio" className="min-h-screen bg-[#121212] flex items-center px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-14 py-16 sm:py-20 md:py-0 pt-24 sm:pt-28 md:pt-24 overflow-hidden">
      <div className="max-w-[88rem] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
        {/* Texto Izquierdo */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 xl:space-y-8 md:-ml-12 xl:-ml-0 animate-fade-in text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-playfair text-white leading-tight px-2 sm:px-0">
            SAL MARINA <span className="text-[#C9A45C] inline-block transform hover:scale-105 transition-transform">PREMIUM</span> PARA LOS QUE SABEN DE SABOR Y SALUD
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl font-montserrat text-gray-300 leading-relaxed px-2 sm:px-0">
            100% natural • Sin aditivos • Sabor auténtico
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A45C] text-white font-montserrat px-8 sm:px-10 xl:px-12 py-3 sm:py-4 xl:py-5 rounded-lg hover:bg-[#b8934d] hover:shadow-2xl hover:shadow-[#C9A45C]/50 transition-all duration-300 text-sm sm:text-base md:text-lg xl:text-xl font-semibold mt-6 sm:mt-8 transform hover:scale-105 shadow-lg"
            aria-label="Comprar por WhatsApp"
          >
            Comprar ahora
          </a>
        </div>
        
        {/* Imagen Derecha */}
        <div className="flex justify-center relative animate-fade-in-delay">
          {/* Diseño decorativo de fondo */}
          <div className="absolute inset-0 flex items-center justify-center animate-pulse-slow">
            <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] 2xl:w-[580px] 2xl:h-[580px] bg-[#C9A45C] rounded-full opacity-30 blur-3xl"></div>
          </div>
          <div className="hidden sm:flex absolute inset-0 items-center justify-center animate-spin-slow">
            <div className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] 2xl:w-[620px] 2xl:h-[620px] border-4 sm:border-6 md:border-8 border-[#C9A45C] rounded-full opacity-40 border-dashed"></div>
          </div>
          <div className="hidden sm:flex absolute inset-0 items-center justify-center">
            <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] 2xl:w-[520px] 2xl:h-[520px] border-2 sm:border-3 md:border-4 border-[#C9A45C] rounded-full opacity-20"></div>
          </div>
          
          {/* Imagen del producto */}
          <Image 
            src="/solymar.hero.png" 
            alt="Sal Marina SolyMar" 
            width={400} 
            height={400}
            className="object-contain w-full max-w-[270px] sm:max-w-[340px] md:max-w-[350px] xl:max-w-[395px] 2xl:max-w-[435px] relative z-10 transform hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </div>
    </section>
  )
}
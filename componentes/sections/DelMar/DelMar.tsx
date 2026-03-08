export default function DelMar() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-[#121212] flex items-center justify-center">
      {/* Gradiente de transición desde Contacto */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#121212] to-transparent z-10"></div>
      
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/mar.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 w-full h-full bg-black/50 z-5" />
      
      {/* Texto */}
      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair text-white font-light tracking-wide drop-shadow-2xl leading-tight">
          DEL MAR A TU CASA<span className="animate-blink-cursor ml-1">|</span>
        </h2>
      </div>
    </section>
  )
}

import Image from "next/image"

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/51979369586?text=${encodeURIComponent("¡Hola SolyMar! 👋 Quiero información de sus productos y promociones.")}`

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 xl:bottom-8 xl:right-10 z-[9999]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar chat por WhatsApp"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-montserrat font-semibold text-sm sm:text-base xl:text-lg px-4 sm:px-5 xl:px-6 py-3 xl:py-3.5 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:scale-105"
      >
        <span>Iniciar chat</span>
        <Image
          src="/wsp-logo.webp"
          alt="WhatsApp"
          width={22}
          height={22}
          className="object-contain sm:w-6 sm:h-6 xl:w-7 xl:h-7"
        />
      </a>
    </div>
  )
}

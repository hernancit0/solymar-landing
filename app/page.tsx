import Hero from "@/componentes/sections/Hero/Hero"
import Beneficios from "@/componentes/sections/Beneficios/Beneficios"
import Productos from "@/componentes/sections/Productos/Productos"
import Promociones from "@/componentes/sections/Promociones/Promociones"
import Preparacion from "@/componentes/sections/Preparacion/Preparacion"
import Testimonios from "@/componentes/sections/Testimonios/Testimonios"
import Contacto from "@/componentes/sections/Contacto/Contacto"
import DelMar from "@/componentes/sections/DelMar/DelMar"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Beneficios />
      <Productos />
      <Preparacion />
      <Promociones />
      <Testimonios />
      <Contacto />
      <DelMar />
    </main>
  )
}

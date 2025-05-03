import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function WhyChooseMeSection() {
  return (
    <section
      id="por-que-elegirme"
      className="relative scroll-mt-35 py-16 md:py-24 px-10 md:px-16 lg:px-24 "
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10 ">
        <Image
          src="/logo-3d.png"
          alt="Fondo Por Qué Elegirme"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#2D2E83]">
          ¿Por qué Elegirme?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8] bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-[#1D71B8] mb-4" />
              <h3 className="text-lg font-extrabold italic mb-2 text-[#0e12f9]">Experiencia</h3>
              <p className="text-black">Más de 25 años de experiencia en litigios y asesoría legal</p>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8] bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-[#1D71B8] mb-4" />
              <h3 className="text-lg font-extrabold italic mb-2 text-[#0e12f9]">Equipo Interdisciplinario</h3>
              <p className="text-black">Trabajo con especialistas y peritos forenses en diversas áreas</p>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8] bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-[#1D71B8] mb-4" />
              <h3 className="text-lg font-extrabold italic mb-2 text-[#0e12f9]">Atención Personalizada</h3>
              <p className="text-black">Estrategia adaptada a las necesidades específicas de cada cliente</p>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8] bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-[#1D71B8] mb-4" />
              <h3 className="text-lg font-extrabold italic mb-2 text-[#0e12f9]">Valores</h3>
              <p className="text-black">Ética, compromiso y resultados en cada caso que asumo</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

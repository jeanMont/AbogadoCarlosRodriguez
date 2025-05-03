import Image from "next/image"

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative scroll-mt-35 py-16 md:py-24 px-10 md:px-16 lg:px-24   "
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10 ">
        <Image
          src="/logo-3d.png" // <-- reemplaza esto con tu imagen real
          alt="Fondo de la sección Sobre mí"
          fill
          className="object-cover object-center opacity-15"
          priority
        />
        {/* Puedes ajustar la opacidad o agregar un overlay si lo deseas */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container relative z-10">
        <h2 className="text-5xl md:text-4xl font-bold mb-12 text-center text-[#2D2E83]">Acerca de mí</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl border-2 border-[#1D71B8]">
            <Image
              src="/CARLOSR.jpg?height=800&width=600"
              alt="Carlos Alberto Rodríguez en su oficina"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-2xl">
            <p className="text-[#2D2E83]">
              Soy abogado con una trayectoria de más de dos décadas en el ejercicio del Derecho Penal colombiano. Mi
              enfoque combina la ética profesional, la preparación técnica y una estrategia legal adaptada a cada
              caso.
            </p>
            <p className="text-[#2D2E83]">
              Trabajo en conjunto con un equipo multidisciplinario de abogados y peritos forenses en distintas
              áreas, lo que me permite ofrecer soluciones jurídicas integrales, confiables y de alto nivel, tanto a
              personas naturales como jurídicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

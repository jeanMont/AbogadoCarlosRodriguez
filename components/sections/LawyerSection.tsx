import { Phone } from "lucide-react"


export default function LawyerSection(){
    return (
        <section id="inicio" className="scroll-mt-20 relative py-10 md:py-28 px-10 md:px-16 lg:px-24 overflow-hidden">
            <div className="container relative z-30 flex flex-col items-center text-center animate-float space-y-6">
              
        <h1 className="text-5xl md:text-5xl font-bold tracking-tight text-[#2D2E83] animate-fade-in-up">
          Carlos Alberto Rodríguez Gutiérrez
        </h1>
        <h2 className="text-2xl md:text-2xl font-medium text-[#1D71B8] animate-fade-in-up animation-delay-200">
          Abogado Penalista | Asesor Jurídico Integral
        </h2>
        <p className="text-lg font-medium italic text-[#2D2E83] animate-fade-in-up animation-delay-400">
          "Defensa estratégica, asesoría ética y compromiso con la justicia."
        </p>
        <p className="text-[#2D2E83] text-xl max-w-2xl animate-fade-in-up animation-delay-600">
          Más de 25 años de experiencia al servicio de la justicia y la defensa de los derechos ciudadanos. Brindo
          representación legal y asesoría en procesos penales, civiles, laborales, administrativos y corporativos,
          respaldado por un equipo interdisciplinario de alto nivel.
        </p>
         <div className="flex items-center gap-2 animate-fade-in-up animation-delay-800">
          <Phone className="h-5 w-5 text-[#9A9A9C]" />
          <p className="font-medium text-[#2D2E83]">
            Agenda tu cita hoy mismo para consultas.
          </p>
        </div>
        
            </div>

        </section>
        
    )

}
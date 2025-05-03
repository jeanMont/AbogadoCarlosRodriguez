import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="scroll-mt-35 py-16 md:py-24 bg-white px-10 md:px-16 lg:px-24 ">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#2D2E83]">Testimonios</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8]">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4 text-[#1D71B8]">"</div>
                <p className="text-[#9A9A9C] mb-6 flex-grow">
                  El Dr. Rodríguez llevó mi caso con profesionalismo y humanidad. Gracias a su gestión, obtuvimos
                  justicia.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full border border-[#1D71B8] bg-[#f0f7ff] text-[#1D71B8] font-medium">
                    LM
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2E83]">Laura M.</p>
                    <p className="text-sm text-[#9A9A9C]">Cliente penal</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8]">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4 text-[#1D71B8]">"</div>
                <p className="text-[#9A9A9C] mb-6 flex-grow">
                  Excelente abogado, comprometido y con gran conocimiento. Lo recomiendo sin dudar.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full border border-[#1D71B8] bg-[#f0f7ff] text-[#1D71B8] font-medium">
                    CT
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2E83]">Carlos T.</p>
                    <p className="text-sm text-[#9A9A9C]">Cliente corporativo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          {/* <Button
            variant="outline"
            className="cursor-pointer border-[#1D71B8] text-[#1D71B8] hover:bg-[#1D71B8] hover:text-white"
          >
            Ver más testimonios
          </Button> */}
        </div>
      </div>
    </section>
  )
}

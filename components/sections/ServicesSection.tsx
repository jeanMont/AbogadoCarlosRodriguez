import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-35 py-16 md:py-24 bg-white px-10 md:px-16 lg:px-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#2D2E83]">Servicios</h2>
        <p className="text-xl text-[#1D71B8] italic text-center mb-12">Áreas de práctica legal</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8]">
            <CardContent className="p-6">
              <div className="mb-4 text-3xl">⚖️</div>
              <h3 className="text-xl font-extrabold italic mb-3 text-[#2D2E83]">Derecho Penal</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">Defensa técnica y estratégica en procesos penales</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Representación en audiencias públicas y todas las etapas procesales
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Intervención como acusador privado conforme a la Ley Procesal Penal Colombiana
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service Card 2 */}
          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8]">
            <CardContent className="p-6">
              <div className="mb-4 text-3xl">🔍</div>
              <h3 className="text-xl font-extrabold italic mb-3 text-[#2D2E83]">Investigación Privada y Criminalística</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Investigación privada especializada aplicada al ámbito penal y corporativo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Coordinación con peritos forenses (informática, contaduría, psicología, balística, grafología)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Análisis técnico y probatorio orientado al fortalecimiento de la defensa o la acusación
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service Card 3 */}
          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8]">
            <CardContent className="p-6">
              <div className="mb-4 text-3xl">💼</div>
              <h3 className="text-xl font-extrabold italic mb-3 text-[#2D2E83]">Extinción de Dominio</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Asesoría y representación en procesos de extinción de dominio
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Defensa de bienes afectados por medidas cautelares o decisiones judiciales
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Análisis patrimonial y estrategia procesal para la recuperación de activos
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service Card 4 */}
          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8]">
            <CardContent className="p-6">
              <div className="mb-4 text-3xl">🏢</div>
              <h3 className="text-xl font-extrabold italic mb-3 text-[#2D2E83]">Asesoría Corporativa y Comercial</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Constitución, reorganización y formalización de empresas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">Redacción, análisis y negociación de contratos</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Gestión preventiva de riesgos legales y cumplimiento normativo
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service Card 5 */}
          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8]">
            <CardContent className="p-6">
              <div className="mb-4 text-3xl">🧠</div>
              <h3 className="text-xl font-extrabold italic mb-3 text-[#2D2E83]">Propiedad Intelectual</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">Registro de marcas, patentes y derechos de autor</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Asesoría legal para la protección de activos intangibles y el desarrollo creativo
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service Card 6 */}
          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8]">
            <CardContent className="p-6">
              <div className="mb-4 text-3xl">👥</div>
              <h3 className="text-xl font-extrabold italic mb-3 text-[#2D2E83]">Derecho Laboral</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Asesoría integral en contratación, terminación y solución de conflictos laborales
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9C]">
                    Representación ante el Ministerio del Trabajo y en procesos judiciales laborales
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service Card 7 */}
          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8] md:col-span-2 lg:col-span-3">
            <CardContent className="p-6">
              <div className="mb-4 text-3xl">📄</div>
              <h3 className="text-xl font-extrabold italic mb-3 text-[#2D2E83]">Derecho Civil y Administrativo</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                      <span className="text-[#9A9A9C]">
                        Representación en procesos por responsabilidad contractual y extracontractual
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                      <span className="text-[#9A9A9C]">
                        Demandas contra el Estado por acciones u omisiones administrativas
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                      <span className="text-[#9A9A9C]">
                        Acciones de tutela y defensa de derechos fundamentales
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <a href="#contacto">
          <Button  size="lg" className="cursor-pointer bg-[#25D366] hover:bg-[#2D2E83] text-white">
            Solicita una consulta
          </Button>
            
          </a>
          
        </div>
      </div>
    </section>
  )
}
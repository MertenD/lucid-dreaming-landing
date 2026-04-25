import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: "Was ist luzides Träumen?",
    answer:
        "Luzides Träumen ist die Fähigkeit, sich während des Träumens bewusst zu sein, dass man träumt. In diesem Zustand kannst du deine Träume aktiv beeinflussen und steuern.",
  },
  {
    question: "Kann jeder luzides Träumen lernen?",
    answer:
        "Ja, grundsätzlich kann jeder Mensch luzides Träumen lernen. Es erfordert jedoch Übung, Geduld und die richtigen Techniken. Manche Menschen haben eine natürliche Veranlagung dafür, während andere mehr Zeit zum Erlernen benötigen.",
  },
  {
    question: "Wie lange dauert es, bis ich luzide Träume erleben kann?",
    answer:
        "Die Zeitspanne variiert von Person zu Person. Einige erleben ihren ersten luziden Traum bereits nach wenigen Tagen des Übens, während andere mehrere Wochen oder Monate benötigen. Regelmäßiges Üben und die Anwendung verschiedener Techniken erhöhen die Erfolgswahrscheinlichkeit.",
  },
  {
    question: "Ist luzides Träumen gefährlich?",
    answer:
        "Nein, luzides Träumen ist nicht gefährlich. Es ist ein natürlicher Bewusstseinszustand, der seit Jahrhunderten in verschiedenen Kulturen praktiziert wird. Es kann sogar therapeutische Vorteile haben, wie die Bewältigung von Albträumen oder die Förderung der Kreativität.",
  },
  {
    question: "Welche Vorteile bietet luzides Träumen?",
    answer:
        "Luzides Träumen bietet zahlreiche Vorteile: Überwindung von Ängsten, Steigerung der Kreativität, Problemlösung, Selbsterkenntnis, Verbesserung der Schlafqualität, Spaß und Abenteuer in einer grenzenlosen Traumwelt und die Möglichkeit, neue Fähigkeiten zu üben.",
  },
]

export default function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2d1e3a] to-[#3d2035] py-12 md:py-16 lg:py-24">
      {/* Subtile Planeteneffekte */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-[10%] h-40 w-40 rounded-full bg-gradient-to-br from-[#e67533] to-[#d56a2d] opacity-10"></div>
        <div className="absolute -left-10 bottom-[20%] h-24 w-24 rounded-full bg-gradient-to-br from-[#e67533] to-[#d56a2d] opacity-10"></div>

        {/* Animierte Sterne */}
        <div className="absolute left-[8%] top-[12%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle"></div>
        <div className="absolute left-[22%] top-[45%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle-delay"></div>
        <div className="absolute left-[88%] top-[22%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle"></div>
        <div className="absolute left-[65%] top-[8%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle-delay"></div>
        <div className="absolute left-[35%] top-[75%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle"></div>
        <div className="absolute left-[78%] top-[65%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle-delay"></div>
      </div>

      {/* Subtile Welleneffekte */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#3d2035] to-transparent opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 opacity-20">
          <path
            fill="#e67533"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container relative mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#f5f0d9] md:mb-12 md:text-4xl lg:text-5xl">
          Häufig gestellte Fragen
        </h2>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#e67533]/30">
                  <AccordionTrigger
                      className="text-left text-base font-medium text-[#f5f0d9] hover:text-[#ff8c4d] md:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                      className="text-sm text-[#f5f0d9]/90 md:text-base">{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}


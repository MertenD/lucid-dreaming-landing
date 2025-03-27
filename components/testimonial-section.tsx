import {Card, CardContent} from "@/components/ui/card";
import StarRating from "@/components/star-rating";

interface TestimonialProps {
  name: string
  rating: number
  text: string
  date: string
}

const testimonials: TestimonialProps[] = [
  {
    name: "Julia Berger",
    rating: 5,
    text: "Dieses Buch hat mein Leben verändert! Nach nur zwei Wochen Übung hatte ich meinen ersten luziden Traum und konnte tatsächlich fliegen. Die Techniken sind einfach zu verstehen und anzuwenden.",
    date: "15. März 2025",
  },
  {
    name: "Thomas Müller",
    rating: 5,
    text: "Als Skeptiker war ich zunächst zurückhaltend, aber die wissenschaftlichen Erklärungen haben mich überzeugt. Mittlerweile habe ich mehrere luzide Träume erlebt und nutze sie zur Problemlösung im Alltag.",
    date: "2. Februar 2025",
  },
  {
    name: "Sarah Neumann",
    rating: 5,
    text: "Endlich ein Buch, das luzides Träumen verständlich erklärt! Die Schritt-für-Schritt-Anleitungen sind perfekt für Anfänger. Besonders hilfreich fand ich die Traumjournal-Vorlage.",
    date: "27. Januar 2025",
  },
  {
    name: "Markus Weber",
    rating: 4,
    text: "Ein hervorragender Einstieg in die Welt des luziden Träumens. Die Übungen sind gut strukturiert und bauen logisch aufeinander auf. Nur einen Stern Abzug, weil ich mir noch mehr fortgeschrittene Techniken gewünscht hätte.",
    date: "10. März 2025",
  },
]

function Testimonial({ name, rating, text, date }: TestimonialProps) {
  return (
      <Card className="border-none bg-gradient-to-br from-[#2d1e3a]/80 to-[#3d2035]/80 shadow-lg backdrop-blur-sm">
        <CardContent className="p-4 md:p-6">
          <div className="mb-3 flex items-center justify-between md:mb-4">
            <StarRating rating={rating} />
            <span className="text-xs text-[#f5f0d9]/70 md:text-sm">{date}</span>
          </div>
          <p className="mb-3 text-sm text-[#f5f0d9] md:mb-4 md:text-base">{text}</p>
          <p className="font-medium text-[#ff8c4d]">{name}</p>
        </CardContent>
      </Card>
  )
}

export default function TestimonialSection() {
  return (
      <section
          className="relative overflow-hidden bg-gradient-to-b from-[#182037] to-[#2d1e3a] py-12 md:py-16 lg:py-24">
        {/* Animierte Sterne im Hintergrund */}
        <div className="absolute inset-0">
          {/* Erste Gruppe von Sternen */}
          <div
              className="absolute left-[10%] top-[20%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle"></div>
          <div
              className="absolute left-[25%] top-[50%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>
          <div
              className="absolute left-[80%] top-[15%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle"></div>
          <div
              className="absolute left-[60%] top-[70%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>
          <div
              className="absolute left-[40%] top-[85%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] animate-twinkle"></div>

          {/* Zweite Gruppe von Sternen mit anderen Verzögerungen */}
          <div
              className="absolute left-[15%] top-[35%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>
          <div
              className="absolute left-[75%] top-[25%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle"></div>
          <div
              className="absolute left-[50%] top-[10%] h-2 w-2 rounded-full bg-white shadow-[0_0_15px_4px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>
          <div
              className="absolute left-[30%] top-[65%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle"></div>
          <div
              className="absolute left-[85%] top-[80%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>

          {/* Dritte Gruppe - kleinere Sterne */}
          <div
              className="absolute left-[5%] top-[45%] h-0.5 w-0.5 rounded-full bg-white shadow-[0_0_5px_1px_rgba(255,255,255,0.8)] animate-twinkle"></div>
          <div
              className="absolute left-[55%] top-[30%] h-0.5 w-0.5 rounded-full bg-white shadow-[0_0_5px_1px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>
          <div
              className="absolute left-[90%] top-[40%] h-0.5 w-0.5 rounded-full bg-white shadow-[0_0_5px_1px_rgba(255,255,255,0.8)] animate-twinkle"></div>
          <div
              className="absolute left-[20%] top-[75%] h-0.5 w-0.5 rounded-full bg-white shadow-[0_0_5px_1px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>
          <div
              className="absolute left-[70%] top-[60%] h-0.5 w-0.5 rounded-full bg-white shadow-[0_0_5px_1px_rgba(255,255,255,0.8)] animate-twinkle"></div>
        </div>

        <div className="container relative mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#f5f0d9] md:mb-12 md:text-4xl lg:text-5xl">
            Was unsere Leser sagen
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
            ))}
          </div>

          <div className="mt-8 text-center md:mt-12">
            <p className="text-lg text-[#f5f0d9] md:text-xl">
              Schließe dich über <span className="font-bold text-[#ff8c4d]">1.000+ zufriedenen Lesern</span> an!
            </p>
          </div>
        </div>
      </section>
)
}


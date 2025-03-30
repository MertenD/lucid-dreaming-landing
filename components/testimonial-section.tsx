import {Card, CardContent} from "@/components/ui/card";
import StarRating from "@/components/star-rating";
import Link from "next/link";
import {Button} from "@/components/ui/button";

interface TestimonialProps {
  name: string
  rating: number
  title: string
  text: string
  date: string
}

const testimonials: TestimonialProps[] = [
  {
    name: "Laurent",
    date: "20. März 2025",
    rating: 5,
    title: "Absolut empfehlenswert!",
    text: "Ich habe schon einige Bücher über luzides Träumen gelesen, aber dieses ist mit Abstand das Beste! Es erklärt alles klar und verständlich, ohne unnötigen Ballast. Besonders gefallen hat mir, wie motivierend es geschrieben ist – man bekommt direkt Lust, das Gelernte auszuprobieren. Perfekt für Einsteiger, aber auch für alle, die ihr Wissen vertiefen wollen. Absolute Empfehlung!"
  },
  {
    name: "Natalie Schäfer",
    date: "2. Januar 2025",
    rating: 5,
    title: "Hat mir mit meinen Albträumen geholfen",
    text: "Ich träume so gut wie jede Nacht und leide auch oft unter Albträumen. Das Buch erklärt ziemlich gut, wie man im Traum selbst merkt, dass man träumt. Das hat bei mir dann auch schnell geklappt und jetzt habe ich auch immer öfter geschafft meine (Alb)Träume besser zu steuern und sie ins positive zu lenken. Die Übungen sind wirklich einfach und der Schreibstil locker. Wenn du auch Albträume hast oder auch nur an Klarträumen interessiert bist kann ich das Buch sehr empfehlen."
  },
  {
    name: "Captain Austria",
    date: "6. Oktober 2024",
    rating: 5,
    title: "Ein guter Ratgeber",
    text: "Ich habe lange überlegt ob ich mich für dieses Buch oder einen anderen Ratgeber auf Amazon entscheiden soll. Ich bin froh, dass ich mich für dieses entschieden habe. Es ist sehr gut aufgebaut. In den ersten Kapiteln werden generell Grundlagen über das Träumen und die Schlafphasen erklärt. Dann folgen Schritt für Schritt Anleitungen und Tipps mit Erklärungen wie man einen luziden Traum generieren kann. Es ist Übungssache und man muss dazu schon konsequent dran bleiben. Ich hatte damit nach einer Woche meinen ersten Klartraum in dem ich das Geschehen tatsächlich kontrollieren konnte (er war zwar kurz aber immerhin). Ich kann dieses Buch wirklich guten Gewissens weiterempfehlen. Es ist verständlich geschrieben, die Tipps funktionieren, kurzum einfach super!"
  },
  {
    name: "Isa",
    date: "14. Oktober 2024",
    rating: 5,
    title: "Tolles Buch!",
    text: "Ich fand das Buch äusserst nützlich und informativ! Es hat mir mit meinen Klarträumen sehr geholfen. Es ist gut geschrieben und leicht verständlich, aber es beinhaltet trotzdem alle spannenden Infos."
  },
  {
    name: "Amazon Customer",
    date: "6. Juli 2024",
    rating: 5,
    title: "Erfolg Garantiert!",
    text: "Das Buch hat mir geholfen, meinen ersten Klartraum zu haben - und das schon nach zwei Wochen! Der Autor beschreibt sehr gut und sehr detailliert, wie man an sein Ziel eines luziden Traumes rankommt. Es wird sehr bildhaft erzählt, aber auch die medizinisch-wissenschaftlichen Aspekte kommen nicht zu kurz. Kann ich nur weiterempfehlen!"
  },
  {
    name: "Betty",
    date: "5. Juli 2024",
    rating: 5,
    title: "Spannende Reise",
    text: "Das Buch hat mich so gefesselt, ich habe es direkt durchgelesen 😄 Leicht erklärt, auch für Anfänger geeignet. Spannend und inspirierend, es macht Lust „Luzides Träumen“ zu erlernen. Der Mensch ist wirklich faszinierend, man muss sich nur drauf einlassen."
  },
  {
    name: "Thomad D.",
    date: "4. Juli 2024",
    rating: 5,
    title: "Einfach gut",
    text: "Im wahrsten Sinne, sehr gut nachvollziehbar und schrittweise erklärt. Ich freue mich auf erste Erfahrungen"
  },
  {
    name: "Li Shihong",
    date: "15. August 2024",
    rating: 5,
    title: "Das beste Buch in Thema Luzides Träumen",
    text: " Sehr informativ, sehr wissenschaftlich formuliert und viele Bilder um den Leser zu fesseln. Mein erstes Buch und ich habe mich verliebt. Kauft das Buch!! Ihr werdet mit Sicherheit auch die Vorteile genießen",
  },
  {
    name: "Jannis Schondelmaier",
    date: "23. Juli 2024",
    rating: 5,
    title: "Regelmäßig luzide träumen",
    text: " Ich hatte in der Vergangenheit gelegentlich luzide Träume, doch dieses Buch hat mir geholfen, sie regelmäßig zu erleben. Die Grundlagen werden sehr verständlich erklärt, sodass auch Einsteiger sich schnell das nötige Wissen aneignen können. Durch die klaren und strukturierten Anleitungen konnte ich meine Fähigkeiten kontinuierlich verbessern. Wer am Ball bleibt, kann beeindruckende Ergebnisse erzielen und viel Freude am bewussten Träumen haben. Dank dieses Buches sind meine nächtlichen Abenteuer jetzt vielfältiger und aufregender als je zuvor."
  },
  {
    name: "Ole von Selle",
    date: "23. Juli 2024",
    rating: 5,
    title: "Sternen Mein erster luzider Traum :)",
    text: "Durch dieses Buch habe ich es endlich geschafft luzid zu Träumen. Es ist zwar ein wenig Aufwand das zu schaffen, allerdings wird man durch dieses Buch optimal an die Thematik herangeführt. "
  }
]

function Testimonial({ name, rating, title, text, date }: TestimonialProps) {
  return (
      <Card className="border-none bg-gradient-to-br from-[#2d1e3a]/80 to-[#3d2035]/80 shadow-lg backdrop-blur-sm">
        <CardContent className="p-4 md:p-6">
          <div className="mb-3 flex items-center justify-between md:mb-4">
            <StarRating rating={rating} />
            <span className="text-xs text-[#f5f0d9]/70 md:text-sm">{date}</span>
          </div>
          <h3 className="mb-2 text-lg font-bold text-[#f5f0d9]">{title}</h3>
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
          <h1 className="mb-8 text-center text-3xl font-bold text-[#f5f0d9] md:mb-12 md:text-4xl lg:text-5xl">
            Was die Leser sagen
          </h1>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
            ))}
          </div>

          <div className="mt-8 text-center md:mt-12">
            <p className="mb-6 text-lg text-[#f5f0d9] md:text-xl">
              Schließe dich über <span className="font-bold text-[#ff8c4d]">180+ zufriedenen Lesern</span> an!
            </p>
            <Link href="https://www.amazon.de/Kontrolliere-Deine-Tr%C3%A4ume-praktischer-Leidfaden/dp/B0D8LHZ2X6" target="_blank">
              <Button
                  variant="cta"
                  size="xl"
                  className="relative w-fit overflow-hidden rounded-md px-8 py-5 text-xl font-bold before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-gradient-to-r before:from-[#ff8c4d] before:to-[#e67533] before:opacity-0 before:transition-all before:duration-400 hover:before:translate-y-0 hover:before:opacity-100"
              >
                JETZT KAUFEN
              </Button>
            </Link>
          </div>

        </div>
      </section>
)
}


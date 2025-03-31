"use client"

import Testimonial from "@/components/Testimonial";
import {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

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

export default function TestimonialsSection() {
  // Embla Carousel Hook ohne Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  })

  // State für aktiven Slide
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Scroll zu einem bestimmten Slide
  const scrollTo = useCallback(
      (index: number) => {
        if (!emblaApi) return
        emblaApi.scrollTo(index)
      },
      [emblaApi],
  )

  // Scroll zum vorherigen Slide
  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  // Scroll zum nächsten Slide
  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  // Aktualisiere den ausgewählten Index, wenn sich der Slide ändert
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
      <section className="relative overflow-hidden bg-gradient-to-b from-[#182037] to-[#2d1e3a] py-12 md:py-16 lg:py-24">
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

        <div className="container relative mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#f5f0d9] md:mb-12 md:text-4xl lg:text-5xl">
            Was unsere Leser sagen
          </h2>

          <div className="relative mx-auto max-w-6xl">
            {/* Karussell-Container */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="w-full flex">
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                ))}
              </div>
            </div>

            {/* Navigationspfeile */}
            <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#2a1a2d]/80 p-2 text-[#f5f0d9] opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#e67533] md:left-4"
                aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="h-6 w-6"/>
            </button>

            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#2a1a2d]/80 p-2 text-[#f5f0d9] opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#e67533] md:right-4"
                aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="h-6 w-6"/>
            </button>

            {/* Indikator-Punkte */}
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                  <button
                      key={index}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                          index === selectedIndex ? "bg-[#e67533] w-5" : "bg-[#f5f0d9]/30 hover:bg-[#f5f0d9]/50"
                      }`}
                      onClick={() => scrollTo(index)}
                      aria-label={`Gehe zu Testimonial ${index + 1}`}
                  />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center md:mt-12">
            <p className="mb-6 text-lg text-[#f5f0d9] md:text-xl">
              Schließe dich über <span className="font-bold text-[#ff8c4d]">180+ zufriedenen Lesern</span> an!
            </p>
            <Link href="https://www.amazon.de/Kontrolliere-Deine-Tr%C3%A4ume-praktischer-Leidfaden/dp/B0D8LHZ2X6"
                  target="_blank">
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


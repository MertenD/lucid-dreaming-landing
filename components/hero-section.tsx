import Image from "next/image"
import { Button } from "@/components/ui/button"
import BookCover from "@/components/book-cover"
import StarRating from "@/components/star-rating"
import FeatureList from "@/components/feature-list"
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      {/* Background Image - Mobile optimiert */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full md:hidden">
          <Image
            src="/images/dream-background.png"
            alt="Traumlandschaft mit schwebender Figur und kosmischem Himmel"
            fill
            priority
            className="object-cover object-[75%_center]"
          />
        </div>
        <div className="relative hidden h-full w-full md:block">
          <Image
            src="/images/dream-background.png"
            alt="Traumlandschaft mit schwebender Figur und kosmischem Himmel"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlay für bessere Lesbarkeit auf Mobilgeräten */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1e1a38]/0 via-[#1e1a38]/10 to-[#1e1a38] md:hidden"></div>

      <div className="container relative z-10 mx-auto px-4 py-8 md:py-16 lg:py-24">
        {/* Mobile Layout: Zentrierter Titel und Buch */}
        <div className="block md:hidden">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-wide text-[#f5f0d9] sm:text-5xl">
              KONTROLLIERE
              <br />
              DEINE TRÄUME
            </h1>
            <p className="mx-auto mt-4 max-w-md text-lg text-[#f5f0d9]/90">
              Ein praktischer Leitfaden zum luziden Träumen
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <BookCover />
          </div>

          <div className="mb-10 flex flex-col items-center space-y-6">
            <Button
              variant="cta"
              size="lg"
              className="relative w-fit overflow-hidden rounded-md px-8 py-4 text-lg font-bold before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-gradient-to-r before:from-[#ff8c4d] before:to-[#e67533] before:opacity-0 before:transition-all before:duration-500 hover:before:translate-y-0 hover:before:opacity-100"
            >
              JETZT KAUFEN
            </Button>

            <div className="text-center">
              <p className="text-base text-[#f5f0d9]">Von Merten Dieckmann</p>
              <div className="mt-2 flex items-center justify-center gap-2">
                <StarRating rating={5} />
                <span className="text-xs text-[#f5f0d9]/80">16 Bewertungen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Zweispaltig */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center space-y-10">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight tracking-wide text-[#f5f0d9] lg:text-6xl xl:text-7xl">
                  KONTROLLIERE
                  <br />
                  DEINE TRÄUME
                </h1>
                <p className="text-xl text-[#f5f0d9]/90 lg:text-2xl">Ein praktischer Leitfaden zum luziden Träumen</p>
              </div>

              <Link href="https://www.amazon.de/Kontrolliere-Deine-Tr%C3%A4ume-praktischer-Leidfaden/dp/B0D8LHZ2X6" target="_blank">
                <Button
                  variant="cta"
                  size="xl"
                  className="relative w-fit overflow-hidden rounded-md px-8 py-5 text-xl font-bold before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-gradient-to-r before:from-[#ff8c4d] before:to-[#e67533] before:opacity-0 before:transition-all before:duration-400 hover:before:translate-y-0 hover:before:opacity-100"
                >
                  JETZT KAUFEN
                </Button>
              </Link>

              <div className="space-y-2">
                <p className="text-lg text-[#f5f0d9]">Von Merten Dieckmann</p>
                <div className="flex items-center gap-3">
                  <StarRating rating={5} />
                  <span className="text-sm text-[#f5f0d9]/80">16 Bewertungen</span>
                </div>
              </div>
            </div>

            {/* Right Column - Book Cover */}
            <div className="flex items-center justify-center">
              <Link href="https://www.amazon.de/Kontrolliere-Deine-Tr%C3%A4ume-praktischer-Leidfaden/dp/B0D8LHZ2X6" target="_blank">
                <BookCover />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Responsive für beide Layouts */}
        <div className="mt-8 grid grid-cols-1 gap-8 pb-8 md:mt-16 md:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-xl font-bold leading-relaxed text-[#f5f0d9] md:text-2xl lg:text-3xl">
              Stell dir vor, du könntest deine Träume im Schlaf bewusst steuern und jede Nacht in ein einzigartiges
              Abenteuer eintauchen.
            </h2>
            <p className="text-lg text-[#f5f0d9]/90 md:text-xl">
              Mit „Kontrolliere Deine Träume" machst du genau das möglich.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-xl font-bold text-[#ff8c4d] md:text-2xl lg:text-3xl">Kurz und knapp:</h3>
            <FeatureList
              features={[
                "Was ist luzides Träumen?",
                "Verständliches Grundwissen",
                "Einfacher Einstieg – Schritt für Schritt",
                "Verschiedene Techniken einfach erklärt",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}


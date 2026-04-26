import BookCover from "@/components/book-cover"
import StarRating from "@/components/star-rating"
import FeatureList from "@/components/feature-list"
import Link from "next/link"
import BuyButton, { AMAZON_URL } from "@/components/buy-button"
import HeroBackground from "@/components/hero-background"

export default function HeroSection() {
    return (
        <section id="start" className="relative min-h-[100vh] overflow-hidden md:px-16">
            {/* Hintergrundbild: WebP sofort, PNG wird nachgeladen */}
            <div className="absolute inset-0 z-0">
                <HeroBackground />
            </div>

            {/* Overlay für bessere Lesbarkeit auf Mobilgeräten */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1e1a38]/0 via-[#1e1a38]/10 to-[#1e1a38] md:hidden" />

            <div className="container relative z-10 mx-auto px-4 py-8 md:py-16 lg:py-24">
                {/* Mobile Layout */}
                <div className="block md:hidden">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold leading-tight tracking-wide text-[#f5f0d9] sm:text-5xl">
                            KONTROLLIERE
                            <br />
                            DEINE TRÄUME
                        </h1>
                        <h2 className="mx-auto mt-4 max-w-md text-lg text-[#f5f0d9]/90">
                            Ein praktischer Leitfaden zum luziden Träumen
                        </h2>
                    </div>

                    <div className="mb-8 flex justify-center">
                        <Link href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
                            <BookCover />
                        </Link>
                    </div>

                    <div className="mb-10 flex flex-col items-center space-y-6">
                        <BuyButton source="hero_mobile" size="lg" className="px-8 py-4 text-lg" />

                        <div className="text-center">
                            <p className="text-base text-[#f5f0d9]">Von Merten Dieckmann</p>
                            <div className="mt-2 flex items-center justify-center gap-2">
                                <StarRating rating={5} />
                                <span className="text-xs text-[#f5f0d9]/80">16 Bewertungen</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <div className="flex flex-col justify-center space-y-10">
                            <div className="space-y-2">
                                <h1 className="text-5xl font-bold leading-tight tracking-wide text-[#f5f0d9] lg:text-6xl xl:text-7xl">
                                    KONTROLLIERE
                                    <br />
                                    DEINE TRÄUME
                                </h1>
                                <h2 className="text-xl text-[#f5f0d9]/90 lg:text-2xl">
                                    Ein praktischer Leitfaden zum luziden Träumen
                                </h2>
                            </div>

                            <BuyButton source="hero_desktop" size="xl" className="px-8 py-5 text-xl" />

                            <div className="space-y-2">
                                <p className="text-lg text-[#f5f0d9]">Von Merten Dieckmann</p>
                                <div className="flex items-center gap-3">
                                    <StarRating rating={5} />
                                    <span className="text-sm text-[#f5f0d9]/80">16 Bewertungen</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-start lg:justify-end">
                            <Link href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
                                <BookCover />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-48 md:gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-4 text-center md:text-left">
                        <p className="text-xl font-bold leading-relaxed text-[#f5f0d9] md:text-2xl lg:text-3xl">
                            Stell dir vor, du könntest deine Träume im Schlaf bewusst steuern und jede Nacht in ein
                            einzigartiges Abenteuer eintauchen.
                        </p>
                        <p className="text-lg text-[#f5f0d9]/90 md:text-xl">
                            Mit „Kontrolliere Deine Träume" machst du genau das möglich.
                        </p>
                    </div>

                    <div className="text-center md:text-left lg:ml-32 mt-6">
                        <h2 className="mb-4 text-xl font-bold text-[#ff8c4d] md:text-2xl lg:text-3xl">
                            Kurz und knapp:
                        </h2>
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

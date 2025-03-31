import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function ConversionSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#2a1a2d] to-[#1a1630] py-12 md:py-20">
            {/* Hintergrundeffekte */}
            <div className="absolute inset-0">

                {/* Animierte Sterne */}
                <div className="absolute left-[10%] top-[30%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle"></div>
                <div className="absolute left-[90%] top-[40%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>
                <div className="absolute left-[30%] top-[70%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] animate-twinkle"></div>
                <div className="absolute left-[70%] top-[20%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>
            </div>

            <div className="container relative mx-auto px-4">
                <div className="mx-auto max-w-3xl rounded-xl bg-gradient-to-br from-[#3d2035]/80 to-[#2a1a2d]/80 p-5 text-center shadow-lg backdrop-blur-sm md:p-10">
                    <h1 className="mb-4 text-xl font-bold text-[#f5f0d9] md:mb-6 md:text-4xl">
                        Bereit, deine Träume zu kontrollieren?
                    </h1>

                    <p className="mb-6 text-base text-[#f5f0d9]/90 md:mb-8 md:text-xl">
                        Tauche ein in die faszinierende Welt des luziden Träumens.
                    </p>

                    <div className="mb-6 flex flex-col items-center justify-center gap-3 md:mb-8 md:flex-row md:gap-8">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-[#ff8c4d] md:text-4xl">14,95€</span>
                            <span className="text-xs text-[#f5f0d9]/70 md:text-sm">inkl. MwSt.</span>
                        </div>

                        <div className="h-px w-16 bg-[#e67533]/30 md:h-16 md:w-px"></div>

                        <div className="flex flex-col items-center">
                            <span className="text-lg font-bold text-[#f5f0d9] md:text-2xl">Sofort verfügbar</span>
                            <span className="text-xs text-[#f5f0d9]/70 md:text-sm">als Softcover & E-Book</span>
                        </div>
                    </div>

                    <Button
                        variant="cta"
                        size="lg"
                        className="relative w-auto overflow-hidden rounded-md px-6 py-3 text-base font-bold before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-gradient-to-r before:from-[#ff8c4d] before:to-[#e67533] before:opacity-0 before:transition-all before:duration-500 hover:before:translate-y-0 hover:before:opacity-100 animate-pulse-glow md:px-10 md:py-6 md:text-xl"
                    >
                        <Link href="https://www.amazon.de/Kontrolliere-Deine-Tr%C3%A4ume-praktischer-Leidfaden/dp/B0D8LHZ2X6" target="_blank">
                            JETZT KAUFEN
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}


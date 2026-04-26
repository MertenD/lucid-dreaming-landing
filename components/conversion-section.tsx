import BuyButton from "@/components/buy-button"

export default function ConversionSection() {
    return (
        <section id="kaufen" className="relative overflow-hidden bg-gradient-to-b from-[#2a1a2d] to-[#1a1630] py-12 md:py-20">
            {/* Hintergrundeffekte */}
            <div className="absolute inset-0">
                <div className="absolute left-[10%] top-[30%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle"></div>
                <div className="absolute left-[90%] top-[40%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>
                <div className="absolute left-[30%] top-[70%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] animate-twinkle"></div>
                <div className="absolute left-[70%] top-[20%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>
            </div>

            <div className="container relative mx-auto px-4">
                <div className="mx-auto max-w-3xl rounded-xl bg-gradient-to-br from-[#3d2035]/80 to-[#2a1a2d]/80 p-5 text-center shadow-lg backdrop-blur-sm md:p-10">
                    <h2 className="mb-4 text-xl font-bold text-[#f5f0d9] md:mb-6 md:text-4xl">
                        Bereit, deine Träume zu kontrollieren?
                    </h2>

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

                    <BuyButton
                        source="conversion_section"
                        size="lg"
                        className="animate-pulse-glow px-6 py-3 text-base md:px-10 md:py-6 md:text-xl"
                    />
                </div>
            </div>
        </section>
    )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AuthorSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#3d2035] to-[#2a1a2d] py-16 md:py-24">
            {/* Subtile Hintergrundeffekte */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute left-[5%] top-[20%] h-32 w-32 rounded-full bg-gradient-to-r from-[#e67533] to-[#ff8c4d]"></div>
                <div className="absolute right-[10%] top-[60%] h-24 w-24 rounded-full bg-gradient-to-r from-[#e67533] to-[#ff8c4d]"></div>

                {/* Animierte Sterne */}
                <div className="absolute left-[15%] top-[15%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle"></div>
                <div className="absolute left-[75%] top-[25%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle-delay"></div>
                <div className="absolute left-[35%] top-[85%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-twinkle"></div>
            </div>

            <div className="container relative mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold text-[#f5f0d9] md:text-4xl lg:text-5xl">Über den Autor</h2>

                <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                    {/* Autor-Bild mit Animation */}
                    <div className="flex justify-center md:order-2">
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#e67533]/20 to-[#ff8c4d]/20 p-1 shadow-lg transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(230,117,51,0.3)]">
                            <Image
                                src="/images/avatar-holding-book.webp"
                                alt="Merten Dieckmann - Autor von 'Kontrolliere Deine Träume'"
                                width={400}
                                height={400}
                                sizes="(max-width: 768px) 90vw, 400px"
                                loading="lazy"
                                className="rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Autor-Info */}
                    <div className="space-y-6 text-center md:order-1 md:text-left">
                        <h3 className="text-2xl font-bold text-[#ff8c4d] md:text-3xl">Merten Dieckmann</h3>

                        <div className="space-y-4 text-[#f5f0d9]/90">



                            <p>
                                Merten Dieckmann ist Autor und Software-Entwickler und beschäftigt sich seit Jahren intensiv mit luzidem Träumen. In seinem Buch „Kontrolliere Deine Träume“ verbindet er
                                persönliche Erfahrung mit bewährten Techniken, um einen verständlichen und praxisnahen Einstieg in die Welt der Klarträume zu bieten.
                            </p>
                            <p>
                                Mit seinem Hintergrund in Informatik und einer Faszination für das Unbewusste vereint er analytisches Denken mit intuitiver Neugier. Wichtig ist ihm dabei vor allem, das Thema so zu erklären,
                                wie er es sich selbst am Anfang gewünscht hätte: klar, strukturiert und ohne unnötigen Ballast.
                            </p>
                            <p>
                                Für ihn ist luzides Träumen kein spiritueller Akt, sondern ein alltagstaugliches Werkzeug, das jeder erlernen kann – einfach, konkret und für jeden zugänglich.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


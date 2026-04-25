import { Moon, Brain, AlarmClock, Eye, BookOpen } from "lucide-react"
import BuyButton from "@/components/buy-button"
import type { LucideIcon } from "lucide-react"

const techniques: { name: string; subtitle: string; description: string; icon: LucideIcon }[] = [
    {
        name: "WILD-Technik",
        subtitle: "Wake-Initiated Lucid Dream",
        description:
            "Überführe dein Bewusstsein direkt vom Wachzustand in den Traum. Dein Körper schläft – dein Geist bleibt wach.",
        icon: Moon,
    },
    {
        name: "MILD-Technik",
        subtitle: "Mnemonic Induction",
        description:
            "Setze vor dem Einschlafen eine klare Absicht. Wiederhole: 'Heute Nacht werde ich merken, dass ich träume.'",
        icon: Brain,
    },
    {
        name: "WBTB-Methode",
        subtitle: "Wake Back to Bed",
        description:
            "Wache nach 5–6 Stunden kurz auf und schlafe wieder ein. Du landest direkt in der langen REM-Phase.",
        icon: AlarmClock,
    },
    {
        name: "Realitätschecks",
        subtitle: "Reality Checks",
        description:
            "Überprüfe tagsüber regelmäßig, ob du träumst – durch die Hand schauen, Nase zuhalten, Text lesen.",
        icon: Eye,
    },
    {
        name: "Traumtagebuch",
        subtitle: "Dream Journal",
        description:
            "Schreibe jeden Morgen deine Träume auf. Bessere Traumerinnerung ist der Schlüssel zum ersten Klartraum.",
        icon: BookOpen,
    },
]

export default function TechniquesSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#182037] to-[#182037] py-16 md:py-24">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute right-[5%] top-[15%] h-48 w-48 rounded-full bg-gradient-to-br from-[#e67533] to-[#d56a2d] opacity-5"></div>
                <div className="absolute left-[3%] bottom-[10%] h-32 w-32 rounded-full bg-gradient-to-br from-[#e67533] to-[#d56a2d] opacity-5"></div>
                <div className="absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle"></div>
                <div className="absolute left-[80%] top-[30%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle-delay"></div>
                <div className="absolute left-[50%] top-[70%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle"></div>
            </div>

            <div className="container relative mx-auto px-4">
                <h2 className="mb-4 text-center text-3xl font-bold text-[#f5f0d9] md:text-4xl lg:text-5xl">
                    Die wichtigsten Techniken
                </h2>
                <p className="mb-12 text-center text-base text-[#f5f0d9]/70 md:text-lg">
                    Alle Methoden werden im Buch Schritt für Schritt erklärt – verständlich und sofort anwendbar.
                </p>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
                    {techniques.map((technique) => {
                        const Icon = technique.icon
                        return (
                            <article
                                key={technique.name}
                                className="rounded-xl border border-[#e67533]/20 bg-gradient-to-br from-[#2a1a2d]/80 to-[#3d2035]/60 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#e67533]/40 hover:shadow-[0_4px_20px_rgba(230,117,51,0.08)] md:p-6"
                            >
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#e67533]/20 to-[#ff8c4d]/10 text-[#ff8c4d] ring-1 ring-[#e67533]/30">
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <h3 className="mb-1 text-base font-bold text-[#ff8c4d] md:text-lg">{technique.name}</h3>
                                <p className="mb-2 text-xs text-[#f5f0d9]/50">{technique.subtitle}</p>
                                <p className="text-sm leading-relaxed text-[#f5f0d9]/80 md:text-base">
                                    {technique.description}
                                </p>
                            </article>
                        )
                    })}

                    {/* CTA-Karte */}
                    <article className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#e67533]/40 bg-gradient-to-br from-[#3d2035]/80 to-[#2a1a2d]/80 p-5 text-center shadow-sm backdrop-blur-sm md:p-6">
                        <div>
                            <p className="text-base font-bold text-[#f5f0d9] md:text-lg">Alle Techniken im Buch</p>
                            <p className="mt-1 text-sm text-[#f5f0d9]/70">
                                Mit Schritt-für-Schritt-Anleitungen, Übungsaufgaben und Tipps aus eigener Erfahrung.
                            </p>
                        </div>
                        <BuyButton source="techniques_section" size="sm" />
                    </article>
                </div>
            </div>
        </section>
    )
}

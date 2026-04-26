import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqItem {
    question: string
    answer: string
}

const faqItems: FaqItem[] = [
    {
        question: "Was ist luzides Träumen?",
        answer: "Luzides Träumen (auch Klartraum oder Klarträumen) ist die Fähigkeit, sich während des Träumens bewusst zu sein, dass man träumt. In diesem Zustand kannst du deine Träume aktiv beeinflussen und steuern – Orte erschaffen, fliegen oder mit Traumpersonen sprechen.",
    },
    {
        question: "Kann jeder luzides Träumen lernen?",
        answer: "Ja, grundsätzlich kann jeder Mensch luzides Träumen lernen. Es erfordert Übung, Geduld und die richtigen Techniken. Manche Menschen erleben ihren ersten luziden Traum nach wenigen Tagen, andere benötigen einige Wochen regelmäßiger Praxis.",
    },
    {
        question: "Was ist die WILD-Technik?",
        answer: "WILD steht für 'Wake-Initiated Lucid Dream'. Bei dieser Technik überführst du dein Bewusstsein direkt vom Wachzustand in einen Traum, ohne das Bewusstsein zu verlieren. Du entspannst deinen Körper vollständig, während dein Geist wach bleibt, bis sich Traumbilder formen. Die WILD-Technik funktioniert besonders gut in Kombination mit der WBTB-Methode.",
    },
    {
        question: "Was ist die MILD-Technik?",
        answer: "MILD steht für 'Mnemonic Induction of Lucid Dreams' und wurde von Schlafforscher Stephen LaBerge entwickelt. Du wiederholst vor dem Einschlafen eine Absichtserklärung wie 'Heute Nacht werde ich merken, dass ich träume', kombiniert mit dem lebhaften Vorstellen eines luziden Traums. Diese Methode ist besonders für Einsteiger geeignet.",
    },
    {
        question: "Was ist die WBTB-Methode?",
        answer: "WBTB steht für 'Wake Back to Bed'. Du stellst einen Wecker auf etwa 5–6 Stunden nach dem Einschlafen, bleibst 20–30 Minuten wach (idealerweise mit Lesen über luzide Träume), und legst dich dann wieder schlafen. Diese Methode nutzt die verlängerten REM-Phasen in den frühen Morgenstunden – die ideale Zeit für luzide Träume.",
    },
    {
        question: "Was sind Reality Checks?",
        answer: "Reality Checks (Realitätschecks) sind kurze Selbstüberprüfungen, ob man gerade träumt oder wacht. Beispiele: Halte die Nase zu und versuche zu atmen – im Traum geht das. Schaue auf eine Uhr oder lies einen Text zweimal – Zahlen und Texte ändern sich im Traum. Wer diese Checks tagsüber zur Gewohnheit macht, führt sie irgendwann auch im Traum durch und wird luzid.",
    },
    {
        question: "Warum ist ein Traumtagebuch wichtig?",
        answer: "Ein Traumtagebuch verbessert die Traumerinnerung erheblich. Je mehr Träume du dich erinnerst, desto leichter wird es, im Traum luzid zu werden. Schreibe direkt nach dem Aufwachen alles auf – auch kurze Fragmente. Nach einigen Wochen regelmäßigen Aufschreibens wirst du mehrere Träume pro Nacht erinnern, was die Grundlage für luzides Träumen bildet.",
    },
    {
        question: "Wie lange dauert es, bis ich luzide Träumen kann?",
        answer: "Die Zeitspanne variiert von Person zu Person. Mit den richtigen Techniken und regelmäßiger Praxis berichten viele Leser von ersten Erfolgen innerhalb von 1–3 Wochen. Einige erleben ihren ersten luziden Traum bereits nach wenigen Tagen intensiver Übung, während andere etwas länger benötigen – das ist völlig normal.",
    },
    {
        question: "Ist luzides Träumen gefährlich?",
        answer: "Nein, luzides Träumen ist nicht gefährlich. Es ist ein natürlicher Bewusstseinszustand, der weltweit seit Jahrhunderten praktiziert und auch wissenschaftlich erforscht wird (z. B. am Max-Planck-Institut für Hirnforschung). Es kann sogar therapeutische Vorteile haben, etwa bei der Bewältigung von Albträumen oder Ängsten.",
    },
    {
        question: "Welche Vorteile bietet luzides Träumen?",
        answer: "Luzides Träumen bietet viele Vorteile: Überwindung von Albträumen und Ängsten, Steigerung der Kreativität und Problemlösungsfähigkeit, Selbsterkenntnis, die Möglichkeit Fähigkeiten mental zu üben sowie grenzenlose Abenteuer im Traum. Viele Leser berichten von mehr Kontrolle über ihr Unterbewusstsein und einer verbesserten Schlafqualität.",
    },
]

export default function FaqSection() {
    return (
        <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-[#2d1e3a] to-[#3d2035] py-12 md:py-16 lg:py-24">
            {/* Subtile Planeteneffekte */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 top-[10%] h-40 w-40 rounded-full bg-gradient-to-br from-[#e67533] to-[#d56a2d] opacity-10"></div>
                <div className="absolute -left-10 bottom-[20%] h-24 w-24 rounded-full bg-gradient-to-br from-[#e67533] to-[#d56a2d] opacity-10"></div>
                <div className="absolute left-[8%] top-[12%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle"></div>
                <div className="absolute left-[22%] top-[45%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle-delay"></div>
                <div className="absolute left-[88%] top-[22%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle"></div>
                <div className="absolute left-[65%] top-[8%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle-delay"></div>
                <div className="absolute left-[35%] top-[75%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle"></div>
                <div className="absolute left-[78%] top-[65%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle-delay"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#3d2035] to-transparent opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 opacity-20">
                    <path fill="#e67533" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="container relative mx-auto px-4">
                <h2 className="mb-8 text-center text-3xl font-bold text-[#f5f0d9] md:mb-12 md:text-4xl lg:text-5xl">
                    Häufig gestellte Fragen
                </h2>
                <p className="mb-8 text-center text-[#f5f0d9]/70 md:mb-12">
                    Alles über luzides Träumen, Klartraum-Techniken und wie du schnell erste Erfolge erreichst.
                </p>

                <div className="mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#e67533]/30">
                                <AccordionTrigger className="text-left text-base font-medium text-[#f5f0d9] hover:text-[#ff8c4d] md:text-lg">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-[#f5f0d9]/90 md:text-base">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

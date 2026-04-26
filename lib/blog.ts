export interface BlogPost {
    slug: string
    title: string
    description: string
    date: string
    dateISO: string
    excerpt: string
    keywords: string[]
    readingTime: string
}

export const blogPosts: BlogPost[] = [
    {
        slug: "luzides-traeumen-lernen",
        title: "Luzides Träumen lernen – Der komplette Einsteiger-Guide",
        description:
            "Alles über luzides Träumen für Einsteiger: Was es ist, die 5 wichtigsten Techniken (WILD, MILD, WBTB, Reality Checks, Traumtagebuch) und ein konkreter 4-Wochen-Plan.",
        date: "1. April 2026",
        dateISO: "2026-04-01",
        excerpt:
            "Stell dir vor, du könntest heute Nacht entscheiden, was du träumst. Dieser Guide zeigt dir alles, was du als Einsteiger brauchst – Techniken, Einstiegsplan und häufige Fehler.",
        keywords: [
            "luzides träumen lernen",
            "klartraum lernen",
            "luzides träumen anfänger",
            "klartraum herbeiführen",
            "luzide träume",
            "klartraum für einsteiger",
        ],
        readingTime: "8 min",
    },
    {
        slug: "wild-technik-anleitung",
        title: "WILD-Technik: Schritt-für-Schritt-Anleitung für den Klartraum",
        description:
            "Die WILD-Technik (Wake-Initiated Lucid Dream) vollständig erklärt: Voraussetzungen, Schritt-für-Schritt-Anleitung, häufige Fehler und die perfekte Kombination mit WBTB.",
        date: "10. April 2026",
        dateISO: "2026-04-10",
        excerpt:
            "WILD ist eine der wirkungsvollsten Methoden für luzide Träume: Du überführst dein Bewusstsein direkt vom Wachzustand in den Traum. Hier ist die vollständige Schritt-für-Schritt-Anleitung.",
        keywords: [
            "WILD Technik",
            "wake initiated lucid dream",
            "WILD Technik Anleitung",
            "luzides träumen WILD",
            "klartraum WILD Technik",
        ],
        readingTime: "6 min",
    },
    {
        slug: "traumtagebuch-fuehren",
        title: "Traumtagebuch führen: Anleitung für bessere Traumerinnerung",
        description:
            "Wie du ein Traumtagebuch richtig führst: Was hineingehört, analog vs. digital, 7 Tipps für bessere Traumerinnerung und häufige Fehler – für mehr luzide Träume.",
        date: "17. April 2026",
        dateISO: "2026-04-17",
        excerpt:
            "Das Traumtagebuch ist das wichtigste Werkzeug für luzides Träumen – und wird am häufigsten unterschätzt. Hier erfährst du, wie du es richtig führst und was hineingehört.",
        keywords: [
            "traumtagebuch führen",
            "traumtagebuch tipps",
            "traumerinnerung verbessern",
            "traumtagebuch anfänger",
            "traumtagebuch luzides träumen",
        ],
        readingTime: "5 min",
    },
    {
        slug: "reality-checks-anleitung",
        title: "Reality Checks: Die 5 wirksamsten Techniken und wie du sie richtig anwendest",
        description:
            "Die 5 wirksamsten Reality Checks für luzides Träumen: Nasentest, Handtest, Texttest, Finger-durch-Handfläche und Sprungtest – mit Anleitung, Tipps und häufigen Fehlern.",
        date: "24. April 2026",
        dateISO: "2026-04-24",
        excerpt:
            "Reality Checks sind ein kraftvolles Werkzeug für luzides Träumen – aber nur, wenn du sie richtig anwendest. Hier lernst du die 5 wirksamsten Techniken und wie du sie in deinen Alltag integrierst.",
        keywords: [
            "reality checks",
            "reality checks anleitung",
            "reality checks luzides träumen",
            "reality checks tipps",
            "reality checks fehler",
        ],
        readingTime: "7 min"
    }
]

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((p) => p.slug === slug)
}
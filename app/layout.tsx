import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PostHogProvider } from "@/app/providers"
import type { Metadata, Viewport } from "next"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.luzides-traeumen-buch.de"
const AMAZON_URL =
    "https://www.amazon.de/Kontrolliere-Deine-Tr%C3%A4ume-praktischer-Leidfaden/dp/B0D8LHZ2X6"

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kontrolliere Deine Träume – Buch über luzides Träumen",
    url: APP_URL,
    description:
        "Offizielle Website des Buches 'Kontrolliere Deine Träume' von Merten Dieckmann. Lerne luzides Träumen mit praxisnahen Techniken wie WILD, MILD, WBTB und Realitätschecks.",
    inLanguage: "de",
    publisher: {
        "@type": "Person",
        name: "Merten Dieckmann",
    },
}

const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Kontrolliere Deine Träume",
    alternateName: "Klartraum Leitfaden für Einsteiger",
    author: {
        "@type": "Person",
        name: "Merten Dieckmann",
        description:
            "Autor und Software-Entwickler, der sich seit Jahren intensiv mit luzidem Träumen beschäftigt. Er verbindet analytisches Denken mit persönlicher Erfahrung.",
        url: APP_URL,
    },
    description:
        "Ein praktischer Leitfaden zum luziden Träumen für Einsteiger und Fortgeschrittene. Das Buch erklärt WILD-, MILD- und WBTB-Techniken, Realitätschecks und Traumtagebuch-Führung verständlich und schrittweise.",
    inLanguage: "de",
    url: AMAZON_URL,
    genre: "Ratgeber",
    datePublished: "2024-07-04",
    bookFormat: "https://schema.org/Paperback",
    numberOfPages: "120",
    offers: {
        "@type": "Offer",
        price: "14.95",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: AMAZON_URL,
        seller: {
            "@type": "Organization",
            name: "Amazon",
        },
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "16",
        bestRating: "5",
        worstRating: "1",
    },
    review: [
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Laurent" },
            datePublished: "2025-03-20",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
                "Ich habe schon einige Bücher über luzides Träumen gelesen, aber dieses ist mit Abstand das Beste! Es erklärt alles klar und verständlich. Absolute Empfehlung!",
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Natalie Schäfer" },
            datePublished: "2025-01-02",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
                "Das Buch erklärt ziemlich gut, wie man im Traum selbst merkt, dass man träumt. Ich habe es geschafft meine Albträume besser zu steuern. Sehr empfehlenswert.",
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Amazon Customer" },
            datePublished: "2024-07-06",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
                "Das Buch hat mir geholfen, meinen ersten Klartraum zu haben – und das schon nach zwei Wochen! Kann ich nur weiterempfehlen!",
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Captain Austria" },
            datePublished: "2024-10-06",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
                "Es ist sehr gut aufgebaut. In den ersten Kapiteln werden generell Grundlagen über das Träumen und die Schlafphasen erklärt. Dann folgen Schritt für Schritt Anleitungen und Tipps mit Erklärungen wie man einen luziden Traum generieren kann. Ich hatte damit nach einer Woche meinen ersten Klartraum.",
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Isa" },
            datePublished: "2024-10-14",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
                "Ich fand das Buch äusserst nützlich und informativ! Es hat mir mit meinen Klarträumen sehr geholfen. Es ist gut geschrieben und leicht verständlich, aber es beinhaltet trotzdem alle spannenden Infos.",
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Betty" },
            datePublished: "2024-07-05",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
                "Das Buch hat mich so gefesselt, ich habe es direkt durchgelesen. Leicht erklärt, auch für Anfänger geeignet. Spannend und inspirierend, es macht Lust Luzides Träumen zu erlernen.",
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Li Shihong" },
            datePublished: "2024-08-15",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
                "Sehr informativ, sehr wissenschaftlich formuliert und viele Bilder um den Leser zu fesseln. Das beste Buch zum Thema luzides Träumen.",
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Jannis Schondelmaier" },
            datePublished: "2024-07-23",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
                "Ich hatte in der Vergangenheit gelegentlich luzide Träume, doch dieses Buch hat mir geholfen, sie regelmäßig zu erleben. Die Grundlagen werden sehr verständlich erklärt, sodass auch Einsteiger sich schnell das nötige Wissen aneignen können.",
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Ole von Selle" },
            datePublished: "2024-07-23",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
                "Durch dieses Buch habe ich es endlich geschafft luzid zu träumen. Man wird optimal an die Thematik herangeführt.",
        },
    ],
}

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Was ist luzides Träumen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Luzides Träumen (auch Klartraum oder Klarträumen) ist die Fähigkeit, sich während des Träumens bewusst zu sein, dass man träumt. In diesem Zustand kann man Träume aktiv beeinflussen und steuern.",
            },
        },
        {
            "@type": "Question",
            name: "Kann jeder luzides Träumen lernen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, grundsätzlich kann jeder Mensch luzides Träumen lernen. Es erfordert Übung, Geduld und die richtigen Techniken wie MILD, WILD oder WBTB. Manche Menschen erleben ihren ersten luziden Traum nach wenigen Tagen, andere benötigen einige Wochen.",
            },
        },
        {
            "@type": "Question",
            name: "Was ist die WILD-Technik beim luziden Träumen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "WILD steht für 'Wake-Initiated Lucid Dream'. Bei dieser Technik überführst du dein Bewusstsein direkt vom Wachzustand in einen Traum, ohne das Bewusstsein zu verlieren. Du entspannst deinen Körper vollständig, während dein Geist wach bleibt, bis sich Traumbilder formen.",
            },
        },
        {
            "@type": "Question",
            name: "Was ist die MILD-Technik?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "MILD steht für 'Mnemonic Induction of Lucid Dreams'. Diese Technik wurde von Stephen LaBerge entwickelt. Du wiederholst vor dem Einschlafen eine Absichtserklärung wie 'Heute Nacht werde ich merken, dass ich träume', kombiniert mit dem Vorstellen eines luziden Traums.",
            },
        },
        {
            "@type": "Question",
            name: "Was ist die WBTB-Methode?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "WBTB steht für 'Wake Back to Bed'. Du stellst einen Wecker auf 5–6 Stunden nach dem Einschlafen, bleibst 20–30 Minuten wach (idealerweise mit Beschäftigung rund ums Träumen), und legst dich dann wieder schlafen. Diese Methode nutzt die REM-Phase, die morgens am längsten ist.",
            },
        },
        {
            "@type": "Question",
            name: "Was sind Reality Checks beim luziden Träumen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Reality Checks (Realitätschecks) sind kurze Selbstüberprüfungen, ob man träumt oder wacht. Zum Beispiel: Versuch durch die Hand zu schauen, halte die Nase zu und versuch zu atmen, oder lies einen Text zweimal. Im Traum funktionieren diese Checks anders als im Wachleben. Wer sie tagsüber regelmäßig durchführt, macht sie irgendwann auch im Traum.",
            },
        },
        {
            "@type": "Question",
            name: "Warum sollte ich ein Traumtagebuch führen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ein Traumtagebuch verbessert die Traumerinnerung erheblich. Je mehr Träume du dich erinnerst, desto leichter fällt es, im Traum luzid zu werden. Schreibe direkt nach dem Aufwachen alles auf, was du noch erinnerst – auch Fragmente. Nach wenigen Wochen wirst du mehrere Träume pro Nacht erinnern.",
            },
        },
        {
            "@type": "Question",
            name: "Wie lange dauert es, bis ich luzide Träume erleben kann?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Die Zeitspanne variiert stark. Einige erleben ihren ersten luziden Traum bereits nach wenigen Tagen intensiver Übung, während andere mehrere Wochen benötigen. Mit den richtigen Techniken aus dem Buch berichten viele Leser von ersten Erfolgen innerhalb von 1–3 Wochen.",
            },
        },
        {
            "@type": "Question",
            name: "Ist luzides Träumen gefährlich?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Nein, luzides Träumen ist nicht gefährlich. Es ist ein natürlicher Bewusstseinszustand, der weltweit seit Jahrhunderten praktiziert wird und auch wissenschaftlich erforscht ist (z. B. am Max-Planck-Institut). Es kann sogar therapeutische Vorteile haben, etwa bei der Bewältigung von Albträumen.",
            },
        },
        {
            "@type": "Question",
            name: "Welche Vorteile bietet luzides Träumen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Luzides Träumen bietet zahlreiche Vorteile: Überwindung von Ängsten und Albträumen, Steigerung der Kreativität, Problemlösung, Selbsterkenntnis, Verbesserung der Schlafqualität und die Möglichkeit, Fähigkeiten mental zu üben. Viele Nutzer berichten von mehr Kontrolle über ihr Unterbewusstsein.",
            },
        },
    ],
}

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Merten Dieckmann",
    url: APP_URL,
    jobTitle: "Autor",
    description:
        "Autor des Buches 'Kontrolliere Deine Träume' über luzides Träumen und Klartraum-Techniken. Software-Entwickler und Klartraum-Praktiker mit mehrjähriger persönlicher Erfahrung.",
    knowsAbout: [
        "Luzides Träumen",
        "Klartraum",
        "WILD-Technik",
        "MILD-Technik",
        "WBTB-Methode",
        "Traumtagebuch",
        "Reality Checks",
        "Schlafphasen",
        "REM-Schlaf",
    ],
    mainEntityOfPage: APP_URL,
}

export const viewport: Viewport = {
    themeColor: "#f97316",
}

export const metadata: Metadata = {
    title: "Luzides Träumen & Klartraum lernen – 'Kontrolliere Deine Träume' von Merten Dieckmann",
    description:
        "Lerne luzides Träumen mit WILD, MILD & WBTB-Techniken. Praxisnaher Ratgeber für Einsteiger – ab 14,95 € auf Amazon. Dein erster Klartraum wartet!",
    metadataBase: new URL(APP_URL),
    keywords: [
        "luzides träumen",
        "luzides träumen lernen",
        "klartraum",
        "klartraum lernen",
        "klarträumen lernen",
        "klartraum herbeiführen",
        "luzides träumen techniken",
        "WILD Technik luzides träumen",
        "MILD Technik klartraum",
        "WBTB Methode",
        "reality check träumen",
        "traumtagebuch",
        "luzides träumen buch",
        "klartraum buch",
        "kontrolliere deine träume",
        "merten dieckmann",
        "luzide träume",
        "luzide träume lernen",
    ],
    alternates: {
        canonical: APP_URL,
    },
    openGraph: {
        title: "Luzides Träumen & Klartraum lernen – 'Kontrolliere Deine Träume'",
        description:
            "Praxisnaher Ratgeber mit WILD, MILD & WBTB-Techniken. Ab 14,95 € auf Amazon. Dein erster Klartraum wartet!",
        url: APP_URL,
        siteName: "Kontrolliere Deine Träume",
        locale: "de_DE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Luzides Träumen & Klartraum lernen – 'Kontrolliere Deine Träume'",
        description:
            "Praxisnaher Ratgeber mit WILD, MILD & WBTB-Techniken. Ab 14,95 € auf Amazon.",
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="google-site-verification" content="yiwzK3TXkXKNv2YiiJ9IgPk3Io-SjndwRNV-7uIQmao" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
                <link rel="preload" as="font" href="/fonts/meethlake-three.ttf" type="font/truetype" crossOrigin="anonymous" />
                <link rel="preload" as="font" href="/fonts/Meethlaketwo.otf" type="font/otf" crossOrigin="anonymous" />
                <link rel="preload" as="font" href="/fonts/adorn-roman.ttf" type="font/truetype" crossOrigin="anonymous" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
            </head>
            <body>
                <PostHogProvider>
                    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </PostHogProvider>
            </body>
        </html>
    )
}

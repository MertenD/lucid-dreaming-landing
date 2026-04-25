import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PostHogProvider } from "@/app/providers"
import type { Metadata, Viewport } from "next"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.luzides-traeumen-buch.de"
const AMAZON_URL =
    "https://www.amazon.de/Kontrolliere-Deine-Tr%C3%A4ume-praktischer-Leidfaden/dp/B0D8LHZ2X6"

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Was ist luzides Träumen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Luzides Träumen ist die Fähigkeit, sich während des Träumens bewusst zu sein, dass man träumt. In diesem Zustand kannst du deine Träume aktiv beeinflussen und steuern.",
            },
        },
        {
            "@type": "Question",
            name: "Kann jeder luzides Träumen lernen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, grundsätzlich kann jeder Mensch luzides Träumen lernen. Es erfordert jedoch Übung, Geduld und die richtigen Techniken.",
            },
        },
        {
            "@type": "Question",
            name: "Wie lange dauert es, bis ich luzide Träume erleben kann?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Die Zeitspanne variiert von Person zu Person. Einige erleben ihren ersten luziden Traum bereits nach wenigen Tagen des Übens, während andere mehrere Wochen oder Monate benötigen.",
            },
        },
        {
            "@type": "Question",
            name: "Ist luzides Träumen gefährlich?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Nein, luzides Träumen ist nicht gefährlich. Es ist ein natürlicher Bewusstseinszustand, der seit Jahrhunderten in verschiedenen Kulturen praktiziert wird.",
            },
        },
        {
            "@type": "Question",
            name: "Welche Vorteile bietet luzides Träumen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Luzides Träumen bietet zahlreiche Vorteile: Überwindung von Ängsten, Steigerung der Kreativität, Problemlösung, Selbsterkenntnis und die Möglichkeit, neue Fähigkeiten zu üben.",
            },
        },
    ],
}

const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Kontrolliere Deine Träume",
    author: {
        "@type": "Person",
        name: "Merten Dieckmann",
        description:
            "Autor und Software-Entwickler, der sich seit Jahren intensiv mit luzidem Träumen beschäftigt.",
    },
    description:
        "Ein praktischer Leitfaden zum luziden Träumen – für Einsteiger und Fortgeschrittene.",
    inLanguage: "de",
    url: AMAZON_URL,
    genre: "Self-help",
    bookFormat: "https://schema.org/Paperback",
    offers: {
        "@type": "Offer",
        price: "14.95",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: AMAZON_URL,
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "16",
        bestRating: "5",
        worstRating: "1",
    },
}

export const viewport: Viewport = {
    themeColor: "#f97316",
}

export const metadata: Metadata = {
    title: "Luzides Träumen lernen: 'Kontrolliere Deine Träume' – Der Ratgeber von Merten Dieckmann",
    description:
        "Entdecke praxisnahe Techniken, um deine Träume bewusst zu steuern und unvergessliche Abenteuer zu erleben. Lerne mit 'Kontrolliere Deine Träume' den ultimativen Leitfaden für luzides Träumen – ideal für Einsteiger und Fortgeschrittene.",
    metadataBase: new URL(APP_URL),
    keywords: [
        "luzides träumen",
        "luzides träumen buch",
        "luzides träumen lernen",
        "klartraum",
        "klarträumen lernen",
        "klartraum buch",
        "traumratgeber",
        "traumkontrolle",
        "kontrolliere deine träume",
        "träume kontrollieren",
        "merten dieckmann",
    ],
    alternates: {
        canonical: APP_URL,
    },
    openGraph: {
        title: "Luzides Träumen lernen: 'Kontrolliere Deine Träume'",
        description:
            "Erfahre effektive Techniken und Tipps, um deine Träume bewusst zu steuern. Entdecke jetzt den ultimativen Ratgeber von Merten Dieckmann!",
        url: APP_URL,
        siteName: "Kontrolliere Deine Träume",
        locale: "de_DE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Luzides Träumen lernen: 'Kontrolliere Deine Träume'",
        description:
            "Erfahre effektive Techniken und Tipps, um deine Träume bewusst zu steuern. Entdecke jetzt den ultimativen Ratgeber von Merten Dieckmann!",
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
                {/* Font preloads */}
                <link
                    rel="preload"
                    as="font"
                    href="/fonts/meethlake-three.ttf"
                    type="font/truetype"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    href="/fonts/Meethlaketwo.otf"
                    type="font/otf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    href="/fonts/adorn-roman.ttf"
                    type="font/truetype"
                    crossOrigin="anonymous"
                />
                {/* Structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </head>
            <body>
                <PostHogProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </PostHogProvider>
            </body>
        </html>
    )
}

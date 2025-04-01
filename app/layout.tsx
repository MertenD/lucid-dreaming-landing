import type React from "react"
import "./globals.css"
import {ThemeProvider} from "@/components/theme-provider"
import { PostHogProvider } from "@/app/providers";

export const metadata = {
    title: "Luzides Träumen lernen: 'Kontrolliere Deine Träume' – Der Ratgeber von Merten Dieckmann",
    description:
        "Entdecke praxisnahe Techniken, um deine Träume bewusst zu steuern und unvergessliche Abenteuer zu erleben. Lerne mit 'Kontrolliere Deine Träume' den ultimativen Leitfaden für luzides Träumen – ideal für Einsteiger und Fortgeschrittene.",
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
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
        "merten dieckmann"
    ],
    openGraph: {
        title: "Luzides Träumen lernen: 'Kontrolliere Deine Träume'",
        description:
            "Erfahre effektive Techniken und Tipps, um deine Träume bewusst zu steuern. Entdecke jetzt den ultimativen Ratgeber von Merten Dieckmann!"
    }
}

export default function RootLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return <html lang="de">
    <head>
        <link rel="icon" href="/favicon.ico"/>
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"/>
        {/* Android-Chrome-Icons, falls du sie explizit einbinden willst */}
        <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/android-chrome-512x512.png"
        />
        <meta name="theme-color" content="#f97316"/>
    </head>
    <body>
        <PostHogProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    {children}
            </ThemeProvider>
        </PostHogProvider>
    </body>
    </html>
}


import './globals.css'
import Head from "next/head";
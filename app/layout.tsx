import type React from "react"
import "./globals.css"
import {ThemeProvider} from "@/components/theme-provider"

export const metadata = {
    title: "Kontrolliere Deine Träume - Luzides Träumen",
    description: "Ein praktischer Leitfaden zum luziden Träumen von Merten Dieckmann",
    generator: 'v0.dev'
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
        <link rel="stylesheet" href="https://unpkg.com/embla-carousel/embla-carousel.css"/>

        <meta name="theme-color" content="#f97316"/>
    </head>
    <body>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </body>
    </html>
}


import './globals.css'
import Head from "next/head";
"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function HeroBackground() {
    const [hqLoaded, setHqLoaded] = useState(false)
    const hqRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        // Falls das Bild bereits im Browser-Cache ist, feuert onLoad nicht mehr
        if (hqRef.current?.complete) setHqLoaded(true)
    }, [])

    return (
        <div className="relative h-full w-full">
            {/* LQ WebP – priority, lädt sofort (~87 KB) */}
            <Image
                src="/images/dream-background.webp"
                alt="Traumlandschaft mit schwebender Figur und kosmischem Himmel"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[75%_center] md:object-center"
            />
            {/* HQ PNG – natives <img> mit loading="eager" damit es auch hinter opacity:0 lädt */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                ref={hqRef}
                src="/images/dream-background.png"
                alt=""
                aria-hidden="true"
                loading="eager"
                className={`absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-[center] transition-opacity duration-[1500ms] ${
                    hqLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setHqLoaded(true)}
            />
        </div>
    )
}

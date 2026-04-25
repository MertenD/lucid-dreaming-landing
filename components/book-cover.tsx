"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function BookCover() {
    const [hqLoaded, setHqLoaded] = useState(false)
    const hqRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (hqRef.current?.complete) setHqLoaded(true)
    }, [])

    return (
        <div className="relative w-[250px] sm:w-[350px] lg:w-[500px] transform-gpu transition-transform duration-500 hover:scale-105">
            <div className="relative">
                {/* LQ WebP – priority, lädt sofort (~91 KB) */}
                <Image
                    src="/images/book-kindle-3d-softcover.webp"
                    alt="Kontrolliere Deine Träume Buchcover"
                    width={500}
                    height={430}
                    sizes="(max-width: 640px) 250px, (max-width: 1024px) 350px, 500px"
                    className="w-full h-auto object-contain"
                    priority
                />
                {/* HQ PNG – natives <img> mit loading="eager" */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    ref={hqRef}
                    src="/images/book-kindle-3d-softcover.png"
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
                        hqLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setHqLoaded(true)}
                />
            </div>
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[70%] h-3 rounded-[50%] bg-black/20 blur-xl" />
        </div>
    )
}

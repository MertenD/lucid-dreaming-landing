"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function BookCover() {
  // Responsive Größe basierend auf Bildschirmbreite
  const [bookSize, setBookSize] = useState({ width: 300, height: 400 })

  useEffect(() => {
    // Funktion zur Anpassung der Buchgröße
    const updateBookSize = () => {
      const width = window.innerWidth
      if (width < 640) {
        // Mobile
        setBookSize({ width: 260, height: 347 })
      } else if (width < 1024) {
        // Tablet
        setBookSize({ width: 350, height: 467 })
      } else {
        // Desktop
        setBookSize({ width: 420, height: 560 })
      }
    }

    // Initial und bei Größenänderung aufrufen
    updateBookSize()
    window.addEventListener("resize", updateBookSize)

    return () => {
      window.removeEventListener("resize", updateBookSize)
    }
  }, [])

  return (
    <div className="relative transform-gpu transition-transform duration-500 hover:scale-105">
      {/* 3D Book Image */}
      <div className="relative h-auto">
        <Image
          src="/images/book-3d.png"
          alt="Kontrolliere Deine Träume Buchcover"
          width={bookSize.width}
          height={bookSize.height}
          className="object-contain"
          priority
        />
      </div>

      {/* Reflection effect - responsive */}
      <div
        className="absolute bottom-[-15px] left-[50%] translate-x-[-50%] rounded-[50%] bg-black/20 blur-xl"
        style={{
          width: `${bookSize.width * 0.7}px`,
          height: `${bookSize.width * 0.05}px`,
        }}
      ></div>
    </div>
  )
}


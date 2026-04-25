"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePostHog } from "posthog-js/react"
import { cn } from "@/lib/utils"

export const AMAZON_URL =
    "https://www.amazon.de/Kontrolliere-Deine-Tr%C3%A4ume-praktischer-Leidfaden/dp/B0D8LHZ2X6"

interface BuyButtonProps {
    source: string
    size?: "default" | "sm" | "lg" | "xl" | "icon"
    className?: string
}

export default function BuyButton({ source, size = "lg", className }: BuyButtonProps) {
    const posthog = usePostHog()

    return (
        <Button
            asChild
            variant="cta"
            size={size}
            className={cn(
                "relative w-fit overflow-hidden rounded-md font-bold",
                "before:absolute before:inset-0 before:-z-10 before:translate-y-full",
                "before:bg-gradient-to-r before:from-[#ff8c4d] before:to-[#e67533]",
                "before:opacity-0 before:transition-all before:duration-500",
                "hover:before:translate-y-0 hover:before:opacity-100",
                className,
            )}
        >
            <Link
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog?.capture("buy_button_clicked", { source })}
            >
                JETZT KAUFEN
            </Link>
        </Button>
    )
}

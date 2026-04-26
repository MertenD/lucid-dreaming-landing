import Image from "next/image"
import BuyButton from "@/components/buy-button"
import { Star } from "lucide-react"

interface BlogInlineCtaProps {
    source: string
}

export default function BlogInlineCta({ source }: BlogInlineCtaProps) {
    return (
        <aside className="my-8 rounded-xl border border-[#e67533]/30 bg-gradient-to-br from-[#3d2035]/80 to-[#2a1a2d]/80 p-5 lg:hidden">
            <div className="flex items-center gap-4">
                <Image
                    src="/images/book-3d.webp"
                    alt="Kontrolliere Deine Träume Buchcover"
                    width={60}
                    height={84}
                    className="flex-shrink-0 rounded shadow-md"
                />
                <div className="min-w-0 flex-1">
                    <p className="!mb-0 !text-sm !font-bold !leading-tight !text-[#f5f0d9]">
                        Kontrolliere Deine Träume
                    </p>
                    <div className="mt-1 flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-[#ff8c4d] text-[#ff8c4d]" aria-hidden="true" />
                        ))}
                        <span className="ml-1 text-xs text-[#f5f0d9]/60">5,0 auf Amazon</span>
                    </div>
                    <p className="!mb-0 !mt-1 !text-xs !text-[#f5f0d9]/60">
                        WILD, MILD, WBTB &amp; mehr
                    </p>
                </div>
            </div>
            <div className="mt-4">
                <BuyButton source={source} size="sm" className="w-full justify-center" />
            </div>
        </aside>
    )
}

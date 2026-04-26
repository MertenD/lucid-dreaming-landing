import Link from "next/link"
import {Mail} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative overflow-hidden bg-[#171624] py-6 md:py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0 md:text-left">
                    {/* Copyright */}
                    <p className="text-sm text-[#f5f0d9]/70">
                        © {currentYear} Kontrolliere Deine Träume. Alle Rechte vorbehalten.
                    </p>

                    {/* Kontakt - nur Email */}
                    <div className="text-sm text-[#f5f0d9]/70">
                        <a
                            href="mailto:merten.dieckmann@web.de"
                            className="text-[#ff8c4d] hover:underline flex flex-row gap-2"
                            aria-label="E-Mail an Merten Dieckmann senden"
                        >
                            <Mail aria-hidden="true" />merten.dieckmann@web.de
                        </a>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 text-sm">
                        <Link href="/blog" className="text-[#f5f0d9]/70 transition-colors hover:text-[#ff8c4d]">
                            Blog
                        </Link>
                        <Link href="/impressum" className="text-[#f5f0d9]/70 transition-colors hover:text-[#ff8c4d]">
                            Impressum
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

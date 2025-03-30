import Link from "next/link"
import {Mail} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative overflow-hidden bg-[#1a1630] py-6 md:py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0 md:text-left">
                    {/* Copyright */}
                    <p className="text-sm text-[#f5f0d9]/70">
                        © {currentYear} Kontrolliere Deine Träume. Alle Rechte vorbehalten.
                    </p>

                    {/* Kontakt - nur Email */}
                    <div className="text-sm text-[#f5f0d9]/70">
                        <a href="mailto:merten.dieckmann@web.de" className="text-[#ff8c4d] hover:underline flex flex-row gap-2">
                            <Mail></Mail>merten.dieckmann@web.de
                        </a>
                    </div>

                    {/* Impressum */}
                    <div className="text-sm">
                        <Link href="/impressum" className="text-[#f5f0d9]/70 hover:text-[#ff8c4d] transition-colors">
                            Impressum
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

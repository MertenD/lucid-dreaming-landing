export default function BookContentSection() {
    return (
        <section id="buchinhalt" className="relative overflow-hidden bg-gradient-to-b from-[#182037] to-[#182037] py-16 md:py-24">
            {/* Hintergrundeffekte */}
            <div className="absolute inset-0">
                <div
                    className="absolute right-[10%] top-[20%] h-40 w-40 rounded-full bg-gradient-to-br from-[#e67533] to-[#d56a2d] opacity-10"></div>
                <div
                    className="absolute left-[5%] bottom-[10%] h-32 w-32 rounded-full bg-gradient-to-br from-[#e67533] to-[#d56a2d] opacity-10"></div>

                {/* Animierte Sterne */}
                <div
                    className="absolute left-[8%] top-[12%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle"></div>
                <div
                    className="absolute left-[22%] top-[45%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle-delay"></div>
                <div
                    className="absolute left-[88%] top-[22%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle"></div>
                <div
                    className="absolute left-[65%] top-[8%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle-delay"></div>
                <div
                    className="absolute left-[35%] top-[75%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle"></div>
                <div
                    className="absolute left-[78%] top-[65%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] opacity-20 animate-twinkle-delay"></div>
            </div>

            <div className="container relative mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-10 text-center text-3xl font-bold text-[#f5f0d9] md:text-4xl lg:text-5xl">
                        Worum geht es in diesem Buch?
                    </h2>

                    <div className="rounded-xl p-6 md:p-8">
                        <p className="mb-6 text-lg leading-relaxed text-[#f5f0d9] md:text-xl">
                            Das Buch ist ein praktischer Leitfaden zum luziden Träumen.
                        </p>

                        <p className="mb-6 text-base leading-relaxed text-[#f5f0d9]/90 md:text-lg">
                            Stell dir vor, du könntest deine Träume im Schlaf bewusst steuern und jede Nacht in ein
                            einzigartiges
                            Abenteuer eintauchen. Mit "Kontrolliere Deine Träume" machst du genau das möglich! Dieser
                            praktische
                            Leitfaden zeigt dir, wie du deine Träume bewusst wahrnehmen und nach deinen Wünschen gestalten kannst.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-[#ff8c4d] md:text-2xl">Was du lernen wirst:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#ff8c4d] text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-[#f5f0d9]/90">WILD-, MILD- und WBTB-Techniken Schritt für Schritt</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#ff8c4d] text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-[#f5f0d9]/90">Reality Checks für den Alltag einüben</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#ff8c4d] text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-[#f5f0d9]/90">Traumtagebuch effektiv führen</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#ff8c4d] text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-[#f5f0d9]/90">Klarträume stabilisieren und verlängern</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-[#ff8c4d] md:text-2xl">Was du erleben kannst:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#ff8c4d] text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-[#f5f0d9]/90">Fliegen und Schweben im Traum</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#ff8c4d] text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-[#f5f0d9]/90">Neue Welten erkunden</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#ff8c4d] text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-[#f5f0d9]/90">Kreative Lösungen für Probleme finden</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#ff8c4d] text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-[#f5f0d9]/90">Ängste überwinden und Selbstvertrauen stärken</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="mt-6 text-base italic text-[#f5f0d9]/80 md:text-lg">
                            "Die Grenzen setzt nur deine Vorstellungskraft."
                        </p>

                        <div className="mt-8 rounded-xl border border-[#e67533]/20 bg-gradient-to-br from-[#2a1a2d]/60 to-[#3d2035]/40 p-5 md:p-6">
                            <h3 className="mb-4 text-xl font-bold text-[#ff8c4d] md:text-2xl">Für wen ist dieses Buch?</h3>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {[
                                    "Einsteiger ohne Vorkenntnisse im luziden Träumen",
                                    "Alle, die ihren ersten Klartraum erleben möchten",
                                    "Menschen, die Albträume bewusst überwinden wollen",
                                    "Fortgeschrittene, die mehr Kontrolle im Traum suchen",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <div className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#ff8c4d] text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-sm text-[#f5f0d9]/90 md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


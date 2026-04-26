import Link from "next/link"
import {blogPosts} from "@/lib/blog"
import type {Metadata} from "next"
import Footer from "@/components/footer"
import {Clock, ArrowRight, BookOpen} from "lucide-react"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.luzides-traeumen-buch.de"

export const metadata: Metadata = {
  title: "Blog – Luzides Träumen lernen | Kontrolliere Deine Träume",
  description:
    "Ratgeber und Anleitungen zum luziden Träumen: WILD-Technik, Traumtagebuch, Reality Checks und mehr – praxisnah erklärt von Merten Dieckmann.",
  alternates: {
    canonical: `${APP_URL}/blog`,
  },
  openGraph: {
    title: "Blog – Luzides Träumen lernen",
    description:
      "Ratgeber und Anleitungen zu WILD, MILD, WBTB, Reality Checks und Traumtagebuch für Einsteiger.",
    url: `${APP_URL}/blog`,
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1629] to-[#182037]">
      <nav className="border-b border-[#e67533]/20 bg-[#0f1629]/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="text-base font-bold text-[#f5f0d9] transition-colors hover:text-[#ff8c4d]"
          >
            Kontrolliere Deine Träume
          </Link>
          <Link
            href="/#kaufen"
            className="text-sm font-medium text-[#ff8c4d] hover:underline"
          >
            Buch kaufen →
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 pb-16 pt-16 text-center md:pt-20">
        <div className="mb-4 flex items-center justify-center gap-2 text-[#ff8c4d]">
          <BookOpen className="h-5 w-5" aria-hidden="true"/>
          <span className="text-sm font-medium uppercase tracking-wider">Blog</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-[#f5f0d9] md:text-5xl">
          Luzides Träumen lernen
        </h1>
        <p className="mx-auto max-w-2xl text-base text-[#f5f0d9]/70 md:text-lg">
          Praxisnahe Anleitungen zu WILD, MILD, WBTB, Reality Checks und Traumtagebuch – für
          Einsteiger und Fortgeschrittene.
        </p>
      </div>

      <div className="container mx-auto px-4 pb-24">
        <div className="mx-auto grid max-w-3xl gap-6">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              className="transition-colors hover:text-[#ff8c4d]"
            >
              <article
                key={post.slug}
                className="rounded-xl border border-[#e67533]/20 bg-gradient-to-br from-[#2a1a2d]/80 to-[#1e1a38]/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#e67533]/40 hover:shadow-[0_4px_24px_rgba(230,117,51,0.08)] md:p-8"
              >
                <div className="mb-3 flex items-center gap-3 text-xs text-[#f5f0d9]/50">
                  <time dateTime={post.dateISO}>{post.date}</time>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true"/>
                    {post.readingTime} Lesezeit
                  </span>
                </div>
                <h2
                  className="mb-3 text-xl font-bold text-[#f5f0d9] md:text-2xl transition-colors hover:text-[#ff8c4d]">
                  {post.title}
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-[#f5f0d9]/70 md:text-base">
                  {post.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#ff8c4d] transition-all hover:gap-2"
                >
                  Weiterlesen{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true"/>
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  )
}

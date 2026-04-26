import { blogPosts, getPostBySlug } from "@/lib/blog"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"
import BuyButton from "@/components/buy-button"
import { Clock, ArrowLeft, User, Star, ChevronRight } from "lucide-react"

import LuzidesTraeumenLernen from "@/app/blog/_posts/luzides-traeumen-lernen"
import WildTechnikAnleitung from "@/app/blog/_posts/wild-technik-anleitung"
import TraumtagebuchFuehren from "@/app/blog/_posts/traumtagebuch-fuehren"
import RealityChecksAnleitung from "@/app/blog/_posts/reality-checks-anleitung";

const postContentMap: Record<string, React.FC<{ source?: string }>> = {
    "luzides-traeumen-lernen": LuzidesTraeumenLernen,
    "wild-technik-anleitung": WildTechnikAnleitung,
    "traumtagebuch-fuehren": TraumtagebuchFuehren,
    "reality-checks-anleitung": RealityChecksAnleitung
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.luzides-traeumen-buch.de"

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) return {}

    return {
        title: `${post.title} | Kontrolliere Deine Träume`,
        description: post.description,
        keywords: post.keywords,
        alternates: { canonical: `${APP_URL}/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.description,
            url: `${APP_URL}/blog/${post.slug}`,
            type: "article",
            publishedTime: post.dateISO,
            authors: ["Merten Dieckmann"],
            images: [
                {
                    url: `${APP_URL}/images/book-3d.webp`,
                    width: 800,
                    height: 600,
                    alt: "Kontrolliere Deine Träume – Buch über luzides Träumen",
                },
            ],
        },
    }
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) notFound()

    const PostContent = postContentMap[slug]
    if (!PostContent) notFound()

    const relatedPosts = blogPosts.filter((p) => p.slug !== slug)

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: APP_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${APP_URL}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: `${APP_URL}/blog/${post.slug}` },
        ],
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        image: `${APP_URL}/images/book-3d.webp`,
        datePublished: post.dateISO,
        dateModified: post.dateISO,
        author: { "@type": "Person", name: "Merten Dieckmann", url: APP_URL },
        publisher: { "@type": "Person", name: "Merten Dieckmann", url: APP_URL },
        url: `${APP_URL}/blog/${post.slug}`,
        inLanguage: "de",
        keywords: post.keywords.join(", "),
        mainEntityOfPage: `${APP_URL}/blog/${post.slug}`,
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="min-h-screen bg-gradient-to-b from-[#0f1629] to-[#182037]">
                {/* Nav */}
                <nav className="sticky top-0 z-10 border-b border-[#e67533]/20 bg-[#0f1629]/90 backdrop-blur-sm">
                    <div className="container mx-auto flex items-center justify-between px-4 py-4">
                        <Link
                            href="/"
                            className="text-sm font-bold text-[#f5f0d9] transition-colors hover:text-[#ff8c4d]"
                        >
                            Kontrolliere Deine Tr&#228;ume
                        </Link>
                        <Link
                            href="/blog"
                            className="flex items-center gap-1 text-sm text-[#f5f0d9]/60 transition-colors hover:text-[#ff8c4d]"
                        >
                            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                            Alle Artikel
                        </Link>
                    </div>
                </nav>

                {/* Breadcrumb */}
                <div className="container mx-auto px-4 pt-4">
                    <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl">
                        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#f5f0d9]/40">
                            <li>
                                <Link href="/" className="transition-colors hover:text-[#ff8c4d]">
                                    Startseite
                                </Link>
                            </li>
                            <li aria-hidden="true">
                                <ChevronRight className="h-3 w-3" />
                            </li>
                            <li>
                                <Link href="/blog" className="transition-colors hover:text-[#ff8c4d]">
                                    Blog
                                </Link>
                            </li>
                            <li aria-hidden="true">
                                <ChevronRight className="h-3 w-3" />
                            </li>
                            <li className="truncate text-[#f5f0d9]/70" aria-current="page">
                                {post.title}
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* Header */}
                <header className="container mx-auto px-4 pb-10 pt-6 md:pt-10">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-4 flex items-center justify-center gap-4 text-xs text-[#f5f0d9]/50">
                            <span className="flex items-center gap-1">
                                <User className="h-3 w-3" aria-hidden="true" />
                                Merten Dieckmann
                            </span>
                            <span aria-hidden="true">&#xB7;</span>
                            <time dateTime={post.dateISO}>{post.date}</time>
                            <span aria-hidden="true">&#xB7;</span>
                            <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" aria-hidden="true" />
                                {post.readingTime} Lesezeit
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold leading-tight text-[#f5f0d9] md:text-4xl lg:text-5xl">
                            {post.title}
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-[#f5f0d9]/70 md:text-lg">
                            {post.description}
                        </p>
                    </div>
                </header>

                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl border-t border-[#e67533]/20" />
                </div>

                {/* Article + Sidebar */}
                <div className="container mx-auto px-4 py-10">
                    <div className="mx-auto flex max-w-5xl gap-10 xl:gap-14">
                        {/* Article */}
                        <div className="min-w-0 flex-1">
                            <div
                                className="
                                    [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#ff8c4d] md:[&_h2]:text-3xl
                                    [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#ff8c4d]/80 md:[&_h3]:text-xl
                                    [&_p]:mb-5 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-[#f5f0d9]/90 md:[&_p]:text-lg
                                    [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-[#ff8c4d]
                                    [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:marker:text-[#ff8c4d]
                                    [&_li]:text-base [&_li]:leading-relaxed [&_li]:text-[#f5f0d9]/90 md:[&_li]:text-lg
                                    [&_strong]:font-semibold [&_strong]:text-[#f5f0d9]
                                    [&_em]:italic [&_em]:text-[#f5f0d9]/80
                                    [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#e67533] [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[#f5f0d9]/70
                                    [&_a:not(aside_a)]:text-[#ff8c4d] [&_a:not(aside_a)]:underline [&_a:not(aside_a):hover]:text-[#e67533]
                                "
                            >
                                <PostContent source={`blog_inline_${slug}`} />
                            </div>
                        </div>

                        {/* Sticky sidebar - desktop only */}
                        <aside className="hidden w-64 shrink-0 lg:block xl:w-72">
                            <div className="sticky top-24 rounded-xl border border-[#e67533]/30 bg-gradient-to-br from-[#3d2035]/80 to-[#2a1a2d]/80 p-5 shadow-lg backdrop-blur-sm">
                                <div className="mb-4 flex justify-center">
                                    <Image
                                        src="/images/book-3d.webp"
                                        alt="Kontrolliere Deine Tr&#228;ume &#8211; Buchcover"
                                        width={140}
                                        height={196}
                                        className="rounded shadow-md"
                                    />
                                </div>
                                <p className="mb-2 text-center text-sm font-bold leading-snug text-[#f5f0d9]">
                                    Kontrolliere Deine Tr&#228;ume
                                </p>
                                <div className="mb-2 flex items-center justify-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-[#ff8c4d] text-[#ff8c4d]" aria-hidden="true" />
                                    ))}
                                    <span className="ml-1 text-xs text-[#f5f0d9]/60">5,0</span>
                                </div>
                                <p className="mb-4 text-center text-xs text-[#f5f0d9]/60">
                                    WILD, MILD, WBTB, Reality Checks &amp; Traumtagebuch &#8211; alles Schritt f&#252;r Schritt erkl&#228;rt.
                                </p>
                                <BuyButton source={`blog_sidebar_${slug}`} size="sm" className="w-full justify-center" />
                            </div>
                        </aside>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="container mx-auto px-4 pb-8">
                    <div className="mx-auto max-w-5xl">
                        <div className="flex flex-col items-center gap-6 rounded-xl border border-[#e67533]/30 bg-gradient-to-br from-[#3d2035]/80 to-[#2a1a2d]/80 p-6 shadow-lg backdrop-blur-sm sm:flex-row md:p-8">
                            <Image
                                src="/images/book-3d.webp"
                                alt="Kontrolliere Deine Tr&#228;ume &#8211; Buchcover"
                                width={100}
                                height={140}
                                className="shrink-0 rounded shadow-md"
                            />
                            <div className="text-center sm:text-left">
                                <p className="mb-2 text-xl font-bold text-[#f5f0d9] md:text-2xl">
                                    Alle Techniken im Buch
                                </p>
                                <div className="mb-3 flex items-center justify-center gap-0.5 sm:justify-start">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-[#ff8c4d] text-[#ff8c4d]" aria-hidden="true" />
                                    ))}
                                    <span className="ml-1 text-sm text-[#f5f0d9]/60">5,0 auf Amazon</span>
                                </div>
                                <p className="mb-5 text-sm text-[#f5f0d9]/70 md:text-base">
                                    WILD, MILD, WBTB, Reality Checks und Traumtagebuch &#8211; Schritt f&#252;r Schritt erkl&#228;rt in{" "}
                                    <strong className="text-[#f5f0d9]">Kontrolliere Deine Tr&#228;ume</strong>.
                                </p>
                                <BuyButton source={`blog_bottom_${slug}`} size="lg" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="container mx-auto px-4 pb-16">
                        <div className="mx-auto max-w-5xl">
                            <h2 className="mb-6 text-xl font-bold text-[#f5f0d9]">Weitere Artikel</h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.slug}
                                        href={`/blog/${relatedPost.slug}`}
                                        className="group rounded-xl border border-[#e67533]/20 bg-[#2a1a2d]/40 p-5 transition-all hover:border-[#e67533]/50 hover:bg-[#2a1a2d]/60"
                                    >
                                        <div className="mb-2 flex items-center gap-2 text-xs text-[#f5f0d9]/40">
                                            <Clock className="h-3 w-3" aria-hidden="true" />
                                            {relatedPost.readingTime} Lesezeit
                                        </div>
                                        <p className="font-semibold leading-snug text-[#f5f0d9] transition-colors group-hover:text-[#ff8c4d]">
                                            {relatedPost.title}
                                        </p>
                                        <p className="mt-2 line-clamp-2 text-sm text-[#f5f0d9]/60">
                                            {relatedPost.excerpt}
                                        </p>
                                        <span className="mt-3 inline-block text-sm text-[#ff8c4d] group-hover:underline">
                                            Weiterlesen &#x2192;
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <Footer />
            </div>
        </>
    )
}

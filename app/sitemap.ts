import { blogPosts } from "@/lib/blog"

export default async function sitemap() {
    const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.luzides-traeumen-buch.de"

    const blogEntries = blogPosts.map((post) => ({
        url: `${APP_URL}/blog/${post.slug}`,
        lastModified: new Date(post.dateISO).toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }))

    return [
        {
            url: APP_URL,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly" as const,
            priority: 1.0,
        },
        {
            url: `${APP_URL}/blog`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        ...blogEntries,
        {
            url: `${APP_URL}/impressum`,
            lastModified: new Date().toISOString(),
            changeFrequency: "yearly" as const,
            priority: 0.3,
        },
    ]
}
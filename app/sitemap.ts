export default async function sitemap() {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly" as const,
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/impressum`,
            lastModified: new Date().toISOString(),
            changeFrequency: "yearly" as const,
            priority: 0.3,
        }
    ];
}
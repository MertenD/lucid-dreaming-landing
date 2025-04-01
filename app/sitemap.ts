export default async function sitemap() {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/impressum`,
            lastModified: new Date().toISOString(),
        }
    ];
}
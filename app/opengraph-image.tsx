import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Kontrolliere Deine Träume – Ein praktischer Leitfaden zum luziden Träumen"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#1e1a38",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "64px",
                }}
            >
                <div
                    style={{
                        color: "#e67533",
                        fontSize: 26,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: 20,
                        fontFamily: "sans-serif",
                    }}
                >
                    Merten Dieckmann
                </div>
                <div
                    style={{
                        color: "#f5f0d9",
                        fontSize: 80,
                        fontWeight: "bold",
                        textAlign: "center",
                        lineHeight: 1.1,
                        marginBottom: 28,
                        fontFamily: "sans-serif",
                    }}
                >
                    Kontrolliere Deine Träume
                </div>
                <div
                    style={{
                        color: "#f5f0d9",
                        opacity: 0.8,
                        fontSize: 34,
                        textAlign: "center",
                        fontFamily: "sans-serif",
                    }}
                >
                    Ein praktischer Leitfaden zum luziden Träumen
                </div>
                <div
                    style={{
                        marginTop: 56,
                        background: "#e67533",
                        color: "white",
                        fontSize: 26,
                        fontWeight: "bold",
                        padding: "14px 40px",
                        borderRadius: 8,
                        fontFamily: "sans-serif",
                    }}
                >
                    Jetzt auf Amazon
                </div>
            </div>
        ),
        { ...size },
    )
}

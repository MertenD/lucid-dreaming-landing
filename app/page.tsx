import HeroSection from "@/components/hero-section"
import TestimonialSection from "@/components/testimonial-section"
import FaqSection from "@/components/faq-section"
import AuthorSection from "@/components/author-section";
import Footer from "@/components/footer";
import ConversionSection from "@/components/conversion-section";
import BookContentSection from "@/components/book-content-section";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection/>
            <BookContentSection/>
            <TestimonialSection/>
            <FaqSection/>
            <AuthorSection/>
            <ConversionSection/>
            <Footer/>
        </main>
    )
}


import HeroSection from "@/components/hero-section"
import TestimonialSection from "@/components/testimonial-section"
import FaqSection from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section mit Hintergrundbild */}
      <HeroSection />

      {/* FAQ Section */}
      <TestimonialSection />

      {/* Testimonials Section */}
      <FaqSection />
    </main>
  )
}


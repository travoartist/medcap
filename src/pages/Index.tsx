import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyIndia from "@/components/WhyIndia";
import TrustPillars from "@/components/TrustPillars";
import DentistCarousel from "@/components/DentistCarousel";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import RelaxationGallery from "@/components/RelaxationGallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ExitPopup from "@/components/ExitPopup";

const Index = () => {
  useEffect(() => {
    // Add JSON-LD Schema
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalClinic",
          "@id": "https://medcapglobal.com/#clinic",
          name: "MedCap Global",
          description: "Premium dental tourism connecting global patients to India's best dentists",
          url: "https://medcapglobal.com",
          telephone: "+919876543210",
          email: "care@medcapglobal.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
            addressLocality: "Bangalore, Delhi, Goa",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 12.9716,
            longitude: 77.5946,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
          priceRange: "$$$",
          medicalSpecialty: ["Dentistry", "Cosmetic Dentistry", "Oral Surgery", "Orthodontics"],
          availableService: [
            { "@type": "MedicalProcedure", name: "Dental Implants" },
            { "@type": "MedicalProcedure", name: "Cosmetic Veneers" },
            { "@type": "MedicalProcedure", name: "Full Mouth Rehabilitation" },
            { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
            { "@type": "MedicalProcedure", name: "Orthodontics" },
          ],
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://medcapglobal.com/#business",
          name: "MedCap Global Dental Tourism",
          image: "https://medcapglobal.com/og-image.jpg",
          telephone: "+919876543210",
          email: "care@medcapglobal.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Partner Clinics Network",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "India",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "12000",
          },
        },
        {
          "@type": "FAQPage",
          "@id": "https://medcapglobal.com/#faq",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do you ensure dentist quality?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Every dentist in our network holds verified BDS/MDS credentials from accredited Indian universities. We personally vet each specialist, requiring a minimum of 10 years' experience treating international patients. All our partner clinics are JCI-accredited.",
              },
            },
            {
              "@type": "Question",
              name: "What does transparent pricing mean?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We provide complete cost breakdowns before you commit—covering treatment, accommodation, flights, transfers, and recovery activities. The price you see is exactly what you pay. No hidden consultation fees, no surprise charges.",
              },
            },
            {
              "@type": "Question",
              name: "How long do I need to stay in India for dental treatment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most treatments require 5-14 days depending on complexity. Simple procedures like crowns may only need 5-7 days. Complex treatments like full mouth implants typically require 10-14 days.",
              },
            },
            {
              "@type": "Question",
              name: "Do you help with visa and travel arrangements?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. Our Complete and Signature packages include full visa assistance, including documentation support and appointment scheduling. We also handle flight bookings, airport transfers, and accommodation reservations.",
              },
            },
            {
              "@type": "Question",
              name: "What happens if I need follow-up care after returning home?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We provide comprehensive aftercare support. You'll have 24/7 access to your treatment team via video call for 6 months post-treatment. We also partner with dentists worldwide for in-person follow-ups if needed.",
              },
            },
          ],
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyIndia />
        <TrustPillars />
        <DentistCarousel />
        <Packages />
        <Testimonials />
        <RelaxationGallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ExitPopup />
    </div>
  );
};

export default Index;

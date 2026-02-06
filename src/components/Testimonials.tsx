import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "United States",
    flag: "🇺🇸",
    treatment: "Full Mouth Implants",
    quote:
      "The entire experience was beyond my expectations. From the moment I landed to my recovery by the beach, everything was seamlessly handled. Saved over $40,000 compared to US prices, and the quality was exceptional!",
    rating: 5,
    savings: "$42,000",
  },
  {
    name: "James Wilson",
    location: "United Kingdom",
    flag: "🇬🇧",
    treatment: "Cosmetic Veneers",
    quote:
      "Complete transparency from day one. Every cost was explained upfront, no surprises. Dr. Priya's work on my veneers was absolutely stunning. I returned home with the smile I always dreamed of.",
    rating: 5,
    savings: "$15,000",
  },
  {
    name: "Emma Thompson",
    location: "Australia",
    flag: "🇦🇺",
    treatment: "Root Canal & Crowns",
    quote:
      "I was nervous about dental tourism, but MedCap made it feel like a premium vacation. The 24/7 support was incredible—they even helped me book yoga classes during my recovery!",
    rating: 5,
    savings: "$8,500",
  },
  {
    name: "Ahmed Hassan",
    location: "Dubai, UAE",
    flag: "🇦🇪",
    treatment: "Orthodontics (Invisalign)",
    quote:
      "As someone who values luxury and quality, I was impressed. Five-star accommodation, world-class dentists, and a care team that anticipated my every need. This is how healthcare should be.",
    rating: 5,
    savings: "$12,000",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="badge-premium mb-3 inline-block text-xs sm:text-sm">Real Experiences</span>
          <h2 className="section-title">
            Global Patient <span className="text-primary-deep">Stories</span>
          </h2>
          <p className="section-subtitle">
            Patients worldwide trust MedCap Global
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-4 text-sm sm:text-base italic line-clamp-4 sm:line-clamp-none">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-border mb-4" />

              {/* Author */}
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-serif font-bold text-foreground text-sm sm:text-base truncate">
                    {testimonial.name}
                  </p>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm">
                    <span>{testimonial.flag}</span>
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{testimonial.location}</span>
                  </div>
                  <p className="text-primary-deep text-xs sm:text-sm mt-0.5">{testimonial.treatment}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-muted-foreground">Saved</p>
                  <p className="font-bold text-secondary-deep text-sm sm:text-base">{testimonial.savings}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10 sm:mt-14"
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">12,000+</p>
            <p className="text-muted-foreground text-xs sm:text-sm">Happy Patients</p>
          </div>
          <div className="w-px bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">50+</p>
            <p className="text-muted-foreground text-xs sm:text-sm">Countries Served</p>
          </div>
          <div className="w-px bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">4.9/5</p>
            <p className="text-muted-foreground text-xs sm:text-sm">Average Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

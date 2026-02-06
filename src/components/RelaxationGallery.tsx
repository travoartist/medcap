import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Waves, Mountain, Utensils } from "lucide-react";
import recoveryImage from "@/assets/recovery.jpg";
import hotelImage from "@/assets/hotel.jpg";
import clinicImage from "@/assets/clinic.jpg";

const experiences = [
  {
    title: "VIP Airport Transfers",
    description: "Luxury vehicles and personalized welcome",
    icon: Sparkles,
  },
  {
    title: "Beach Recovery",
    description: "Serene coastal healing environments",
    icon: Waves,
  },
  {
    title: "Cultural Escapes",
    description: "Explore India's rich heritage",
    icon: Mountain,
  },
  {
    title: "Gourmet Dining",
    description: "Curated culinary experiences",
    icon: Utensils,
  },
];

const galleryImages = [
  {
    src: hotelImage,
    alt: "Luxury 5-star hotel suite for dental tourism patients",
    title: "Premium Accommodations",
  },
  {
    src: recoveryImage,
    alt: "Serene beach recovery experience in Goa",
    title: "Beach Recovery",
  },
  {
    src: clinicImage,
    alt: "World-class dental clinic interior",
    title: "State-of-the-Art Care",
  },
];

export default function RelaxationGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="badge-premium mb-3 inline-block text-xs sm:text-sm">Beyond Treatment</span>
          <h2 className="section-title">
            Care That <span className="text-primary-deep">Rejuvenates</span>
          </h2>
          <p className="section-subtitle">
            A transformative retreat with premium relaxation
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-card"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="font-serif text-base sm:text-lg font-bold text-cream">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="card-glass text-center py-4 sm:py-5"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <exp.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-deep" />
              </div>
              <h4 className="font-semibold text-foreground text-sm sm:text-base mb-0.5">{exp.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

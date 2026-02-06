import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin, Award } from "lucide-react";
import dentist1 from "@/assets/dentist-1.jpg";
import dentist2 from "@/assets/dentist-2.jpg";
import dentist3 from "@/assets/dentist-3.jpg";
import dentist4 from "@/assets/dentist-4.jpg";
import dentist5 from "@/assets/dentist-5.jpg";
import dentist6 from "@/assets/dentist-6.jpg";

const dentists = [
  {
    name: "Dr. Arun Sharma",
    specialty: "Implantology & Prosthodontics",
    location: "Bangalore",
    rating: 4.9,
    reviews: 320,
    credentials: "BDS, MDS (Prosthodontics)",
    experience: "18 years",
    image: dentist1,
  },
  {
    name: "Dr. Priya Menon",
    specialty: "Cosmetic Dentistry",
    location: "Delhi",
    rating: 4.9,
    reviews: 285,
    credentials: "BDS, MDS (Conservative Dentistry)",
    experience: "15 years",
    image: dentist2,
  },
  {
    name: "Dr. Rajesh Nair",
    specialty: "Oral & Maxillofacial Surgery",
    location: "Goa",
    rating: 5.0,
    reviews: 412,
    credentials: "BDS, MDS, FDSRCS",
    experience: "22 years",
    image: dentist3,
  },
  {
    name: "Dr. Vikram Patel",
    specialty: "Full Mouth Rehabilitation",
    location: "Bangalore",
    rating: 4.8,
    reviews: 198,
    credentials: "BDS, MDS (Prosthodontics)",
    experience: "12 years",
    image: dentist4,
  },
  {
    name: "Dr. Anita Kapoor",
    specialty: "Orthodontics & Invisalign",
    location: "Delhi",
    rating: 4.9,
    reviews: 356,
    credentials: "BDS, MDS (Orthodontics)",
    experience: "16 years",
    image: dentist5,
  },
  {
    name: "Dr. Suresh Kumar",
    specialty: "Endodontics & Root Canal",
    location: "Goa",
    rating: 4.8,
    reviews: 267,
    credentials: "BDS, MDS (Endodontics)",
    experience: "14 years",
    image: dentist6,
  },
];

export default function DentistCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const next = () => {
    setCurrentIndex((prev) =>
      prev >= dentists.length - itemsPerView.desktop ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dentists.length - itemsPerView.desktop : prev - 1
    );
  };

  return (
    <section id="dentists" className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="badge-premium mb-3 inline-block text-xs sm:text-sm">World-Class Specialists</span>
          <h2 className="section-title">
            India's <span className="text-primary-deep">Top Dentists</span>
          </h2>
          <p className="section-subtitle">
            BDS/MDS verified dental specialists
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-cream shadow-elevated flex items-center justify-center hover:bg-primary/10 transition-colors hidden lg:flex"
            aria-label="Previous dentist"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-cream shadow-elevated flex items-center justify-center hover:bg-primary/10 transition-colors hidden lg:flex"
            aria-label="Next dentist"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-4">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerView.desktop + 2)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {dentists.map((dentist, index) => (
                <motion.div
                  key={dentist.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium min-w-[300px] md:min-w-[340px] lg:min-w-[calc(33.333%-1rem)] flex-shrink-0"
                >
                  {/* Image */}
                  <div className="relative mb-6">
                    <img
                      src={dentist.image}
                      alt={`${dentist.name} - ${dentist.specialty}`}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-cream/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 text-gold fill-gold" />
                      <span className="font-semibold text-sm text-foreground">
                        {dentist.rating}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{dentist.location}</span>
                      <span className="text-primary/40">•</span>
                      <span>{dentist.experience}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {dentist.name}
                    </h3>
                    <p className="text-primary-deep font-medium">{dentist.specialty}</p>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-secondary-deep" />
                      <span className="text-sm text-muted-foreground">
                        {dentist.credentials}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {dentist.reviews} verified patient reviews
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {dentists.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary-deep w-8"
                    : "bg-primary/30"
                }`}
                aria-label={`Go to dentist ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-premium"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Connect With Our Specialists
          </a>
        </motion.div>
      </div>
    </section>
  );
}

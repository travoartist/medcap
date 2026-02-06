import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  UserCheck,
  HeadphonesIcon,
  FileCheck,
  BadgeDollarSign,
  Sparkles,
} from "lucide-react";

const pillars = [
  {
    icon: UserCheck,
    title: "India's Best Dentists",
    description: "BDS/MDS Verified",
    details:
      "Every dentist in our network holds verified BDS/MDS credentials with 10+ years of experience treating international patients.",
    color: "primary",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Concierge Care",
    description: "Always Available",
    details:
      "Round-the-clock support in your language. From visa queries to midnight concerns, we're always just a call away.",
    color: "secondary",
  },
  {
    icon: FileCheck,
    title: "End-to-End Transparency",
    description: "Visa to Recovery",
    details:
      "Complete visibility into every step of your journey. Track your appointments, treatments, and recovery progress in real-time.",
    color: "primary",
  },
  {
    icon: BadgeDollarSign,
    title: "Complete Price Clarity",
    description: "No Hidden Fees",
    details:
      "Detailed cost breakdowns upfront. What you see is what you pay—no surprises, no hidden charges, ever.",
    color: "gold",
  },
  {
    icon: Sparkles,
    title: "Relaxing Premium Experience",
    description: "Care That Rejuvenates",
    details:
      "Combine treatment with relaxation. Beach yoga, spa sessions, and cultural excursions during your recovery.",
    color: "secondary",
  },
];

export default function TrustPillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/20 text-primary-deep";
      case "secondary":
        return "bg-secondary/30 text-secondary-deep";
      case "gold":
        return "bg-gold-light text-deep-teal";
      default:
        return "bg-primary/20 text-primary-deep";
    }
  };

  return (
    <section
      id="pillars"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-background to-accent/30"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="badge-premium mb-3 inline-block text-xs sm:text-sm">Our Promise</span>
          <h2 className="section-title">
            Premium <span className="text-primary-deep">Trust Pillars</span>
          </h2>
          <p className="section-subtitle">
            Five principles that define every patient experience
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-premium group ${
                index === pillars.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${getColorClasses(
                  pillar.color
                )} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <pillar.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-1">
                {pillar.title}
              </h3>
              <p className="text-primary-deep font-medium text-sm mb-2">{pillar.description}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">{pillar.details}</p>
            </motion.div>
          ))}
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
            className="btn-premium-outline inline-flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Experience Premium Care
          </a>
        </motion.div>
      </div>
    </section>
  );
}

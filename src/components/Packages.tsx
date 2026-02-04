import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Crown, Diamond } from "lucide-react";

const packages = [
  {
    name: "Essential",
    tagline: "Quality Care, Great Value",
    icon: Star,
    price: "From $1,499",
    features: [
      "Comprehensive dental diagnosis",
      "Personalized treatment plan",
      "All dental procedures included",
      "3-star hotel accommodation (5 nights)",
      "Airport pickup & drop",
      "Dedicated patient coordinator",
      "Post-treatment follow-up",
    ],
    highlight: false,
    color: "primary",
  },
  {
    name: "Complete",
    tagline: "Our Most Popular Package",
    icon: Crown,
    price: "From $2,999",
    features: [
      "Everything in Essential, plus:",
      "Visa assistance & documentation",
      "Round-trip flight booking support",
      "4-star hotel (7 nights)",
      "Daily wellness breakfast",
      "City tour & cultural experience",
      "24/7 concierge support",
      "Beach yoga sessions",
      "Spa treatment included",
    ],
    highlight: true,
    color: "gold",
  },
  {
    name: "Signature",
    tagline: "Ultimate Premium Experience",
    icon: Diamond,
    price: "From $5,499",
    features: [
      "Everything in Complete, plus:",
      "Business class flight upgrade",
      "5-star luxury resort (10 nights)",
      "Private suite with ocean view",
      "Personal butler service",
      "Private airport transfers",
      "VIP clinic access",
      "Gourmet dining experiences",
      "Private cultural excursions",
      "Dedicated wellness coach",
    ],
    highlight: false,
    color: "secondary",
  },
];

export default function Packages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="packages"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-accent/30 to-background"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-block">Transparent Pricing</span>
          <h2 className="section-title">
            Premium Care <span className="text-primary-deep">Packages</span>
          </h2>
          <p className="section-subtitle">
            All-inclusive packages with no hidden fees. Choose the experience that fits your needs.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 transition-all duration-500 ${
                pkg.highlight
                  ? "bg-gradient-to-b from-gold-light/50 to-cream shadow-elevated scale-105 border-2 border-gold/30"
                  : "card-premium"
              }`}
            >
              {/* Popular Badge */}
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  pkg.highlight
                    ? "bg-gold/20"
                    : pkg.color === "primary"
                    ? "bg-primary/20"
                    : "bg-secondary/30"
                }`}
              >
                <pkg.icon
                  className={`w-8 h-8 ${
                    pkg.highlight
                      ? "text-gold"
                      : pkg.color === "primary"
                      ? "text-primary-deep"
                      : "text-secondary-deep"
                  }`}
                />
              </div>

              {/* Package Info */}
              <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                {pkg.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{pkg.tagline}</p>
              <p className="text-3xl font-bold text-foreground mb-6">{pkg.price}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        pkg.highlight ? "text-gold" : "text-secondary-deep"
                      }`}
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                  pkg.highlight
                    ? "btn-gold"
                    : "btn-premium-outline"
                }`}
              >
                Get My Custom Quote
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          All packages include full price transparency. Custom packages available for complex treatments.
        </motion.p>
      </div>
    </section>
  );
}

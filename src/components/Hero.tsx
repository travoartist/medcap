import { motion } from "framer-motion";
import { Play, ChevronDown, Plane, Hotel, Stethoscope, Heart, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const journeySteps = [
    { icon: Plane, label: "Visa & Flights" },
    { icon: Hotel, label: "Premium Stays" },
    { icon: Stethoscope, label: "Expert Care" },
    { icon: Heart, label: "Relaxed Recovery" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury wellness resort for dental tourism recovery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/20 blur-2xl"
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream/90 backdrop-blur-sm mb-8 shadow-soft"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-foreground">
              Premium Care, Transparently Delivered
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream mb-6 leading-tight">
            Connecting Global Patients to{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              India's Best Dentists
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience world-class dental care with complete transparency. From visa assistance to recovery retreats, we craft your perfect care journey.
          </p>

          {/* Journey Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
          >
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 text-cream/80"
              >
                <step.icon className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium">{step.label}</span>
                {index < journeySteps.length - 1 && (
                  <span className="hidden md:inline text-cream/40 ml-4">→</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-premium text-lg px-10 py-5"
            >
              Get Your Free Quote
            </button>
            <button
              onClick={() => scrollToSection("#dentists")}
              className="btn-premium-outline bg-cream/10 backdrop-blur-sm border-cream/40 text-cream hover:bg-cream/20"
            >
              <Play className="w-5 h-5" />
              Meet Our Dentists
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection("#why-india")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-cream/70 hover:text-cream transition-colors"
        >
          <span className="text-sm mb-2">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(200 33% 98%)"
          />
        </svg>
      </div>
    </section>
  );
}

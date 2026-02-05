import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Phone } from "lucide-react";

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const scrollToContact = () => {
    setIsOpen(false);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-cream rounded-3xl shadow-elevated overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors z-10"
              aria-label="Close popup"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-primary-deep to-peacock p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🙏</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Wait! Let Us Welcome You
              </h3>
              <p className="text-white/90">
                India's finest dentists are ready to care for you
              </p>
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <p className="text-muted-foreground mb-6">
                Get a free personalized quote with transparent pricing. Our team is available 24/7 to answer your questions.
              </p>

              <div className="space-y-3">
                <button onClick={scrollToContact} className="btn-premium w-full">
                  Get My Free Quote
                </button>
                <a
                  href="tel:+919876543210"
                  className="btn-premium-outline w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Us 24/7
                </a>
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                No commitment required. 100% free consultation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

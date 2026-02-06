import { motion } from "framer-motion";
import { Heart, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Dental Implants", href: "#packages" },
    { label: "Cosmetic Dentistry", href: "#packages" },
    { label: "Orthodontics", href: "#packages" },
    { label: "Full Mouth Rehabilitation", href: "#packages" },
  ],
  company: [
    { label: "About Us", href: "#why-india" },
    { label: "Our Dentists", href: "#dentists" },
    { label: "Patient Stories", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Visa Assistance", href: "#contact" },
    { label: "Travel Support", href: "#contact" },
    { label: "24/7 Helpline", href: "tel:+919876543210" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground text-cream/80 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-6.5l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" />
                </svg>
              </div>
              <span className="font-serif text-lg sm:text-xl font-bold text-cream">
                MedCap <span className="text-primary">Global</span>
              </span>
            </div>
            <p className="text-cream/60 leading-relaxed mb-4 text-sm sm:text-base max-w-md">
              Premium dental care with complete transparency and 24/7 support.
            </p>
            <p className="text-sm sm:text-base font-medium text-primary italic hidden sm:block">
              "Premium Care, Transparently Delivered"
            </p>
          </div>

          {/* Services */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-cream mb-3 text-sm">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-cream/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-cream mb-3 text-sm">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-cream/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-cream mb-3 text-sm">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-cream/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/10 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-cream/50 text-xs sm:text-sm text-center sm:text-left">
            <span>© 2026 MedCap Global</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cream/50 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

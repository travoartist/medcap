import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  country: z.string().trim().min(1, "Country is required").max(100),
  treatment: z.string().trim().min(1, "Please select a treatment"),
  budget: z.string().trim().min(1, "Please select a budget range"),
  message: z.string().trim().max(1000).optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const treatments = [
  "Dental Implants",
  "Cosmetic Veneers",
  "Full Mouth Rehabilitation",
  "Root Canal & Crowns",
  "Orthodontics / Invisalign",
  "Teeth Whitening",
  "Multiple Treatments",
  "Not Sure - Need Consultation",
];

const budgets = [
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "Over $20,000",
  "Flexible - Best Option",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState<Partial<ContactForm>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactForm] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about dental treatment in India.");
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gradient-to-b from-accent/20 to-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="badge-premium mb-3 inline-block text-xs sm:text-sm">Start Your Journey</span>
          <h2 className="section-title">
            Connect <span className="text-primary-deep">Globally</span>
          </h2>
          <p className="section-subtitle">
            Get your personalized plan within 48 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <div className="card-premium text-center py-16">
                <div className="w-20 h-20 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-secondary-deep" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Thank You!
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Our care team will review your request and contact you within 24 hours with a personalized treatment plan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-premium space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name || ""}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border bg-cream focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.name ? "border-destructive" : "border-border"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email || ""}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border bg-cream focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.email ? "border-destructive" : "border-border"
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Country *
                  </label>
                  <input
                    type="text"
                    value={formData.country || ""}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border bg-cream focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                      errors.country ? "border-destructive" : "border-border"
                    }`}
                    placeholder="e.g., United States"
                  />
                  {errors.country && (
                    <p className="text-sm text-destructive mt-1">{errors.country}</p>
                  )}
                </div>

                {/* Treatment */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Treatment Needed *
                  </label>
                  <select
                    value={formData.treatment || ""}
                    onChange={(e) => handleChange("treatment", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border bg-cream focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                      errors.treatment ? "border-destructive" : "border-border"
                    }`}
                  >
                    <option value="">Select a treatment</option>
                    {treatments.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.treatment && (
                    <p className="text-sm text-destructive mt-1">{errors.treatment}</p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Budget Range *
                  </label>
                  <select
                    value={formData.budget || ""}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border bg-cream focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                      errors.budget ? "border-destructive" : "border-border"
                    }`}
                  >
                    <option value="">Select your budget</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-sm text-destructive mt-1">{errors.budget}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    value={formData.message || ""}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us more about your dental needs..."
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-premium w-full">
                  <Send className="w-5 h-5" />
                  Get My Free Quote
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* WhatsApp CTA */}
            <div className="card-premium bg-secondary/10 border border-secondary/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-secondary-deep" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Prefer WhatsApp?</p>
                  <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                </div>
              </div>
              <button
                onClick={openWhatsApp}
                className="w-full py-3 rounded-xl bg-secondary-deep text-cream font-medium hover:opacity-90 transition-opacity"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Contact Details */}
            <div className="card-premium space-y-6">
              <h4 className="font-serif text-xl font-bold text-foreground">Direct Contact</h4>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-deep" />
                </div>
                <div>
                  <p className="font-medium text-foreground">24/7 Helpline</p>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary-deep transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-deep" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email Us</p>
                  <a href="mailto:care@medcapglobal.com" className="text-muted-foreground hover:text-primary-deep transition-colors">
                    care@medcapglobal.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-deep" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Response Time</p>
                  <p className="text-muted-foreground">Within 2 hours</p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-deep" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Partner Clinics</p>
                  <p className="text-muted-foreground text-sm">
                    Bangalore • Delhi • Goa
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

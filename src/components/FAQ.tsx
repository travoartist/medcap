import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do you ensure dentist quality?",
    answer:
      "Every dentist in our network holds verified BDS/MDS credentials from accredited Indian universities. We personally vet each specialist, requiring a minimum of 10 years' experience treating international patients. All our partner clinics are JCI-accredited, meeting the highest global healthcare standards.",
  },
  {
    question: "What does 'transparent pricing' actually mean?",
    answer:
      "We provide complete cost breakdowns before you commit—covering treatment, accommodation, flights, transfers, and recovery activities. The price you see is exactly what you pay. No hidden consultation fees, no surprise charges. We also offer a price-match guarantee against comparable services.",
  },
  {
    question: "How long do I need to stay in India for dental treatment?",
    answer:
      "Most treatments require 5-14 days depending on complexity. Simple procedures like crowns may only need 5-7 days. Complex treatments like full mouth implants typically require 10-14 days. We'll provide a detailed timeline during your free consultation.",
  },
  {
    question: "Do you help with visa and travel arrangements?",
    answer:
      "Absolutely. Our Complete and Signature packages include full visa assistance, including documentation support and appointment scheduling. We also handle flight bookings, airport transfers, and accommodation reservations at our partner hotels and resorts.",
  },
  {
    question: "What happens if I need follow-up care after returning home?",
    answer:
      "We provide comprehensive aftercare support. You'll have 24/7 access to your treatment team via video call for 6 months post-treatment. We also partner with dentists worldwide for in-person follow-ups if needed, and all our work comes with a satisfaction guarantee.",
  },
  {
    question: "Are the materials and equipment comparable to Western standards?",
    answer:
      "Yes, our partner clinics use the same premium materials and equipment as top Western facilities. We use Nobel Biocare and Straumann implants, IPS e.max and Zirconia crowns, and state-of-the-art CEREC CAD/CAM technology for same-day restorations.",
  },
  {
    question: "What languages do your staff speak?",
    answer:
      "All our patient coordinators are fluent English speakers. We also have team members who speak Spanish, French, German, Arabic, and Russian. Your dedicated coordinator will communicate in your preferred language throughout your journey.",
  },
  {
    question: "Can I combine dental treatment with a vacation?",
    answer:
      "Definitely! We call this 'dental tourism' for a reason. Our Complete and Signature packages include cultural experiences, beach relaxation, yoga sessions, and spa treatments. Many patients extend their stay to explore India's incredible destinations.",
  },
  {
    question: "What if I'm not satisfied with my treatment?",
    answer:
      "Patient satisfaction is our highest priority. We offer a satisfaction guarantee on all treatments. If you're not happy with the results, we'll work with you to make it right—including covering any necessary corrections at no additional cost.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply fill out our contact form or call our 24/7 support line. We'll schedule a free virtual consultation where you can share your dental records, discuss your needs, and receive a personalized treatment plan with transparent pricing—all within 48 hours.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="container mx-auto relative z-10 max-w-4xl" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-block">Common Questions</span>
          <h2 className="section-title">
            Frequently Asked <span className="text-primary-deep">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about your premium dental care journey with MedCap Global
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  openIndex === index
                    ? "bg-cream shadow-card"
                    : "bg-accent/50 hover:bg-cream/80"
                }`}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4 text-primary-deep" />
                    </div>
                    <span className="font-semibold text-foreground text-left">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground mt-4 pl-12 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="btn-premium inline-flex"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Our Team 24/7
          </a>
        </motion.div>
      </div>
    </section>
  );
}

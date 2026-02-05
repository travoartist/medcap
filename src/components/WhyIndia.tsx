import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Shield, Users, Award } from "lucide-react";
import clinicImage from "@/assets/clinic.jpg";
const stats = [{
  icon: TrendingUp,
  value: "70%",
  label: "Cost Savings",
  description: "Premium quality at a fraction of Western costs"
}, {
  icon: Shield,
  value: "100%",
  label: "Transparency",
  description: "No hidden fees, complete price breakdowns"
}, {
  icon: Users,
  value: "12,000+",
  label: "Global Patients",
  description: "Trusted by patients worldwide"
}, {
  icon: Award,
  value: "99%",
  label: "Satisfaction",
  description: "Exceptional care experiences"
}];
export default function WhyIndia() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="why-india" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="badge-premium mb-4 inline-block">🌺 The MedCap Experience</span>
          <h2 className="section-title">
            Why Choose <span className="bg-gradient-to-r from-saffron to-terracotta bg-clip-text text-transparent">India</span>?
          </h2>
          <p className="section-subtitle">
            Where ancient hospitality meets modern excellence — experience care that treats you like family
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Comparison */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6">
            {/* Problem Card */}
            <div className="card-glass p-6 border-l-4 border-destructive/50">
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                Global Care Challenges
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  Prohibitively high dental costs in Western countries
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  Long wait times for specialized procedures
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  Hidden fees and unclear pricing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  Limited recovery support and aftercare
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className="card-glass p-6 border-l-4 border-secondary-deep">
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                Premium Indian Excellence
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-deep mt-1">✓</span>
                  World-class care at 70% lower costs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-deep mt-1">✓</span>
                  Immediate appointments with top specialists
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-deep mt-1">✓</span>
                  100% transparent pricing, no surprises
                </li>
                <li className="flex items-start gap-2">✓
Luxury recovery with cultural escapes<span className="text-secondary-deep mt-1">✓</span>
                  Luxury recovery with beach yoga & cultural escapes
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right - Image & Stats */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img src={clinicImage} alt="Premium dental clinic in India with modern equipment" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-cream text-lg font-medium">
                  State-of-the-art facilities with spa-like comfort
                </p>
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="absolute -bottom-8 -left-8 card-premium p-5 shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary-deep" />
                </div>
                <div>
                  <p className="font-bold text-xl text-foreground">JCI Accredited</p>
                  <p className="text-sm text-muted-foreground">International Standards</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => <motion.div key={stat.label} initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.4,
          delay: 0.5 + index * 0.1
        }} className="card-premium text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary-deep" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="font-medium text-primary-deep mb-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}
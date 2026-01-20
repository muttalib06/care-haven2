"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgeCheck } from "lucide-react";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Verified Professionals",
    description:
      "Every caregiver undergoes comprehensive background checks, credential verification, and skill assessments before joining our platform.",
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-600",
    hoverColor: "group-hover:from-blue-500/20 group-hover:to-blue-600/20",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Your family's safety is our priority. We maintain strict safety protocols, insurance requirements, and continuous monitoring.",
    color: "from-green-500/10 to-green-600/10",
    iconColor: "text-green-600",
    hoverColor: "group-hover:from-green-500/20 group-hover:to-green-600/20",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist with any concerns, changes, or emergencies.",
    color: "from-purple-500/10 to-purple-600/10",
    iconColor: "text-purple-600",
    hoverColor: "group-hover:from-purple-500/20 group-hover:to-purple-600/20",
  },
];

const TrustPillars = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-care-soft-blue/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-care-sage/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-care-peach/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-5 py-2 text-sm font-medium text-primary border border-primary/20">
            Our Commitment
          </span>
          <h2 className="mt-4 mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground px-4">
            Why Families <span className="text-primary">Trust Us</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground px-4 leading-relaxed">
            We've built our platform on three core pillars that ensure every
            care experience is safe, professional, and reliable.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-14 md:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full rounded-3xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/20">
                {/* Icon container */}
                <div
                  className={`mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.color} ${pillar.hoverColor} transition-all duration-300 shadow-md`}
                >
                  <pillar.icon
                    className={`h-7 w-7 sm:h-8 sm:w-8 ${pillar.iconColor}`}
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <h3 className="mb-3 sm:mb-4 font-serif text-xl sm:text-2xl font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  {pillar.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
            </motion.div>
          ))}
        </div>

        {/* Additional trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-6 py-3 shadow-md border border-primary/10">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Trusted by over{" "}
              <span className="text-primary font-bold">50,000+</span> families
              nationwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustPillars;

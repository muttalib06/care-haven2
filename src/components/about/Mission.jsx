"use client";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-care-soft-blue/10 to-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <span className="mb-4 sm:mb-6 inline-block rounded-full bg-gradient-to-r from-care-sage to-care-soft-blue px-5 py-2 text-sm font-medium text-gray-800 shadow-sm">
              The Problem We Solve
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground px-4">
              From Uncertainty to{" "}
              <span className="text-primary">Confidence</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2"
          >
            {/* The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-care-peach/60 to-care-peach/40 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-care-peach/30"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white/80 shadow-md">
                <AlertCircle className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600" />
              </div>

              <h3 className="mb-3 sm:mb-4 font-serif text-xl sm:text-2xl font-semibold text-foreground">
                The Challenge
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Finding reliable, trustworthy care for your loved ones shouldn't
                feel like an overwhelming task. Many families struggle with
                uncertainty—unsure if caregivers are qualified,
                background-checked, or the right fit for their unique needs.
              </p>

              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-care-peach/30 blur-3xl transition-all duration-300 group-hover:scale-150" />
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-care-soft-blue to-care-soft-blue/70 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white/90 shadow-md">
                <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" />
              </div>

              <h3 className="mb-3 sm:mb-4 font-serif text-xl sm:text-2xl font-semibold text-foreground">
                Our Solution
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                CareHaven connects you with verified, professional caregivers
                through a transparent platform. Every caregiver is thoroughly
                vetted, reviewed by real families, and matched to your specific
                care requirements—giving you peace of mind.
              </p>

              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-all duration-300 group-hover:scale-150" />
            </motion.div>
          </motion.div>

          {/* Additional trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 text-center"
          >
            <div className="rounded-2xl bg-white/60 backdrop-blur-sm p-4 sm:p-6 shadow-md">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                10K+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Verified Caregivers
              </div>
            </div>
            <div className="rounded-2xl bg-white/60 backdrop-blur-sm p-4 sm:p-6 shadow-md">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                50K+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Happy Families
              </div>
            </div>
            <div className="rounded-2xl bg-white/60 backdrop-blur-sm p-4 sm:p-6 shadow-md">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                4.9★
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
            <div className="rounded-2xl bg-white/60 backdrop-blur-sm p-4 sm:p-6 shadow-md">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Support Available
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

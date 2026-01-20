"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80"
          width={400}
          height={400}
          alt="Caregiver gently holding hands with elderly person"
          className="h-full w-full object-cover object-center"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-care-soft-blue/90 via-background/85 to-care-peach/90" />
      </div>

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-care-sage/15" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full backdrop-blur-sm"
          >
          </motion.div>

          <h1 className="mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground drop-shadow-sm px-4">
            Bridging the Gap Between{" "}
            <span className="text-primary">Families</span> and{" "}
            <span className="text-primary">Professional Care</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed drop-shadow-sm px-4">
            At CareHaven, we believe every family deserves access to trusted,
            compassionate caregivers. We're here to make finding reliable care
            simple, safe, and stress-free.
          </p>

          {/* Optional CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 px-4"
          >
           
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-foreground/20 bg-white/90 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-foreground shadow-md transition-all hover:bg-white hover:border-primary focus:outline-none ">
              Find Caregivers
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://plus.unsplash.com/premium_photo-1664478431773-a207a1b0e8f1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          alt="Caregiver gently holding hands with elderly person"
          className="h-full w-full object-cover object-center"
        />
        {/* Stronger overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/60 to-slate-900/60" />
      </div>

      {/* Enhanced radial gradient for depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/20 to-slate-900/40" />

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
            className="mx-auto mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full backdrop-blur-sm "
          >
            {/* Add your icon/logo here */}
          </motion.div>

          <h1 className="mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg px-4">
            Bridging the Gap Between{" "}
            <span className="text-blue-300">Families</span> and{" "}
            <span className="text-blue-300">Professional Care</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-md px-4 font-medium">
            At CareHaven, we believe every family deserves access to trusted,
            compassionate caregivers. We're here to make finding reliable care
            simple, safe, and stress-free.
          </p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 px-4"
          >
            <Link
              href="/caregivers"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-black bg-white/80 hover:bg- px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-white shadow-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Find Caregivers
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

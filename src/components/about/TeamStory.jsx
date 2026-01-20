"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6 mx-auto">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            {/* Team image */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                  width={400}
                  height={400}
                  alt="Diverse team of caregiving professionals smiling together"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-primary/10" />
            </div>

            {/* Story content */}
            <div className="order-1 md:order-2">
              <span className="mb-4 inline-block rounded-full bg-care-sage px-4 py-2 text-sm font-medium text-gray-800">
                Our Story
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Founded by Families, for Families
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  CareHaven was born from a personal experience. Our founders,
                  like many families, faced the challenge of finding trustworthy
                  care for their aging parents while balancing demanding
                  careers.
                </p>
                <p>
                  After experiencing the anxiety of unreliable caregivers and
                  opaque hiring processes, they set out to build something
                  better—a platform where trust, transparency, and quality care
                  come first.
                </p>
                <p>
                  Today, CareHaven serves thousands of families across the
                  country, connecting them with compassionate professionals who
                  treat your loved ones like their own.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamStory;

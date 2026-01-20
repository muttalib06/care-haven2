import Hero from "@/components/about/Hero";
import Mission from "@/components/about/Mission";

import TeamStory from "@/components/about/TeamStory";
import CallToAction from "@/components/about/CallToAction";
import TrustPillars from "@/components/about/TrusPillars";

const About = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <TrustPillars/>
      <TeamStory />
      <CallToAction />
    </main>
  );
};

export default About;

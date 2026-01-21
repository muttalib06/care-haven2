import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceHighlights from "@/components/services/ServiceHighlights";
import HowItWorks from "@/components/services/HowItWorks";
import Qualifications from "@/components/services/Qualifications";
import PricingSection from "@/components/services/PricingSection";
import Testimonials from "@/components/services/Testimonials";
import FAQSection from "@/components/services/FAQSection";
import CTASection from "@/components/services/CTASection";
// import serviceData from "@/data/services/baby-care.json";
import { getServiceDetail } from "@/data-handling/getServiceDetail";

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  //   console.log(slug);

  // In a real application, you would fetch data based on the slug
  // For now, we're using the imported data directly
  const response = await getServiceDetail(slug);
  const service = response?.data;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServiceHero hero={service?.hero} title={service?.title} />

      {/* Service Highlights */}
      <ServiceHighlights highlights={service?.serviceHighlights} />

      {/* Service Overview */}
      <ServiceOverview
        description={service?.description}
        targetAudience={service?.targetAudience}
        servicesIncluded={service?.servicesIncluded}
      />

      {/* How It Works */}
      <HowItWorks steps={service?.howItWorks} />

      {/* Qualifications */}
      <Qualifications qualifications={service.qualifications} />

      {/* Pricing */}
      <PricingSection pricing={service.pricing} />

      {/* Testimonials */}
      <Testimonials testimonials={service.testimonials} />

      {/* FAQ */}
      <FAQSection faqs={service.faqs} />

      {/* Final CTA */}
      <CTASection title={service.title} ctaText={service.hero.ctaText} />
    </main>
  );
}

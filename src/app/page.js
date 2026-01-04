import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import HowItWorks from "@/components/home/HowItWorks";
import OurService from "@/components/home/OurService";
import Testimonial from "@/components/home/Testimonial";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <OurService></OurService>
      <HowItWorks></HowItWorks>
      <Testimonial></Testimonial>
    </div>
   
  );
}

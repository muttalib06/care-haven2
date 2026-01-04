import AboutUs from "@/components/aboutUs/AboutUs";
import Banner from "@/components/banner/Banner";
import HowItWorks from "@/components/HowItWorks.jsx/HowItWorks";
import OurService from "@/components/ourService/OurService";
import Testimonial from "@/components/testimonial/Testimonial";


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

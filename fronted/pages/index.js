
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Updates from "@/components/Updates";
import PrincipalCard from "@/components/PrincipalCard";
import TeacherCardSlider from "@/components/TeacherSlider";
import FeatureSection from "@/components/Feature";
import SchoolStats from "@/components/Stats";
import TestimonialSection from "@/components/Testomonial";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    
       <>
       <Navbar/>
       <Hero/>
       <Updates/>
       <PrincipalCard/>
       <TeacherCardSlider/>
       <FeatureSection/>
       <SchoolStats/>
       <TestimonialSection/>
       <Footer/>
       </>  
  );
}

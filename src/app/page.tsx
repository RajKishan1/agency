import Footer from "@/components/Footer/Footer";
import BrandDiv from "@/components/LandingPage/BrandDiv";
import HeroSection from "@/components/LandingPage/HeroSection";
import Navbar from "@/components/LandingPage/Navbar";
import React from "react";

const Page = () => {
  return (
    <div className="bg-amber-50 text-black">
      <Navbar />
      <HeroSection />
      <BrandDiv />
      <Footer />
    </div>
  );
};
export default Page;

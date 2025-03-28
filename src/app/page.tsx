import Footer from "@/components/Footer/Footer";
import FormComponent from "@/components/FormComponent";
import BrandDiv from "@/components/LandingPage/BrandDiv";
import HeroSection from "@/components/LandingPage/HeroSection";
import Navbar from "@/components/LandingPage/Navbar";
import SmallHeading from "@/components/Shared/SmallHeading";
import React from "react";

const Page = () => {
  return (
    <div className="text-black">
      <Navbar />
      <HeroSection />
      <BrandDiv />
      <SmallHeading
        heading="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />{" "}
      <SmallHeading
        heading="Contact Us"
        text="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <FormComponent />
      <Footer />
    </div>
  );
};
export default Page;

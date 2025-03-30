import Footer from "@/components/Footer/Footer";
import FormComponent from "@/components/LandingPage/FormComponent";
import BrandDiv from "@/components/LandingPage/BrandDiv";
import HeroSection from "@/components/LandingPage/HeroSection";
import Navbar from "@/components/LandingPage/Navbar";
import SmallHeading from "@/components/Shared/SmallHeading";
import React from "react";
import GetProposal from "@/components/LandingPage/GetProposal";
import CaseStudiesComponent from "@/components/LandingPage/CaseStudiesComponent";

const Page = () => {
  return (
    <div className="text-black">
      <Navbar />
      <HeroSection />
      <BrandDiv />
      <SmallHeading
        heading="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <GetProposal />
      <SmallHeading
        heading="Case Studies"
        text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <CaseStudiesComponent />
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

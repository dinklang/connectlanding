import type { NextPage } from "next";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import AreasContainer from "../components/areas-container";
import ContactContainer from "../components/contact-container";
import ConnectForm from "../components/connect-form";

const LandingPage: NextPage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
      <Header />
      <HeroSection />
      <AreasContainer />
      <ContactContainer />
      <ConnectForm />
    </div>
  );
};

export default LandingPage;

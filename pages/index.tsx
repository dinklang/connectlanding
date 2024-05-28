import type { NextPage } from "next"
import Header from "../components/header"
import HeroSection from "../components/hero-section"
import AreasContainer from "../components/areas-container"
import ContactContainer from "../components/contact-container"
import ConnectForm from "../components/connect-form"
import Image from "next/image"

const LandingPage: NextPage = () => {
  return (
    // <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
    //   <Header />
    //   <HeroSection />
    //   <AreasContainer />
    //   <ContactContainer />
    //   <ConnectForm />
    // </div>
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-[#d1f7c4] dark:bg-[#1b4b1f]">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#1b4b1f] dark:text-[#d1f7c4]">
          Coming Soon
        </h1>
        <p className="text-lg text-[#1b4b1f] dark:text-[#d1f7c4]">
          Connect Internal under construction. Stay tuned for the first
          iteration of our website.
        </p>
      </div>
    </div>
  )
}

export default LandingPage

import type { NextPage } from "next";
import Header from "../components/header";
import ConnectForm from "../components/connect-form";

const About: NextPage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
      <Header />
      <div className="self-stretch bg-primary-50 h-[200px] flex flex-col items-center justify-center py-0 px-[5px] box-border">
        <div className="w-[1820px] flex flex-col items-center justify-center py-0 px-[30px] box-border md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            About Us
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-[53px] px-[50px] text-left text-xl text-black">
        <div className="w-[870px] flex flex-col items-center justify-start max-w-[95%px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[28px]">
              <p className="m-0">
              At Connect Internal, we are passionate about connecting nurses with the best opportunities available within the healthcare industry. We understand the challenges nurses face when searching for internal contracts (which generally have the most favorable rates). That's why we have already done all the groundwork of looking for these contracts and simplify the process, making it easier than ever for nurses to access internal contracts.
              </p>
              <p className="m-0"></p>
              <p className="m-0">
                Our mission is to empower nurses and streamline their job search
                by providing a centralized hub where hospitals can post their
                internal contracts. We have done the groundwork of searching for
                and compiling these contracts, so nurses no longer need to spend
                hours searching various sources or rely solely on agencies. By
                eliminating these obstacles, we enable nurses to focus on what
                matters most—delivering exceptional care to patients.
              </p>
            </div>
            <div className="relative text-21xl leading-[48px] font-semibold text-center">
              Key Features and Benefits:
            </div>
            <div className="self-stretch relative leading-[28px]">
              <p className="m-0">
                Access to Internal Contracts: Our platform gives nurses direct
                access to a wide range of internal contracts offered by
                hospitals. These contracts often provide better rates compared
                to traditional agency-based assignments, ensuring that nurses
                are fairly compensated for their skills and expertise.
              </p>
              <p className="m-0"></p>
              <p className="m-0">
                Simplified Job Search: We've taken the legwork out of finding
                internal contracts. Nurses can easily browse and filter through
                a diverse selection of contracts, tailored to their specific
                preferences and requirements. Our user-friendly interface and
                advanced search functionality make the entire process seamless
                and efficient.
              </p>
              <p className="m-0"></p>
              <p className="m-0">
                Time and Effort Savings: With Internal Healthcare Solutions,
                nurses can save valuable time and effort that would otherwise be
                spent on researching and seeking out internal contracts. Our
                dedicated team continuously scouts for new opportunities,
                ensuring that the platform is always up-to-date with the latest
                offerings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ConnectForm />
    </div>
  );
};

export default About;

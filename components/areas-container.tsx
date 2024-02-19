import type { NextPage } from "next";

const AreasContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          About us
        </div>
        <div className="flex items-center justify-center">
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400 w-8/12">
            At Connect Internal, we are passionate about connecting nurses with the best opportunities available within the healthcare industry. We understand the challenges nurses face when searching for internal contracts (which generally have the most favorable rates). That's why we have already done all the groundwork of looking for these contracts and simplify the process, making it easier than ever for nurses to access internal contracts.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%px] text-left text-5xl text-gray-white">
        <div className="flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          {/* <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            <a className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-12@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch">
              <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                  Birmingham
                </h3>
                <div className="relative text-base leading-[24px] text-center">
                  2 postings
                </div>
              </div>
            </a>
            <a className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch">
              <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                  Denver
                </h3>
                <div className="relative text-base leading-[24px] text-center">
                  0 postings
                </div>
              </div>
            </a>
            <a className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-4@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch">
              <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                  Lancaster
                </h3>
                <div className="relative text-base leading-[24px] text-center">
                  0 postings
                </div>
              </div>
            </a>
          </div> */}
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
            <a className="[text-decoration:none] flex-1 rounded-lg h-[200px] flex flex-row items-start justify-start p-2.5 box-border relative bg-mediumspringgreen-200 bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch">
            <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                  Highest Paid
                </h3>
                <div className="relative text-base leading-[24px] text-center">
                  View 3 postings
                </div>
              </div>
            </a>
            <a className="[text-decoration:none] flex-1 rounded-lg h-[200px] flex flex-row items-start justify-start p-2.5 box-border relative bg-mediumspringgreen-200 bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch">
              <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                  Newest Contracts
                </h3>
                <div className="relative text-base leading-[24px] text-center">
                  View 3 postings
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasContainer;

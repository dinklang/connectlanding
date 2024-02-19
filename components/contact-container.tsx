import type { NextPage } from "next";

const ContactContainer: NextPage = () => {
  return (
    <section className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px] max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
            Expansion
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-darkgray">
          We are continuing to reach out to hospitals daily. If there is a City or State that you would like added, please let us know:
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px] text-left text-5xl text-darkslategray font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
            <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit">
              Inquiry Form
            </h3>
            <div className="self-stretch relative text-lg leading-[30px] font-roboto text-slategray">
              Are you looking for features about our company? Ask us a question
              using the form below.
            </div>
          </div>
          <form className="self-stretch flex flex-col items-center justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
              <input
                className="font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1-200 md:flex-[unset] md:self-stretch"
                placeholder="First name"
                type="text"
                maxLength={30}
                minLength={2}
              />
              <input
                className="font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 border-[1px] border-solid border-gray1-200 md:flex-[unset] md:self-stretch"
                placeholder="Last name"
                type="text"
                maxLength={30}
                minLength={2}
              />
            </div>
            <input
              className="font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1-200"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="bg-[transparent] h-[105px] font-roboto text-base self-stretch rounded box-border flex flex-col items-start justify-start p-3 border-[1px] border-solid border-gray1-200"
              placeholder="Comments or questions"
              rows={10}
              required={true}
            />
            <button className="cursor-pointer [border:none] p-0 bg-mediumspringgreen-200 rounded w-[222px] h-[46px] flex flex-col items-center justify-center">
              <div className="relative text-base font-roboto text-gray-white text-center inline-block w-[203.1px]">
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;

import type { NextPage } from "next";

type JobCardType = {
  title?: string,
  imageId?: string;
  openingsCount?: string;
  weeklyEarningsRange?: string;
  schedule?: string;
  location?: string;
};

const JobCard: NextPage<JobCardType> = ({
  title,
  imageId,
  openingsCount,
  weeklyEarningsRange,
  schedule,
  location,
}) => {
  return (
    <div className="self-stretch rounded-lg bg-gainsboro flex flex-row items-center justify-start p-5 gap-[20px] mix-blend-normal text-center text-base sm:flex-col">
      <img
        className="relative rounded-mini w-[200px] h-[200px] object-cover sm:w-[350px]"
        alt=""
        src={imageId}
      />
      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between">
        <div className="self-stretch flex flex-row justify-between text-left text-5xl sm:flex-col">
          <div className="w-[250px] flex flex-col items-start justify-start">
            <h3 className="m-0 relative text-inherit leading-[30px] font-semibold font-inherit">
              {title}
            </h3>
            <div className="relative text-base leading-[24px] text-center">
              {location}
            </div>
          </div>
          <div className="w-[250px] flex flex-col items-end justify-start text-xl sm:items-start">
            <h3 className="m-0 relative text-inherit leading-[20px] font-semibold font-inherit sm:py-2">
              <span>{`Facility Info: `}</span>
              <span className="[text-decoration:underline] text-mediumspringgreen-200">
                Log in
              </span>
            </h3>
          </div>
        </div>
        <div className="self-stretch flex flex-row justify-between sm:flex-col">
          <div className="w-[250px] flex flex-col items-start justify-start">
            <div className="relative font-semibold">
              Job Details
            </div>
            <div className="relative leading-[24px]">Schedule: {schedule}</div>
            <div className="relative leading-[24px]">Openings: {openingsCount}</div>
          </div>
          <div className="w-[250px] h-[43px] flex flex-col items-end justify-center sm:items-start">
            <b className="relative leading-[16px]">{weeklyEarningsRange} weekly</b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-gray-white sm:flex-col sm:gap-[10px]">
          <a
            className="[text-decoration:none] rounded-3xs bg-mediumspringgreen-200 overflow-hidden flex flex-row items-start justify-start py-3 px-6 text-[inherit]"
            href="https://my.connectinternal.com/register"
          >
            <div className="relative leading-[24px] font-medium">Apply</div>
          </a>
          <a
            className="[text-decoration:none] rounded-3xs bg-mediumspringgreen-200 w-[250px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-6 box-border text-[inherit]"
            href="https://my.connectinternal.com/register"
          >
            <div className="relative leading-[24px] font-medium">View More</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

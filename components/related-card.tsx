import type { NextPage } from "next";
import blogCardData, { CardData, CardDataList } from "../data/blogCardData";


const RelatedCard: NextPage<CardDataList> = (cards) => {
  return (
    <div className="w-[370px] flex flex-col items-start justify-start py-0 px-2.5 box-border max-w-[95%px] text-left text-lg text-gray-white font-body-large-400 lg:hidden">
      <div className="w-full flex flex-col items-center justify-start gap-[20px] max-w-[1300px]">
        <div className="overflow-hidden flex flex-col items-start justify-start text-5xl text-black">
          <div className="relative leading-[24px] font-semibold">
            Other Posts
          </div>
        </div>
        {blogCardData.map((data, index) => (
          <a key={data.title} className="[text-decoration:none] rounded-lg w-[350px] h-[200px] flex flex-col items-center justify-end bg-[url('/card-11@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit]">
            <div className="self-stretch rounded-lg bg-gray1-100 flex flex-col items-start justify-start py-2.5 px-[5px] box-border gap-[10px]">
              <div className="relative leading-[18px] font-semibold">
                {data.title}
              </div>
              <div className="relative text-base leading-[16px] text-center">
                {data.date}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedCard;

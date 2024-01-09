import type { NextPage } from "next";
import Link from "next/link";

type BlogCardType = {
  image?: string;
  title?: string;
  tags?: string;
  description?: string;
};

const CardForm: NextPage<BlogCardType> = ({
  image,
  title,
  tags,
  description,
}) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[30px] text-left text-xl text-gray-400 font-body-large-400 lg:flex-row md:flex-col md:gap-[30px] md:items-start md:justify-start">
      <img
        className="self-stretch rounded-lg max-h-full w-[250px] object-cover md:w-auto md:h-[200px]"
        alt=""
        src={image}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[18px] md:self-stretch md:w-auto md:flex-[unset]">
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[18px]">
          <div className="self-stretch relative text-5xl leading-[24px] font-semibold text-black">
            {title}
          </div>
          <div className="relative leading-[28px]">Tags: {tags}</div>
          <div className="relative leading-[28px]">
            <p className="m-0">
              {description}
            </p>
          </div>
        </div>
        <Link 
          className="cursor-pointer [border:none] py-3 px-6 bg-mediumspringgreen-200 rounded w-[140px] flex flex-row items-center justify-center box-border sm:hover:bg-mediumspringgreen-100"
          href={"/" + title}>
          <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
            Read More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardForm;

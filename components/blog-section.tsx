import type { NextPage } from "next";
import CardForm from "./card-form";
import RelatedCard from "./related-card";
import blogCardData, { CardData, CardDataList } from "../data/blogCardData";

const BlogSection: NextPage<CardDataList> = ({cards}) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-[53px] px-[50px] gap-[45px] text-left text-xl text-gray-400 font-body-large-400">
      <div className="flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[24px] max-w-[95%px]">
        <div className="flex flex-col items-center justify-start gap-[35px] max-w-[1050px]">
          {cards.map((data, index) => (
            <CardForm
            key={data.title}
            image={data.image}
            title={data.title}
            tags={data.tags}
            description={data.description}
            />
          ))}
        </div>
      </div>
      <RelatedCard cards={cards}/>
    </div>
  );
};
export default BlogSection;

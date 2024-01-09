import type { NextPage } from "next";
import blogCardData, { CardData } from "../data/blogCardData";

const BlogContent: NextPage<CardData> = ({
  title,
  author,
  date,
  tags,
  content,
  image,
}) => {
  return (
    <div className="w-[870px] flex flex-col items-start justify-start py-[25px] px-5 box-border gap-[24px] max-w-[95%px] text-left text-base text-gray-400 font-heading-heading-4">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-[95%px]">
        <div className="flex-1 flex flex-col items-center justify-start max-w-[1300px]">
          <div className="self-stretch bg-gray-white flex flex-row items-start justify-center lg:flex-row md:flex-col">
            <img
              className="flex-1 rounded-lg max-w-full overflow-hidden h-[241px] object-cover md:flex-[unset] md:self-stretch"
              alt=""
              src={image}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-[35px] max-w-[1300px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:self-stretch md:w-auto">
          <div className="relative text-21xl leading-[48px] font-semibold text-black text-center">
            {title}
          </div>
          <div className="self-stretch flex flex-row items-center justify-between lg:flex-col">
            <div className="relative leading-[20px]">Posted by: {author}</div>
            <div className="relative leading-[20px]">Posted date: {date}</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between lg:flex-col">
            <div className="self-stretch relative leading-[20px] flex items-end w-[830px] shrink-0">
              Tags: {tags}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-xl text-black lg:flex-row md:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start md:self-stretch md:w-auto md:flex-[unset]">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[28px] sm:text-black">
                <p className="m-0">
                  It's been nearly ten months since the COVID-19 pandemic forced
                  us into a state of lockdown, creating a new way of life that
                  has proven challenging for everyone. The constraints on our
                  daily routines, the necessity of wearing masks, the constant
                  stream of distressing pandemic updates, and the shift to
                  remote work have all transformed our existence. Amidst this,
                  there are those who have suffered profound losses: falling
                  ill, facing financial turmoil, or mourning loved ones lost to
                  the virus. The enforced social isolation has taken a toll on
                  our mental well-being.
                </p>
                <p className="m-0"></p>
                <p className="m-0">
                  Personally, I've keenly felt the impact of social isolation.
                  Despite my strong bond with my family, they are spread across
                  far distances. As a recent single parent, this has been
                  particularly tough, as I now require the support of my parents
                  and siblings more than ever before. Originally, I had plans to
                  travel and reunite during the holiday season, starting with
                  Thanksgiving and extending through Christmas. Regrettably, I
                  had to cancel these plans, recognizing the genuine threat
                  posed by COVID. The virus spreads most easily indoors, and
                  hospitals are already grappling with overwhelming patient
                  numbers.
                </p>
                <p className="m-0"></p>
                <p className="m-0">
                  In numerous states, hospitals' intensive care units and
                  emergency rooms are stretched to their limits. Beds are in
                  short supply, and healthcare workers are overwhelmed. These
                  dedicated professionals, such as nurses and doctors in
                  Atlanta, have been tirelessly battling on the frontlines. They
                  endure hours upon hours of masked and shielded work, even as
                  they grapple with exhaustion. Donning the protective gear in
                  hot conditions and entering rooms where COVID has robbed
                  patients of their breath is a daunting task. Yet, despite
                  their fatigue, they remove that gear after long shifts and
                  return home to their families, hoping to avoid exposing their
                  loved ones.
                </p>
                <p className="m-0"></p>
                <p className="m-0">
                  The strain on hospitals goes beyond just COVID cases. Once
                  emergency rooms and ICUs are swamped with COVID patients, and
                  healthcare workers pushed to their limits, those seeking care
                  for other ailments might not receive the attention they need.
                  Consider the situation when someone faces non-COVID health
                  issues like a broken ankle or an asthma attack. Imagine if a
                  parent suffers a heart attack and requires urgent ER care.
                </p>
                <p className="m-0"></p>
                <p className="m-0">
                  COVID is wreaking havoc on our healthcare system, impacting
                  both patients and frontline workers. The current situation is
                  dire, but there is a glimmer of hope: vaccines are on the
                  horizon. Some countries are already administering vaccines
                  this month, and the U.S. will follow suit in the coming
                  months. This marks the beginning of the end of the pandemic.
                  The finish line is within sight. Given this, who would
                  knowingly choose to fall ill now?
                </p>
                <p className="m-0"></p>
                <p className="m-0">
                  Our responsibility lies in hunkering down, staying home, and
                  donning masks. This is a collective duty to safeguard
                  ourselves, our hospitals, and our healthcare providers. It may
                  entail altering our holiday celebrations, but there are still
                  avenues to savor the season. Here are some ways I plan to
                  enjoy it with my children:
                </p>
                <p className="m-0"></p>
                <p className="m-0">
                  1. Embrace festive decorations, adorning our home with lights,
                  Christmas trees, stockings, and embellishments.
                </p>
                <p className="m-0">
                  2. Engage in online shopping, procuring small gifts for the
                  kids to place beneath the tree. If possible, consider
                  supporting local businesses during this time.
                </p>
                <p className="m-0">
                  3. Contribute to food banks, a gesture that benefits
                  struggling families and brings a sense of fulfillment to the
                  giver.
                </p>
                <p className="m-0">
                  4. Bake an array of treats. Personally, I intend to use a
                  bread maker and whip up homemade jam. This might be an
                  opportunity to try out long-awaited recipes.
                </p>
                <p className="m-0">
                  5. Relish the slower rhythm of life currently. Soon, we'll
                  revert to the rush of activities, school, and chores. Amidst
                  the hardships of COVID, a silver lining has been the chance to
                  live life at a more measured pace. Let's make the most of it.
                </p>
                <p className="m-0"></p>
                <p className="m-0">
                  The pandemic has posed hardships for everyone, particularly
                  healthcare workers who have displayed strength and made
                  considerable sacrifices to care for COVID patients.
                  Nonetheless, there is a solution, and it's on its way. This
                  chapter will soon be behind us. Until then, let's stand firm
                  and navigate through this challenge. Then, we can raise a
                  toast to our resilience, strength, and shared triumph over
                  adversity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;

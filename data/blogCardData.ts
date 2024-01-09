export type CardData = {
    image: string;
    title: string;
    tags: string;
    author: string;
    date: string;
    description: string;
    content: string;
};

export type CardDataList = {
  cards: CardData[]
}

const blogCardData = [
    {
      image: "card-1@3x.png",
      date: "August 16, 2023",
      title: "Hunkering Down: Bridging to Vaccines",
      author: "Clayton",
      tags: "health",
      description: "It's been nearly ten months since the COVID-19 pandemic forced us into a state of lockdown, creating a new way of life that has proven challenging for everyone. The constraints on our daily routines, the necessity of wearing masks, the constant stream of distressing pandemic updates, and ...",
      content: "",
    },
    {
      image: "card-1@3x.png",
      date: "August 16, 2023",
      title: "Staying Informed: COVID-19 and Your Wellbeing",
      author: "Clayton",
      tags: "wellness",
      description: "As we continue to navigate the ongoing COVID-19 pandemic, staying informed about the virus and its impacts on health and society is crucial. From understanding the latest safety guidelines to recognizing symptoms, knowledge is a powerful tool in staying safe...",
      content: "",
    }
];

export default blogCardData;
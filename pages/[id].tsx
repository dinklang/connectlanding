import type { NextPage } from "next";
import Header from "../components/header";
import RelatedCard from "../components/related-card";
import ConnectForm from "../components/connect-form";
import blogCardData, { CardData } from "../data/blogCardData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BlogContent from "../components/blog-content";



const Blog: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [currBlog, setCurrBlog] = useState<CardData | null>(null)

  useEffect(() => {
    if (typeof id === 'string') {
      const foundBlog = blogCardData.find((data) => data.title == id)
      setCurrBlog(foundBlog || null)
    }
  }, [id])

  if (!currBlog) {
    return <div>Loading...</div>
  }
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
      <Header />
      <section className="self-stretch bg-primary-50 h-[200px] flex flex-col items-center justify-center py-0 px-[5px] box-border text-center text-21xl text-primary-800 font-heading-heading-4">
        <div className="w-[1820px] flex flex-col items-center justify-center py-0 px-[30px] box-border md:self-stretch md:w-auto">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
            IHS Blogs
          </h1>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center py-[50px] px-0 gap-[45px]">
        <BlogContent
          title={currBlog.title}
          author={currBlog.author}
          date={currBlog.date}
          tags={currBlog.tags}
          image="/card-42@2x.png"
          description=""
          content=""
        />
        <RelatedCard cards={blogCardData}/>
      </div>
      <ConnectForm />
    </div>
  );
};

export default Blog;

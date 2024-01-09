import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import BlogSection from "../components/blog-section";
import ConnectForm from "../components/connect-form";
import { useState, useEffect } from "react"
import { MouseEvent } from "react";
import blogCardData, {CardData, CardDataList} from "../data/blogCardData";


const Blogs: NextPage = () => {

  const [tag, setTag] = useState('')
  const [blogList, setBlogList] = useState<CardData[]>([])

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a onClick={(e) => setTag("health")} target="_blank" rel="noopener noreferrer">
          health
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a onClick={(e) => setTag("wellness")} target="_blank" rel="noopener noreferrer">
          wellness
        </a>
      ),
    },
  ];

  const filteredData = blogCardData.filter((data) => data.tags.toLowerCase().includes(tag.toLowerCase()))

  useEffect(() => {
    setBlogList(filteredData)
  }, [])

  if (!blogList) {
    return <div>Loading</div>
  }
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
      <Header />
      <div className="self-stretch bg-primary-50 h-[200px] flex flex-col items-center justify-center py-0 px-[5px] box-border">
        <div className="w-[1820px] flex flex-col items-center justify-center py-0 px-[30px] box-border gap-[24px] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Connect Internal Blogs
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
            Explore blogs on Connect Internal
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-5 px-[5px] text-base text-primary-700">
        <div className="w-[1920px] flex flex-row flex-wrap items-center justify-center">
          <div className="rounded-lg bg-gray-white flex flex-row items-center justify-start py-8 px-[62px] box-border gap-[64px] max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
            <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[24px] capitalize font-semibold">
                Filter by tag
              </div>
              <Dropdown
                menu={{items}}
                trigger={["hover"]}
              >
                <a>
                  {(tag) ? tag + ' ': 'Select tag '}
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
            <button 
              className="cursor-pointer [border:none] py-3 px-6 bg-mediumspringgreen-200 rounded w-[102px] flex flex-row items-center justify-center box-border sm:hover:bg-mediumspringgreen-100"
              onClick={(e) => setBlogList(filteredData)}>
              <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                Search
              </div>
            </button>
          </div>
        </div>
      </div>
      <BlogSection
        cards={blogList}/>
      <ConnectForm />
    </div>
  );
};

export default Blogs;

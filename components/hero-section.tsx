import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";

const HeroSection: NextPage = () => {

  const [city, setCity] = useState('')
  const [position, setPosition] = useState('')


  return (
    <section className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[72px] font-semibold font-inherit">
            Find travel nursing local contracts
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">
          Discover personalized, direct hospital contracts, bypassing third-party intermediaries for a more fulfilling career path.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-base font-body-large-400">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <a
              className="[text-decoration:none] rounded bg-mediumspringgreen-200 overflow-hidden flex flex-row items-start justify-start py-3 px-6 text-[inherit]"
              href="https://my.connectinternal.com/register"
            >
              <div className="relative leading-[24px] font-medium">
                Register
              </div>
            </a>
            <a
              className="[text-decoration:none] rounded bg-gray-white overflow-hidden flex flex-row items-start justify-start py-3 px-6 text-mediumspringgreen-200"
              href="https://my.connectinternal.com/login"
            >
              <div className="relative leading-[24px] font-medium">Login</div>
            </a>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px] text-center text-base text-primary-700 font-body-large-400 md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[24px] capitalize font-semibold">
                  Locations
                </div>
                <Dropdown
                  menu={{
                    items: ["Birmingham, AL", "Denver, CO"].map((city, index) => ({
                      key: String(index),
                      label: (
                        <a onClick={(e) => { e.preventDefault(); setCity(city); }} target="_blank" rel="noopener noreferrer">
                          {city}
                        </a>
                      ),
                    })),
                  }}
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {(city) ? city + ' ': 'Select your city '}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px] text-left">
                <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
                  Position
                </div>
                <Dropdown
                  className="self-stretch"
                  menu={{items: ["Registered Nurse", "Medical Technologist"].map((position, index) => ({
                    key: String(index),
                    label: (
                      <a onClick={(e) => {e.preventDefault(); setPosition(position);}} target="_blank" rel="noopener noreferrer">
                        {position}
                      </a>
                    )}))}}
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {(position) ? position + ' ': 'Select position '}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <Link 
                className="cursor-pointer [border:none] py-3 px-6 bg-mediumspringgreen-200 rounded w-[102px] flex flex-row items-center justify-center box-border sm:hover:bg-mediumspringgreen-100"
                href="/job-search">
                <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                  Search
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

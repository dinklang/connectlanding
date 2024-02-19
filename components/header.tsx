import type { NextPage } from "next";
import Link from "next/link";
import jobsData from "../data/jobsData";
import { useState } from "react";

const Header: NextPage = () => {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    console.log(menu)
    setMenu(!menu);
  };

  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-black font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link
          className="hover:text-current  [text-decoration:none] flex flex-row items-center justify-center gap-[8px] text-[inherit]"
          href="/"
        >
          <img
            className="relative w-3.5 h-[42px] object-cover"
            alt=""
            src="/connecti-1@2x.png"
          />
          <div className="flex flex-col items-end justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[24px] font-semibold">
                Connect
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-lg">
              <div className="self-stretch relative tracking-[0.25em] leading-[20px] font-medium">
                Internal
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-start justify-start gap-[36px]">
          <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <Link
              className="cursor-pointer relative text-sm font-body-large-400 text-primary-900 text-center inline-block"
              href="/">
              HOME
            </Link>
            <Link
              className="cursor-pointer relative text-sm font-body-large-400 text-primary-900 text-center inline-block"
              href="http://18.220.166.155/">
              SIGN IN
            </Link>
            {/* <Link
            className="cursor-pointer relative text-sm font-semibold font-body-large-400 text-primary-900 text-center inline-block"
            href="https://my.connectinternal.com">
              EMPLOYERS
            </Link> */}
            {/* <Link
              className="cursor-pointer relative text-sm font-body-large-400 text-primary-900 text-center hidden"
              href="/blogs">
              BLOGS
            </Link>
            <Link
              className="cursor-pointer relative text-sm font-body-large-400 text-primary-900 text-center inline-block"
              href="/">
              CONTACT US
            </Link>
            <Link
              className="cursor-pointer relative text-sm font-body-large-400 text-primary-900 text-center inline-block"
              href="/about">
              ABOUT
            </Link> */}
          </div>
          <button 
            onClick={toggleMenu}
            className="cursor-pointer hidden bg-[transparent] flex-row items-center justify-center lg:flex"
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src={(menu ? "/x.svg" : "/notification.svg")}
            />
          </button>
          <div className={"absolute top-full left-1/4 h-screen w-full bg-white pl-14 pt-8 flex flex-col items-start gap-[20px] " + (menu ? "block" : "hidden")}>
            <Link
              className="cursor-pointer relative text-sm font-body-large-400 text-primary-900 text-center inline-block"
              href="/"
              onClick={() => setMenu(false)}>
              HOME
            </Link>
            <Link
              className="cursor-pointer relative text-sm font-body-large-400 text-primary-900 text-center inline-block"
              href="http://18.220.166.155/">
              SIGN IN
            </Link>
            {/* <Link
            className="cursor-pointer relative text-sm font-semibold font-body-large-400 text-primary-900 text-center inline-block"
            href="https://my.connectinternal.com"
            onClick={() => setMenu(false)}>
              EMPLOYERS
            </Link> */}
            {/* <Link
              className="cursor-pointer relative text-sm font-body-large-400 text-primary-900 text-center hidden"
              href="/blogs"
              onClick={() => setMenu(false)}>
              BLOGS
            </Link>
            <Link
              className="cursor-pointer relative text-sm font-body-large-400 text-primary-900 text-center inline-block"
              href="/"
              onClick={() => setMenu(false)}>
              CONTACT US
            </Link>
            <Link
              className="cursor-pointer relative text-sm font-body-large-400 text-primary-900 text-center inline-block"
              href="/about"
              onClick={() => setMenu(false)}>
              ABOUT
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

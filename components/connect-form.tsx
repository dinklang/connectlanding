import type { NextPage } from "next";
import Link from "next/link";

const ConnectForm: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start p-[50px] md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
      <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
        <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-[20px] text-center text-black font-body-large-400">
          <a
            className="[text-decoration:none] flex flex-row items-center justify-center gap-[8px] text-[inherit]"
            href="https://www.connectinternal.com"
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
          </a>
          <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-gray-black">
              Contact Us
            </h3>
            <div className="relative leading-[24px]">Call : +123 400 123</div>
            <div className="relative leading-[24px] flex items-end w-[312px]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className="relative leading-[24px] text-gray-700">
              Email: contact@connectinternal.com
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between">
            <a
              className="[text-decoration:none] rounded bg-primary-50 flex flex-col items-center justify-center p-3.5"
              href="https://facebook.com/"
            >
              <img
                className="relative w-5 h-[21.7px]"
                alt=""
                src="/social-media-logo.svg"
              />
            </a>
            <a
              className="[text-decoration:none] rounded bg-primary-50 flex flex-col items-center justify-center p-3.5"
              href="https://instagram.com/"
            >
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo1.svg"
              />
            </a>
            <a
              className="[text-decoration:none] rounded bg-primary-50 flex flex-col items-center justify-center p-3.5"
              href="https://twitter.com/"
            >
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo2.svg"
              />
            </a>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">Features</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a
              className="[text-decoration:none] relative leading-[24px] text-[inherit]"
              href="https://www.connectinternal.com"
            >
              Home
            </a>
            <a
              className="[text-decoration:none] relative leading-[24px] text-[inherit]"
              href="https://my.connectinternal.com/"
            >
              Nurse
            </a>
            <a
              className="[text-decoration:none] relative leading-[24px] text-[inherit]"
              href="https://www.my.connectinternal.com"
            >
              Employer
            </a>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
              href="/blogs"
            >
              Blog
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
              href="/about"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">Company</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
              href="/about"
            >
              Contact
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
              href="/about"
            >
              Careers
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
              href="/blogs"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
              href="/terms"
            >
              Terms of servies
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
              href="/privacy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ConnectForm;

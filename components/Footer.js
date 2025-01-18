"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/log2.png";
import { RiWhatsappFill } from "react-icons/ri";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const footer = useRef();

  useEffect(() => {
    if (footer.current) {
      const dots = document.querySelector(".dots");

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            console.log("sdfgd");
            dots.classList.add("hidden");
            dots.classList.remove("fixed");
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(footer.current);
      return observer.unobserve(footer.current);
    }
  }, []);

  return (
    <footer
      ref={footer}
      className="w-full mt-20 border-t-2 border-gray-500 text-white bg-[#000F29] px-6 lg:px-32 pb-4 lg:pb-10 pt-6 md:pt-12"
      style={{ zIndex: "9999" }}
    >
      <Image src={logo} width={80} height={80} alt="Logo" />
      <p className="text-gray-200 mb-4 md:mb-8 mt-2  text-[12px] md:text-lg">
        © {new Date().getFullYear()} Ention Technology and services private
        limited| Powered by ention
      </p>

      <div className="w-full  flex flex-col md:flex-row">
        <div className="flex flex-col grow flex-1 md:mx-7">
          <Link href="/career">
            <>
              <h2 className="text-lg md:text-2xl mb-1 font-bold">Careers</h2>
              <p className="text-gray-300  text-[12px]  md:text-lg">
                Are you ready to apply your knowledge and background to exciting
                new challenges. Search and apply for a job today.
              </p>
            </>
          </Link>

          <Link href="/vission">
            <>
              <h2 className="text-lg md:text-2xl mb-1 mt-4 md:mt-8 font-bold">
                About Us
              </h2>
              <p className="text-gray-300 text-[12px] md:text-lg">
                ENTION TECHNOLOGY AND SERVICES PVT. LTD. is a start-up company
                that is designed to offer laptop, computer products and
                peripheral.
              </p>
            </>
          </Link>

          <Link href="/#section4">
            <>
              {" "}
              <h2 className="text-lg md:text-2xl mb-1 mt-4 md:mt-8 font-bold">
                Satisfaction Guarantee
              </h2>
            </>
          </Link>
          <p className="text-gray-300 text-[12px] md:text-lg">
            By providing you the best solution, we guarantee that your business
            will reach new heights.
          </p>
        </div>
        <div className="flex flex-col grow flex-1 mx-0 md:mx-4 lg:mx-20 pt-4 md:pt-0">
          <Link href="/news-events">
            <>
              {" "}
              <h2 className="text-lg md:text-2xl mb-1 font-bold">
                News and Event
              </h2>
            </>
          </Link>
          <p className="text-gray-300 text-[12px] md:text-lg">
            Are you an individual or an agency looking to get involved or
            partner with us? Let&apos;s have a meeting.
          </p>

          <Link href="/blogs">
            <>
              <h2 className="text-lg md:text-2xl mb-1 mt-4 md:mt-14 font-bold">
                Knowledge Blog
              </h2>
            </>
          </Link>
          <p className="text-gray-300  text-[12px] md:text-lg">
            What&apos;s new? What&apos;s trending? Understand it in our blog
            section. What&apos;s new? What&apos;s trending? Understand it in our
            blog section.
          </p>
        </div>
        <div className="flex flex-col grow flex-1 items-start lg:items-end ml-0 lg:ml-14  ">
          <div className="max-h-min">
            <div className="flex pt-4 md:pt-8 lg:pt-0">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <RiWhatsappFill
                  className="text-[#007E9E] mr-4 mt-0 md:mt-1"
                  size={33}
                />
              </a>
              <Link href="/contact">
                <button className="bg-[#007E9E] text-white font-semibold px-4 md:px-8 py-1 md:py-2  rounded-md">
                  Contact Us
                </button>
              </Link>
            </div>
            <div className="pl-0 md:pl-5">
              <div className="flex md:flex-col gap-6 md:gap-0">
                <p className="text-gray-300 mt-5  text-[12px] md:text-lg">
                  <a href="tel:906487436546">+91 9717484068</a>
                </p>
                {/* <p className='text-gray-300 mt-5 md:mt-1 text-[12px] md:text-lg'>
                            <a href="">(334)</a> - <a href="tel:(334) 202-4792">(334) 202-4792</a>
                        </p> */}
              </div>
              <p className="text-gray-300 mt-1 text-[12px] md:text-lg">
                <a href="mailto:contact@ention.in">contact@ention.in</a>
              </p>
              <p className="text-gray-300 mt-3 w-full md:w-1/2 text-[12px] md:text-lg">
                Registered Office Location - Delhi (India)
              </p>

              <div className="flex mt-4 space-x-3">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-white" size={25} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white" size={25} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-white" size={25} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white" size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row flex-wrap justify-center items-center text-center mt-6 md:mt-10 mx-0 lg:mx-auto  text-[9px] md:text-lg">
        <div className="w-[30%] md:w-[25%] lg:w-[20%]">
          <Link href="/terms&conditions"> Terms and Conditions </Link>
        </div>
        <div className="w-[20%] md:w-[20%] lg:w-[20%]">
          <Link href="/terms&conditions"> Privacy Policy </Link>
        </div>
        <div className="w-[30%] md:w-[30%] lg:w-[20%]">
          <Link href="/policiesandprocedures"> Policies and Procedures </Link>
        </div>
        <div className="w-[20%] md:w-[20%] lg:w-[20%]">
          <Link href="/cookies"> Cookies </Link>
        </div>
      </div>

      <p className="text-center mt-6  text-gray-300 text-[12px] md:text-lg">
        © 2022 - {new Date().getFullYear()} Ention Technology and services
        private limited
      </p>
    </footer>
  );
};

export default Footer;

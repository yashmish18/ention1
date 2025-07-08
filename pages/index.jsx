import React, { useRef, useState, useEffect } from "react";
import gradientbg1 from "/public/assets/gradient-bg1.png";
import gradientbg2 from "/public/assets/gradient-bg2.png";
import marketpc from "/public/assets/market-pc.png";
import ellipsemd from "/public/assets/ellipse-gradient-md.png";

import lappy from "/public/assets/lappy.png";

import warrantyimg from "/public/assets/ds.png";

import CheckIcon from "components/icons/check";
import SimpleSlider from "./slider";
import { Zoom } from "react-awesome-reveal";
import { TypingEffect } from "components/generic/TypingEffect";
import { BlurInText } from "components/generic/BlurInText";
import { FadeUpAnimate } from "components/generic/FadeUpAnimate";
import { useRouter } from "next/router";
import IntelCarousel from "components/IntelCarousel";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import Image from "next/image";
import { FiSettings, FiDollarSign, FiShield, FiZap } from 'react-icons/fi';
import { BsFlag } from 'react-icons/bs';
import Link from "next/link";
import ProductImageCarouselMobile from "components/ProductImageCarouselMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const IMAGES = [marketpc, marketpc, marketpc];

const TestCarousel = dynamic(() => import('components/TestCarousel'), { ssr: false });

// FloatingBlob component for floating/parallax effect
const FloatingBlob = ({ className = '', style = {}, children }) => (
  <motion.div
    className={className}
    style={style}
    animate={{
      y: [0, -20, 0, 20, 0],
      x: [0, 10, 0, -10, 0],
      rotate: [0, 2, 0, -2, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(null); // Track direction for smooth transition
  const [isTransitioning, setIsTransitioning] = useState(false); // Track if transition is in progress
  const router = useRouter();
  const mobileSwiperRef = useRef(null);

  // Handle next image action
  const nextImage = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    setDirection("next");
    setIsTransitioning(true);
  };

  const navigateToProductPage = () => {
    router.push("/product");
  };

  const [showBookNowForm, setShowBookNowForm] = useState(false);

  // Reset direction state and update current image index after transition is finished
  useEffect(() => {
    if (!isTransitioning) return; // Wait for the transition to finish

    const timeout = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        if (direction === "next") {
          return (prevIndex + 1) % IMAGES.length;
        } else if (direction === "prev") {
          return (prevIndex - 1 + IMAGES.length) % IMAGES.length;
        }
        return prevIndex;
      });
      setDirection(null); // Reset direction
      setIsTransitioning(false); // Reset transition state
    }, 500); // Wait for the transition duration (500ms)

    return () => clearTimeout(timeout);
  }, [direction, isTransitioning, IMAGES.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className={"main overflow-x-hidden relative z-0 w-full"}>
        <div
          className="flex flex-col -z-10"
          style={{
            backgroundImage: `url(${gradientbg1.src})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="h-[130px]"></div>
          {/* Offers Bar Start */}
          <div className="w-full flex justify-center">
            <div className="w-[100%] bg-[#007E9E] text-white py-2 rounded-ls shadow-lg overflow-hidden relative z-40">
              <div className="whitespace-nowrap overflow-hidden w-full">
                <div className="animate-marquee flex items-center gap-12 text-lg font-semibold">
                  <span> Summer Sale: Up to 20% off on select laptops!</span>
                  <span> Free shipping on orders above ₹50,000</span>
                  <span> Buy 1 Get 1 Free on Accessories</span>
                  <span> No Cost EMI Available</span>
                  <span> 2 Years Extended Warranty on E3 Series</span>
                  {/* Duplicate for seamless infinite scroll */}
                  <span> Summer Sale: Up to 20% off on select laptops!</span>
                  <span> Free shipping on orders above ₹50,000</span>
                  <span> Buy 1 Get 1 Free on Accessories</span>
                  <span> No Cost EMI Available</span>
                  <span> 2 Years Extended Warranty on E3 Series</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[20px]"></div>
          <style jsx global>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: inline-flex;
              min-width: 200%;
              animation: marquee 25s linear infinite;
            }
          `}</style>
          {/* Offers Bar End */}
          <div className="h-[50px]"></div>
          <div className="flex flex-col w-full items-center">
            {/* Mobile: INTRODUCING + TypingEffect in one line, ENTION® COMPUTING DEVICE with TypingEffect in next line */}
            <div className="w-full flex-col items-center justify-center md:hidden">
              <div
                className="flex items-center justify-center w-full whitespace-nowrap overflow-x-auto"
                style={{ letterSpacing: "7px" }}
              >
                <span className="text-white text-base md:text-lg font-semibold mr-2">INTRODUCING</span>
                <TypingEffect className="text-[#01E9FE] font-bold text-base md:text-lg" text="MADE IN INDIA" />
              </div>
              <div className="flex items-center justify-center w-full mt-3 whitespace-nowrap overflow-x-auto">
                <TypingEffect className="text-white text-lg md:text-xl font-bold" text={"ENTION\u00A0\u00AE COMPUTING DEVICE"} />
              </div>
            </div>
            {/* Desktop: keep existing layout */}
            <div style={{ letterSpacing: "7px" }} className="hidden md:flex items-center">
              <div className="text-white text-2xl mr-4">INTRODUCING</div>
              <div>
                <TypingEffect
                  className="text-[#01E9FE] font-bold text-2xl"
                  text="MADE IN INDIA"
                />
              </div>
            </div>
            <BlurInText className="hidden md:block text-white text-[50px] mt-8 text-3xl font-bold">
              <span>ENTION</span>
              <span
                style={{ position: "relative", top: "-18px", fontSize: "31px" }}
                className="font-thin text-[50px]"
              >
                &reg;
              </span>{" "}
              <span>COMPUTING DEVICE</span>
            </BlurInText>
          </div>
          <div className="h-[100px]"></div>
          <div className="hidden md:block w-[95%] mx-auto"><IntelCarousel /></div>
          <div className="block md:hidden w-full"><ProductImageCarouselMobile /></div>
          <div className="w-full flex justify-center mt-24">
            <BlurInText className="hidden md:block">
              <p className="text-white text-2xl md:text-4xl lg:text-[32px] font-bold text-center max-w-4xl leading-snug">
                Get ready to experience a mesmerizing journey of performance and style with the Ention Workbook series<br />
                <span className="text-[#01E9FE] font-bold">proudly Made in India to empower.</span>
              </p>
            </BlurInText>
            {/* Mobile Only: Hero Text */}
            <div className="block md:hidden w-full flex justify-center mt-8 px-4">
              <p className="text-white text-lg font-bold text-center leading-snug">
                Get ready to experience a mesmerizing journey<br />
                of performance and style with the<br />
                Ention Workbook series<br />
                <span className="text-[#01E9FE] font-bold block mt-2">
                  proudly Made in India to empower.
                </span>
              </p>
            </div>
          </div>

          {/* Why Choose Ention Workbook Series Section - Icons Above Text, Single Separator Line */}
          <div className="w-full flex flex-col items-center mt-16 py-12 relative">
            <div className="w-full max-w-6xl px-4">
              <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-2 text-center">Why Choose Ention Workbook Series?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6"></div>
              <p className="text-white text-lg opacity-80 mb-12 text-center">From customization to performance, discover what makes Ention Workbook Series the right choice for you.</p>
              {/* Icon+Text Columns with Separator Line */}
              <div className="relative w-full">
                {/* Separator Line */}
                <div className="absolute left-0 right-0 mx-auto w-full h-1 bg-gradient-to-r from-cyan-400/30 via-white/10 to-blue-500/30" style={{ top: '56px', zIndex: 1 }} />
                <div className="grid grid-cols-2 md:flex md:flex-row items-start justify-center gap-8 md:gap-12 w-full">
                  {[
                    {
                      icon: <Image src="/assets/banner/warranty icon.png" alt="Customizable" width={56} height={56} className="mx-auto" />, 
                      title: "Customizable",
                      desc: "Configure your device to match your needs."
                    },
                    {
                      icon: <Image src="/assets/banner/affordable icon.webp" alt="Affordable Without Compromise" width={56} height={56} className="mx-auto" />, 
                      title: "Affordable Without Compromise",
                      desc: "Get premium features at a fair price."
                    },
                    {
                      icon: <Image src="/assets/banner/warranty icon.png" alt="18-Month On-Site Warranty" width={56} height={56} className="mx-auto" />, 
                      title: "18-Month On-Site Warranty",
                      desc: "Enjoy peace of mind with extended support."
                    },
                    {
                      icon: <Image src="/assets/banner/made in india icon.webp" alt="Made in India. Made for You." width={56} height={56} className="mx-auto" />, 
                      title: "Made in India. Made for You.",
                      desc: "Proudly designed and built in India."
                    },
                    {
                      icon: <Image src="/assets/banner/c.webp" alt="Performance That Powers You" width={56} height={56} className="mx-auto" />, 
                      title: "Performance That Powers You",
                      desc: "Experience speed and reliability every day."
                    },
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center w-full md:w-auto relative" style={{ zIndex: 2 }}>
                      <div className="mb-4" style={{ marginBottom: 32 }}>{step.icon}</div>
                      <div className="mt-8 text-white text-lg md:text-xl font-bold text-center max-w-[180px] leading-tight mb-2">{step.title}</div>
                      <div className="text-cyan-100 text-base text-center max-w-[200px] leading-snug">{step.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        
          {/* Warranty Card */}
          <FadeUpAnimate spaceToMove={100}>
            <div className="w-full flex justify-center mt-24">
              <div className="flex flex-col items-center w-[80%] -mt-5">
                <div
                  className="px-8 py-4 border rounded-3xl w-full flex flex-col sm:flex-row justify-center items-center relative"
                  style={{ borderColor: "rgba(34, 209, 238, 1" }}
                >
                  <Image src={warrantyimg} alt="warranty-img" width={390} height={240} className="w-[320px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[390px] h-auto z-[2]" />
                  <FloatingBlob
                    className="absolute z-[1] top-10 sm:top-[150px] left-16 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px]"
                    style={{ backgroundImage: `url(${ellipsemd.src})`, backgroundSize: "100% 100%" }}
                  />
                  <FloatingBlob
                    className="absolute z-[1] top-10 sm:top-[100px] left-[38%] xl:left-[42%] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"
                    style={{ backgroundImage: `url(${ellipsemd.src})`, backgroundSize: "100% 100%" }}
                  />
                  <FloatingBlob
                    className="absolute z-[1] bottom-4 xl:bottom-10 right-12 xl:right-16 w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px]"
                    style={{ backgroundImage: `url(${ellipsemd.src})`, backgroundSize: "100% 100%" }}
                  />
                  <div className="w-10"></div>
                  <div className="flex flex-col items-center sm:items-start gap-8 lg:gap-16 w-full min-[540px]:w-[360px] text-center sm:text-left sm:w-[320px] lg:w-[360px] xl:w-[480px] ">
                    <p className="text-[16px] min-[360px]:text-lg min-[420px]:text-xl min-[540px]:text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white leading-8 sm:leading-7 md:leading-8 lg:leading-10">
                    On-Site Warranty, At Your Doorstep
                    Your peace of mind is our priority. 
                    Right at your doorstep, anywhere in India.

                    </p>
                    <button
                      className="z-[2] w-[200px] h-[45px] sm:w-[180px] md:w-[200px] sm:h-[38px] md:h-[42px] xl:w-[248px] xl:h-[58px] rounded-3xl flex justify-center items-center text-black text-lg md:text-xl xl:text-2xl hover:scale-105  transition-all duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(34, 209, 238, 1)" }}
                      onClick={() => router.push('/technical-support')}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeUpAnimate>

          {/* Computer List */}
          <Zoom cascade triggerOnce>
            <div className="w-full hidden sm:flex justify-center">
              <div className="flex flex-col items-center w-[80%] mt-16">
                <div className="w-[640px] lg:w-full h-auto flex justify-center mt-16">
                  <SimpleSlider />
                </div>
              </div>
            </div>
          </Zoom>

          {/* Three Images, Center Image Overflow - Modern Static Layout */}
          <div className="hidden md:flex w-full flex-col items-center justify-center py-24 relative">
            <div className="flex flex-row items-end justify-center gap-4 md:gap-12 w-full max-w-5xl">
              {/* Left Image */}
              <img
                src="/assets/0N1A1389.png"
                alt="Ention Laptop Left"
                className="w-[220px] md:w-[280px] xl:w-[320px] drop-shadow-2xl transition-all duration-500"
                style={{ zIndex: 1, filter: 'drop-shadow(0 8px 32px #01e9fe88)' }}
              />
              {/* Center Image (overflow/pop out) */}
              <img
                src="/assets/0N1A1389.png"
                alt="Ention Laptop Center"
                className="w-[270px] md:w-[350px] xl:w-[420px] drop-shadow-2xl transition-all duration-500 scale-110 md:scale-125 relative -mb-8 md:-mb-16 z-20"
                style={{ filter: 'drop-shadow(0 12px 48px #01e9fecc)' }}
              />
              {/* Right Image */}
              <img
                src="/assets/0N1A1389.png"
                alt="Ention Laptop Right"
                className="w-[220px] md:w-[280px] xl:w-[320px] drop-shadow-2xl transition-all duration-500"
                style={{ zIndex: 1, filter: 'drop-shadow(0 8px 32px #01e9fe88)' }}
              />
            </div>
          </div>
          {/* Mobile: Swipable Single Image */}
          <div className="block md:hidden w-full py-12 relative">
            <>
              <Swiper
                onSwiper={swiper => (mobileSwiperRef.current = swiper)}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                style={{ width: '100vw' }}
              >
                {["/assets/0N1A1389.png", "/assets/0N1A1389.png", "/assets/0N1A1389.png"].map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex justify-center items-center w-full">
                      <img
                        src={img}
                        alt={`Ention Laptop ${idx + 1}`}
                        className="w-[80vw] h-auto mx-auto drop-shadow-2xl"
                        style={{ maxWidth: 400, filter: 'drop-shadow(0 12px 48px #01e9fecc)' }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Arrow Buttons */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center z-10"
                onClick={() => mobileSwiperRef.current && mobileSwiperRef.current.slidePrev()}
                style={{ outline: 'none', border: 'none' }}
              >
                &#8592;
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center z-10"
                onClick={() => mobileSwiperRef.current && mobileSwiperRef.current.slideNext()}
                style={{ outline: 'none', border: 'none' }}
              >
                &#8594;
              </button>
            </>
          </div>
        </div>
        <div
          className=" flex flex-col max-h-fit -z-10"
          style={{
            backgroundImage: `url(${gradientbg2.src})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="w-full flex mt-20 justify-center mb-20">
            <div className="w-[80%] flex flex-col min-[940px]:flex-row items-start min-[940px]:items-center justify-between gap-20 min-[940px]:gap-5">
              <FadeUpAnimate>
                <div className="flex flex-col gap-5 ">
                  <p className="text-[28px] min-[540px]:text-[36px] min-[1120px]:text-[48px] xl:text-[54px] leading-tight text-white w-[280px] min-[540px]:w-[360px] min-[1120px]:w-[480px] xl:w-[556px] font-bold">
                    Ention laptop experience program
                  </p>
                  <div className="flex flex-col gap-4 mt-5 xl:mt-10">
                    <div className="flex gap-3 lg:gap-6 xl:gap-10 items-center">
                      <CheckIcon />
                      <p className="text-lg min-[540px]:text-xl xl:text-2xl text-white">
                      Zero Obligation to Purchase
                      </p>
                    </div>
                    <div className="flex gap-3 lg:gap-6 xl:gap-10 items-center">
                      <CheckIcon />
                      <p className="text-lg min-[540px]:text-xl xl:text-2xl text-white">
                      Free Sample Delivery at Your Office 
                      </p>
                    </div>
                    <div className="flex gap-3 lg:gap-6 xl:gap-10 items-center">
                      <CheckIcon />
                      <p className="text-lg min-[540px]:text-xl xl:text-2xl text-white">
                      Exclusive Corporate Offers
                      </p>
                      
                     
                    </div>
                      <div className="text-2xl min-[540px]:text-xl xl:text-2xl text-white mt-24 font-bold ">
                      <p>Let your team test the performance first-hand </p>
                      </div>
                  </div>
                  <button
                    onClick={() => setShowBookNowForm(true)}
                    className="bg-white mt-4 xl:mt-8 z-[2] w-[160px] h-[36px] min-[450px]:w-[200px] min-[450px]:h-[45px] sm:w-[Cpx] md:w-[200px] sm:h-[38px] md:h-[42px] xl:w-[248px] xl:h-[58px] rounded-3xl flex justify-center items-center text-black text-base min-[450px]:text-lg md:text-xl xl:text-2xl hover:scale-105  transition-all duration-300 ease-in-out"
                  >
                    Book Now
                  </button>
                </div>
              </FadeUpAnimate>

              <motion.div
                className="w-full min-[940px]:w-[560px] h-auto min-[940px]:h-[540px] xl:h-[620px] bg-[length:90%] mx-auto"
                style={{
                  backgroundImage: `url(${lappy.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {showBookNowForm && (
                  <BlurInText duration={0.3}>
                    <div
                      className="w-full h-full p-6 min-[450px]:p-8 xl:p-12 rounded-3xl"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                    >
                      <div className="flex flex-row-reverse">
                        <div
                          onClick={() => setShowBookNowForm(false)}
                          style={{
                            color: "rgb(14, 74, 103)",
                            fontSize: "30px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            lineHeight: "20px",
                            marginTop: "-15px",
                            marginRight: "-15px",
                          }}
                        >
                          &times;
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <p
                          className="text-xl min-[380px]:text-2xl min-[540px]:text-3xl xl:text-4xl font-bold"
                          style={{ color: "rgba(14, 74, 103, 1)" }}
                        >
                          Book Experience Program
                        </p>
                        <div className="flex flex-col gap-2">
                          <p
                            className="text-xs ml-2"
                            style={{ color: "rgba(14, 74, 103, 1)" }}
                          >
                            Name
                          </p>
                          <input
                            type="text"
                            name="name"
                            className="w-full rounded-md select-none border bg-white h-10 xl:h-14 pl-2"
                            style={{ borderColor: "rgba(111, 207, 151, 1)" }}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p
                            className="text-xs ml-2"
                            style={{ color: "rgba(14, 74, 103, 1)" }}
                          >
                            Company Name
                          </p>
                          <input
                            type="text"
                            name="company_name"
                            className="w-full rounded-md select-none border bg-white h-10 xl:h-14 pl-2"
                            style={{ borderColor: "rgba(111, 207, 151, 1)" }}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p
                            className="text-xs ml-2"
                            style={{ color: "rgba(14, 74, 103, 1)" }}
                          >
                            Email
                          </p>
                          <input
                            type="email"
                            name="email"
                            className="w-full rounded-md select-none border bg-white h-10 xl:h-14 pl-2"
                            style={{ borderColor: "rgba(111, 207, 151, 1)" }}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p
                            className="text-xs ml-2"
                            style={{ color: "rgba(14, 74, 103, 1)" }}
                          >
                            Message
                          </p>
                          <textarea
                            name="message"
                            className="w-full rounded-md select-none border bg-white h-10 xl:h-14 p-2"
                            style={{ borderColor: "rgba(111, 207, 151, 1)" }}
                          />
                        </div>
                        <div>
                          <input
                            type="submit"
                            name="submit"
                            content="Submit"
                            className="mt-7 xl:mt-4 cursor-pointer w-full h-10 xl:h-14 flex center rounded-md text-white text-lg min-[540px]:text-xl font-bold hover:scale-105 transition-all duration-300 ease-in-out"
                            style={{
                              backgroundColor: "#1673a2",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </BlurInText>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

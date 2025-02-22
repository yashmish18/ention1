import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import slide1 from "assets/slide-1.jpg";
import slide3 from "assets/slide-3.jpg";
import slide4 from "assets/slide-4.jpg";
import { useRouter } from "next/router";

export default function IntelCarousel() {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const slideTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, delay: 0.3 } },
  };
  const router = useRouter();
  const getSlideUniqueStyle = useCallback(
    (slideIndex) => {
      switch (slideIndex) {
        case 0:
          return {
            flexBasis: selectedSlide === 0 ? "200vw" : "clamp(8rem,30vw,18rem)",
          };
        case 1:
          return {
            flexBasis: selectedSlide === 1 ? "200vw" : "clamp(8rem,30vw,18rem)",
            transform:
              selectedSlide === 1 ? "translateY(0)" : "translateY(3.8rem)",
          };
        case 2:
          return {
            flexBasis: selectedSlide === 2 ? "200vw" : "clamp(8rem,30vw,18rem)",
            transform:
              selectedSlide === 2 ? "translateY(0)" : "translateY(3.8rem)",
          };
        default:
          return {};
      }
    },
    [selectedSlide]
  );
  const navigateToProductPage = () => {
    router.push("/product");
  };
  const playSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
      />
    </svg>
  );
  return (
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        listStyle: "none",
        margin: "0",
        transitionDuration: "0ms",
        position: "relative",
        width: "100%",
        height: "100%",
        transform: "translate3d(0px, 0px, 0px)",
        transitionDelay: "0ms",
        boxSizing: "border-box",
        zIndex: 1,
      }}
    >
      <div
        onClick={() => setSelectedSlide(selectedSlide === 0 ? null : 0)}
        style={{
          ...getSlideUniqueStyle(0),
        }}
        className="front-page-slider"
      >
        <div
          className="background-image-center front-slide-hover"
          style={{
            height:
              selectedSlide === 0 ? "38.75rem" : "clamp(18rem,60vh,32rem)",
            backgroundImage: `url(${slide1.src})`,
          }}
        ></div>
        {selectedSlide !== 0 && (
          <div className="absolute w-full h-full top-0 left-0 slide-dark-cover"></div>
        )}
        <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-end px-2">
          <div className="flex items-center text-white font-extralight">
            <button className="p-2 w-12">{playSvg}</button>
            {selectedSlide === null && <div>Blazing Speed</div>}
          </div>
        </div>
        {selectedSlide === 0 && (
          <div className="slide-text-cover px-24 flex flex-col justify-center text-white absolute h-full w-full top-0 left-0">
            <motion.div
              variants={slideTextVariants}
              initial="hidden"
              animate="visible"
              className="w-2/5"
            >
              <div>Blazing Speed</div>
              <div className="text-[50px] font-thin my-4 mt-2">
                Unleash the Power Within
              </div>
              <div className="font-light">
                Experience next-gen processing speeds and seamless multitasking
                with our latest high-performance laptops. Designed for creators,
                gamers, and professionals who demand excellence.
              </div>
              <button
                onClick={() => navigateToProductPage()}
                className="mt-6 cursor-pointer font-thin text-[20px] slide-explore-more-button"
              >
                Explore More →
              </button>
            </motion.div>
          </div>
        )}
      </div>
      <div
        onClick={() => setSelectedSlide(selectedSlide === 1 ? null : 1)}
        style={{
          transform: "translateY(3.8rem)",
          ...getSlideUniqueStyle(1),
        }}
        className="front-page-slider"
      >
        <div
          className="background-image-center front-slide-hover"
          style={{
            height:
              selectedSlide === 1 ? "38.75rem" : "clamp(16rem,60vh,28rem)",
            backgroundImage: `url(${slide3.src})`,
          }}
        ></div>
        {selectedSlide !== 1 && (
          <div className="absolute w-full h-full top-0 left-0 slide-dark-cover"></div>
        )}
        <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-end px-2">
          <div className="flex items-center text-white font-extralight">
            <button className="p-2 w-12">{playSvg}</button>
            {selectedSlide === null && <div>Ultra-Slim. Ultra-Light.</div>}
          </div>
        </div>
        {selectedSlide === 1 && (
          <div className="slide-text-cover px-24 flex flex-col justify-center text-white absolute h-full w-full top-0 left-0">
            <motion.div
              variants={slideTextVariants}
              initial="hidden"
              animate="visible"
              className="w-2/5"
            >
              <div>Ultra-Slim. Ultra-Light.</div>
              <div className="text-[50px] font-thin my-4 mt-2">
                Go Anywhere, Do Everything
              </div>
              <div className="font-light">
                A perfect blend of style and power. Our ultra-thin, lightweight
                design ensures you stay productive on the go without
                compromising performance.
              </div>
              <button
                onClick={() => navigateToProductPage()}
                className="mt-6 cursor-pointer font-thin text-[20px] slide-explore-more-button"
              >
                Explore More →
              </button>
            </motion.div>
          </div>
        )}
      </div>
      <div
        onClick={() => setSelectedSlide(selectedSlide === 2 ? null : 2)}
        style={{
          transform: "translateY(3.8rem)",
          ...getSlideUniqueStyle(2),
        }}
        className="front-page-slider relative"
      >
        <div
          className="background-image-center front-slide-hover"
          style={{
            height:
              selectedSlide === 2 ? "38.75rem" : "clamp(18rem,60vh,32rem)",
            backgroundImage: `url(${slide4.src})`,
          }}
        ></div>
        {selectedSlide !== 2 && (
          <div className="absolute w-full h-full top-0 left-0 slide-dark-cover"></div>
        )}
        <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-end px-2">
          <div className="flex items-center text-white font-extralight">
            <button className="p-2 w-12">{playSvg}</button>
            {selectedSlide === null && <div>4K Clarity & Beyond</div>}
          </div>
        </div>
        {selectedSlide === 2 && (
          <div className="slide-text-cover px-24 flex flex-col justify-center text-white absolute h-full w-full top-0 left-0">
            <motion.div
              variants={slideTextVariants}
              initial="hidden"
              animate="visible"
              className="w-2/5"
            >
              <div>4K Clarity & Beyond</div>
              <div className="text-[50px] font-thin my-4 mt-2">
                See Every Detail Like Never Before
              </div>
              <div className="font-light">
                Experience breathtaking visuals with our high-resolution
                displays, vibrant colors, and ultra-smooth refresh rates.
                Perfect for entertainment, design, and everything in between.
              </div>
              <button
                onClick={() => navigateToProductPage()}
                className="mt-6 cursor-pointer font-thin text-[20px] slide-explore-more-button"
              >
                Explore More →
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

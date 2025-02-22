import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";

export default function IntelCarousel() {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const slideTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  };
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
            backgroundImage: `url(https://images.pexels.com/photos/29376745/pexels-photo-29376745.jpeg)`,
          }}
        ></div>
        <div className="absolute w-full h-full top-0 left-0 slide-dark-cover"></div>
        <div className="slide-text-cover px-24 flex flex-col justify-center text-white absolute h-full w-full top-0 left-0">
          {selectedSlide === 0 && (
            <motion.div
              variants={slideTextVariants}
              initial="hidden"
              animate="visible"
              className="w-2/5"
            >
              <div>BLAZING SPEED</div>
              <div className="text-[50px] font-thin my-4 mt-2">
                Unleash the Power Within
              </div>
              <div className="font-light">
                Experience next-gen processing speeds and seamless multitasking
                with our latest high-performance laptops. Designed for creators,
                gamers, and professionals who demand excellence.
              </div>
              <div className="mt-6 cursor-pointer font-thin text-[20px] slide-explore-more-button">
                Explore More →
              </div>
            </motion.div>
          )}
        </div>
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
            backgroundImage: `url(https://images.pexels.com/photos/2473183/pexels-photo-2473183.jpeg)`,
          }}
        ></div>
        <div className="absolute w-full h-full top-0 left-0 slide-dark-cover"></div>
        <div className="slide-text-cover px-24 flex flex-col justify-center text-white absolute h-full w-full top-0 left-0">
          {selectedSlide && (
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
              <div className="mt-6 cursor-pointer font-thin text-[20px] slide-explore-more-button">
                Explore More →
              </div>
            </motion.div>
          )}
        </div>
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
            backgroundImage: `url(https://images.pexels.com/photos/4007744/pexels-photo-4007744.jpeg)`,
          }}
        ></div>
        <div className="absolute w-full h-full top-0 left-0 slide-dark-cover"></div>
        <div className="slide-text-cover px-24 flex flex-col justify-center text-white absolute h-full w-full top-0 left-0">
          {selectedSlide === 2 && (
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
              <div className="mt-6 cursor-pointer font-thin text-[20px] slide-explore-more-button">
                Explore More →
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

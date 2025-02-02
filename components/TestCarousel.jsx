"use client"; // Ensure it runs only on the client side

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useCallback, useEffect, useRef, useState } from "react";
import { TypingEffect } from "./generic/TypingEffect";
import { BlurInText } from "./generic/BlurInText";

export default function TestCarousel() {
  const [middleSlide, setMiddleSlide] = useState(0);
  const totalSlides = useRef(10);
  useEffect(() => {
    console.log("middleSlide", middleSlide);
  }, [middleSlide]);
  const getStyle = useCallback(
    (index) => {
      const previndex =
        middleSlide - 1 >= 0 ? middleSlide - 1 : totalSlides.current - 1;
      const nextindex =
        middleSlide + 1 < totalSlides.current ? middleSlide + 1 : 0;
      // if middle slide
      if (middleSlide === index)
        return {
          opacity: "1",
          transform: "scale(2)",
          filter: "none",
        };
      else if (previndex === index || nextindex === index)
        return {
          opacity: "0.5",
          transform: "scale(0.6)",
          filter: "blur(8px)",
        };
      else
        return {
          opacity: "0.4",
          transform: "scale(0.5)",
          filter: "blur(16px)",
        };
    },
    [middleSlide]
  );
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        speed={1000}
        slidesPerView={5}
        spaceBetween={20}
        autoplay={{ delay: 2500 }}
        loop={true}
        centeredSlides={true}
        style={{ overflow: "visible" }}
        onSlideChange={(swiper) => setMiddleSlide(swiper.realIndex)}
      >
        {Array(totalSlides.current)
          .fill(0)
          .map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  "--active": middleSlide === index ? 1 : 0,
                  ...getStyle(index),
                  transition: "1s",
                  width: "18vw",
                }}
                className="flex items-center justify-center text-2xl font-bold"
              >
                <img src="/assets/market-pc.png" alt="pc" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

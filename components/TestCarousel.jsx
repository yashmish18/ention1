"use client"; // Ensure it runs only on the client side

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useCallback, useEffect, useState } from "react";
import { TypingEffect } from "./generic/TypingEffect";
import { BlurInText } from "./generic/BlurInText";

export default function TestCarousel() {
  const [middleSlide, setMiddleSlide] = useState(0);
  useEffect(() => {
    console.log("middleSlide", middleSlide);
  }, [middleSlide]);
  const getStyle = useCallback(
    (index) => {
      // return {};
      if (middleSlide === index)
        return {
          opacity: "1",
          transform: "scale(2)",
          filter: "none",
        };
      else
        return {
          opacity: "0.5",
          transform: "scale(0.5)",
          filter: "blur(8px)",
        };
    },
    [middleSlide]
  );
  return (
    <div className="w-full">
      <div className="flex flex-col w-full items-center">
        <div style={{ letterSpacing: "7px" }} className="flex items-center">
          <div className="text-white text-2xl mr-2">INTRODUCING</div>
          <div>
            <TypingEffect
              className="text-[#01E9FE] font-bold text-2xl"
              text="MADE IN INDIA"
            />
          </div>
        </div>
        <BlurInText className="text-white text-[50px] mt-8 text-3xl font-bold">
          ENTION COMPUTING DEVICE
        </BlurInText>
      </div>
      <div className="h-64"></div>
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
        {Array(10)
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

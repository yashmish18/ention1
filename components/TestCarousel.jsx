"use client"; // Ensure it runs only on the client side

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useCallback, useEffect, useRef, useState } from "react";

export default function TestCarousel() {
  const [middleSlide, setMiddleSlide] = useState(null);
  const totalSlides = useRef(10);
  const [selectedImage, setSelectedImage] = useState(0);
  const imagesArray = [
    "/assets/Products/E1/e1_2.svg",
    "/assets/Products/E1/e1_3.svg",
    "/assets/Products/E1/e1_1.svg",
    "/assets/Products/E1/e1_4.svg",
    "/assets/Products/E1/e1_8.svg",
  ];
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
          transform: "scale(1.5)",
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

  const swiperRef = useRef(null);

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Change active slide
    }
  };
  return (
    <div className="w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        speed={1000}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        style={{ overflowY: "clip" }}
        onSlideChange={(swiper) => setMiddleSlide(swiper.realIndex)}
      >
        {imagesArray.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                ...getStyle(index),
                transition: "1s",
                width: "18vw",

                height: "50vh",
              }}
              className="flex items-center justify-center text-2xl font-bold"
            >
              <img src={image} alt="laptop image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-5">
        {imagesArray.map((image, index) => {
          return (
            <div
              key={image}
              onClick={() => {
                setSelectedImage(index);
                goToSlide(index + 2);
              }}
            >
              <img
                src={image}
                alt="laptop image"
                className={`w-16 h-16 object-cover border-gray-300 rounded m-3 cursor-pointer ${
                  selectedImage === index ? "border-2" : "border"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

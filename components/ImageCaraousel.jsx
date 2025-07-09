"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function ImageCaraousel({ images }) {
  return (
    <div className="relative bg-blue-600 rounded-2xl overflow-hidden">
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        loop={images.length > 1}
        modules={[Autoplay]}
        pagination={{
          clickable: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={`Slider Image ${index}`}
              className="w-full aspect-auto rounded-2xl object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

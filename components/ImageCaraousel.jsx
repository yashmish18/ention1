"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function ImageCaraousel({ images }) {
  console.log(images);

  return (
    <div className="relative bg-blue-600 rounded-lg">
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        loop={true}
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
              className="w-full aspect-auto rounded-lg object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

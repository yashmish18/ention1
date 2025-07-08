import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useRef } from "react";

const defaultImages = [
  "/assets/landingpage_carsouel/4.svg",
  "/assets/landingpage_carsouel/5.svg",
  "/assets/landingpage_carsouel/6.svg"
];

export default function ProductImageCarouselMobile({ images }) {
  const [middleSlide, setMiddleSlide] = useState(0);
  const swiperRef = useRef(null);
  const imgs = images && images.length ? images : defaultImages;

  return (
    <div className="w-screen block md:hidden" style={{ overflow: 'visible' }}>
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        speed={600}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        style={{ width: '100vw', overflow: 'visible' }}
        onSlideChange={(swiper) => setMiddleSlide(swiper.realIndex)}
      >
        {imgs.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                width: '100vw',
                aspectRatio: '16/9',
                minHeight: '260px',
                height: '260px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'none',
                transform: middleSlide === idx ? 'scale(1.08)' : 'scale(1)',
                transition: 'transform 0.5s, box-shadow 0.5s',
                boxShadow: middleSlide === idx ? '0 8px 32px #01e9fe88' : 'none',
                borderRadius: '0',
              }}
            >
              <img
                src={img}
                alt={`Product ${idx + 1}`}
                style={{ width: '100vw', height: '100%', objectFit: 'cover', background: 'transparent', borderRadius: '0' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4">
        {imgs.map((_, idx) => (
          <span key={idx} className={`w-2 h-2 rounded-full mx-1 ${idx === middleSlide ? 'bg-[#01E9FE]' : 'bg-white/30'}`}></span>
        ))}
      </div>
    </div>
  );
} 
import React, { useCallback, useState } from "react";

export default function IntelCarousel() {
  const [selectedSlide, setSelectedSlide] = useState(0);
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
      </div>
      <div
        onClick={() => setSelectedSlide(selectedSlide === 2 ? null : 2)}
        style={{
          transform: "translateY(3.8rem)",
          ...getSlideUniqueStyle(2),
        }}
        className="front-page-slider"
      >
        <div
          className="background-image-center front-slide-hover"
          style={{
            height:
              selectedSlide === 2 ? "38.75rem" : "clamp(18rem,60vh,32rem)",
            backgroundImage: `url(https://images.pexels.com/photos/4007744/pexels-photo-4007744.jpeg)`,
          }}
        ></div>
      </div>
    </div>
  );
}

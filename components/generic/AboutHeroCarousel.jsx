import React, { useState, useRef, useEffect } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconCircle, IconCircleDot } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    key: 0,
    heading: "Ention Is Not a Brand.",
    subheading: "It's your working companion.",
  },
  {
    key: 1,
    description: (
      <>
        <p className="text-xl md:text-2xl text-slate-800 max-w-2xl mx-auto text-center font-medium">
          Ention is more than a label; it's a philosophy. Inspired by the humble phrase <b>"mention not"</b>, Ention was thoughtfully crafted to represent our core values. Each letter in Ention stands for: <span className="font-bold text-[#007E9E]">Empowering Nations through Technology, Innovation, Opportunity, and New Ideas.</span>
        </p>
      </>
    ),
  },
];

export default function AboutHeroCarousel() {
  const [active, setActive] = useState(0);
  const [headingLeft, setHeadingLeft] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const headingTimeout = useRef();
  const autoScrollTimeout = useRef();

  useEffect(() => {
    if (active === 0) {
      setHeadingLeft(false);
      headingTimeout.current = setTimeout(() => setHeadingLeft(true), 1200);
    }
    return () => clearTimeout(headingTimeout.current);
  }, [active]);

  // Auto-scroll logic
  useEffect(() => {
    if (!isPaused) {
      autoScrollTimeout.current = setTimeout(() => {
        setActive((a) => (a + 1) % slides.length);
      }, 3000);
    }
    return () => clearTimeout(autoScrollTimeout.current);
  }, [active, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const next = () => {
    setActive((a) => (a + 1) % slides.length);
    resetAutoScroll();
  };
  const prev = () => {
    setActive((a) => (a - 1 + slides.length) % slides.length);
    resetAutoScroll();
  };
  const resetAutoScroll = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000); // Resume after 1s
  };

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-white/5">
      {/* Slide content */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none" style={{zIndex:0}} />
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center z-10 px-4 py-24">
        <AnimatePresence mode="wait">
          {active === 0 && (
            <motion.div
              key="slide1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center"
            >
              <motion.div
                initial={{ x: 0, alignItems: "center" }}
                animate={headingLeft ? { x: "-30%", alignItems: "flex-start" } : { x: 0, alignItems: "center" }}
                transition={{ duration: 0.8, type: "spring" }}
                className={`flex flex-col ${headingLeft ? "items-start" : "items-center"} w-full`}
                style={{ maxWidth: 700 }}
              >
                <motion.h1
                  initial={{ textAlign: "center", scale: 1 }}
                  animate={headingLeft ? { textAlign: "left", scale: 1.1 } : { textAlign: "center", scale: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className={`text-4xl md:text-6xl font-extrabold text-slate-900 mb-0 w-full ${headingLeft ? "text-left" : "text-center"}`}
                >
                  Ention Is Not a Brand.
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={headingLeft ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`text-3xl md:text-5xl font-bold text-[#007E9E] mt-3 w-full ${headingLeft ? "text-left" : "text-center"}`}
                  style={{ minHeight: 40 }}
                >
                  It's your working companion.
                </motion.h2>
              </motion.div>
            </motion.div>
          )}
          {active === 1 && (
            <motion.div
              key="slide2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="w-full flex flex-col items-center"
            >
              {slides[1].description}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Carousel controls bottom right */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-6">
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="rounded-full bg-white/80 hover:bg-white shadow p-2 transition disabled:opacity-50"
          disabled={active === 0}
        >
          <IconArrowNarrowLeft size={32} stroke={2} className="text-[#007E9E]" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, idx) =>
            active === idx ? (
              <IconCircleDot key={idx} size={18} className="text-[#007E9E]" />
            ) : (
              <IconCircle key={idx} size={18} className="text-[#007E9E] opacity-60" />
            )
          )}
        </div>
        <button
          aria-label="Next slide"
          onClick={next}
          className="rounded-full bg-white/80 hover:bg-white shadow p-2 transition disabled:opacity-50"
          disabled={active === slides.length - 1}
        >
          <IconArrowNarrowRight size={32} stroke={2} className="text-[#007E9E]" />
        </button>
      </div>
    </section>
  );
}
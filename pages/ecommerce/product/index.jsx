import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Footer from "components/layout/footer";
import Link from "next/link";

// Hero carousel: 5 slides, all with the same background image
const heroSlides = Array(5).fill("/assets/slide-1.jpg");

const categories = [
  { name: "Laptops", image: "/assets/laptop.png" },
  { name: "Accessories", image: "/assets/mouse.png" },
  { name: "Desktops", image: "/assets/market-pc.png" },
  { name: "Monitors", image: "/assets/board.png" },
];

const products = [
  { id: 5, name: "Ention E5 Laptop", price: "₹69,999", image: "/assets/product_/e5/IMG_1122.JPG", type: "business" },
  { id: 4, name: "Ention E4 Laptop", price: "₹59,999", image: "/assets/product_/e4/IMG_1107.JPG", type: "professional" },
  { id: 3, name: "Ention E3 Laptop", price: "₹49,999", image: "/assets/product_/e3/IMG_9931.jpg", type: "business" },
];

// Minimal, modern carousel for the product homepage
const showcaseSlides = [
  {
    key: 0,
    image: require("assets/aboutus_page/1.svg"),
    headline: "Ention E-Series: Power Meets Elegance",
    sub: "Your next laptop, reimagined."
  },
  {
    key: 1,
    image: require("assets/aboutus_page/2.svg"),
    headline: "Empowering Innovation",
    sub: "Built for students, professionals, and businesses."
  },
  {
    key: 2,
    image: require("assets/aboutus_page/3.svg"),
    headline: "Minimal. Modern. Made for You.",
    sub: "Experience the Ention difference."
  }
];

const workbookSeries = [
  {
    key: 'E5',
    name: 'Workbook series E5',
    features: [
      'Made for Everyday Hustlers,',
      'Powerful yet Budget Friendly,',
      'Control at your fingertips,',
      'Intel N95 processor upto 3.4Ghz (6Mb cache, 4 core, 4thread)',
      'Window 11',
      'Display 15.6inch, full HD IPS',
    ],
    bag: 'Laptop bag worth 1500',
    price: '₹' + (Math.floor(Math.random() * 10000) + 40000),
    image: '/assets/product_/e5/IMG_1122.JPG',
  },
  {
    key: 'E4',
    name: 'Workbook series E4',
    features: [
      'Made for techy and Professional',
      'Powerful yet Budget Friendly,',
      'Dual RAM and Dual SSD slots give you the freedom to expand',
      'Intel i7 13th gen processor13620H 24M Cache, up to 4.90 GHz',
      'Window 11',
      'Display 15.6inch, full HD IPS',
    ],
    bag: 'Laptop bag worth 1500',
    price: '₹' + (Math.floor(Math.random() * 10000) + 50000),
    image: '/assets/product_/e4/IMG_1107.JPG',
  },
  {
    key: 'E3',
    name: 'Workbook series E3',
    features: [
      'Made for rough use',
      'dual heating system',
      'With a full-metal body,',
      'Intel i5-13500H has 18 MB of L3 cache 2.6 boost up to 4.7 GHz',
      'Window 11',
      'Display 15.6inch, full HD IPS',
    ],
    bag: 'Laptop bag worth 1500',
    price: '₹' + (Math.floor(Math.random() * 10000) + 30000),
    image: '/assets/product_/e3/IMG_9931.jpg',
  },
];

function HeroCarousel() {
  const [active, setActive] = useState(0);
  const autoScrollTimeout = useRef();

  useEffect(() => {
    autoScrollTimeout.current = setTimeout(() => {
      setActive((a) => (a + 1) % heroSlides.length);
    }, 3500);
    return () => clearTimeout(autoScrollTimeout.current);
  }, [active]);

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#000f29]">
      {/* Slide image */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <img
          src={heroSlides[active]}
          alt="Hero Slide"
          style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#222', display: 'block' }}
          onError={e => { e.target.style.background = '#222'; e.target.src = ''; }}
        />
        <div className="absolute inset-0 bg-black/70 z-0" />
      </div>
      {/* Carousel controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border-2 ${active === i ? 'bg-[#007e9e] border-white' : 'bg-white/30 border-white/50'} transition`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i+1}`}
          />
        ))}
      </div>
    </section>
  );
}

function ProductShowcaseCarousel() {
  const [active, setActive] = useState(0);
  const next = () => setActive((a) => (a + 1) % showcaseSlides.length);
  const prev = () => setActive((a) => (a - 1 + showcaseSlides.length) % showcaseSlides.length);

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-[#f7fafc] overflow-hidden">
      {/* Slide image only, no text, no rounded borders, edge-to-edge */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full mx-auto shadow-2xl overflow-hidden">
          <Image
            src={showcaseSlides[active].image}
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
      {/* Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-6">
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm border border-white/30 shadow-lg p-3 transition-all duration-300"
        >
          <span className="text-white text-2xl">&#8592;</span>
        </button>
        <div className="flex gap-2">
          {showcaseSlides.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full border-2 ${active === idx ? "bg-[#01E9FE] border-white" : "bg-white/30 border-white/40"}`}
              onClick={() => setActive(idx)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
        <button
          aria-label="Next slide"
          onClick={next}
          className="rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm border border-white/30 shadow-lg p-3 transition-all duration-300"
        >
          <span className="text-white text-2xl">&#8594;</span>
        </button>
      </div>
    </section>
  );
}

const CategoryCard = ({ category }) => (
  <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:scale-105 transition border border-[#e5e7eb]">
    <Image src={category.image} alt={category.name} width={80} height={80} className="mb-2 object-contain" />
    <span className="font-semibold text-[#000f29] mt-2">{category.name}</span>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform duration-200 border border-[#e5e7eb]">
    <Image
      src={product.image}
      alt={product.name}
      width={400}
      height={227}
      className="w-full h-56 object-contain rounded-t-xl bg-[#f7fafc]"
    />
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-lg font-semibold mb-2 text-[#000f29]">{product.name}</h3>
      <p className="text-[#007e9e] text-xl font-bold mb-4">{product.price}</p>
      <Link href={`/ecommerce/product/${product.id}`} className="mt-auto bg-[#007e9e] text-white rounded-3xl py-2 px-6 hover:bg-[#01E9FE] hover:text-[#000f29] transition-all text-center">Buy Now</Link>
    </div>
  </div>
);

const PromoBanner = () => (
  <section className="w-full bg-white py-10 flex flex-col items-center justify-center text-center border-t border-b border-[#e5e7eb]">
    <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
      <Image src="/assets/annual-compliance.png" alt="Promo" width={120} height={120} className="rounded-lg" />
      <div>
        <h3 className="text-2xl font-bold text-[#007e9e] mb-2">Special Offer: Free Shipping on Orders Over ₹10,000!</h3>
        <p className="text-lg text-[#000f29]">Limited time only. Shop your favorites now.</p>
      </div>
    </div>
  </section>
);

function WorkbookCard({ series }) {
  // Map series.key to product id
  const idMap = { E5: 5, E4: 4, E3: 3 };
  const productId = idMap[series.key];
  return (
    <div className="border border-black rounded-xl mb-8 bg-white flex flex-col md:flex-row w-full min-h-[320px] overflow-hidden">
      {/* Left: Details */}
      <div className="flex-1 flex flex-col justify-between min-w-[260px] p-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">{series.name}</h2>
          <ul className="list-disc pl-5 mb-2 text-sm">
            {series.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <div className="text-xs mb-2">{series.bag}</div>
        </div>
        {/* Bottom row: 2 columns, buttons grouped */}
        <div className="grid grid-cols-2 gap-0 border-t mt-6 pt-4 items-center text-base font-medium bg-white">
          <div className="text-left">Starting from... <span className="font-bold">{series.price}</span></div>
          <div className="flex justify-end gap-6">
            <Link href={`/ecommerce/product/${productId}`} legacyBehavior>
              <a className="text-black">Learn more</a>
            </Link>
            <button className="text-black">Shop Now</button>
          </div>
        </div>
      </div>
      {/* Right: 3:4 aspect ratio image, always fully visible, centered */}
      <div className="flex-1 flex items-center justify-center bg-white md:max-w-[400px] w-full aspect-[3/4] md:aspect-auto">
        <div className="relative w-full h-0 pb-[133.33%] md:pb-0 md:h-[400px] md:w-[300px] flex items-center justify-center">
          <img 
            src={series.image} 
            alt="Creative Laptop" 
            className="absolute top-0 left-0 w-full h-full object-contain" 
          />
        </div>
      </div>
    </div>
  );
}

export default function ProductLandingPage() {
  const [activeTab, setActiveTab] = useState("workbook");
  const [filter, setFilter] = useState("all");

  const filteredProducts = filter === "all"
    ? products
    : products.filter((p) => p.type === filter);

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      {/* New Product Showcase Carousel */}
      <ProductShowcaseCarousel />
      {/* Headline */}
      <div className="w-full py-8 bg-white border-b border-[#e5e7eb]">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#000f29] text-center">Ention E-Series Laptops</h1>
      </div>

      {/* Workbook & Swapbook Tabs */}
      <section className="max-w-4xl mx-auto py-8 px-4 text-center flex flex-row gap-4 justify-center items-center">
        <button
          onClick={() => setActiveTab("workbook")}
          className={`font-extrabold text-xl md:text-2xl lg:text-3xl flex flex-col items-center justify-center transition py-2 border-b-4 ${activeTab === "workbook" ? "text-black border-[#000]" : "text-[#000] border-transparent"}`}
          style={{ background: "none", outline: "none" }}
        >
          Workbook Series
        </button>
        <button
          onClick={() => setActiveTab("swapbook")}
          className={`font-extrabold text-xl md:text-2xl lg:text-3xl flex flex-col items-center justify-center transition py-2 border-b-4 ${activeTab === "swapbook" ? "text-black border-[#000]" : "text-[#000] border-transparent"}`}
          style={{ background: "none", outline: "none" }}
        >
          Swapbook Series
        </button>
      </section>

      {/* Filter and Tab Content */}
      <section className="max-w-7xl mx-auto py-12 px-2 sm:px-4">
        {activeTab === "workbook" && (
          <>
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button onClick={() => setFilter("all")} className={`px-6 py-2 rounded-3xl font-bold border ${filter === "all" ? "bg-[#007e9e] text-white" : "bg-white text-[#007e9e] border-[#007e9e]"}`}>All</button>
              <button onClick={() => setFilter("student")} className={`px-6 py-2 rounded-3xl font-bold border ${filter === "student" ? "bg-[#007e9e] text-white" : "bg-white text-[#007e9e] border-[#007e9e]"}`}>For Students</button>
              <button onClick={() => setFilter("professional")} className={`px-6 py-2 rounded-3xl font-bold border ${filter === "professional" ? "bg-[#007e9e] text-white" : "bg-white text-[#007e9e] border-[#007e9e]"}`}>For Professionals</button>
              <button onClick={() => setFilter("business")} className={`px-6 py-2 rounded-3xl font-bold border ${filter === "business" ? "bg-[#007e9e] text-white" : "bg-white text-[#007e9e] border-[#007e9e]"}`}>For Businesses</button>
            </div>
            <div className="flex flex-col gap-8">
              {workbookSeries.map((series) => (
                <WorkbookCard key={series.key} series={series} />
              ))}
            </div>
          </>
        )}
        {activeTab === "swapbook" && (
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <h2 className="text-2xl font-bold text-[#000] mb-6 text-center">Swapbook Series</h2>
            <span className="text-2xl font-bold text-[#01E9FE]">Coming Soon.</span>
          </div>
        )}
      </section>

      {/* Promotional Banner and Newsletter Signup only for Home tab */}
      {activeTab === "home" && (
        <>
          <PromoBanner />
          {/* Newsletter Signup */}
          <section className="w-full bg-white py-12 flex flex-col items-center justify-center text-center border-t border-[#e5e7eb]">
            <Image src="/assets/news.png" alt="Newsletter" width={80} height={80} className="mb-4" />
            <h2 className="text-2xl font-bold text-[#000f29] mb-4">Subscribe to Our Newsletter</h2>
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input type="email" placeholder="Enter your email" className="rounded-3xl px-6 py-3 flex-1 outline-none border border-[#007e9e]" />
              <button type="submit" className="bg-[#007e9e] text-white font-bold rounded-3xl px-8 py-3 hover:bg-[#01E9FE] hover:text-[#000f29] transition">Subscribe</button>
            </form>
          </section>
        </>
      )}

      {/* Footer should show below all tab content */}
      <Footer />
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Footer from "../../components/layout/footer";
import AboutHeroCarousel from "../../components/generic/AboutHeroCarousel";

// Hero carousel: 5 slides, all with the same background image
const heroSlides = Array(5).fill("/assets/slide-1.jpg");

const categories = [
  { name: "Laptops", image: "/assets/laptop.png" },
  { name: "Accessories", image: "/assets/mouse.png" },
  { name: "Desktops", image: "/assets/market-pc.png" },
  { name: "Monitors", image: "/assets/board.png" },
];

const products = [
  { id: 1, name: "Ention E1 Laptop", price: "₹29,999", image: "/assets/product/e1/image1.jpg" },
  { id: 2, name: "Ention E2 Laptop", price: "₹39,999", image: "/assets/product/e2/image1.jpg" },
  { id: 3, name: "Ention E3 Laptop", price: "₹49,999", image: "/assets/product/e3/image1.jpg" },
  { id: 4, name: "Ention E4 Laptop", price: "₹59,999", image: "/assets/product/e3/image2.jpg" },
  { id: 5, name: "Ention E5 Laptop", price: "₹69,999", image: "/assets/product/e3/image3.jpg" },
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

const CategoryCard = ({ category }) => (
  <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:scale-105 transition border border-[#e5e7eb]">
    <Image src={category.image} alt={category.name} width={80} height={80} className="mb-2 object-contain" />
    <span className="font-semibold text-[#000f29] mt-2">{category.name}</span>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform duration-200 border border-[#e5e7eb]">
    <Image src={product.image} alt={product.name} width={400} height={192} className="w-full h-48 object-cover" />
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-lg font-semibold mb-2 text-[#000f29]">{product.name}</h3>
      <p className="text-[#007e9e] text-xl font-bold mb-4">{product.price}</p>
      <a href={`/product/${product.id}`} className="mt-auto bg-[#007e9e] text-white rounded-3xl py-2 px-6 hover:bg-[#01E9FE] hover:text-[#000f29] transition-all text-center">Buy Now</a>
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

export default function ProductLandingPage() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="min-h-screen bg-[#fff]">
      {/* Hero Section */}
      <AboutHeroCarousel showText={false} />

      {/* Home, Workbook & Swapbook Tabs */}
      <section className="max-w-4xl mx-auto py-8 px-4 text-center flex flex-col md:flex-row gap-8 justify-center items-center">
        <button
          onClick={() => setActiveTab("home")}
          className={`flex-1 font-extrabold text-xl md:text-2xl lg:text-3xl flex flex-col items-center justify-center transition py-2 border-b-4 ${activeTab === "home" ? "text-black border-[#000]" : "text-[#000] border-transparent"}`}
          style={{ background: "none", outline: "none" }}
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab("workbook")}
          className={`flex-1 font-extrabold text-xl md:text-2xl lg:text-3xl flex flex-col items-center justify-center transition py-2 border-b-4 ${activeTab === "workbook" ? "text-black border-[#000]" : "text-[#000] border-transparent"}`}
          style={{ background: "none", outline: "none" }}
        >
          Workbook Series
        </button>
        <button
          onClick={() => setActiveTab("swapbook")}
          className={`flex-1 font-extrabold text-xl md:text-2xl lg:text-3xl flex flex-col items-center justify-center transition py-2 border-b-4 ${activeTab === "swapbook" ? "text-black border-[#000]" : "text-[#000] border-transparent"}`}
          style={{ background: "none", outline: "none" }}
        >
          Swapbook Series
          
        </button>
      </section>

      {/* Tab Content */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        {activeTab === "home" && (
          <>
            {/* Temporarily commented out Browse by Category section
            <h2 className="text-2xl font-bold text-[#000] mb-6 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
              {categories.map((cat) => <CategoryCard key={cat.name} category={cat} />)}
            </div>
            */}
            <h2 className="text-2xl font-bold text-[#000] mb-6 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        )}
        {activeTab === "workbook" && (
          <>
            <h2 className="text-2xl font-bold text-[#fff] mb-6 text-center">Workbook Series</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        )}
        {activeTab === "swapbook" && (
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <h2 className="text-2xl font-bold text-[#fff] mb-6 text-center">Swapbook Series</h2>
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

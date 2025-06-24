import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "components/layout/footer";
import Header from "components/layout/header";
import { Zoom } from "react-awesome-reveal";
import dynamic from 'next/dynamic';
import gradientbg1 from "assets/gradient-bg1.png";
import ImageCaraousel from "components/ImageCaraousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaShoppingCart } from "react-icons/fa";

// e1
import e1image1 from "assets/product/e1/image1.jpg";
import e1image2 from "assets/product/e1/image2.jpg";
import e1image3 from "assets/product/e1/image3.jpg";
// e2
import e2image1 from "assets/product/e2/image1.jpg";
import e2image2 from "assets/product/e2/image2.jpg";
import e2image3 from "assets/product/e2/image3.jpg";
// e1
import e3image1 from "assets/product/e3/image1.jpg";
import e3image2 from "assets/product/e3/image2.jpg";
import e3image3 from "assets/product/e3/image3.jpg";
import E5Feature from "./features/E5Feature";
import E3Feature from "./features/E3Feature";
import E4Feature from "./features/E4Feature";

const E1Images = [e1image1, e1image2, e1image3];
const E2Images = [e2image1, e2image2, e2image3];
const E3Images = [e3image1, e3image2, e3image3];

const TestCarousel = dynamic(() => import('components/TestCarousel'), { ssr: false });

const allProducts = [
  { id: 1, name: "Ention E1 Laptop", price: 29999, description: "A lightweight, powerful laptop perfect for everyday use. 8GB RAM, 512GB SSD, Intel i5.", image: "/assets/product/e1/image1.jpg", reviews: [ { name: "Amit Kumar", rating: 5, text: "Amazing performance!" }, { name: "Priya Singh", rating: 4, text: "Great value for money." } ] },
  { id: 2, name: "Ention E2 Laptop", price: 39999, description: "Performance meets portability for professionals. 16GB RAM, 1TB SSD, Intel i7.", image: "/assets/product/e2/image1.jpg", reviews: [ { name: "Rahul Verma", rating: 5, text: "Super fast!" } ] },
  { id: 3, name: "Ention E3 Laptop", price: 49999, description: "Ultimate power for creators and gamers. 32GB RAM, 2TB SSD, Intel i9.", image: "/assets/product/e3/image1.jpg", reviews: [ { name: "Sneha Patel", rating: 5, text: "Handles everything!" } ] },
];

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = allProducts.find(p => p.id === Number(id));
  const related = allProducts.filter(p => p.id !== Number(id));

  if (!product) return <div className="min-h-screen flex items-center justify-center text-2xl text-gray-500">Product not found.</div>;

  const getImages = (id) => {
    switch (id) {
      case "E5":
        return E1Images;
      case "E4":
        return E2Images;
      case "E3":
        return E3Images;
      default:
        return [];
    }
  };

  const getFeatureComponent = (id) => {
    switch (id) {
      case "E5":
        return <E5Feature />;
      case "E4":
        return <E4Feature />;
      case "E3":
        return <E3Feature />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f7fafc] py-10 px-4">
      {/* Cart Button Top Right */}
      <div className="max-w-4xl mx-auto flex justify-end mb-4">
        <a href="/cart" className="text-[#007e9e] text-3xl hover:text-[#01E9FE] transition" title="Go to cart">
          <FaShoppingCart />
        </a>
      </div>
      {/* Main Product Section: Image Carousel (left) + Details (right) */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Product Image Carousel Section */}
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
          <div className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-center" style={{ width: 400, height: 400 }}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              style={{ width: '100%', height: '100%' }}
              className="product-swiper"
            >
              {Array(5).fill('/assets/slide-1.jpg').map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`Product Slide ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '1rem', background: '#fff' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* Product Details Section */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[#000f29]">{product.name}</h1>
          <p className="text-2xl text-[#007e9e] font-bold">₹{product.price.toLocaleString()}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          {/* Product Customization Section */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2 text-[#000f29]">Customize your product</h2>
            <div className="flex flex-col gap-2">
              <label className="font-medium">RAM:
                <select className="ml-2 border rounded px-2 py-1">
                  <option>8GB</option>
                  <option>16GB</option>
                  <option>32GB</option>
                </select>
              </label>
              <label className="font-medium">Storage:
                <select className="ml-2 border rounded px-2 py-1">
                  <option>512GB SSD</option>
                  <option>1TB SSD</option>
                  <option>2TB SSD</option>
                </select>
              </label>
              <label className="font-medium">Color:
                <select className="ml-2 border rounded px-2 py-1">
                  <option>Silver</option>
                  <option>Black</option>
                  <option>Blue</option>
                </select>
              </label>
            </div>
          </div>
          <button className="bg-[#007e9e] text-white rounded-3xl py-3 px-8 text-lg font-bold hover:bg-[#01E9FE] hover:text-[#000f29] transition w-fit" onClick={() => alert('Added to cart!')}>Add to Cart</button>
        </div>
      </div>
      {/* Other Product Details Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 mt-8 mb-8">
        <h2 className="text-xl font-bold text-[#000f29] mb-4">Other Product Details</h2>
        <table className="w-full text-left border-collapse">
          <tbody>
            <tr className="border-b"><th className="py-2 pr-4 font-semibold">Brand</th><td className="py-2">Ention</td></tr>
            <tr className="border-b"><th className="py-2 pr-4 font-semibold">Model</th><td className="py-2">E1 Series</td></tr>
            <tr className="border-b"><th className="py-2 pr-4 font-semibold">Processor</th><td className="py-2">Intel i5</td></tr>
            <tr className="border-b"><th className="py-2 pr-4 font-semibold">Display</th><td className="py-2">15.6" Full HD</td></tr>
            <tr className="border-b"><th className="py-2 pr-4 font-semibold">Battery</th><td className="py-2">8 hours</td></tr>
            <tr><th className="py-2 pr-4 font-semibold">Warranty</th><td className="py-2">1 Year Onsite</td></tr>
          </tbody>
        </table>
      </div>
      {/* Reviews Section at the very end */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-[#000f29] mb-6">Reviews</h2>
        <div className="flex flex-col gap-3">
          {product.reviews.map((r, i) => (
            <div key={i} className="bg-[#f7fafc] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-[#007e9e]">{r.name}</span>
                <span className="text-yellow-400">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
              </div>
              <p className="text-[#000f29]">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

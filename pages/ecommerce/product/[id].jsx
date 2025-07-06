import React, { useState } from "react";
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
import { FaShoppingCart, FaBolt, FaCamera, FaBatteryFull, FaMicrochip } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "./index";


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
const E3Images = [
  "/assets/product_/e3/IMG_9931.jpg",
  "/assets/product_/e3/IMG_9945.jpg",
  "/assets/product_/e3/IMG_9944.jpg",
  "/assets/product_/e3/IMG_9943.jpg",
  "/assets/product_/e3/IMG_9939.jpg",
  "/assets/product_/e3/IMG_9928.jpg",
  "/assets/product_/e3/IMG_1102.JPG",
  "/assets/product_/e3/IMG_1101.JPG",
  "/assets/product_/e3/IMG_1097.JPG",
];

const E5Images = [
  "/assets/product_/e5/IMG_1122.JPG",
  "/assets/product_/e5/IMG_9893.jpg",
  "/assets/product_/e5/IMG_9879.jpg",
  "/assets/product_/e5/IMG_9878.jpg",
  "/assets/product_/e5/IMG_9877.jpg",
  "/assets/product_/e5/IMG_9873.jpg",
  "/assets/product_/e5/IMG_9872.jpg",
  "/assets/product_/e5/IMG_9867.jpg",
  "/assets/product_/e5/IMG_9860.jpg",
  "/assets/product_/e5/IMG_1125.JPG",
  "/assets/product_/e5/IMG_1124.JPG",
  "/assets/product_/e5/IMG_1123.JPG",
];

const E4Images = [
  "/assets/product_/e4/IMG_1107.JPG",
  "/assets/product_/e4/IMG_1108.JPG",
  "/assets/product_/e4/IMG_1118.JPG",
  "/assets/product_/e4/IMG_9897.jpg",
  "/assets/product_/e4/IMG_9906.jpg",
  "/assets/product_/e4/IMG_9907.jpg",
  "/assets/product_/e4/IMG_9911.jpg",
  "/assets/product_/e4/IMG_9915.jpg",
  "/assets/product_/e4/IMG_9916.jpg",
  "/assets/product_/e4/IMG_9917.jpg",
  "/assets/product_/e4/IMG_9918.jpg",
  "/assets/product_/e4/IMG_9919.jpg",
];

const E4FeatureImages = [
  "/assets/product_/e4/feature_images/1.png",
  "/assets/product_/e4/feature_images/2.png",
  "/assets/product_/e4/feature_images/3.png",
  "/assets/product_/e4/feature_images/4.png",
  "/assets/product_/e4/feature_images/5.png",
  "/assets/product_/e4/feature_images/6.png",
  "/assets/product_/e4/feature_images/7.png",
  "/assets/product_/e4/feature_images/8.png",
];

const E5FeatureImages = [
  "/assets/product_/e5/feature_images/1.png",
  "/assets/product_/e5/feature_images/Copy of Copy of 28,000 (1).png",
  "/assets/product_/e5/feature_images/Copy of Copy of 28,000 (2).png",
  "/assets/product_/e5/feature_images/copy uncut (4).png",
  "/assets/product_/e5/feature_images/copy uncut (5).png",
];

const TestCarousel = dynamic(() => import('components/TestCarousel'), { ssr: false });

const allProducts = [
  { id: 5, name: "Ention E5 Laptop", price: 69999, description: "Ultimate business powerhouse. 64GB RAM, 4TB SSD, Intel i9.", image: "/assets/product/e3/image3.jpg", reviews: [ { name: "Business User", rating: 5, text: "Handles all my business needs!" } ] },
  { id: 4, name: "Ention E4 Laptop", price: 59999, description: "Professional performance for demanding tasks. 32GB RAM, 2TB SSD, Intel i7.", image: "/assets/product/e3/image2.jpg", reviews: [ { name: "Pro User", rating: 5, text: "Perfect for my workflow!" } ] },
  { id: 3, name: "Ention E3 Laptop", price: 49999, description: "High performance for creators and gamers. 16GB RAM, 1TB SSD, Intel i5.", image: "/assets/product/e3/image1.jpg", reviews: [ { name: "Creator", rating: 5, text: "Great for design and gaming!" } ] },
];

const productSpecs = {
  5: {
    model: 'E5 Series',
    processor: 'Intel i9',
    display: '17" 4K UHD',
    battery: '12 hours',
    warranty: '3 Years Onsite',
    ramOptions: ['8GB', '16GB', '32GB'],
    storageOptions: ['512GB SSD', '1TB SSD'],
    colorOptions: ['Silver', 'Black'],
  },
  4: {
    model: 'E4 Series',
    processor: 'Intel i7',
    display: '15.6" QHD',
    battery: '10 hours',
    warranty: '2 Years Onsite',
    ramOptions: ['8GB', '16GB', '32GB'],
    storageOptions: ['512GB SSD', '1TB SSD'],
    colorOptions: ['Silver', 'Black', 'Blue'],
  },
  3: {
    model: 'E3 Series',
    processor: 'Intel i5',
    display: '15.6" Full HD',
    battery: '8 hours',
    warranty: '1 Year Onsite',
    ramOptions: ['8GB', '16GB', '32GB'],
    storageOptions: ['512GB SSD', '1TB SSD'],
    colorOptions: ['Silver', 'Blue'],
  },
};

// Tab navigation for scroll-to-section
const scrollTabs = [
  { key: 'overview', label: 'Overview' },
  { key: 'tech', label: 'Tech Specs' },
  { key: 'video', label: 'Video' },
  { key: 'features', label: 'Features & Design' },
  { key: 'reviews', label: 'Customer review' },
];

const productImages = [
  "/assets/product/E1/unsplash_LlVwrX92xIQ.png",
  "/assets/product/E1/pc-girl.png",
  "/assets/product/E1/light-pc.jpg",
  "/assets/product/E1/win11.png",
  "/assets/product/E1/intel.png",
  "/assets/product/E1/full-hd.png",
];

const ramOptions = ["8GB", "16GB"];
const ssdOptions = ["512GB", "1TB"];
const warrantyOptions = ["18 Months (Default)", "+6 Months", "+1 Year"];

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const product = allProducts.find(p => p.id === Number(id));
  const related = allProducts.filter(p => p.id !== Number(id));
  const specs = productSpecs[product.id];

  const [currentImage, setCurrentImage] = useState(0);
  const [selectedRam, setSelectedRam] = useState(ramOptions[0]);
  const [selectedSSD, setSelectedSSD] = useState(ssdOptions[0]);
  const [selectedWarranty, setSelectedWarranty] = useState(warrantyOptions[0]);
  // Coupon state
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [offerPrice, setOfferPrice] = useState(null);

  const originalPrice = 28000;
  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SAVE10") {
      setOfferPrice(Math.round(originalPrice * 0.9));
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponApplied(false);
      setOfferPrice(null);
      setCouponError("Invalid coupon code");
    }
  };

  const changeImage = (dir) => {
    setCurrentImage((prev) => {
      const images = getImages(id);
      return (prev + dir + images.length) % images.length;
    });
  };

  const setImage = (idx) => setCurrentImage(idx);

  if (!product) return <div className="min-h-screen flex items-center justify-center text-2xl text-gray-500">Product not found.</div>;

  const getImages = (id) => {
    switch (id) {
      case "5":
        return E5Images;
      case "4":
        return E4Images;
      case "3":
        return E3Images;
      default:
        return [];
    }
  };

  const getFeatureComponent = (id) => {
    switch (id) {
      case "5":
        return <E5Feature />;
      case "4":
        return <E4Feature />;
      case "3":
        return <E3Feature />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] text-white pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 py-12 px-4">
        {/* Left: Carousel */}
        <div className="flex-1 flex flex-col items-end ml-auto">
          <div className="relative w-full mx-auto mt-24 flex items-center justify-center w-full">
            {/* Left Arrow */}
            <button
              className="absolute left-[-32px] top-1/2 -translate-y-1/2 text-3xl text-white hover:text-[#0FAFCA] z-10 bg-transparent border-none shadow-none p-0 m-0"
              onClick={() => changeImage(-1)}
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <div className="flex items-center justify-center w-full" style={{ width: '100%', height: 'auto' }}>
              <Image
                src={getImages(id)[currentImage]}
                alt={`Product Image ${currentImage + 1}`}
                width={1200}
                height={800}
                className="object-contain w-full h-auto"
                priority
              />
              <div className="absolute bottom-3 right-3 bg-[#007e9e]/80 text-xs px-3 py-1 rounded-full border border-white">
                {currentImage + 1} / {getImages(id).length}
              </div>
            </div>
            {/* Right Arrow */}
            <button
              className="absolute right-[-32px] top-1/2 -translate-y-1/2 text-3xl text-white hover:text-[#0FAFCA] z-10 bg-transparent border-none shadow-none p-0 m-0"
              onClick={() => changeImage(1)}
              aria-label="Next image"
            >
              &#8250;
            </button>
          </div>
          <div className="flex flex-wrap gap-2 justify-center items-center pt-4 w-full">
            {getImages(id).map((img, idx) => (
              <div
                key={img}
                className={`${idx === currentImage ? "opacity-100" : "opacity-70"} rounded bg-[#133B5C] cursor-pointer transition-all`}
                onClick={() => setImage(idx)}
                style={{ border: '1px solid transparent', boxShadow: '0 0 0 0.5px #fff' }}
              >
                <Image src={img} alt="Thumbnail" width={60} height={40} className="object-cover w-12 h-9" />
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-[2px] bg-white/20 mx-8 rounded"></div>
        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col gap-6 bg-transparent p-0 items-start">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">ENTION WORKBOOK SERIES E5</h1>
          <div className="flex flex-nowrap justify-between items-center gap-x-3 w-full mb-2">
            <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words">Made for Everyday Achievers</span>
            <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words">High Performance, Budget Friendly</span>
            <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words">Full Control at Your Fingertips</span>
          </div>
          {/* Customization */}
          <div className="mt-4">
            <h3 className="font-bold mb-2">Customize Your Laptop</h3>
            <div className="flex flex-col gap-2 mb-3">
              <div className="flex flex-row items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="font-semibold mr-1">RAM:</span>
                  {ramOptions.map(opt => (
                    <button
                      key={opt}
                      className={`px-4 py-2 rounded bg-[#133B5C] font-semibold ${selectedRam === opt ? "bg-[#007e9e] text-white" : "text-[#0FAFCA] hover:bg-[#0FAFCA]/20"}`}
                      onClick={() => setSelectedRam(opt)}
                      style={{ borderWidth: '0.5px', borderColor: '#fff', borderStyle: 'solid' }}
                    >{opt}</button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold mr-1">SSD:</span>
                  {ssdOptions.map(opt => (
                    <button
                      key={opt}
                      className={`px-4 py-2 rounded bg-[#133B5C] font-semibold ${selectedSSD === opt ? "bg-[#007e9e] text-white" : "text-[#0FAFCA] hover:bg-[#0FAFCA]/20"}`}
                      onClick={() => setSelectedSSD(opt)}
                      style={{ borderWidth: '0.5px', borderColor: '#fff', borderStyle: 'solid' }}
                    >{opt}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Warranty */}
          <div className="mt-2">
            <h3 className="font-bold mb-2">Warranty Options</h3>
            <div className="flex gap-2 flex-wrap">
              {warrantyOptions.map(opt => (
                <button
                  key={opt}
                  className={`px-4 py-2 rounded bg-[#133B5C] font-semibold ${selectedWarranty === opt ? "bg-[#007e9e] text-white" : "text-[#0FAFCA] hover:bg-[#0FAFCA]/20"}`}
                  onClick={() => setSelectedWarranty(opt)}
                  style={{ borderWidth: '0.5px', borderColor: '#fff', borderStyle: 'solid' }}
                >{opt}</button>
              ))}
            </div>
          </div>
          {/* Price & CTA */}
          <div className="mt-8 flex flex-col items-start gap-3 w-full">
            <div className="flex flex-row items-end gap-4">
              {couponApplied && offerPrice ? (
                <>
                  <span className="text-3xl font-extrabold text-green-400 drop-shadow-lg">Offer Price: ₹{offerPrice.toLocaleString()}</span>
                  <span className="text-2xl line-through text-gray-300 opacity-70">₹{originalPrice.toLocaleString()}</span>
                </>
              ) : (
                <>
                  <span className="text-4xl font-extrabold text-white drop-shadow-lg">₹{originalPrice.toLocaleString()}</span>
                  <span className="text-2xl line-through text-gray-300 opacity-70">₹35,000</span>
                </>
              )}
            </div>
            <button className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold px-8 py-2 rounded-2xl text-lg shadow-lg transition">Buy Now</button>
            {/* Coupon Section */}
            <div className="mt-4 w-full max-w-xs">
              <label className="block text-white font-semibold mb-1">Have a coupon?</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  className="px-3 py-2 rounded bg-white/80 text-black w-full focus:outline-none"
                  placeholder="Enter coupon code"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold px-4 py-2 rounded"
                >Apply</button>
              </div>
              {couponError && <div className="text-red-400 text-sm mt-1">{couponError}</div>}
              {couponApplied && offerPrice && (
                <div className="text-green-400 text-sm mt-1">Coupon applied! You saved ₹{(originalPrice - offerPrice).toLocaleString()}.</div>
              )}
            </div>
          </div>
          {/* Included */}
          <div className="mt-6 bg-[#007e9e]/80 border border-[#0FAFCA] px-6 py-4 rounded-xl text-base font-semibold">
            Included: Windows 11 Pro, Office 365, Laptop Bag Pack
          </div>
        </div>
      </div>
      {/* Tech Specs */}
      <section className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
        <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-[#0FAFCA] p-6 overflow-x-auto shadow-xl">
          <table className="w-full text-white text-base border-separate border-spacing-0">
            <tbody>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Colour</td>
                <td className="border border-white/30 px-4 py-2">sliver</td>
                <td className="font-bold border border-white/30 px-4 py-2">Power</td>
                <td className="border border-white/30 px-4 py-2">DC 12V</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Display</td>
                <td className="border border-white/30 px-4 py-2">15.6inch, Full HD 1920*1080 IPS 16:9 ratio</td>
                <td className="font-bold border border-white/30 px-4 py-2">Battery</td>
                <td className="border border-white/30 px-4 py-2">5000mah</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Processor</td>
                <td className="border border-white/30 px-4 py-2">intel N95 up to 3.4GHz with Turbo boost</td>
                <td className="font-bold border border-white/30 px-4 py-2">RJ45</td>
                <td className="border border-white/30 px-4 py-2">yes</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Core, threads, Cache</td>
                <td className="border border-white/30 px-4 py-2">4core, 4 threads, 6MB cache</td>
                <td className="font-bold border border-white/30 px-4 py-2">Memory card reader</td>
                <td className="border border-white/30 px-4 py-2">yes, SD card upto 128Gb</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Graphic</td>
                <td className="border border-white/30 px-4 py-2">intel UHD graphics 1.20Ghz</td>
                <td className="font-bold border border-white/30 px-4 py-2">Earphone port</td>
                <td className="border border-white/30 px-4 py-2">3.5mm standard headphone jack</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Fingerprint reader</td>
                <td className="border border-white/30 px-4 py-2">yes, on touch pad</td>
                <td className="font-bold border border-white/30 px-4 py-2">Mic</td>
                <td className="border border-white/30 px-4 py-2">Built in Analog microphone</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Operating system</td>
                <td className="border border-white/30 px-4 py-2">window 11</td>
                <td className="font-bold border border-white/30 px-4 py-2">Speaker</td>
                <td className="border border-white/30 px-4 py-2">front facing Built in stereo speaker 1.0W*2</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">MS office</td>
                <td className="border border-white/30 px-4 py-2">yes, 365</td>
                <td className="font-bold border border-white/30 px-4 py-2">Webcam</td>
                <td className="border border-white/30 px-4 py-2">2.0Mega+DMIC, with Privcay sutter</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">USB</td>
                <td className="border border-white/30 px-4 py-2">3 port of USB 3.0, type C(Data+DP)</td>
                <td className="font-bold border border-white/30 px-4 py-2">Touchpad</td>
                <td className="border border-white/30 px-4 py-2">Yes, extra large</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">HDMI</td>
                <td className="border border-white/30 px-4 py-2">HDMI A type</td>
                <td className="font-bold border border-white/30 px-4 py-2">Keyboard</td>
                <td className="border border-white/30 px-4 py-2">US, Round with Backlight & Square with Backlight</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Product Dimension and weight</td>
                <td className="border border-white/30 px-4 py-2">357.4*228*19 mm, 1.68kg</td>
                <td className="font-bold border border-white/30 px-4 py-2">Included in Box</td>
                <td className="border border-white/30 px-4 py-2">Laptop, Power Cord, Adapter, User Manual</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Covered in warranty</td>
                <td className="border border-white/30 px-4 py-2">Manufacturing Defects, Physical Damage not covered.</td>
                <td className="font-bold border border-white/30 px-4 py-2">Manufactured by</td>
                <td className="border border-white/30 px-4 py-2">Ention, Made in India.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Video Section: Product Video */}
      <section className="max-w-6xl mx-auto mt-12 px-4">
        <div className="flex justify-center items-center w-full">
          <video
            src="/assets/product_/e5/feature_images/e5_video.mp4"
            controls
            className="rounded-xl shadow-lg w-full max-w-3xl bg-black"
            style={{ minHeight: '320px' }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      {/* Features & Design */}
      <section className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Features & Design</h2>
        {/* Row 1: Introduction Feature Row */}
        <div className="flex flex-col lg:flex-row gap-0 mb-8 items-stretch">
          <div className="flex-1 bg-[#18408b] text-white text-lg md:text-xl lg:text-[1.35rem] px-6 md:px-8 py-6 lg:py-8 flex flex-col justify-center rounded-l-xl rounded-r-none shadow-lg h-[300px] mt-24">
            <p className="mb-4">
              Experience high-quality computing without compromise. The Ention Workbook Series Laptop blends power, design, and affordability to deliver outstanding performance on a smart budget.
            </p>
            <p>
              Powered by the Intel N95 processor with a maximum turbo frequency of up to 3.4GHz and 6MB cache, it's built to keep up with your everyday tasks seamlessly.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center bg-white/10 rounded-l-none rounded-r-xl shadow-lg h-[500px]">
            <img 
              src="/assets/product_/e5/feature_images/1.png" 
              alt="Your Working Companion" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/* Row 2: Joined Image and Card Row */}
        <div className="flex flex-row w-full md:w-auto items-stretch mt-[-170px]">
          {/* Image Card - no margin, no padding, no background */}
          <div
            className="mt-10 rounded-r-none shadow-lg overflow-hidden"
            style={{
              width: '620px',
              height: '420px',
              minWidth: '320px',
              minHeight: '220px',
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            <Image
              src="/assets/product_/e5/feature_images/Copy of Copy of 28,000 (1).png"
              alt="Feature 1"
              width={520}
              height={420}
              className="object-cover"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          {/* Right Card - full control */}
          <div className="bg-[#18408b] mt-[145px] rounded-l-none rounded-r-xl p-8 text-white max-w-2xl w-full md:w-1/2 flex items-center shadow-lg"
               style={{ height: '315px' }}>
            <div>
              <div className="text-lg font-bold mb-2">Control at Your Fingertips</div>
              <div>Experience a smarter way to interact with your device. Easily manage volume and brightness with intuitive finger gestures—no buttons, no hassle.</div>
            </div>
          </div>
        </div>
        {/* Row 3: Centered Text Row */}
        <div className="w-full bg-[#18408b] rounded-xl p-8 text-center text-white text-3xl font-normal flex flex-col items-center justify-center mt-8">
          Made for Power Users & Everyday Hustlers<br />A compact companion that blends performance with mobility, ideal for students and professionals on the go.
        </div>
        {/* Row 4: Image Left, Text and Image Right Row */}
        <div className="flex flex-col mt-4 md:flex-row bg-[#18408b] rounded-xl overflow-hidden items-center" style={{ height: '320px' }}>
          <div
            className="flex-shrink-0"
            style={{ flexBasis: '60%', width: '60%', height: '100%' }}
          >
            <Image
              src="/assets/product_/e5/feature_images/copy uncut (4).png"
              alt="Laptop Open"
              width={400}
              height={320}
              className="object-cover w-full h-full"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="flex flex-col justify-start p-8 relative" style={{ height: '100%', width: '40%' }}>
            <Image src={E5FeatureImages[2]} alt="Camera Privacy Shutter" width={210} height={90} className="object-contain absolute top-0 right-0" style={{margin:0,padding:0}} />
            <div style={{marginTop: '200px'}}>Enjoy smooth performance at an affordable price, making high-quality computing accessible to everyone.</div>
          </div>
        </div>
        {/* Row 5: Ports and Audio Row (the one you want to replace) */}
        <div className="w-full bg-[#18408b] rounded-xl p-8 text-center mt-8">
          <div className="text-2xl md:text-3xl font-bold text-white mb-2">Stunning 15.6–Inch Colour–Rich Display</div>
          <div className="text-base md:text-lg text-white font-normal">Enjoy sharp visuals and vibrant colours on a compact 15.6inch full HD IPS screen,<br />perfect for immersive viewing and clear presentations.</div>
        </div>
        {/* Row 6: Ports and Slots Image Row */}
        <div className="w-full bg-[#18408b] rounded-xl flex flex-row items-center justify-start mt-8 relative" style={{height: '600px'}}>
          <div style={{width: '90%', height: '100%'}} className="h-full">
            <Image
              src="/assets/product_/e5/feature_images/copy uncut (5).png"
              alt="Ports and slots"
              width={1200}
              height={600}
              className="object-contain w-full h-full"
              style={{height: '100%', width: '100%', objectFit: 'cover'}}
            />
          </div>
          <div className="absolute right-0 top-0 h-full flex items-center pr-12">
            <span className="text-white text-3xl font-bold" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Ports and slots</span>
          </div>
        </div>
        {/* Row 7: TouchPad Feature Image Row */}
        <div className="w-full bg-[#18408b] flex flex-row items-center justify-between mt-8" style={{height: '400px'}}>
          <div style={{width: '50%', height: '100%'}} className="flex flex-col items-center justify-center text-white text-center gap-6">
            <div className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg" style={{textShadow: '0 2px 8px #0008'}}>Windows 11 Pro</div>
            <div className="text-2xl md:text-3xl font-semibold mb-4 drop-shadow" style={{textShadow: '0 2px 8px #0008'}}>Do the Great thingh</div>
            <div className="mt-4">
              <span className="text-2xl md:text-3xl font-bold drop-shadow" style={{textShadow: '0 2px 8px #0008'}}>5000mAh Longer Battery</span>
            </div>
          </div>
          <div style={{width: '50%', height: '100%'}}>
            <Image
              src="/assets/product_/e5/feature_images/Copy of Copy of 28,000 (1).png"
              alt="Large TouchPad Feature"
              width={800}
              height={400}
              className="object-cover w-full h-full"
              style={{height: '100%', width: '100%', objectFit: 'cover'}}
            />
          </div>
        </div>
        {/* Row 8: Immersive Audio Feature Row */}
        <div className="w-full bg-[#18408b] flex flex-row items-center justify-between mt-8" style={{height: '400px'}}>
          <div style={{width: '50%', height: '100%'}}>
            <Image
              src="/assets/product_/e5/feature_images/IMG_99.png"
              alt="Immersive Audio Feature"
              width={800}
              height={900}
              className="object-cover w-full h-full"
              style={{height: '100%', width: '100%', objectFit: 'cover'}}
            />
          </div>
          <div style={{width: '50%', height: '100%'}} className="flex flex-col items-center justify-center text-white text-center p-8">
            <div className="text-2xl md:text-3xl font-bold mb-4">Immersive Audio with Front-Facing Speakers</div>
            <div className="text-base md:text-lg font-normal">Experience crystal–clear sound that's directed towards you — not away.</div>
          </div>
        </div>
        {/* Row 6: Product Compliance Certification Row */}
        <div className="w-full bg-[#007e9e]/80 border border-[#0FAFCA] px-6 py-8 rounded-xl text-center mt-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Product compliance certification</h2>
          <div className="text-lg">
            Ention ensures all its products comply with Indian regulatory standards. Devices are certified under BIS CRS for electrical safety and WPC–ETA for wireless communication compliance. Ention also follows global benchmarks for product safety, electromagnetic compatibility, ergonomics, and environmental responsibility. Every product is developed through certified processes to guarantee quality, legal distribution, and user safety.
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '5' } },
      { params: { id: '4' } },
      { params: { id: '3' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: {} };
}

// AddReviewSection component
function AddReviewSection({ product }) {
  const [reviews, setReviews] = React.useState([]);
  const [name, setName] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [text, setText] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [images, setImages] = React.useState([]);
  const [videos, setVideos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // Fetch reviews from database
  React.useEffect(() => {
    fetchReviews();
  }, [product.id]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`/api/reviews?productId=${product.id}`);
      const data = await response.json();
      if (data.success) {
        setReviews(data.reviews);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };
  const handleVideoChange = (e) => {
    setVideos(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          rating,
          text,
          productId: product.id,
          images: images.map(img => img.name), // Just store file names for now
          videos: videos.map(vid => vid.name), // Just store file names for now
        }),
      });

      const data = await response.json();
      if (data.success) {
        setReviews([data.review, ...reviews]);
        setName("");
        setRating(5);
        setText("");
        setImages([]);
        setVideos([]);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 rounded-lg p-4 flex flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded px-3 py-2 flex-1"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <textarea
          placeholder="Write your review..."
          className="border rounded px-3 py-2 min-h-[80px]"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <div className="flex flex-col md:flex-row gap-4">
          <label className="flex flex-col gap-1 text-sm font-medium">
            Add Photo(s):
            <input type="file" accept="image/*" multiple onChange={handleImageChange} />
          </label>
          <label className="flex flex-col gap-1 text-sm font-medium">
            Add Video(s):
            <input type="file" accept="video/*" multiple onChange={handleVideoChange} />
          </label>
        </div>
        <button
          type="submit"
          className="bg-[#007e9e] text-white rounded px-6 py-2 font-semibold hover:bg-[#01E9FE] hover:text-[#000f29] transition w-fit"
        >Submit Review</button>
        {submitted && <div className="text-green-600 font-semibold">Thank you for your review!</div>}
      </form>
      <div className="flex flex-col gap-4">
        {loading ? (
          <div className="text-gray-500">Loading reviews...</div>
        ) : reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="border rounded-lg p-4 bg-gray-50">
              <div className="font-bold text-[#007e9e]">{review.name}</div>
              <div className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
              <div className="text-gray-700 mt-2">{review.text}</div>
              <div className="text-xs text-gray-500 mt-2">
                {new Date(review.createdAt).toLocaleDateString()}
              </div>
              {/* Show images if any */}
              {review.images && review.images.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {review.images.map((img, i) => (
                    <div key={i} className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">
                      {img}
                    </div>
                  ))}
                </div>
              )}
              {/* Show videos if any */}
              {review.videos && review.videos.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {review.videos.map((vid, i) => (
                    <div key={i} className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">
                      {vid}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-gray-500">No reviews yet.</div>
        )}
      </div>
    </>
  );
}

// StarRating component for review form
function StarRating({ rating, setRating }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(star => (
        <button
          type="button"
          key={star}
          onClick={() => setRating(star)}
          className="focus:outline-none"
          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
        >
          <span className={star <= rating ? 'text-yellow-400 text-2xl' : 'text-gray-300 text-2xl'}>
            ★
          </span>
        </button>
      ))}
    </div>
  );
}

function FeatureBentoGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Row 1: Merged Text + Image Card */}
      <div className="bento-card col-span-2 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#e0f7fa] to-[#fff] p-8 shadow-xl border border-[#b2ebf2]">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h3 className="font-extrabold text-2xl text-[#007e9e] mb-3 leading-tight">Experience high-quality computing<br className='hidden md:block'/> without compromise.</h3>
          <p className="text-base md:text-lg text-gray-700 font-medium">
            The Ention Workbook Series Laptop blends <span className="font-semibold text-[#007e9e]">power</span>, <span className="font-semibold text-[#007e9e]">design</span>, and <span className="font-semibold text-[#007e9e]">affordability</span> to deliver outstanding performance on a smart budget.<br /><br />
            <span className="font-bold text-[#0d223a]">Powered by the Intel N95 processor</span> with a maximum turbo frequency of up to <span className="font-bold">3.4GHz</span> and <span className="font-bold">6MB cache</span>, it's built to keep up with your everyday tasks seamlessly.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
          <div className="relative w-full flex justify-center md:justify-end">
            <Image 
              src="/assets/product_/e5/feature_images/1.png" 
              alt="Ention E5" 
              width={420} 
              height={260} 
              className="object-contain drop-shadow-xl -mt-8 -mb-8 md:-mt-12 md:-mb-12 md:-mr-12" 
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
      </div>
      {/* Row 2: Merged Image + Text Card */}
      <div className="bento-card col-span-2 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#f3e5f5] to-[#fff] shadow-xl border border-[#ce93d8] p-8">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center md:justify-start">
          <div className="relative w-full flex justify-center md:justify-start">
            <Image 
              src={E5FeatureImages[1]} 
              alt="Control at Your Fingertips" 
              width={350} 
              height={220} 
              className="object-contain drop-shadow-xl -mt-8 -mb-8 md:-mt-12 md:-mb-12 md:-ml-12" 
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-start mt-6 md:mt-0 md:ml-8">
          <h3 className="font-extrabold text-2xl text-[#7b1fa2] mb-3 leading-tight">Control at Your Fingertips</h3>
          <p className="text-base md:text-lg text-gray-700 font-medium">
            Experience a smarter way to interact with your device. Easily manage <span className="font-bold text-[#7b1fa2]">volume</span> and <span className="font-bold text-[#7b1fa2]">brightness</span> with intuitive <span className="font-bold text-[#7b1fa2]">finger gestures</span>—no buttons, no hassle.
          </p>
        </div>
      </div>
      {/* Row 3: Merged Image + Text Card */}
      <div className="bento-card col-span-2 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#fffde7] to-[#fff] shadow-xl border border-[#fff9c4] p-8">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-start mb-6 md:mb-0 md:mr-8">
          <h3 className="font-extrabold text-2xl text-[#fbc02d] mb-3 leading-tight">Made for Power Users & Everyday Hustlers</h3>
          <p className="text-base md:text-lg text-gray-700 font-medium">
            A compact companion that blends <span className="font-semibold text-[#fbc02d]">performance</span> with <span className="font-semibold text-[#fbc02d]">mobility</span>, ideal for students and professionals on the go.
          </p>
          <p className="mt-2 text-base md:text-lg text-gray-700 font-medium">
            Enjoy <span className="font-bold text-[#fbc02d]">smooth performance</span> at an <span className="font-bold text-[#fbc02d]">affordable price</span>, making high-quality computing accessible to everyone.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center md:justify-end">
          <div className="relative w-full flex justify-center md:justify-end">
            <Image 
              src={E5FeatureImages[2]} 
              alt="Powerful Yet Budget-Friendly" 
              width={350} 
              height={220} 
              className="object-contain drop-shadow-xl -mt-8 -mb-8 md:-mt-12 md:-mb-12 md:-mr-12" 
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
      </div>
      {/* Row 4: Merged Image + Stacked Features Card (Bento Style) */}
      <div className="bento-card col-span-2 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#e3f2fd] to-[#fff] shadow-xl border border-[#90caf9] p-8">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center md:justify-start mb-6 md:mb-0">
          <div className="relative w-full flex justify-center md:justify-start">
            <Image 
              src={E5FeatureImages[3]} 
              alt="Ention Workbook Series" 
              width={350} 
              height={220} 
              className="object-contain drop-shadow-xl -mt-8 -mb-8 md:-mt-12 md:-mb-12 md:-ml-12" 
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
        {/* Stacked Features Section */}
        <div className="flex-1 flex flex-col justify-center md:ml-8 gap-4">
          <div>
            <span className="text-[#1976d2] text-lg font-semibold mb-2 block">Camera Privacy Shutter</span>
            <img src="/assets/product_/e4/IMG_1108.JPG" alt="Camera Privacy Shutter" className="object-contain w-full max-w-[220px] h-[80px] md:h-[100px] mb-2" />
          </div>
          <span className="text-[#1976d2] text-base md:text-lg font-medium block">
            Enjoy smooth performance at an affordable price, making high-quality computing accessible to everyone.
          </span>
        </div>
      </div>
      {/* Row 5: Windows, Battery, TouchPad Feature Row (Bento Style) */}
      <div className="bento-card col-span-2 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#e3f2fd] to-[#fff] shadow-xl border border-[#90caf9] p-8 gap-8" style={{ paddingBottom: '2rem' }}>
        {/* Left: Merged Feature Card with Highlighted Text */}
        <div className="flex-1 flex flex-col justify-center gap-6 min-w-[220px]">
          <div className="p-0 text-[#1976d2] text-lg md:text-xl font-medium flex flex-col items-start w-full gap-6">
            <div>
              <span className="font-extrabold text-2xl md:text-3xl text-[#1976d2]">Windows 11 Pro</span><br/>
              <span className="text-[#1976d2]">Do the Great thingh</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              {/* Battery Icon SVG */}
              <svg width="32" height="20" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="8" width="40" height="16" rx="3" fill="#0ff" stroke="#1976d2" strokeWidth="2"/><rect x="42" y="13" width="4" height="6" rx="1" fill="#1976d2"/></svg>
              <span className="text-[#1976d2] font-semibold">5000Mah Longer Battery</span>
            </div>
          </div>
        </div>
        {/* Right: Offset Image */}
        <div className="flex-1 flex items-center justify-center md:justify-end w-full">
          <div className="relative w-full flex justify-center md:justify-end">
            <img src="/assets/market-pc.png" alt="Laptop" className="object-contain w-full max-w-2xl h-auto -mt-8 -mb-8 md:-mt-12 md:-mb-12 md:-mr-12" style={{ zIndex: 2 }} />
          </div>
        </div>
      </div>
      {/* Row 6: Immersive Audio Feature Row (Bento Style) */}
      <div className="bento-card col-span-2 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#e3f2fd] to-[#fff] shadow-xl border border-[#90caf9] p-8 gap-8">
        {/* Left: Offset Image */}
        <div className="flex-1 flex items-center justify-center md:justify-start w-full">
          <div className="relative w-full flex justify-center md:justify-start">
            <img src="/assets/market-pc.png" alt="Immersive Audio" className="object-contain w-full max-w-2xl h-auto -mt-8 -mb-8 md:-mt-12 md:-mb-12 md:-ml-12" style={{ zIndex: 2 }} />
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start w-full">
          <span className="text-[#1976d2] text-2xl font-extrabold mb-2">Immersive Audio with Front-Facing Speakers</span>
          <span className="text-[#1976d2] text-base md:text-lg font-medium text-left">
            Experience crystal clear sound that's directed towards you, not away.
          </span>
        </div>
      </div>
      {/* Row 7: Product Compliance Certification (Bento Style) */}
      <div className="bento-card col-span-2 w-full bg-gradient-to-br from-[#e3f2fd] to-[#fff] shadow-xl border border-[#90caf9] py-12 px-4 flex flex-col items-center justify-center">
        <h2 className="text-[#1976d2] text-2xl font-extrabold text-center mb-6">Product compliance certification</h2>
        <p className="text-[#1976d2] text-base md:text-lg font-medium text-center max-w-5xl">
          Ention ensures all its products comply with Indian regulatory standards. Devices are certified under BIS CRS for electrical safety and WPC–ETA for wireless communication compliance. Ention also follows global benchmarks for product safety, electromagnetic compatibility, ergonomics, and environmental responsibility. Every product is developed through certified processes to guarantee quality, legal distribution, and user safety.
        </p>
      </div>
    </section>
  );
}

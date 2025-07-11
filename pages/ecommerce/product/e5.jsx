"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "components/layout/footer";
import Header from "components/layout/header";
import { Zoom } from "react-awesome-reveal";
import dynamic from 'next/dynamic';
import gradientbg1 from "/public/assets/gradient-bg1.png";
import ImageCaraousel from "components/ImageCaraousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaShoppingCart, FaBolt, FaCamera, FaBatteryFull, FaMicrochip } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "./index";

const E5Images = [
  "/assets/product_/e5/1.webp",
  "/assets/product_/e5/2.webp",
  "/assets/product_/e5/3.webp",
  "/assets/product_/e5/4.webp",
  "/assets/product_/e5/5.webp",
  "/assets/product_/e5/6.webp",
  "/assets/product_/e5/7.webp",
  "/assets/product_/e5/8.webp",
  "/assets/product_/e5/9.webp",
  "/assets/product_/e5/10.webp",
  "/assets/product_/e5/11.webp",
  "/assets/product_/e5/12.webp",
  "/assets/product_/e5/13.webp",
  "/assets/product_/e5/14.webp",
];

const E5FeatureImages = [
  "/assets/product_/e5/feature_images/1.png",
  "/assets/product_/e5/feature_images/Copy of Copy of 28,000 (1).png",
  "/assets/product_/e5/feature_images/Copy of Copy of 28,000 (2).png",
  "/assets/product_/e5/feature_images/copy uncut (4).png",
  "/assets/product_/e5/feature_images/copy uncut (5).png",
];

const ramOptions = ["8GB", "16GB"];
const ssdOptions = ["512GB", "1TB"];
const warrantyOptions = ["18 Months (Default)", "+6 Months", "+1 Year"];

export default function E5ProductPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedRam, setSelectedRam] = useState(ramOptions[0]);
  const [selectedSSD, setSelectedSSD] = useState(ssdOptions[0]);
  const [selectedWarranty, setSelectedWarranty] = useState(warrantyOptions[0]);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [offerPrice, setOfferPrice] = useState(null);
  const originalPrice = 28000;
  const router = useRouter();

  // Pricing logic
  const basePrice = 28000;
  let price = basePrice;
  if (selectedRam === '16GB') price += 3000;
  if (selectedSSD === '1TB') price += 4000;
  if (selectedWarranty === '+6 Months') price += 1000;
  if (selectedWarranty === '+1 Year') price += 1800;
  let displayPrice = price;
  if (couponApplied && offerPrice) displayPrice = offerPrice;

  const changeImage = (dir) => {
    return setCurrentImage((prev) => (prev + dir + E5Images.length) % E5Images.length);
  };
  const setImage = (idx) => setCurrentImage(idx);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] text-white pt-24 md:pt-32 pb-24">
      {/* Tab Navigation Bar */}
      <nav className="w-full flex flex-col md:flex-row justify-start items-center ml-0 md:ml-4 mb-4 mt-24 gap-2">
        {/* Mobile: Single row for all tabs on mobile */}
        <div className="flex flex-col w-full md:hidden gap-2">
          <div className="flex flex-row gap-1 bg-white/20 rounded-md px-1 py-2 shadow-lg w-full">
            {[
              { href: '#techspecs', label: 'Technical Specifications' },
              { href: '#features', label: 'Features & Design' },
              { href: '#video', label: 'Product Video' },
              { href: '#compliance', label: 'Regulatory Product Compliance' },
              { href: '#reviews', label: 'Customer Review' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white font-semibold text-xs flex-1 text-center py-2 px-1 hover:text-cyan-300 transition-colors"
                style={{ background: 'none', border: 'none' }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        {/* Desktop: original layout */}
        <div className="hidden md:flex flex-row justify-between items-center max-w-6xl w-full bg-white/20 rounded-md px-1 py-1 shadow-lg gap-x-0 whitespace-nowrap">
          {[
            { href: '#techspecs', label: 'Technical Specifications' },
            { href: '#features', label: 'Features & Design' },
            { href: '#video', label: 'Product Video' },
            { href: '#compliance', label: 'Regulatory Product Compliance' },
            { href: '#reviews', label: 'Customer Review' },
          ].map((item, idx, arr) => (
            <React.Fragment key={item.href}>
              <a
                href={item.href}
                className="text-white font-semibold text-xs flex-1 text-center py-1 px-1 hover:text-cyan-300 transition-colors whitespace-nowrap"
                style={{ background: 'none', border: 'none' }}
              >
                {item.label}
              </a>
              {idx < arr.length - 1 && (
                <span className="inline-block w-px h-5 bg-white/70 mx-1 align-middle"></span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 py-12 px-4">
        {/* Left: Carousel */}
        <div className="flex-1 flex flex-col items-end ml-auto">
          <div className="relative w-full mx-auto mt-24 flex items-center justify-center w-full">
            {/* Mobile Arrows at left/right, lower down */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#133B5C] text-white rounded-full p-2 shadow-md"
              onClick={() => changeImage(-1)}
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#133B5C] text-white rounded-full p-2 shadow-md"
              onClick={() => changeImage(1)}
              aria-label="Next image"
            >
              &#8250;
            </button>
            <div className="flex items-center justify-center w-full" style={{ width: '100%', height: 'auto' }}>
              <Image
                src={E5Images[currentImage]}
                alt={`Product Image ${currentImage + 1}`}
                width={1200}
                height={800}
                className="object-contain w-full h-auto"
                priority
              />
              <div className="absolute bottom-3 right-3 bg-[#007e9e]/80 text-xs px-3 py-1 rounded-full border border-white">
                {currentImage + 1} / {E5Images.length}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center items-center pt-4 w-full">
            {E5Images.map((img, idx) => (
              <div
                key={img}
                className={`${idx === currentImage ? "opacity-100" : "opacity-70"} rounded bg-[#133B5C] cursor-pointer transition-all`}
                onClick={() => setImage(idx)}
                style={{ border: '1px solid transparent', boxShadow: '0 0 0 0.5px #fff' }}
              >
                <Image src={img} alt="Thumbnail" width={60} height={40} className="object-cover w-12 h-9" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-[2px] bg-white/20 mx-8 rounded"></div>
        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col gap-6 bg-transparent p-0 items-start">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">ENTION WORKBOOK SERIES E5</h1>
          {/* Badges: 2 per row on mobile, all in a row on desktop */}
          <div>
            <div className="hidden md:flex flex-nowrap justify-between items-center gap-x-3 w-full mb-2">
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words">Made for Everyday Achievers</span>
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words">High Performance, Budget Friendly</span>
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words">Full Control at Your Fingertips</span>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full mb-2 md:hidden">
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm text-center whitespace-normal break-words min-w-0 w-full">Made for Everyday Achievers</span>
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm text-center whitespace-normal break-words min-w-0 w-full">High Performance, Budget Friendly</span>
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm text-center whitespace-normal break-words min-w-0 w-full">Full Control at Your Fingertips</span>
            </div>
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
            <div className="text-3xl font-extrabold text-cyan-200 drop-shadow-lg">Coming Soon</div>
            <div className="text-sm text-white font-bold mt-2 bg-white/10 px-3 py-1 rounded shadow drop-shadow-lg" style={{textShadow: '0 2px 8px #0008'}}>No cost EMI available. See options at checkout.</div>
            <button
              className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold py-3 px-8 rounded-xl shadow-lg text-lg transition mt-8"
              onClick={() => router.push(`/ecommerce/checkout?price=${displayPrice}`)}
            >
              Buy Now
            </button>
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
        {/* Mobile: 2-column grid */}
        <div className="block md:hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white p-4 shadow-xl">
          <div className="grid grid-cols-2 gap-0 border border-white/30 rounded overflow-hidden">
            {/* Each pair: label/value */}
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Colour</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">sliver</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Power</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">DC 12V</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Display</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">15.6inch, Full HD 1920*1080 IPS 16:9 ratio</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Battery</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">5000mah</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Processor</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">intel N95 up to 3.4GHz with Turbo boost</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">RJ45</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">yes</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Core, threads, Cache</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">4core, 4 threads, 6MB cache</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Memory card reader</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">yes, SD card upto 128Gb</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Graphic</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">intel UHD graphics 1.20Ghz</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Earphone port</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">3.5mm standard headphone jack</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Fingerprint reader</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">yes, on touch pad</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Mic</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">Built in Analog microphone</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Operating system</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">window 11</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Speaker</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">front facing Built in stereo speaker 1.0W*2</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">MS office</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">yes, 365</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Webcam</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">2.0Mega+DMIC, with Privcay sutter</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">USB</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">3 port of USB 3.0, type C(Data+DP)</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Touchpad</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">Yes, extra large</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">HDMI</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">HDMI A type</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Keyboard</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">US, Round with Backlight & Square with Backlight</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Product Dimension and weight</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">357.4*228*19 mm, 1.68kg</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Included in Box</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">Laptop, Power Cord, Adapter, User Manual</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Covered in warranty</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">Manufacturing Defects, Physical Damage not covered.</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Manufactured by</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">Ention, Made in India.</div>
          </div>
        </div>
        {/* Desktop: Table */}
        <div className="hidden md:block rounded-2xl bg-white/10 backdrop-blur-sm border border-white p-6 overflow-x-auto shadow-xl">
          <table className="w-full text-white text-base border-separate border-spacing-0">
            <colgroup>
              <col />
              <col />
              <col className="vertical-divider" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Colour</td>
                <td className="border border-white/30 px-4 py-2">sliver</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Power</td>
                <td className="border border-white/30 px-4 py-2">DC 12V</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Display</td>
                <td className="border border-white/30 px-4 py-2">15.6inch, Full HD 1920*1080 IPS 16:9 ratio</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Battery</td>
                <td className="border border-white/30 px-4 py-2">5000mah</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Processor</td>
                <td className="border border-white/30 px-4 py-2">intel N95 up to 3.4GHz with Turbo boost</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">RJ45</td>
                <td className="border border-white/30 px-4 py-2">yes</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Core, threads, Cache</td>
                <td className="border border-white/30 px-4 py-2">4core, 4 threads, 6MB cache</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Memory card reader</td>
                <td className="border border-white/30 px-4 py-2">yes, SD card upto 128Gb</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Graphic</td>
                <td className="border border-white/30 px-4 py-2">intel UHD graphics 1.20Ghz</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Earphone port</td>
                <td className="border border-white/30 px-4 py-2">3.5mm standard headphone jack</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Fingerprint reader</td>
                <td className="border border-white/30 px-4 py-2">yes, on touch pad</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Mic</td>
                <td className="border border-white/30 px-4 py-2">Built in Analog microphone</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Operating system</td>
                <td className="border border-white/30 px-4 py-2">window 11</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Speaker</td>
                <td className="border border-white/30 px-4 py-2">front facing Built in stereo speaker 1.0W*2</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">MS office</td>
                <td className="border border-white/30 px-4 py-2">yes, 365</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Webcam</td>
                <td className="border border-white/30 px-4 py-2">2.0Mega+DMIC, with Privcay sutter</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">USB</td>
                <td className="border border-white/30 px-4 py-2">3 port of USB 3.0, type C(Data+DP)</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Touchpad</td>
                <td className="border border-white/30 px-4 py-2">Yes, extra large</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">HDMI</td>
                <td className="border border-white/30 px-4 py-2">HDMI A type</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Keyboard</td>
                <td className="border border-white/30 px-4 py-2">US, Round with Backlight & Square with Backlight</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Product Dimension and weight</td>
                <td className="border border-white/30 px-4 py-2">357.4*228*19 mm, 1.68kg</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Included in Box</td>
                <td className="border border-white/30 px-4 py-2">Laptop, Power Cord, Adapter, User Manual</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Covered in warranty</td>
                <td className="border border-white/30 px-4 py-2">Manufacturing Defects, Physical Damage not covered.</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Manufactured by</td>
                <td className="border border-white/30 px-4 py-2">Ention, Made in India.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <style jsx>{`
          .vertical-divider {
            border-left: 2px solid rgba(255,255,255,0.6) !important;
            position: relative;
            z-index: 2;
            background-clip: padding-box;
          }
        `}</style>
      </section>
      {/* Video Section: Product Video */}
      <section className="max-w-7xl mx-auto mt-24 mb-24 px-4">
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-lg md:max-w-7xl aspect-video rounded-xl overflow-hidden bg-black">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              className="w-full h-full object-cover rounded-xl shadow-lg bg-black"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      {/* Desktop Features & Design */}
      <section className="max-w-6xl mx-auto mt-12 px-4 hidden md:block">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 mt-20 text-white">Features & Design</h2>
        <div className="w-80 h-1 bg-white rounded-full mb-8"></div>
        {/* Row 1: Introduction Feature Row */}
        <div className="flex flex-col lg:flex-row gap-0 mb-8 items-stretch">
          <div className="flex-1 bg-[#18408b] text-white text-lg md:text-xl lg:text-[1.2rem] px-8 py-8 flex flex-col justify-center rounded-l-xl rounded-r-none shadow-lg h-[300px] mt-24 leading-relaxed">
            <p className="mb-3 font-semibold">Experience high-quality computing without compromise. The Ention Workbook Series Laptop blends power, design, and affordability to deliver outstanding performance on a smart budget.</p>
            <p>Powered by the Intel N95 processor with a maximum turbo frequency of up to 3.4GHz and 6MB cache, it's built to keep up with your everyday tasks seamlessly.</p>
          </div>
          <div className="flex-1 flex items-center justify-center bg-white/10 rounded-l-none rounded-r-xl shadow-lg h-[500px]">
            <img 
              src="/assets/product_/e5/feature_images/1.png" 
              alt="Your Working Companion" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Row 2: Joined Image and Card Row */}
        <div className="flex flex-row w-full md:w-auto items-stretch mt-[-170px]">
          {/* Image Card - no margin, no padding, no background */}
          <div
            className="mt-10 rounded-r-none shadow-lg overflow-hidden"
            style={{
              width: '629px',
              height: '549px',
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
               style={{ height: '444px' }}>
            <div className="w-full flex flex-col items-center justify-center text-center">
              <div className="text-xl font-bold mb-2">Control at Your Fingertips</div>
              <div className="text-base leading-relaxed">Experience a smarter way to interact with your device. Easily manage volume and brightness with intuitive finger gestures—no buttons, no hassle.</div>
            </div>
          </div>
        </div>
        {/* Row 3: Centered Text Row */}
        <div className="w-full bg-[#18408b] rounded-xl p-8 text-center text-white text-2xl font-semibold flex flex-col items-center justify-center mt-8 leading-relaxed">
          Made for Power Users & Everyday Hustlers<br />
          <span className="text-lg font-normal">A compact companion that blends performance with mobility, ideal for students and professionals on the go.</span>
        </div>
        {/* Row 4: Image Left, Text and Image Right Row */}
        <div className="flex flex-row rounded-xl overflow-hidden items-stretch mt-8" style={{ height: '320px' }}>
          <div style={{ flexBasis: '60%', width: '60%', height: '100%' }}>
            <Image
              src="/assets/product_/e5/feature_images/copy uncut (4).png"
              alt="Laptop Open"
              width={400}
              height={320}
              className="object-cover w-full h-full"
              style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: 0 }}
            />
          </div>
          <div style={{ flexBasis: '40%', width: '40%', height: '100%' }}>
            <Image
              src="/assets/product_/e5/feature_images/Copy of Copy of 28,000 (2).png"
              alt="Camera Privacy Shutter"
              width={400}
              height={320}
              className="object-cover w-full h-full"
              style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: 0 }}
            />
          </div>
        </div>
        <div className="w-full bg-[#18408b] rounded-b-xl p-8 text-center text-white text-lg font-normal flex flex-col items-center justify-center leading-relaxed" style={{marginTop:0}}>
          Enjoy smooth performance at an affordable price, making high-quality computing accessible to everyone.
        </div>
        {/* Row 5: stuuning display */}
        <div className="w-full bg-[#18408b] rounded-xl p-8 text-center mt-8">
          <div className="text-2xl md:text-3xl font-bold text-white mb-2">Stunning 15.6–Inch Colour–Rich Display</div>
          <div className="text-base md:text-lg text-white font-normal leading-relaxed">Enjoy sharp visuals and vibrant colours on a compact 15.6inch full HD IPS screen, perfect for immersive viewing and clear presentations.</div>
        </div>
        {/* Row 6: Ports and Slots Image Row */}
        <div className="w-full bg-[#18408b] rounded-xl flex flex-row items-center justify-start mt-8 relative" style={{height: '600px'}}>
          <div style={{width: '100%', height: '100%'}} className="h-full w-full">
            <Image
              src="/assets/product_/e5/feature_images/copy uncut (5).png"
              alt="Ports and slots"
              width={1200}
              height={600}
              className="object-contain w-full h-full"
              style={{height: '100%', width: '100%', objectFit: 'cover'}}
            />
          </div>
        </div>
        {/* Row 7: TouchPad Feature Image Row */}
        <div className="w-full bg-[#18408b] flex flex-row items-center justify-between mt-8" style={{height: '400px'}}>
          <div style={{width: '50%', height: '100%'}} className="flex flex-col items-center justify-center text-white text-center gap-3 leading-relaxed">
            <div className="text-3xl md:text-4xl font-extrabold mb-2 drop-shadow-lg" style={{textShadow: '0 2px 8px #0008'}}>Windows 11 Pro</div>
            <div className="text-xl md:text-2xl font-semibold mb-2 drop-shadow" style={{textShadow: '0 2px 8px #0008'}}>Do the Great thingh</div>
            <div className="mt-2">
              <span className="text-xl md:text-2xl font-bold drop-shadow" style={{textShadow: '0 2px 8px #0008'}}>5000mAh Longer Battery</span>
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
          <div style={{width: '50%', height: '100%'}} className="flex flex-col items-center justify-center text-white text-center p-8 leading-relaxed">
            <div className="text-2xl md:text-3xl font-bold mb-2">Immersive Audio with Front-Facing Speakers</div>
            <div className="text-base md:text-lg font-normal">Experience crystal–clear sound that's directed towards you — not away.</div>
          </div>
        </div>
        {/* Row 6: Product Compliance Certification Row */}
        <div className="w-full bg-[#007e9e]/80 border border-[#0FAFCA] px-6 py-8 rounded-xl text-center mt-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-3">Product compliance certification</h2>
          <div className="text-base md:text-lg leading-relaxed">
            Ention ensures all its products comply with Indian regulatory standards. Devices are certified under BIS CRS for electrical safety and WPC–ETA for wireless communication compliance. Ention also follows global benchmarks for product safety, electromagnetic compatibility, ergonomics, and environmental responsibility. Every product is developed through certified processes to guarantee quality, legal distribution, and user safety.
          </div>
        </div>
      </section>
      {/* Mobile Features & Design */}
      <section className="max-w-6xl mx-auto mt-12 px-2 block md:hidden">
        <h2 className="text-2xl font-extrabold mb-3 mt-10 text-white w-fit mx-auto">Features & Design</h2>
        <div className="h-1 bg-white rounded-full mb-6 mx-auto" style={{width:'100%',maxWidth:'100%',marginTop:'-8px'}}></div>
        <div className="flex flex-col gap-6">
          {/* Feature 1 */}
          <div className="bg-[#18408b] text-white rounded-xl shadow-lg flex flex-col items-center p-0">
            <img src="/assets/product_/e5/feature_images/1.png" alt="Your Working Companion" className="w-full h-[28rem] object-cover rounded-t-xl" loading="lazy" />
            <div className="w-full p-4">
              <p className="mb-2 text-base">Experience high-quality computing without compromise. The Ention Workbook Series Laptop blends power, design, and affordability to deliver outstanding performance on a smart budget.</p>
              <p className="text-base">Powered by the Intel N95 processor with a maximum turbo frequency of up to 3.4GHz and 6MB cache, it's built to keep up with your everyday tasks seamlessly.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="bg-[#18408b] text-white rounded-xl shadow-lg flex flex-col items-center p-0">
            <img src="/assets/product_/e5/feature_images/Copy of Copy of 28,000 (1).png" alt="Feature 1" className="w-full h-[28rem] object-cover rounded-t-xl" loading="lazy" />
            <div className="w-full p-4">
              <div className="text-base font-bold mb-1">Control at Your Fingertips</div>
              <div className="text-sm">Experience a smarter way to interact with your device. Easily manage volume and brightness with intuitive finger gestures—no buttons, no hassle.</div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="bg-[#18408b] rounded-xl p-4 text-center text-white text-lg font-normal flex flex-col items-center justify-center">
            Made for Power Users & Everyday Hustlers<br />A compact companion that blends performance with mobility, ideal for students and professionals on the go.
          </div>
          {/* Feature 4 */}
          <div className="bg-[#18408b] text-white rounded-xl shadow-lg flex flex-col items-center p-0">
            <img src="/assets/product_/e5/feature_images/copy uncut (4).png" alt="Laptop Open" className="w-full h-64 object-cover rounded-t-xl" loading="lazy" />
            <div className="w-full flex flex-col items-center p-0">
              <img src="/assets/product_/e5/feature_images/Copy of Copy of 28,000 (2).png" alt="Camera Privacy Shutter" className="object-cover w-full h-84 mb-2" loading="lazy" />
              <div className="text-sm p-4">Enjoy smooth performance at an affordable price, making high-quality computing accessible to everyone.</div>
            </div>
          </div>
          {/* Added: Stunning 15.6–Inch Colour–Rich Display */}
          <div className="bg-[#18408b] rounded-xl p-4 text-center text-white mt-4">
            <div className="text-xl font-bold mb-2">Stunning 15.6–Inch Colour–Rich Display</div>
            <div className="text-base font-normal">Enjoy sharp visuals and vibrant colours on a compact 15.6inch full HD IPS screen,<br />perfect for immersive viewing and clear presentations.</div>
          </div>
          {/* Added: Ports and slots image */}
          <div className="bg-[#18408b] rounded-xl p-0 mt-4 overflow-hidden">
            <img src="/assets/product_/e5/feature_images/copy uncut (5).png" alt="Ports and slots" className="object-cover w-full h-62 block" style={{display:'block',width:'100%'}} loading="lazy" />
          </div>
          {/* Added: Windows 11 Pro / 5000mAh Longer Battery */}
          <div className="bg-[#18408b] rounded-xl flex flex-col items-center mt-4 text-white text-center p-0 overflow-hidden">
            <div className="w-full p-4">
              <div className="text-2xl font-extrabold mb-1">Windows 11 Pro</div>
              <div className="text-lg font-semibold mb-2">Do the Great thingh</div>
              <div className="text-base font-bold">5000mAh Longer Battery</div>
            </div>
            <img src="/assets/product_/e5/feature_images/Copy of Copy of 28,000 (1).png" alt="Large TouchPad Feature" className="object-cover w-full h-48 block" style={{display:'block',width:'100%'}} loading="lazy" />
          </div>
          {/* Added: Immersive Audio with Front-Facing Speakers */}
          <div className="bg-[#18408b] rounded-xl flex flex-col items-center mt-4 text-white text-center p-4">
            <img src="/assets/product_/e5/feature_images/IMG_99.png" alt="Immersive Audio Feature" className="object-cover w-full h-72 block rounded-xl mb-2" style={{display:'block',width:'100%'}} loading="lazy" />
            <div className="text-xl font-bold mb-1">Immersive Audio with Front-Facing Speakers</div>
            <div className="text-base font-normal">Experience crystal–clear sound that's directed towards you — not away.</div>
          </div>
          {/* Added: Product compliance certification */}
          <div className="w-full bg-[#007e9e]/80 border border-[#0FAFCA] px-4 py-6 rounded-xl text-center mt-4 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">Product compliance certification</h2>
            <div className="text-base">
              Ention ensures all its products comply with Indian regulatory standards. Devices are certified under BIS CRS for electrical safety and WPC–ETA for wireless communication compliance. Ention also follows global benchmarks for product safety, electromagnetic compatibility, ergonomics, and environmental responsibility. Every product is developed through certified processes to guarantee quality, legal distribution, and user safety.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
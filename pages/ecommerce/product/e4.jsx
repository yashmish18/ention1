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

const E4Images = [
  "/assets/product_/e4/IMG_1122.JPG",
  "/assets/product_/e4/IMG_9893.jpg",
  "/assets/product_/e4/IMG_9879.jpg",
  "/assets/product_/e4/IMG_9878.jpg",
  "/assets/product_/e4/IMG_9877.jpg",
  "/assets/product_/e4/IMG_9873.jpg",
  "/assets/product_/e4/IMG_9872.jpg",
  "/assets/product_/e4/IMG_9867.jpg",
  "/assets/product_/e4/IMG_9860.jpg",
  "/assets/product_/e4/IMG_1125.JPG",
  "/assets/product_/e4/IMG_1124.JPG",
  "/assets/product_/e4/IMG_1123.JPG",
];

const E5FeatureImages = [
  "/assets/product_/e5/feature_images/1.png",
  "/assets/product_/e5/feature_images/Copy of Copy of 28,000 (1).png",
  "/assets/product_/e5/feature_images/Copy of Copy of 28,000 (2).png",
  "/assets/product_/e5/feature_images/copy uncut (4).png",
  "/assets/product_/e5/feature_images/copy uncut (5).png",
];

const ramOptions = ["8GB", "16GB", "32GB"];
const ssdOptions = ["512GB SSD", "1TB SSD", "2TB SSD"];
const warrantyOptions = ["18 months (Default)", "+6 Months", "+1 Year"];
const originalPrice = 59999;

export default function E4ProductPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedRam, setSelectedRam] = useState(ramOptions[0]);
  const [selectedSSD, setSelectedSSD] = useState(ssdOptions[0]);
  const [selectedWarranty, setSelectedWarranty] = useState(warrantyOptions[0]);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [offerPrice, setOfferPrice] = useState(null);

  const changeImage = (dir) => {
    setCurrentImage((prev) => (prev + dir + E4Images.length) % E4Images.length);
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

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] text-white pt-24 md:pt-32 pb-24">
      {/* Tab Navigation Bar */}
      <nav className="w-full flex justify-start items-center mb-4 mt-24 ml-10" style={{background: 'none'}}>
        <div className="flex flex-row gap-6 max-w-4xl items-center" style={{width: '100%'}}>
          <a href="#techspecs" className="text-white font-medium text-sm hover:underline transition" style={{background: 'none', border: 'none'}}>Technical Specifications</a>
          <a href="#features" className="text-white font-medium text-sm hover:underline transition" style={{background: 'none', border: 'none'}}>Features & Design</a>
          <a href="#video" className="text-white font-medium text-sm hover:underline transition" style={{background: 'none', border: 'none'}}>Product Video</a>
          <a href="#compliance" className="text-white font-medium text-sm hover:underline transition" style={{background: 'none', border: 'none'}}>Regulatory Product Compliance</a>
          <a href="#reviews" className="text-white font-medium text-sm hover:underline transition" style={{background: 'none', border: 'none'}}>Customer Review</a>
        </div>
      </nav>
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
                src={E4Images[currentImage]}
                alt={`E4 Product Image ${currentImage + 1}`}
                width={1200}
                height={800}
                className="object-contain w-full h-auto"
                priority
              />
              <div className="absolute bottom-3 right-3 bg-[#007e9e]/80 text-xs px-3 py-1 rounded-full border border-white">
                {currentImage + 1} / {E4Images.length}
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
            {E4Images.map((img, idx) => (
              <div
                key={img}
                className={`${idx === currentImage ? "opacity-100" : "opacity-70"} rounded bg-[#133B5C] cursor-pointer transition-all`}
                onClick={() => setImage(idx)}
                style={{ border: '1px solid transparent', boxShadow: '0 0 0 0.5px #fff' }}
              >
                <Image src={img} alt="E4 Thumbnail" width={60} height={40} className="object-cover w-12 h-9" />
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-[2px] bg-white/20 mx-8 rounded"></div>
        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col gap-6 bg-transparent p-0 items-start">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">ENTION WORKBOOK SERIES E4</h1>
          <div className="flex flex-nowrap justify-between items-center gap-x-3 w-full mb-2">
          <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words"> Made for techy and Professional</span>
            <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words">Powerful yet Budget Friendly</span>
            <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words">Dual RAM and SSD slots 	&nbsp</span>
          </div>
          {/* Customization */}
          <div className="mt-4">
            <h3 className="font-bold mb-2">Customize Your E4 Laptop</h3>
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
                  <span className="text-2xl line-through text-gray-300 opacity-70">₹65,000</span>
                </>
              )}
            </div>
            <button
              className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold px-8 py-2 rounded-2xl text-lg shadow-lg transition"
              onClick={() => router.push('/ecommerce/checkout')}
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
        {/* Row 1: Image Left, Text and Image Right Row */}
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
          <div className="flex flex-col justify-center p-8 relative mt-[-150px]" style={{ height: '100%', width: '40%' }}>
            <div className="text-white text-lg md:text-xl font-normal">Power Your Day with Your Ultimate Working Companion Ention Workbook Series E4.</div>
          </div>
        </div>
       
        {/* Row 2: Image Left, Text and Image Right Row */}
        <div className="flex flex-col mt-4 md:flex-row bg-[#18408b] rounded-xl overflow-hidden items-center" style={{ height: '320px' }}>
          <div className="flex flex-col justify-center p-8" style={{ height: '100%', width: '40%' }}>
            <div className="text-white text-lg md:text-xl font-normal text-left leading-relaxed">
              Unleash seamless performance with the Intel® 13th Gen Core™ i7-13620H processors delivering speeds of up to 4.90 GHz, powered by 10 Cores, 16 Threads, and a generous 24MB Intel Smart Cache.<br />
              Whether you're coding, designing, multitasking, or analysing complex data.
            </div>
          </div>
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
        </div>

        {/* Row 3: Backlit Keyboard and Numeric Keypad */}
        <div className="w-full bg-[#18408b] rounded-xl p-8 mt-8">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
            {/* Left: Backlit Keyboard */}
            <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left">
              <div className="text-2xl font-semibold mb-4 text-white">Backlit Keyboard:</div>
              <div className="text-lg text-white">Work efficiently in any lighting condition with a soft white backlight that ensures visibility during late–night sessions or dim environments.</div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-white mx-8"></div>
            {/* Right: Numeric Keypad */}
            <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left">
              <div className="text-2xl font-semibold mb-4 text-white">Dedicated Numeric Keypad:</div>
              <div className="text-lg text-white">Whether you're entering data, working on spreadsheets, or using design software, the separate number pad enhances speed and accuracy — making it ideal for professionals in finance, engineering, or analytics.</div>
            </div>
          </div>
        </div>

        {/* Row 4: Single Image Card */}
        <div className="w-full bg-[#18408b] flex items-center justify-center mt-8 rounded-xl" style={{height: '700px'}}>
          <img
            src="/assets/product_/e4/feature_image/Copy of copy uncut (11).png"
            alt="Spacious Storage Feature"
            className="object-cover w-full h-full rounded-xl"
            style={{height: '100%', width: '100%', objectFit: 'cover'}}
          />
        </div>

        {/* Row 5: Single Image Only */}
        <div className="w-full flex items-center justify-center mt-[-100px]" style={{height: '900px', width: '100%'}}>
          <img
            src="/assets/product_/e4/feature_image/Copy of copy uncut (16).png"
            alt="Feature"
            className="object-contain w-full h-full"
            style={{height: '100%', width: '100%', objectFit: 'contain'}}
          />
        </div>

        {/* Row 6: Ports and Audio Row (the one you want to replace) */}
        <div className="w-full bg-[#18408b] rounded-xl p-8 text-center mt-[-110px]">
          <div className="text-2xl md:text-3xl font-bold text-white mb-2"> Inspired by Innovation, Assembled with Integrity </div>
          <div className="text-3XL md:text-lg text-white font-bold mt-4">Proudly Made in India.</div>
        </div>

        {/* Row 7: Privacy Shutter Only Row */}
        <div className="w-full bg-[#18408b] rounded-xl flex items-center justify-center mt-8 p-12" style={{minHeight: '300px'}}>
          <div className="text-white text-3xl md:text-4xl font-extrabold text-center w-full">Privacy Shutter on Webcam adds peace of mind during off–camera moments</div>
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
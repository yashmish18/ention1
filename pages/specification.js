import React, { useRef, useState } from 'react';
import { Navbar, Footer } from '../components/index';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img5 from 'assets/image 28.jpg';

// import watchImg1200 from "assets/Rectangle1052_new.jpg";
// import watchImg300 from "assets/Rectangle1052_old.jpg";
// import ReactImageMagnify from 'react-image-magnify';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  focusOnSelect: true,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductCard = ({ product }) => (
  <div
    className={`w-full  px-2 lg:px-4 mb-6  group cursor-pointer hover:shadow-lg`}
  >
    <Link href={product.link || '/specification'}>
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="text-2xl font-semibold text-center mb-1">
          {' '}
          {product.category}{' '}
        </h2>
        <hr
          className={`w-[40%] border-2 border-transparent group-hover:border-[#007E9E]`}
        />
      </div>
      <div className={`border border-[#007E9E] w-full mx-0 md:mx-5`}>
        <div
          className={`py-7 px-8 text-2xl text-center font-semibold bg-teal-500/10 group-hover:bg-teal-500/30`}
        >
          {product.description}
        </div>
        <div className="py-4 text-center">
          <h3 className="text-lg"> {product.title} </h3>
        </div>
        <hr className="w-[full border-1 border-gray-500" />
        <div className="py-4 text-center">
          <h3 className="text-lg">
            {' '}
            <span className="text-red-500 font-semibold">
              Starting From{' '}
            </span>{' '}
            {product.price}{' '}
          </h3>
        </div>
        <hr className="w-[full border-1 border-gray-500" />
        <div className="py-4 text-center">
          <Link
            href={product.link || '/product/laptop'}
            className="text-[#02b7e6] text-xl font-semibold flex items-center justify-center"
          >
            {' '}
            View More{' '}
          </Link>
        </div>
      </div>
    </Link>
  </div>
);

const ProductsCarousel = ({ products, title, description }) => {
  const [slider1] = [useRef()];

  return (
    <div className="mt-0 md:mt-12 mb-0 md:mb-10 w-full ">
      <div className="mt-0 md:mt-8 w-full">
        <Slider {...settings} ref={slider1}>
          {products?.map((product, i) => (
            <div key={`product-${product.category}-${i}`}>
              {' '}
              <ProductCard product={product} />{' '}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
const Specification = ({ product }) => {
  const [active, setActive] = useState('1');
  const [showModal, setShowModal] = useState(true);
  const [showModal1, setShowModal1] = useState(false);
  const handleclick2 = (e) => {
    setActive(e.target.id);
  };

  const handleclick = (e) => {
    setActive(e.target.id);
    setShowModal(true);
    setShowModal1(false);
  };
  const handleclick1 = (e) => {
    setActive(e.target.id);
    setShowModal(false);
    setShowModal1(true);
  };
  return (
    <main className={``}>
      <Navbar />
      <div className="w-full py-14   text-white">
        <div className="flex pl-6 lg:pl-28 pr-4">
          <div className="w-full lg:w-[60%] pt-0 lg:pt-14">
            <h1 className="text-xl md:text-4xl text-left pb-2 md:pb-6">
              IdeaPad Slim 3i 11th Gen (15, Intel)
            </h1>
            <p className="text-sm md:text-lg py-2 pr-0 md:pr-10">
              This laptop offers significant configurations, a modern processor,
              the latest memory (RAM), vast storage, and heavy graphics options.
              It has been noted for achieving a competitive market impact with
              this laptop.
            </p>
            <span className="text-lg md:text-2xl lg:text-4xl ">
              Starting at : ₹27,990
            </span>
            <br />
            <Link href={product?.link || '/checkout'} className="mt-6">
              <button className="bg-[#007E9E] text-sm md:text-lg px-6 py-2 rounded-md mt-6">
                Buy Now{' '}
              </button>
            </Link>
          </div>
          {/* <Image src={spec} alt="specification" className="w-[40%] h-[80%]" /> */}
        </div>
        <div className="block  w-full flex  px-10 md:px-28 gap-4 md:gap-10 text-lg md:text-3xl text-left mt-10 lg:mt-0">
          <button
            className={
              active === '1' ? 'border-b-4 border-[#007E9E] pb-2' : undefined
            }
            id={'1'}
            onClick={handleclick}
          >
            Specification
          </button>
          <Link href="/specification#pdf">
            <button
              className={
                active === '2' ? 'border-b-4 border-[#007E9E] pb-2' : undefined
              }
              id={'2'}
              onClick={handleclick}
            >
              Features
            </button>
          </Link>
          <button
            className={
              active === '3' ? 'border-b-4 border-[#007E9E] pb-2' : undefined
            }
            id={'3'}
            onClick={handleclick1}
          >
            Look At Me
          </button>
        </div>
        {showModal ? (
          <div className="w-full  pt-10 md:pt-20 ">
            <div className="w-full md:w-[80%] mx-auto px-10 md:px-0 ">
              <table className="text-lg text-center ">
                <tbody className="w-full lg:w-[50%] text-sm md:text-[24px]">
                  <tr className="border-b-2 border-[#D9D9D94D]">
                    <td className="w-[15%]  border-r-2 border-[#D9D9D94D] p-4 text-center ">
                      Process
                    </td>
                    <td className="w-[40%]  p-4 pl-10 py-10 text-left">
                      Up to 10th Gen Intel® Core™ i7
                    </td>
                  </tr>
                  <tr className="border-b-2 h- border-[#D9D9D94D] ">
                    <td className=" px-2 lg:px-4  border-r-2 border-[#D9D9D94D] text-center">
                      Operating System
                    </td>
                    <td className=" px-4 py-10 pl-10 text-left">
                      Up to Windows 10 Pro
                    </td>
                  </tr>
                  <tr className="border-b-2  border-[#D9D9D94D]">
                    <td className=" p-4 pl-10 border-r-2 border-[#D9D9D94D] text-center">
                      Display
                    </td>
                    <td className="h-[10%]">
                      <ul className="list-disc text-sm md:text-[20px]  p-4 text-left pl-16 leading-8">
                        <li>
                          {' '}
                          39.62cms (15.6) FHD (1920 x 1080) IPS, 200 nits, 45%
                          NTSC
                        </li>
                        <br />
                        <li>
                          39.62cms (15.6) FHD (1920 x 1080) TN, 200 nits, 45%
                          NTSCC
                        </li>
                        <br />
                        <li>
                          39.62cms (15.6) HD (1366 x 768) TN, 200 nits, 45% NTSC
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b-2  border-[#D9D9D94D]">
                    <td className="border-r-2 border-[#D9D9D94D]  p-4 text-center">
                      Memory
                    </td>
                    <td className="pl-10 p-4 py-10 text-left">
                      Up to 12GB DDR4
                    </td>
                  </tr>
                  <tr className="border-b-2  border-[#D9D9D94D]">
                    <td className="border-r-2 border-[#D9D9D94D]  p-4 text-center">
                      Battery
                    </td>
                    <td className="pl-10  p-4 text-left">
                      Up to 7.5 hours*
                      <br />
                      <br />
                      <p className="text-[10px] md:text-sm pt-2 leading-8">
                        All battery life claims are approximate and based on
                        results using the MobileMark® 2014 battery life
                        benchmark test. Actual battery life depends on such
                        factors as product configuration and usage, software
                        use, wireless functionality, power management settings,
                        and screen brightness. The maximum capacity of the
                        battery will decrease with time and use.
                      </p>
                    </td>
                  </tr>
                  <tr className="border-b-2  border-[#D9D9D94D]">
                    <td className="border-r-2 border-[#D9D9D94D]  p-4 text-center">
                      Storage
                    </td>
                    <td className="pl-16  p-4 text-left">
                      <ul className="list-disc text-sm md:text-[18px]">
                        <li> Up to 1TB HDD SATA, 5400rpm</li>
                        <br />
                        <li>128GB PCIe SSD M.2</li>
                        <br />
                        <li>Up to 256GB SSD + 1TB HDD dual storage</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b-2  border-[#D9D9D94D]">
                    <td className="border-r-2 border-[#D9D9D94D]  p-4 text-center">
                      Security
                    </td>
                    <td className="pl-16  p-4 py-6 text-left text-sm md:text-[20px]">
                      <ul className="list-disc">
                        <li>Fingerprint reader (optional)</li>
                        <br />
                        <li>Webcam privacy shutter</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b-2  border-[#D9D9D94D]">
                    <td className="border-r-2 border-[#D9D9D94D]  p-4 text-center">
                      Audio
                    </td>
                    <td className="pl-16 py-6 p-4 text-left text-sm md:text-[20px]">
                      <ul className="list-disc">
                        <li>2 x 1.5W speakers</li>
                        <br />
                        <li>Dolby Audio™</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="flex items-center justify-center  pt-6 md:pt-16"
              id="pdf"
            >
              <a href="/assets/ention e1.pdf">
                <button className=" text-center bg-[#007E9E] text-white  px-4  text-sm md:text-lg py-2 rounded-md">
                  PDF To Download{' '}
                  <i class="material-icons pl-2  text-white">file_download</i>
                </button>
              </a>
            </div>
            <div className="w-full md:w-[80%] mx-auto px-10 md:px-0   pt-10 md:pt-20">
              <h1 className="text-2xl md:text-4xl text-left pb-6 ">
                Products related to this item
              </h1>
              <ProductsCarousel
                title={'Workbook H series'}
                description={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus'
                }
                products={[
                  {
                    title: 'Ided pad Slim 3i 11th Gen(15,intel)',
                    category: 'H1',
                    description: 'Intel i5 Processor 10th Generation',
                  },
                  {
                    title: 'Ided pad Slim 3i 11th Gen(15,intel)',
                    category: 'H2',
                    description: 'Intel i5 Processor 10th Generation',
                  },
                  {
                    title: 'Ided pad Slim 3i 11th Gen(15,intel)',
                    category: 'H3',
                    description: 'Intel i5 Processor 10th Generation',
                  },
                  {
                    title: 'Ided pad Slim 3i 11th Gen(15,intel)',
                    category: 'H4',
                    description: 'Intel i5 Processor 10th Generation',
                  },
                ]}
              />
            </div>
          </div>
        ) : null}
        {/*-----------------------------------Look At me---------------------------------------*/}
        {showModal1 ? (
          <div className="w-full px-10 md:px-28 pt-10">
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              {/* <Image
                src={img1}
                height={500}
                alt="specification"
                className="w-full md:w-[30%]"
              /> */}
              {/* <Image
                src={img2}
                width={500}
                height={500}
                alt="specification"
                className="w-full md:w-[30%]"
              /> */}
              {/* <Image
                src={img3}
                height={500}
                alt="specification"
                className="w-full md:w-[30%]"
              /> */}
            </div>
            <div className="flex flex-col md:flex-row gap-2 pt-2 items-center justify-center">
              {/* <Image
                src={img4}
                height={500}
                alt="specification"
                className="w-full md:w-[30%]"
              /> */}
              <Image
                src={img5}
                height={500}
                alt="specification"
                className="w-full md:w-[30%]"
              />
              {/* <Image
                src={img6}
                width={500}
                height={500}
                alt="specification"
                className="w-full md:w-[30%]"
              /> */}
            </div>

            <div className="flex items-center justify-center pt-10 md:pt-28">
              <video
                className="border border-color:blue rounded-md"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                width="800"
                height="500"
                controls="controls"
                autoPlay="true"
              />
            </div>
            {/*}  <div className='mt-40 ' style={{width:'342px',height:'513px'}}>
               
                    <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: watchImg300
    },
    largeImage: {
        src: watchImg1200,
        width: 1200,
        height: 934
    }
}} /></div>*/}
          </div>
        ) : null}
      </div>

      <Footer />
    </main>
  );
};
export default Specification;

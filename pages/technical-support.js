import { Navbar, Footer } from 'components';
import rectangle from 'assets/Rectangle 1036 (3).jpg';
import Slider from 'react-slick';
import React, { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//import MacBook from 'assets/Introducing the new MacBook Air.mp4'
import Image from 'next/image';

const Macbook = 'assets/Introducing the new MacBook Air.mp4';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
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
      breakpoint: 820,
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
    className={`w-full lg:w-[80%] px-4 mx-auto h-36  mb-6  group cursor-pointer hover:shadow-lg md:px-10 lg:px-0`}
  >
    <div
      className={`w-full mt-6 md:mt-20 gap-10 transition duration-150 ease-in-out hover:scale-105 `}
    >
      <video
        className="border border-color:blue rounded-md"
        src={Macbook}
        width="600"
        height="300"
        controls="controls"
        autoPlay="true"
      />
      <div className="border-teal-600  cursor-pointer">
        <div className="py-2 md:py-4 text-3xl text-white font-semibold">
          <h2 className="text-2xl"> {product.title} </h2>
        </div>
        <div className={`py-2 text-sm md:text-lg text-white`}>
          {product.description}
        </div>
        {/* <hr className="w-[full border-1 border-gray-500" /> */}
      </div>
    </div>
  </div>
);

const ProductsCarousel = ({ products }) => {
  const [slider1] = [useRef()];

  return (
    <div className="mb-8 md:mb-10 pb-4 w-full">
      <div className="w-full">
        <Slider {...settings} ref={slider1} className="pb-4 md:pb-8">
          {products?.map((product, i) => (
            <div key={`product-${product.category}-${i}`} className="pb-4">
              {' '}
              <ProductCard product={product} />{' '}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default function support() {
  return (
    <main className="">
      <Navbar />
      <div className="">
        <Image
          className="w-[100%] h-auto"
          src={rectangle}
          alt="Techical Support"
        ></Image>
      </div>
      <div className="w-full lg:w-[80%] mx-auto  pt-6 md:pt-20 px-8 lg:px-0">
        <h1 className="text-white text-3xl md:text-5xl pl-2 md:pl-6 font-bold ">
          Support help center
        </h1>

        <ProductsCarousel
          products={[
            {
              title: 'Lorem ipsum',
              description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iste temporibus officiis placeat minima earum tenetur velit deleniti, totam ut facere nisi incidunt autem maiores accusamus beatae, fugiat nobis molestias!',
            },
            {
              title: 'Lorem ipsum',
              description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iste temporibus officiis placeat minima earum tenetur velit deleniti, totam ut facere nisi incidunt autem maiores accusamus beatae, fugiat nobis molestias!',
            },
            {
              title: 'Lorem ipsum',
              description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iste temporibus officiis placeat minima earum tenetur velit deleniti, totam ut facere nisi incidunt autem maiores accusamus beatae, fugiat nobis molestias!',
            },
            {
              title: 'Lorem ipsum',
              description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iste temporibus officiis placeat minima earum tenetur velit deleniti, totam ut facere nisi incidunt autem maiores accusamus beatae, fugiat nobis molestias!',
            },
          ]}
        />
      </div>
      <div className="w-full lg:w-[80%] mx-auto pt-10 md:pt-20 px-10 lg:px-0">
        <h1 className="text-white text-3xl md:text-5xl pl-2 md:pl-6 font-bold ">
          Description
        </h1>

        <ProductsCarousel
          products={[
            {
              title: 'Lorem ipsum',
              description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iste temporibus officiis placeat minima earum tenetur velit deleniti, totam ut facere nisi incidunt autem maiores accusamus beatae, fugiat nobis molestias!',
            },
            {
              title: 'Lorem ipsum',
              description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iste temporibus officiis placeat minima earum tenetur velit deleniti, totam ut facere nisi incidunt autem maiores accusamus beatae, fugiat nobis molestias!',
            },
            {
              title: 'Lorem ipsum',
              description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iste temporibus officiis placeat minima earum tenetur velit deleniti, totam ut facere nisi incidunt autem maiores accusamus beatae, fugiat nobis molestias!',
            },
            {
              title: 'Lorem ipsum',
              description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iste temporibus officiis placeat minima earum tenetur velit deleniti, totam ut facere nisi incidunt autem maiores accusamus beatae, fugiat nobis molestias!',
            },
          ]}
        />
      </div>
      <div className="w-full lg:w-[80%] mx-auto pt-10 lg:pt-20 px-10 lg:px-0">
        <h1 className="text-white text-xl md:text-4xl pl-0 md:pl-6 font-bold ">
          Step By Step Process Of Issue Resolving System
        </h1>
      </div>

      <div className="pt-4 md:pt-10  w-full text-white w-full md:w-[80%] mx-auto ">
        <div className="mb-4 md:mb-10  lg:flex  text-lg  px-10 md:px-0 lg:px-6">
          <p className="pt-4 text-sm md:text-lg">
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex pt-4 lg:pt-0">
            <a href="/assets/e3 11gen.pdf" type="application/pdf">
              {' '}
              <button
                className={`bg-[#007E9E] flex gap-2 text-sm md:text-xl cursor-pointer mr-10 ml-2 px-4 md:px-6 py-2 rounded-md transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out`}
              >
                {' '}
                Pdf
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="IconChangeColor"
                  height="20"
                  width="20"
                >
                  {' '}
                  <g>
                    {' '}
                    <path
                      fill="none"
                      d="M0 0h24v24H0z"
                      id="mainIconPathAttribute"
                      stroke="#ffffff"
                      filter="url(#shadow)"
                      stroke-width="0"
                    ></path>{' '}
                    <path
                      d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z"
                      id="mainIconPathAttribute"
                      stroke="#ffffff"
                      fill="#ffffff"
                    ></path>{' '}
                  </g>{' '}
                </svg>{' '}
              </button>
            </a>

            {/*}  <button className={`bg-[#007E9E] text-sm md:text-xl flex gap-2 cursor-pointer mr-10 px-2 md:px-6 py-2 rounded-md`}> Upload <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#ffffff" filter="url(#shadow)" stroke-width="0"/> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z" id="mainIconPathAttribute" stroke="#ffffff" fill="#ffffff"/> </g> </svg></button>*/}
          </div>
        </div>
        <div className="mb-4 md:mb-10  lg:flex  text-lg  px-10 md:px-0 lg:px-6">
          <p className="pt-2 md:pt-4 text-sm md:text-lg">
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex pt-4 lg:pt-0">
            <a href="/assets/e3 11gen.pdf" type="application/pdf">
              {' '}
              <button
                className={`bg-[#007E9E] flex gap-2 text-sm md:text-xl cursor-pointer mr-10 ml-2 px-4 md:px-6 py-2 rounded-md transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out`}
              >
                {' '}
                Pdf
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="IconChangeColor"
                  height="20"
                  width="20"
                >
                  {' '}
                  <g>
                    {' '}
                    <path
                      fill="none"
                      d="M0 0h24v24H0z"
                      id="mainIconPathAttribute"
                      stroke="#ffffff"
                      filter="url(#shadow)"
                      stroke-width="0"
                    ></path>{' '}
                    <path
                      d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z"
                      id="mainIconPathAttribute"
                      stroke="#ffffff"
                      fill="#ffffff"
                    ></path>{' '}
                  </g>{' '}
                </svg>{' '}
              </button>
            </a>

            {/*}   <button className={`bg-[#007E9E] text-sm md:text-xl flex gap-2 cursor-pointer mr-10 px-2 md:px-6 py-2 rounded-md`}> Upload <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#ffffff" filter="url(#shadow)" stroke-width="0"/> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z" id="mainIconPathAttribute" stroke="#ffffff" fill="#ffffff"/> </g> </svg></button>*/}
          </div>
        </div>
        <div className="mb-4 md:mb-10  lg:flex  text-lg  px-10 md:px-0 lg:px-6">
          <p className="pt-2 md:pt-4 text-sm md:text-lg">
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex pt-4 lg:pt-0">
            <a href="/assets/e3 11gen.pdf" type="application/pdf">
              {' '}
              <button
                className={`bg-[#007E9E] flex gap-2 text-sm md:text-xl cursor-pointer mr-10 ml-2 px-4 md:px-6 py-2 rounded-md transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out`}
              >
                {' '}
                Pdf
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="IconChangeColor"
                  height="20"
                  width="20"
                >
                  {' '}
                  <g>
                    {' '}
                    <path
                      fill="none"
                      d="M0 0h24v24H0z"
                      id="mainIconPathAttribute"
                      stroke="#ffffff"
                      filter="url(#shadow)"
                      stroke-width="0"
                    ></path>{' '}
                    <path
                      d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z"
                      id="mainIconPathAttribute"
                      stroke="#ffffff"
                      fill="#ffffff"
                    ></path>{' '}
                  </g>{' '}
                </svg>{' '}
              </button>
            </a>

            {/*}   <button className={`bg-[#007E9E] text-sm md:text-xl flex gap-2 cursor-pointer mr-10 px-2 md:px-6 py-2 rounded-md`}> Upload <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#ffffff" filter="url(#shadow)" stroke-width="0"/> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z" id="mainIconPathAttribute" stroke="#ffffff" fill="#ffffff"/> </g> </svg></button>*/}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[80%] mx-auto pt-6 lg:pt-20 px-10 lg:px-0">
        <h1 className="text-white text-3xl md:text-4xl pl-0 md:pl-6 font-bold ">
          Request Call Back For Technical Support
        </h1>
        <p className="text-white  mt-4 md:mt-10 w-[90%] mb-10 pl-0 md:pl-6 text-sm md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          asperiores quos dolorum assumenda quasi. Cumque quasi blanditiis eaque
          quidem facere, saepe est ullam maxime, quaerat dicta alias vero vitae
          iste.
        </p>
        <form className=" pl-0 md:pl-6 w-full text-white mb-10 md:mb-20 w-[100%]">
          <div className="flex flex-col md:flex-row">
            <input
              className=" bg-transparent text-white border-2 border-[#007E9E] text-md p-4 mr-10 w-full md:w-[30%]"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
            <input
              className="bg-transparent text-white  border-2 border-[#007E9E] text-md p-4 w-full md:w-[30%] mt-4 md:mt-0"
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Phone number"
            />
          </div>

          <input
            className="bg-transparent text-white  border-2 border-[#007E9E] text-md p-4 mt-10 w-full md:w-[63%]"
            type="text"
            name="other"
            id="other"
            placeholder="write something..."
          />
          <button className="mt-5 center bg-[#007E9E] text-xl cursor-pointer py-3  px-10 inline rounded-md block transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out">
            Submit
          </button>
        </form>
      </div>

      <div className="w-full lg:w-[80%] mx-auto  px-10 md:px-16 lg:px-6">
        <h1 className="text-white text-3xl md:text-4xl font-bold mt-4 lg:mt-20">
          Warranty With Pick And Drop Facility
        </h1>
        <p className="text-white mt-4 md:mt-10 text-sm md:text-lg">
          Warranty with pick and drop facility is a service offered by Ention to
          provide their customers with an added layer of convenience and peace
          of mind. Under this type of warranty, customers who experience issues
          with their products can have them picked up by the Ention or retailer,
          repaired or replaced, and then returned to their doorstep, all at no
          extra cost.
        </p>
      </div>

      <div className="w-full lg:w-[80%] mx-auto px-10 md:px-16 lg:px-6">
        <h1 className="text-white text-3xl md:text-4xl  font-bold mt-10 lg:mt-20">
          Book For Pickup Facility
        </h1>
        <p className="text-white  mt-4 md:mt-10 text-sm md:text-lg">
          Customers should check whether this service is available in their
          area, what the turnaround time is for repairs or replacements, and
          whether there are any limitations or exclusions on the warranty
          coverage. This type of warranty is particularly beneficial for those
          who do not have the time or means to transport their products to a
          service center.
        </p>
        <form className="  w-full text-white mb-10">
          <div className="w-full flex flex-col lg:flex-row mt-10">
            <h2 className="w-full lg:w-[30%] text-2xl md:text-3xl mr-10 mb-4 md:mb-10">
              Warranty Validation
            </h2>
            <div className="w-full lg:w-[40%] flex flex-col px-0 md:px-20 lg:px-0">
              <input
                className="w-full bg-transparent text-white border-2 border-[#007E9E] text-md px-6 py-4"
                type="text"
                id="name"
                name="name"
                placeholder="Seriel number"
              />
              <br />
              <p className="center text-xl ">OR</p>
              <input
                className="w-full mt-2 md:mt-5 bg-transparent text-white border-2 border-[#007E9E] text-md px-6 py-4"
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Invoice number"
              />
              <div className="center">
                <button className="  mt-6  bg-[#007E9E] text-white text-xl cursor-pointer py-3 px-6 inline rounded-md block transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
}

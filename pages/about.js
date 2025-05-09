import React from "react";
import { Navbar, Footer } from "components";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <main>
      <Navbar />
      {/* ====================== Header ======================  */}
      <div className="header mb-4 lg:mb-14 relative w-full min-h-[25vh] lg:min-h-[90vh]">
        {/* <Image src={hero} fill alt="Header" /> */}
      </div>

      {/* ====================== About Us ======================  */}
      <div className="pt-0 md:pt-10 text-center text-white mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold"> About Us</h2>
        <p className="mx-auto w-[70%] mt-2 md:mt-4 text-sm md:text-xl">
          Ention was incorporated on 28th Jan,2022 in India to provide laptop
          products with features that give users the ability to remain in touch
          with the latest trend of technology. Intending to fill in the market
          need for a professional, customer-focused computer company. The
          company emphasizes service and support to differentiate itself from
          more price-oriented computer companies.
        </p>
      </div>

      <div className="pt-0 md:pt-10 text-white mb-10 md:mb-12 w-full md:w-[70%] mx-auto">
        <div className="w-full flex flex-col md:flex-row px-10 md:px-0">
          <div className="">
            {/* <Image
              src={about2}
              height={1300}
              alt="About Us"
              className="rounded"
            /> */}
          </div>
          <div className="center px-0 md:px-5 ml-2 pt-4 md:pt-0">
            <p className="text-sm md:text-xl">
              We are on the brink of penetrating a lucrative market in a rapidly
              growing industry. The current trend towards an increase in the
              number of entrepreneurs and competition amongst existing companies
              presents an opportunity for company to penetrate this market.
            </p>
          </div>
          <div className="mt-10 md:mt-16">
            {/* <Image
              src={about1}
              height={1300}
              alt="About Us"
              className="rounded"
            /> */}
          </div>
        </div>
      </div>

      {/* ====================== COntact Us ======================  */}
      <div className="pt-0 md:pt-10 text-center text-white mb-0 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold"> Contact Us </h2>
        <p className="mx-auto w-[70%] mt-4">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing neque.{" "}
        </p>
        {/* <Image
          src={contactus}
          alt="Contact Us"
          width="5000"
          className="mt-4 md:mt-12 mb-4 md:mb-16"
        /> */}
        <center>
          <Link href="/corporate">
            <button className="w-[134px] h-[45px] text-lg bg-[#007E9E] rounded-full mb-10 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out">
              Contact Us
            </button>
          </Link>
        </center>
      </div>

      <Footer />
    </main>
  );
};

export default About;

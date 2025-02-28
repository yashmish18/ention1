import ChatBox from "components/icons/chat";
import Header from "components/layout/header";
import SmoothScroll from "components/SmoothScroll";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import WordBookPCImg from "assets/wordbook.png";
import MouseImg from "assets/mouse.png";
import AdapterImg from "assets/adapter.png";
import WarrantyGreyImg from "assets/warranty-grey.png";
import Footer from "components/layout/footer";
import ImageModal from "components/ImageModal";
import Image1 from "assets/E1/light-pc.png";
import Image2 from "assets/E1/pc-girl.png";
import Image3 from "assets/E1/unsplash_LlVwrX92xIQ.png";
import { Flip, Roll, Slide, Zoom } from "react-awesome-reveal";

const IMAGES = [Image1, Image2, Image3];

const Product = () => {
  const [isWordBook, setWordBook] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [imgs, setImgs] = useState([]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleViewClick = (images) => {
    setImgs(images);
    setModalOpen(true);
  };

  return (
    <>
      <Header />
      <SmoothScroll>
        <main
          className={"main overflow-x-hidden relative z-0 w-full !bg-white"}
        >
          <div className="w-full flex justify-center">
            <div className="flex w-[80%] flex-col items-center justify-center pt-20 lg:pt-32 gap-6 lg:gap-10">
              <Slide direction="up" cascade>
                <h3 className="text-[#070D2A] w-[280px] min-[480px]:w-full text-center text-[32px] sm:text-4xl lg:text-5xl font-bold">
                  Choose your new E Series
                </h3>
              </Slide>
              <Slide direction="up" cascade>
                <div className="flex flex-col items-center">
                  <ChatBox />
                  <h6 className="text-xl text-center w-[280px] min-[480px]:w-full lg:text-2xl font-bold text-[#312E2E] mt-8">
                    Have questions about buying E Series
                  </h6>
                  <a className="outline-none text-[16px] lg:text-xl text-[#1B9DBA] cursor-pointer mt-4">
                    Chat with a Ention Specialist
                  </a>
                </div>
              </Slide>
              <Slide direction="up" cascade>
                <div className="flex justify-center items-center">
                  <button
                    className={`text-black font-bold text-[18px] min-[540px]:text-xl lg:text-2xl p-4 lg:p-6 border-r-0 rounded-l-2xl`}
                    style={{
                      borderColor: isWordBook ? "#1B9BB7" : "#000",
                      borderWidth: isWordBook ? "2px" : "1px 0 1px 1px",
                    }}
                    onClick={() => setWordBook(true)}
                  >
                    WordBook
                  </button>
                  <button
                    className={`text-black font-bold text-[18px] min-[540px]:text-xl lg:text-2xl p-4 lg:p-6 border-l-0 rounded-r-2xl`}
                    style={{
                      borderColor: !isWordBook ? "#1B9BB7" : "#000",
                      borderWidth: !isWordBook ? "2px" : "1px 1px 1px 0px",
                    }}
                    onClick={() => setWordBook(false)}
                  >
                    SwapBook
                  </button>
                </div>
              </Slide>
            </div>
          </div>
          {isWordBook ? (
            <div className="flex w-full gap-4 justify-center mt-20">
              <Slide direction="left" cascade>
                <ProductCard
                  viewClick={() => handleViewClick(IMAGES)}
                  label={"E1"}
                />
              </Slide>
              <ProductCard
                viewClick={() => handleViewClick(IMAGES)}
                label={"E2"}
                className="hidden md:flex"
              />
              <Slide direction="right" cascade>
                <ProductCard
                  viewClick={() => handleViewClick(IMAGES)}
                  label={"E3"}
                  className={"hidden xl:flex"}
                />
              </Slide>
            </div>
          ) : (
            <div className="text-center w-full font-bold text-2xl min-[480px]:text-4xl p-10 min-[480px]:p-20">
              Coming Soon...
            </div>
          )}
          <div className="flex flex-col gap-0 lg:gap-20 mt-10 items-center">
            <Slide direction="up" cascade>
              <h1 className="text-[32px] min-[480px]:text-[42px] lg:text-5xl text-black font-bold">
                What&apos;s in the Box
              </h1>
            </Slide>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Roll cascade delay={400}>
                <BoxItem
                  name="Wordbook"
                  src={WordBookPCImg.src}
                  transform={1}
                />
              </Roll>
              <Roll cascade delay={200}>
                <BoxItem name="Mouse" src={MouseImg.src} transform={0.6} />
              </Roll>
              <Roll cascade>
                <BoxItem name="Charger" src={AdapterImg.src} transform={0.65} />
              </Roll>
            </div>
          </div>
          <Zoom cascade>
            <div className="flex flex-col items-center w-full mt-16">
              <div className="w-[80%] px-8 py-4 mt-16 border rounded-3xl flex flex-col sm:flex-row justify-center sm:justify-between items-center relative">
                <img
                  src={WarrantyGreyImg.src}
                  alt="warranty-img"
                  className="w-[320px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[390px] h-auto z-[2]"
                />
                <div className="flex flex-col items-center sm:items-start gap-8 lg:gap-16 w-full min-[540px]:w-[360px] text-center sm:text-left sm:w-[320px] lg:w-[360px] xl:w-[480px] ">
                  <p className="text-[16px] min-[360px]:text-lg min-[420px]:text-xl min-[540px]:text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#555555] leading-8 sm:leading-7 md:leading-8 lg:leading-10">
                    On-Site Warranty is Rather a Guaranty of Our Infallible
                    Faith in Our Machine.
                  </p>
                  <button
                    className="z-[2] w-[200px] h-[45px] sm:w-[180px] md:w-[200px] sm:h-[38px] md:h-[42px] xl:w-[248px] xl:h-[68px] rounded-3xl flex justify-center items-center text-white text-lg md:text-xl xl:text-2xl hover:scale-105  transition-all duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(34, 209, 238, 1)" }}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </Zoom>

          <Footer />
        </main>
      </SmoothScroll>
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        images={imgs}
      />
    </>
  );
};

const BoxItem = (props) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-[240px] h-[240px] min-[480px]:w-[320px] min-[480px]:h-[320px] md:w-[240px] md:h-[240px] lg:w-[320px] lg:h-[320px] xl:w-[400px] x:h-[400px] flex items-center justify-center">
        <img
          src={props.src}
          alt="boxitem-img"
          className={`w-full object-center scale-[${props.transform}]`}
        />
      </div>
      <p className="text-base text-black text-center">{props.name}</p>
    </div>
  );
};

export default Product;

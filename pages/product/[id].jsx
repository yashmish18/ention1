import Footer from "components/layout/footer";
import Header from "components/layout/header";
import AnalogImg from "assets/E1/analog.png";
import Win11Img from "assets/E1/win11.png";
import BezelsImg from "assets/E1/bezels.png";
import FullHDImg from "assets/E1/full-hd.png";
import IntelImg from "assets/E1/intel.png";
import WifiImg from "assets/E1/wifi.png";
import LightPcImg from "assets/E1/light-pc.png";
import PcGirlImg from "assets/E1/pc-girl.png";
import { useRouter } from "next/router";
import { Fade, Zoom } from "react-awesome-reveal";
import TestCarousel from "components/TestCarousel";
import gradientbg1 from "assets/gradient-bg1.png";
import ImageCaraousel from "components/ImageCaraousel";

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

const E1Images = [e1image1, e1image2, e1image3];
const E2Images = [e2image1, e2image2, e2image3];
const E3Images = [e3image1, e3image2, e3image3];

const ProductDetails = () => {
  const router = useRouter();

  const { id } = router.query;

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
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${gradientbg1.src})`,
          backgroundSize: "100% 100%",
        }}
      >
        <Header />
        <div className="overflow-x-hidden">
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center justify-center pt-40 p-2 w-[80%] text-white">
              <Zoom cascade>
                <div className=" text-3xl md:text-4xl lg:text-[50px] font-semibold md:whitespace-nowrap text-center">
                  Workbook&reg; {id} Series laptop
                </div>
              </Zoom>
              <Zoom cascade>
                <div className="py-12 lg:py-16 w-full xl:w-[1025px] text-[18px] sm:text-xl md:text-2xl lg:text-3xl text-center">
                  Computing experience made smarter for learners with
                  lightweight and thin that match with your fast-moving
                  lifestyle. Excellent performance in affordable and adaptable
                  budget with 14inch color rich display.
                </div>
              </Zoom>
            </div>
            <div className="w-full flex justify-center gap-6">
              <div className="w-[60%]">
                <TestCarousel />
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-6 mt-10">
              <div className="text-white text-2xl sm:text-3xl font-semibold mt-4 sm:mt-10">
                Coming Soon
              </div>
              <button className="text-white rounded-[30px] text-[20px] xl:text-[25px] flex items-center justify-center w-[160px] h-[40px] md:w-[220px] md:h-[50px] xl:w-[253px] xl:h-[68px] bg-[#070D2A] hover:bg-[#273dac] transition-all duration-300 ease-in-out">
                Buy Now
              </button>
            </div>
            <div className="flex justify-center w-[80%] mt-20">
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <div className="flex flex-col gap-4">
                  <Fade direction="left">
                    <ItemImage
                      img={AnalogImg}
                      label={
                        <p
                          className={`absolute text-center text-[32px] min-[450px]:text-[42px] lg:text-[52px] xl:text-[60px] font-bold`}
                        >
                          2 Analog microphone
                        </p>
                      }
                    />
                  </Fade>
                  <Fade direction="left">
                    <ItemImage
                      img={BezelsImg}
                      label={
                        <p
                          className={`absolute text-center text-[32px] min-[450px]:text-[36px] lg:text-[50px] font-bold`}
                        >
                          2-sided narrow bezels
                        </p>
                      }
                    />
                  </Fade>
                  <Fade direction="left">
                    <ItemImage
                      img={FullHDImg}
                      label={
                        <p
                          className={`absolute text-center font-bold text-[32px] min-[450px]:text-[36px] lg:text-[50px] bottom-4`}
                        >
                          14inch, full HD 1920x1080
                        </p>
                      }
                    />
                  </Fade>
                  <Fade direction="left">
                    <ItemImage
                      img={IntelImg}
                      label={
                        <div
                          className={`absolute text-center left-8 flex flex-col`}
                        >
                          <p className="text-[42px] lg:text-[66px] font-bold">
                            Intel
                          </p>
                          <p className="text-[24px] lg:text-4xl font-bold">
                            J4105
                          </p>
                        </div>
                      }
                    />
                  </Fade>
                </div>
                <div className="flex flex-col gap-4">
                  <Fade direction="right">
                    <ItemImage
                      img={Win11Img}
                      label={
                        <p
                          className={`absolute text-center text-[42px] lg:text-[60px] font-medium`}
                        >
                          Windows 11
                        </p>
                      }
                    />
                  </Fade>
                  <Fade direction="right">
                    <ItemImage
                      img={FullHDImg}
                      label={
                        <div
                          className={`absolute text-center bottom-4 flex flex-col`}
                        >
                          <p className="font-bold text-[32px] min-[450px]:text-[42px] lg:text-[66px]">
                            4500mah
                          </p>
                          <p className="font-bold text-[18px] min-[450px]:text-[24px] lg:text-[31px]">
                            Lathium-ion polymer battery
                          </p>
                        </div>
                      }
                    />
                  </Fade>
                  <Fade direction="right">
                    <ItemImage
                      img={WifiImg}
                      label={
                        <div
                          className={`absolute left-8 flex flex-col text-[24px] min-[450px]:text-[28px] xl:text-[40px]`}
                        >
                          <p className="font-bold">Dual band wifi</p>
                          <p className="font-medium">2.4GHz and 5GHz</p>
                        </div>
                      }
                    />
                  </Fade>
                  <Fade direction="right">
                    <ItemImage
                      img={LightPcImg}
                      label={
                        <p className="absolute font-bold text-[28px] min-[450px]:text-[32px] xl:text-[44px] bottom-4">
                          Thin and light{" "}
                          <span className="text-[16px] xl:text-xl">1.2kg</span>
                        </p>
                      }
                    />
                  </Fade>
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit mt-20 max-w-6xl mx-auto">
              <ImageCaraousel images={getImages(id)} />
              <div className="absolute w-[240px] sm:w-[320px] lg:w-[420px] xl:w-[560px] blur-bg-gradient rounded-[32px] lg:rounded-[60px] p-4 md:p-8 flex flex-col items-center gap-2 xl:gap-8 z-20 top-4 md:top-16 right-8 md:right-16">
                <p className="text-[24px] md:text-[32px]  font-bold text-white">
                  {id} Series
                </p>
                <p className="text-[14px] md:text-[18px]  font-normal text-white text-center">
                  Computing experience made smarter for learners with
                  lightweight and thin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const ItemImage = (props) => {
  const { img, text, label } = props;
  return (
    <div className="flex items-center justify-center relative text-white">
      <img src={img.src} alt="analog-img" className="w-[560px] h-auto" />
      {label}
      {/* <p className={`absolute text-center ${cn}`}>{text}</p> */}
    </div>
  );
};

export default ProductDetails;

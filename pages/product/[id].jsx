import Footer from "components/layout/footer";
import Header from "components/layout/header";
import { useRouter } from "next/router";
import { Zoom } from "react-awesome-reveal";
import dynamic from 'next/dynamic';
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
import E5Feature from "./features/E5Feature";
import E3Feature from "./features/E3Feature";
import E4Feature from "./features/E4Feature";

const E1Images = [e1image1, e1image2, e1image3];
const E2Images = [e2image1, e2image2, e2image3];
const E3Images = [e3image1, e3image2, e3image3];

const TestCarousel = dynamic(() => import('components/TestCarousel'), { ssr: false });

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
              {getFeatureComponent(id)}
            </div>
            <div className="relative w-full h-fit mt-20 max-w-6xl mx-auto mb-6">
              <ImageCaraousel images={getImages(id)} />
              <div className="absolute w-[240px] sm:w-[320px] lg:w-[420px] xl:w-[560px] blur-bg-gradient rounded-[32px] lg:rounded-[60px] p-4 md:p-8 flex flex-col items-center gap-2 xl:gap-8 z-20 top-4 md:top-16 right-8 md:right-16">
                <p className="text-[24px] md:text-[32px]  font-bold text-white">
                  {id} Series
                </p>
                <p className="text-[14px] md:text-[18px]  font-normal text-white text-center">
                  Computing experience made smarter for learners, lightweight
                  and thin that match with your fast-moving lifestyle.
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

export default ProductDetails;

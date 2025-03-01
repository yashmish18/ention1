import React, { useState } from "react";
import Laptop from "assets/Ention-Laptop-E3-Catalogue-design-2.png";
import { TbCirclePlus } from "react-icons/tb";
import corei5Img from "assets/i5.png";
import corei7Img from "assets/i7.png";
import amd5Img from "assets/amd-ryzen-5-logo.png";
import amd7Img from "assets/AMD-Ryzen-7-Category.png";
import { useRouter } from "next/router";
import CustomDropdown from "components/CustomDropdown";

const ProductCard = (props) => {
  const { label, className, viewClick, pdfCatalogLink } = props;
  const router = useRouter();
  const [processorSelection, setProcessorSelection] = useState("");
  const [memorySelection, setMemorySelection] = useState("");
  const [storageSelection, setStorageSelection] = useState("");

  return (
    <div className={`w-[360px] flex flex-col items-center ${className}`}>
      <div className="flex flex-col justify-evenly items-center w-[132px] h-[66px] rounded-t-full bg-[#F5F5F7] text-black text-3xl font-bold">
        {label}
      </div>
      <div className="flex flex-col items-center w-full  px-2 py-3 bg-[#F5F5F7] rounded-3xl gap-4">
        <div className="flex flex-col gap-4 items-center">
          <img
            className="w-[280px] h-full object-cover"
            src={Laptop.src}
            alt="product-image"
          />
          <a
            className="text-[#199AB7] text-sm flex items-center gap-2 cursor-pointer"
            onClick={viewClick}
          >
            View gallery <TbCirclePlus fontSize={"20px"} />
          </a>
          <a
            className="text-[#199AB7] text-sm flex items-center gap-2 cursor-pointer"
            href={pdfCatalogLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Product Catalogue
          </a>
        </div>
        <div className="flex items-center gap-4 mt-5">
          <img src={corei5Img.src} alt="cpu-img" className="w-[52px] h-full" />
          <img src={corei7Img.src} alt="cpu-img" className="w-[52px] h-full" />
          <img src={amd5Img.src} alt="cpu-img" className="w-[52px] h-full" />
          <img src={amd7Img.src} alt="cpu-img" className="w-[52px] h-full" />
        </div>
        <div className="w-[250px] flex flex-col gap-6 mt-10">
          <h3 className="text-2xl text-black font-semibold">
            Core Cpu 16Gb Memory 512Gb SSD Storage
          </h3>
          <p className="font-semibold text-lg mt-6">Processor</p>
          <CustomDropdown
            setValue={setProcessorSelection}
            value={processorSelection}
            items={["Intel", "Ryzen"]}
          ></CustomDropdown>

          <p className="font-semibold text-lg mt-6">Memory</p>
          <CustomDropdown
            value={memorySelection}
            setValue={setMemorySelection}
            items={["16 GB Unified Memory", "32 GB Unified Memory"]}
          />
          <p className="font-semibold text-lg mt-6">Storage</p>
          <CustomDropdown
            value={storageSelection}
            setValue={setStorageSelection}
            items={["512 GB SSD Storage", "1 TB SSD Storage"]}
          />
          <div className="flex flex-col gap-1 mt-5 ">
            <p>
              <b>Material - </b> Metal
            </p>
            <p>
              <b>Colour - </b>Silver
            </p>
            <Detail
              title={"Processor frequency"}
              content="2.4Ghz to Turbo 4.2Ghz"
            />
            <Detail
              title={"Graphic Memory"}
              content="Intel Iris Xe Graphics 1GB"
            />
            <Detail
              title={"Fingerprint reader"}
              content="Yes, located on touchpad"
            />
            <Detail
              title={"Operating system"}
              content="Pre-Installed Window 11 Pro"
            />
            <Detail
              title={"Wi-Fi"}
              content="M.2 interface, 802.11 a/b/g/n/a 2.4G and 5G Dual Band"
            />
            <Detail title={"Bluetooth	4.2 version"} />
            <Detail
              title={"USB	2"}
              content="USB 2.0 and 2 USB 3.0/3.1, Type C"
            />
            <Detail title={"HDMI"} content="HDMI, Support 4K 24HZ" />
            <Detail title={"Memory card"} content="Yes, one SD-MMC card Slot" />
            <Detail
              title={"Earphone port"}
              content="3.5mm jack, Mic in/Line Out"
            />
            <Detail title={"Mic"} content="Bulit-in, Analog microphone" />
            <Detail title={"Webcam"} content="Yes, 2.0Mmeet" />
            <Detail title={"Touchpad"} content="Yes, extra Large" />
            <Detail title={"Product Dimension"} content="360*240*15mm," />
            <Detail title={"Weight 	1.8KG"} />
            <Detail
              title={"Battery"}
              content="5000mah, 57.75Wh/11.4V, 3 Cells Lithium-ion polymer battery"
            />
          </div>
          <div className="text-black font-bold text-3xl text-center w-full mt-4">
            Coming soon
          </div>
          <button
            className=" w-[253px] h-[42px] rounded-xl flex justify-center items-center text-white text-lg hover:scale-105  transition-all duration-300 ease-in-out mt-4"
            style={{ backgroundColor: "rgba(34, 209, 238, 1)" }}
          >
            Buy Now
          </button>
          <a
            className="text-[#199AB7] text-sm font-bold cursor-pointer text-center mb-5"
            onClick={() => router.push(`/product/${label}`)}
          >
            Know more...
          </a>
        </div>
      </div>
    </div>
  );
};

const Detail = (props) => {
  return (
    <div className="text-base flex flex-col gap-1">
      <p>
        <b>{props.title}</b>
      </p>
      {props.content != null && <p>{props.content}</p>}
    </div>
  );
};

export default ProductCard;

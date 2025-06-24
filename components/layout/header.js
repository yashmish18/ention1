import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import logo from "assets/ention-logo.png";
import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [isShowModal, setShowModal] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [bgColor, setBgColor] = useState();
  const router = useRouter();

  useEffect(() => {
    const updatePosition = () => {
      const position = window.pageYOffset;
      setBgColor(position > 5 ? "none" : "#138397");
    };

    window.addEventListener("scroll", updatePosition);

    // Call once to initialize
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 100 && window.scrollY > lastScrollY) {
        setHidden(true); // Move navbar up on scroll down
      } else {
        setHidden(false); // Bring it back on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      style={{
        backdropFilter: "blur(10px)",
      }}
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }} // Move up instead of disappearing
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-20 fixed z-50 w-full flex pl-36 xl:pl-0 justify-start xl:justify-center items-center gap-6 xl:gap-10 min-[1320px]:gap-16 top-0 mb-10"
    >
      <Link href="/cart" className="flex items-center mr-4">
        <FaShoppingCart className="text-white text-2xl hover:text-[#01E9FE] transition" />
      </Link>
      <Link
        href="/"
        className="hidden lg:block font-semibold text-xl text-white hover:underline underline-offset-8 decoration-[#007E9E] decoration-4"
      >
        Home
      </Link>
      <Link
        href="/product"
        className="hidden lg:block font-semibold text-xl text-white hover:underline underline-offset-8 decoration-[#007E9E] decoration-4"
      >
        Products
      </Link>
      <Link
        href="/service/start-a-business?category=sole-proprietorship"
        className="hidden lg:block font-semibold text-xl text-white hover:underline underline-offset-8 decoration-[#007E9E] decoration-4"
      >
        Service
      </Link>
      <img
        src={logo.src}
        alt="ention-logo"
        className="w-[90px] h-auto object-none absolute left-10 min-[1420px]:static cursor-pointer"
        onClick={() => router.push("/")}
      />
      <Link
        href="/about"
        className="hidden lg:block font-semibold text-xl text-white hover:underline underline-offset-8 decoration-[#007E9E] decoration-4"
      >
        About Us
      </Link>
      <Link
        href="/technical-support"
        className="hidden lg:block font-semibold text-xl text-white hover:underline underline-offset-8 decoration-[#007E9E] decoration-4"
      >
        Support
      </Link>
      <Link
        href="/career"
        className="hidden lg:block font-semibold text-xl text-white hover:underline underline-offset-8 decoration-[#007E9E] decoration-4"
      >
        Career
      </Link>
      <div className="absolute hidden lg:flex items-center gap-2 right-10 ">
        <Link
          href={{
            pathname: "/login",
            query: {
              redirect: `/${pathname}?${searchParams?.toString()}`,
            },
          }}
        >
          <button className="w-24 h-8 bg-transparent border rounded-3xl border-white flex center text-white text-sm hover:scale-105  transition-all duration-300 ease-in-out">
            Login
          </button>
        </Link>
        <Link href={"/signup"}>
          <button className="px-8 h-8 bg-white border rounded-3xl border-white flex center text-black text-sm hover:scale-105  transition-all duration-300 ease-in-out">
            Register
          </button>
        </Link>
      </div>
      <button
        className="absolute right-10 text-white text-3xl"
        onClick={() => setShowModal(true)}
      >
        <IoMenu />
      </button>
      {isShowModal ? (
        <>
          <div className="w-full h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full h-full  max-w-full">
              {/*content*/}
              <div
                className="h-full border-0 shadow-lg relative flex flex-col w-full  outline-none focus:outline-none"
                style={{ backgroundColor: "#0FAFCA" }}
              >
                <div className="flex items-start justify-between p-5 ">
                  <img
                    src={logo.src}
                    alt="ention-logo"
                    className=" w-[90px] h-auto object-none "
                  />
                  <button
                    className="p-1 mr-5 mt-5 bg-transparent border-0 text-gray-700 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <GrClose />
                  </button>
                </div>
                <div className="absolute flex items-center gap-2 right-10 top-32 ">
                  <button
                    className="w-28 h-10 bg-transparent border rounded-3xl border-white flex center text-white text-lg hover:scale-105  transition-all duration-300 ease-in-out"
                    onClick={() =>
                      router.push(
                        `/login?${pathname}?${searchParams?.toString()}`
                      )
                    }
                  >
                    Login
                  </button>
                  <button
                    className="w-32 h-10 bg-white border rounded-3xl border-white flex center text-black text-lg hover:scale-105  transition-all duration-300 ease-in-out"
                    onClick={() => router.push("/signup")}
                  >
                    Register
                  </button>
                </div>
                <div className="flex flex-col items-center gap-5 mt-16">
                  <button
                    className="z-[2] w-[220px] h-[48px] rounded-3xl flex justify-center items-center text-black text-2xl hover:scale-105  transition-all duration-300 ease-in-out"
                    style={{ backgroundColor: "#fff" }}
                    onClick={() => router.push("/")}
                  >
                    Home
                  </button>
                  <button
                    className="z-[2] w-[220px] h-[48px] rounded-3xl flex justify-center items-center text-black text-2xl hover:scale-105  transition-all duration-300 ease-in-out"
                    style={{ backgroundColor: "#fff" }}
                    onClick={() => router.push("/product")}
                  >
                    Products
                  </button>
                  <button
                    className="z-[2] w-[220px] h-[48px] rounded-3xl flex justify-center items-center text-black text-2xl hover:scale-105  transition-all duration-300 ease-in-out"
                    style={{ backgroundColor: "#fff" }}
                    onClick={() =>
                      router.push(
                        "/service/start-a-business?category=sole-proprietorship"
                      )
                    }
                  >
                    Service
                  </button>
                  <button
                    className="z-[2] w-[220px] h-[48px] rounded-3xl flex justify-center items-center text-black text-2xl hover:scale-105  transition-all duration-300 ease-in-out"
                    style={{ backgroundColor: "#fff" }}
                    onClick={() => router.push("/about")}
                  >
                    About Us
                  </button>
                  <button
                    className="z-[2] w-[220px] h-[48px] rounded-3xl flex justify-center items-center text-black text-2xl hover:scale-105  transition-all duration-300 ease-in-out"
                    style={{ backgroundColor: "#fff" }}
                    onClick={() => router.push("/technical-support")}
                  >
                    Support
                  </button>
                  <button
                    className="z-[2] w-[220px] h-[48px] rounded-3xl flex justify-center items-center text-black text-2xl hover:scale-105  transition-all duration-300 ease-in-out"
                    style={{ backgroundColor: "#fff" }}
                    onClick={() => router.push("/career")}
                  >
                    Career
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </motion.div>
  );
};

// header
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
//                   <h3 className="text-3xl font-semibold">Modal Title</h3>
//                   <button
//                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button>
//                 </div>
//                 {/*body*/}
//                 <div className="relative p-6 flex-auto">
//                   <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
//                     I always felt like I could do anything. That's the main
//                     thing people are controlled by! Thoughts- their perception
//                     of themselves! They're slowed down by their perception of
//                     themselves. If you're taught you can't do anything, you
//                     won't do anything. I was taught I could do everything.
//                   </p>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Save Changes
//                   </button>
//                 </div>

export default Header;

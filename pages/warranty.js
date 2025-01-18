import React from 'react'
import { Navbar, Footer } from 'components'
import Image from 'next/image'
import Link from 'next/link'
import { useWindowSize } from 'react-use';
import hero from 'assets/warranty.png'


const Warranty = () => {
    const { width } = useWindowSize();

    return (
        <main >
            <Navbar />
            {/* ====================== Header ======================  */}
            <div className="header mb-8 lg:mb-10 relative w-full min-h-[25vh] md:min-h-[35vh] lg:min-h-[70vh]">
                <Image src={hero} fill alt="Header" />
            </div>
            {/* ====================== Warranty Program ======================  */}
            <div className="pt-0 md:pt-4 text-center text-white mb-10 md:mb-12">
                <h2 className="text-2xl lg:text-5xl font-semibold">  Ention Laptop Warranty Program</h2>
                <p className="text-sm md:text-lg mx-auto w-[80%] mt-4">
                    At Ention, you&apos;ll be part of a cutting-edge legal-tech team that values expert insights, innovative ideas, and intellectual tenacity. Join us on a mutually beneficial journey where you grow along with us.     </p>
            </div>
            {/* ====================== Warranty Lookup ======================  */}
            <div className="pt-0 lg:pt-10 text-left text-white mb-10 md:mb-12 mx-auto w-[80%]">
                <h2 className="text-2xl lg:text-5xl font-semibold">  Warranty Lookup</h2>
                <div className='w-full flex pt-6 md:pt-14 gap-6 md:gap-20'>
                    <div className='w-1/2'>
                        <h3 className='text-md md:text-xl text-white font-semibold mb-4'>Serial Number</h3>
                        <input className='w-full bg-transparent border-b-2 border-[#007E9E] px-4 py-2 text-sm' ></input>
                    </div>
                    <div className='w-1/2'>
                        <h3 className='text-md md:text-xl text-white font-semibold mb-4'>Invoice Number</h3>
                        <input className='w-full bg-transparent border-b-2 border-[#007E9E] px-4 py-2 text-sm' ></input>
                    </div>
                </div>
                <div className='flex items-center justify-center pt-10'><button className='px-8 py-2 rounded-md bg-[#007E9E] h-10'>Search</button></div>
            </div>

            {/* ====================== Warranty extension program  ======================  */}

            <div className="w-full md:w-[80%] mx-auto pt-4 lg:pt-10  text-white mb-10 md:mb-12 ">
                <h2 className="text-2xl md:text-5xl font-semibold text-center"> Warranty extension program </h2>
                <p className="text-sm md:text-lg mx-auto w-[80%] mt-4 text-center">
                An extended warranty is an additional warranty that you can purchase while you buy your desired laptop. You can extend this coverage for up to 2 more years by the Warranty extension program.

                </p>
                <div className='w-full md:w-[80%] pt-10 lg:pt-20 gap-4 md:px-0 px-10'>
                    <h3 className='text-md md:text-xl text-white font-semibold mb-4'>Additional 1 year warranty</h3>
                    <div className='w-full md:w-[80%] flex'>
                        <input className='w-full bg-transparent border-b-2 border-[#007E9E] px-2 md:px-4 py-2 text-sm' ></input>
                        <button className='px-4 md:px-8 py-0 md:py-2 ml-8 rounded-md bg-[#007E9E] h-8 md:h-12'>₹1,000</button>
                    </div>
                </div>
                <div className='w-full md:w-[80%] pt-10 gap-4 md:px-0 px-10'>
                    <h3 className='text-md md:text-xl text-white font-semibold mb-4'>Additional 2 year warranty</h3>
                    <div className='w-full md:w-[80%] flex'>
                        <input className='w-full bg-transparent border-b-2 border-[#007E9E] px-2 md:px-4 py-2 text-sm' ></input>
                        <button className='px-4 md:px-8 py-0 md:py-2 ml-4 md:ml-8 rounded-md bg-[#007E9E] h-8 md:h-12'>₹2,000</button>
                    </div>
                </div>
            </div>

            {/* ======================  Driver download option ======================  */}
            {/* <div className="pt-0 md:pt-10 text-left text-white mb-6 md:mb-12 mx-auto w-[80%]">
                <h2 className="text-2xl md:text-5xl font-semibold">Driver download option </h2>
                <p className="text-sm md:text-lg  pt-4" >Ention brings you smart utilities and the best Driver download option on your system. It allows scheduled and automatic driver downloads and keeps your system drivers up-to-date to enhance the overall system performance.
                </p>
                <div className='flex items-right justify-end'>
                    <input
                        type="text"

                       /* onChange={(e) => handleChange(e)}
                       
                        placeholder="&#x2315; Search by Model Number."
                        className="w-[40%] h-10 outline-none rounded-full px-6 py-2 text-white border-2 border-[#007E9E] mt-10 bg-transparent text-white"
                    />
                </div>
                <div className=' pt-10 md:pt-20'>
                    <h3 className='text-md md:text-xl  mb-4'>Model Number 1100</h3>
                  
                       <div className='w-[70%] flex items-center justify-center'> 
                       <ul className=' text-sm md:text-lg'>
                      <li className='flex gap-24 md:gap-28'>1. Wifi Driver <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#007e9e" filter="url(#shadow)" stroke-width="0"></path> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z" id="mainIconPathAttribute" stroke="#007e9e" fill="#007e9e"></path> </g> </svg></li>
                        <li className='pt-1 flex gap-9 md:gap-[35px]'>2. Memory Card Driver  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#007e9e" filter="url(#shadow)" stroke-width="0"></path> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z" id="mainIconPathAttribute" stroke="#007e9e" fill="#007e9e"></path> </g> </svg></li>
                        <li className=' pt-1 flex gap-[50px] md:gap-[52px]'>3. Finger Print Driver  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#007e9e" filter="url(#shadow)" stroke-width="0"></path> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z" id="mainIconPathAttribute" stroke="#007e9e" fill="#007e9e"></path> </g> </svg> </li>
                        </ul>
                       
                        </div>
                  
                    <hr className='w-full text-gray-500 my-6'></hr>
                    <h3 className='text-md md:text-xl  mb-4'>Model  Number  1200 </h3>
                    <div className='w-[70%] flex items-center justify-center'> 
                       <ul className='  text-sm md:text-lg'>
                      <li className='flex gap-24 md:gap-28'>1. Wifi Driver <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#007e9e" filter="url(#shadow)" stroke-width="0"></path> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z" id="mainIconPathAttribute" stroke="#007e9e" fill="#007e9e"></path> </g> </svg></li>
                        <li className='pt-1 flex gap-9 md:gap-[35px]'>2. Memory Card Driver  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#007e9e" filter="url(#shadow)" stroke-width="0"></path> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z" id="mainIconPathAttribute" stroke="#007e9e" fill="#007e9e"></path> </g> </svg></li>
                        <li className=' pt-1 flex gap-[50px] md:gap-[52px]'>3. Finger Print Driver  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#007e9e" filter="url(#shadow)" stroke-width="0"></path> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z" id="mainIconPathAttribute" stroke="#007e9e" fill="#007e9e"></path> </g> </svg> </li>
                        </ul>
                    
                        </div>
                    <hr className='w-full text-gray-500 my-6'></hr>
                </div>
            </div> */}
            <Footer />
        </main>
    )
}

export default Warranty

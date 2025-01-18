import { Footer, Navbar, Contact } from 'components';
//import React from 'react';
import React, { useRef } from 'react'
import rectangle from 'assets/annual1.png'
import rectangle2 from 'assets/annual2.jpg'
import Image from 'next/image';
import Link from 'next/link'


export default function complaince(){
    return(
        <main >
            <Navbar/>
            <div className='w-[80%] flex flex-col md:flex-row items-center justify-center mx-auto mt-10 overflow-x-hidden'>
                <div className='w-full md:w-[40%] lg:w-[35%]'>
                    <Contact />
                </div>
                <div className=' w-full md:w-[60%] lg:w-[65%] ml-0 md:ml-10 lg:ml-20 flex flex-col items-left justify-start text-white  my-auto overflow-x-hidden pt-10 lg:pt-0'>
                    <h2 className="text-3xl md:text-4xl font-bold text-left" >Annual Compilance</h2>
                    <p className='text-sm md:text-lg pt-6'>Company compliance is an important aspect that has to be taken into account while running a business. It is mandatory to adhere to all the ROC compliance to avoid penalties. All private limited companies, one-person companies, limited companies, and section 8 companies must maintain annual compliance with respect to the Companies Act of 2013. </p>
                </div>

            </div>
            <div className='w-[85%] flex  gap-2 md:gap-6 flex-col md:flex-row mx-auto mt-20'>
            <div className='w-full md:w-[50%] pt-4 md:pt-0'>
                    <Image className='h-auto rounded-md' src={rectangle} alt="Annual Compilance"></Image>
                </div>
                <div className='w-full my-auto  flex flex-col text-white md:w-[50%] '>
                    <p className='text-sm md:text-lg text-justify'>These company compliances are usually independent of the total turnover or the capital amount involved. The ROC compliance for registered private limited companies is mandatory. Not being able to adhere to the annual compliances for private limited companies may result in serious action on the firm.
               </p>
                </div>
                
                
            </div>
            <div className='w-[85%] flex flex-col md:flex-row gap-2 md:gap-6 mx-auto mt-10 pb-10'>
                <div className=' ml-15 flex flex-col text-white w-full md:w-[50%] my-auto'>
                    <p className='text-sm md:text-lg pt-0 text-justify '>In reality, it is tough to maintain all the annual compliances for private limited companies. That is why Vakilsearch is here to help with the annual filings of companies and provide information regarding company compliances. 
                    </p>
                </div>
                <div className='w-full md:w-[50%] pt-4 md:pt-0'>
                    <Image className='h-auto rounded-md' src={rectangle2}  alt="Annual Compilance"></Image>
                </div>
                
            </div>
         {/*}   <div className='w-full pt-20 pl-10 lg:pl-24 pb-20'>
                <p className='text-white text-sm lg:text-lg'>Pdf to download</p>
                <div className='flex gap-2'>
                <Link href="https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf" target="_blank" download> <button className={`bg-[#007E9E] flex gap-2 text-lg cursor-pointer  px-10 py-2 rounded-md text-white text-white transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out`}> Pdf<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#ffffff" filter="url(#shadow)" stroke-width="0"></path> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z" id="mainIconPathAttribute" stroke="#ffffff" fill="#ffffff"></path> </g> </svg> </button>
                </Link>
                <button className={`bg-[#007E9E] text-lg  text-white flex gap-2 cursor-pointer  px-8 py-2 rounded-md transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out`}> Upload </button>
    </div>
            </div>*/}
            <Footer/>
        </main>
        
    );
}
import { Footer, Navbar, Contact } from 'components';
//import React from 'react';
import React, { useRef } from 'react'


export default function complaince(){
    return(
        <main >
            <Navbar/>
            <div className='w-[80%] flex flex-col md:flex-row items-center justify-center mx-auto mt-10 overflow-x-hidden'>
                <div className='w-full md:w-[40%] lg:w-[35%]'>
                    <Contact />
                </div>
                <div className='w-full md:w-[60%] lg:w-[65%] ml-0 md:ml-10 lg:ml-20 flex flex-col items-left justify-start text-white  my-auto overflow-x-hidden pt-10 md:pt-0'>
                    <h2 className="text-3xl lg:text-4xl font-bold text-left" >Report</h2>
                    <p className='text-sm md:text-lg pt-6 text-justify'>A report is a document that provides an overview of a borrower&apos;s loan history, status, and performance. It typically includes details such as the loan amount, interest rate, repayment period, and any collateral that was put up for the loan.</p>
                </div>

            </div>
            <div className='w-[85%] flex  gap-2 md:gap-6 flex-col md:flex-row mx-auto mt-20'>
            <div className='w-full md:w-[50%] pt-4 md:pt-0'>
                    {/* <Image className='h-auto rounded-md' src={rectangle} alt="report"></Image> */}
                </div>
                <div className='w-full my-auto  flex flex-col text-white md:w-[50%] '>
                    <p className='text-sm md:text-lg text-justify'>An Ention business loan is a type of financing service that is designed specifically for businesses to help them fund their operations, expansions, or other capital needs. Typically, lenders evaluate a company&apos;s creditworthiness, financial history, and future projections before approving a loan.
               </p>
                </div>
                
                
            </div>
            <div className='w-[85%] flex flex-col md:flex-row gap-2 md:gap-6 mx-auto mt-10 pb-10'>
                <div className=' ml-15 flex flex-col text-white w-full md:w-[50%] my-auto'>
                    <p className='text-sm md:text-lg pt-0 text-justify '>Business loans can be secured or unsecured, with secured loans requiring collateral and unsecured loans relying solely on the borrower&apos;s creditworthiness. Business loans can be an essential tool for businesses to grow and achieve their goals.
                    </p>
                  </div>
                <div className='w-full md:w-[50%] pt-4 md:pt-0'>
                    {/* <Image className='h-auto rounded-md' src={rectangle2}  alt="report"w></Image> */}
                </div>
                
            </div>
          {/*}  <div className='w-full pt-20 pl-10 lg:pl-24 pb-20'>
                <p className='text-[#007E9E] textsm lg:text-lg'>Pdf to download</p>
                <div className='flex gap-2'>
                <Link href="https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf" target="_blank" download> <button className={`bg-[#007E9E] flex gap-2 text-lg cursor-pointer  px-6   py-2 rounded-md text-white text-white transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out`}> Pdf<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#ffffff" filter="url(#shadow)" stroke-width="0"></path> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z" id="mainIconPathAttribute" stroke="#ffffff" fill="#ffffff"></path> </g> </svg> </button>
                </Link>
                <button className={`bg-[#007E9E] text-lg  text-white flex gap-2 cursor-pointer  px-8 py-2 rounded-md  transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out`}> Upload </button>
        </div>
    </div>*/}
            <Footer/>
        </main>
        
    );
}
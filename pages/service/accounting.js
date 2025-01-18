import React, { useRef, useState } from 'react'
import { Navbar, Footer, Contact } from '../../components/index'
import styles from 'styles/Products.module.css'
import Image from 'next/image'

import benefits from 'assets/Benefits.jpg'
import data from 'lib/data'
import SingleQuestion from '../../components/Question'
import Link from 'next/link'
import { RiWhatsappFill } from 'react-icons/ri'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'


const Accounting = () => {
  const [questions, setQuestions] = useState(data)



  return (
    <main className={'main overflow-x-hidden relative'}>
      <Navbar />

      {/* ====================== Header ======================  */}
      <div className='w-full lg:w-[85%] md:flex  mx-10 md:mx-6 lg:mx-auto text-white mt-0 md:mt-20'>
        <div className="w-[80%] md:w-[50%] lg:w-[70%]  flex items-center justify-center py-10 md:py-20 ml-0 lg:ml-0">
          <div>  <h1 className="text-2xl md:text-4xl font-bold text-left pb-2 md:pb-6">ACCOUNTING SERVICES</h1>
            <p className='text-sm lg:text-lg py-2'>Now avail accounting and bookkeeping services for Bookkeeping of assets, sales, purchases, and expenses. Get your balance sheet, audit and director&apos;s report prepared, and Filing of ITR.</p>
            <span className="text-lg md:text-4xl font-semibold pt-6">Starting from : ₹2,990</span>
          </div>
        </div>
        <div className='w-[80%] md:w-[40%] lg:w-[30%]  ml-0 md:ml-6 lg:ml-14'>
          <Contact title='ACCOUNTING SERVICES' />

        </div>

      </div>
      <div className='w-full lg:w-[80%] mx-auto flex items-center justify-center text-white  pt-20 text-sm lg:text-lg'>
        <Link href="#overview" ><button className='w-16  md:w-32 lg:w-44  h-12 text-center bg-[#001B35] ml-4 md:ml-0 lg:ml-0' >Overview</button></Link>
        <Link href="#included" ><button className='w-16  md:w-32  lg:w-44  h-12 text-center bg-[#002541] ml-1 lg:ml-2'>What is included</button></Link>
        <Link href="#procedure" ><button className='w-16  md:w-28  lg:w-44 h-12 text-center bg-[#00526F] ml-1 lg:ml-2'>Procedure</button></Link>
        <Link href="#benefits" ><button className='w-16  md:w-28  lg:w-44 h-12 text-center bg-[#62AEC1] ml-1 lg:ml-2'>Benefits</button></Link>
        <Link href="#faq" ><button className='w-16   md:w-28 lg:w-44 h-12 text-center bg-[#7FBECE] ml-1 lg:ml-2 '>FAQ</button></Link>

      </div>
      <div id="overview" className='w-[80%] mx-auto  text-center text-white bg-[#001B35] mt-14  p-10 px-10 lg:px-40 '>
        <h2 className='text-2xl md:text-4xl '>Overview</h2>
        <p className=' text-sm md:text-lg pt-4'>This online accounting and bookkeeping service is intended to support you throughout the year with all of your accounting needs. Remember that having a well planned financial system can carry your business to greater heights. These tailormade bookkeeping services will take your finances to the next level.
 </p>
      </div>
      <div id="included" className='w-[80%] mx-auto  text-center text-white bg-[#002541]  mt-10  p-10 px-10 lg:px-40'>
        <h2 className='text-2xl md:text-4xl '>What is included</h2>
        <p className=' text-sm md:text-lg pt-4'>If you are an organisation with a growing team and finances, this bookkeeping service will prove indispensable. Any corporate organisation must maintain accurate books and accounts. Additionally, it is necessary for companies that are subject to an internal or statutory audit.
 </p>
      </div>
      <div id="procedure" className='w-[80%] mx-auto  text-center text-white  bg-[#00526F] mt-10  p-10 px-10 lg:px-40'>
        <h2 className='text-2xl md:text-4xl '>Procedure</h2>
        <p className=' text-sm md:text-lg pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
      </div>
      <div id="benefits" className='w-[80%] mx-auto  text-center text-white bg-[#62AEC1] mt-10  p-10 px-10 lg:px-40'>
        <h2 className='text-2xl md:text-4xl '>Benefits</h2>
        <p className=' text-sm md:text-lg pt-4'><span className="text-md md:text-xl font-semibold">A public record of ownership - </span>
When a work is copyrighted, it is registered on a public record, thereby establishing ownership.
<br/>
<br/>
<span className='text-md md:text-xl font-semibold '>
Copyright infringement - </span>
In the case of copyright infringement, the authors can sue infringers to secure their work and claim statutory compensation.
<br/>
<br/>
<span className='text-md md:text-xl font-semibold'>
Prevents importing of duplicates - </span>
The owners can record the registration with the Indian customs and prevent importing duplicate copies of the work.

</p>
      </div>
      <div className='w-[80%] lg:w-full flex items-center justify-center py-6 mx-auto'>
        <Image src={benefits} alt="/" />
      </div>
      <div id="faq" className='w-[80%] mx-auto  text-center text-white bg-[#7FBECE] mt-0  p-6 px-6 lg:px-40'>
        <h2 className='text-2xl md:text-4xl '>FAQ</h2>
        <div className='pt-6'>

          <section className='info'>
            {questions.map((question) => (
              <SingleQuestion key={question.id} {...question} />
            ))}
          </section>
        </div>
      </div>

      <div className='w-full flex items-center justify-center mt-10 lg:mt-20'>
        <div className=''>
          <Link href="https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf" target="_blank" download> <button className=' text-center bg-[#007E9E] text-white  px-4  text-sm md:text-lg py-2 rounded-md flex gap-2 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'>Pdf To Download <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#ffffff" filter="url(#shadow)" stroke-width="0"></path> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z" id="mainIconPathAttribute" stroke="#ffffff" fill="#ffffff"></path> </g> </svg>

          </button></Link>

          <div className="flex pt-2 pl-4 md:pl-8" >
            <Link href="https://web.whatsapp.com/send?text= Please Visit  "
              rel="nofollow noopener" target="_blank"
              className="share-icon">    <RiWhatsappFill className="text-white mr-4 " size={30} /> </Link>



            <Link href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-white mr-4 ' size={30} /></Link>
            <Link href="mailto:manshi.eveit@gmail.com?body=pdflink&subject=PDF" target="_blank" rel="noopener noreferrer"><HiMail className='text-white mt-1' size={30} /></Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  )

}
export default Accounting
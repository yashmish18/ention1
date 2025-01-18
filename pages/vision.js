import React from 'react';
import { Navbar, Footer } from 'components';
import Image from 'next/image';
import Link from 'next/link';
import thread from '../assets/Group 223.svg';
import about1 from 'assets/Rectangle 954 (2).jpg';
import about2 from '../public/assets/E1/e1_9.svg';
import contactus from 'assets/contactus.jpg';

const Mission = () => {
  return (
    <main className=" text-white overflow-x-hidden">
      <Navbar />

      <div className="mb-10 md:mb-10 flex items-center justify-center relative pt-4 md:pt-0">
        <video
          className=" lg:full-screen rounded-md "
          src="/assets/vision.mp4"
          /*controls="controls"*/
          autoPlay
          muted
          loop
        />
      </div>
      <div className="w-full md:w-[80%]  mx-auto px-10 md:px-0">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl pb-4 md:pb-10 text-center font-bold underline  ">
            Our Vision
          </h2>
          <p className="text-sm md:text-xl w-full lg:w-[90%] mx-auto text-justify ">
            We are ENTION, our brand is more than a name or logo. It&apos;s the
            expression of our culture and our values to develop the most
            promising computing brand. We are the new business with motive to
            make India as computing manufacture hub in coming future. We are
            delivering qualitive products with promptitude, cost effective and
            reliable product and services.
          </p>
          <p className="relative text-sm md:text-xl w-full lg:w-[90%] mx-auto text-justify pt-4">
            Our ultimate destination “India will be computing manufacturing hub
            in coming future”. Let&apos;s come together to make this dream come
            into reality.
          </p>
        </div>
        {/* <div className='w-full relative z-10 mt-10 md:mt-20 '>
                    <div className='w-full lg:w-[30%]  h-auto'>
                        <h2 className=' font-bold text-3xl  md:text-4xl'>We have best team
                            and best process</h2>
                        <p className='text-sm md:text-lg pt-6'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.</p>
                        <Link href="/about"><button className='hover:scale-105 text-[12px] md:text-lg font-semibold bg-[#007E9E] px-4 md:px-10 py-2 md:py-3 rounded-full mt-4 lg:mt-6 text-white mb-10 md:mb-0 lg:mb-0 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'>  Get Started</button></Link>

                    </div>
                    <div className='hidden lg:block relative w-full mt-0   '>
                        <div className=' relative -mt-64'>
                            <Image src={require('assets/img1.png')} width={1200} height={600} />
                        </div>
                       
                        <div className=' ml-28 ' >
                           
                            <div className='absolute top-36 -right-10 w-[30%]  pl-6' >
                       
                                <h2 className='text-lg lg:text-2xl pt-0 lg:pt-10 font-semibold'>Clear Communication</h2>
                                <p className='text-sm md:text-lg pt-3'>

                                    The best teams prioritize effective communication, ensuring that all members are on the same page, and sharing information, ideas, and feedback openly and transparently.

                                </p>
                          
                            </div>
                            <div className='absolute bottom-4 w-full  flex flex-col items-center justify-center ' >

                                <div className='relative w-[30%]  '>
                             
                                    <h2 className='text-lg md:text-2xl font-semibold'>Collaboration and Trust</h2>
                                    <p className='text-sm md:text-lg pt-3'>

                                        A culture of collaboration and trust leverages the diverse expertise of team members, encouraging synergy and collective problem-solving.

                                    </p>
                                </div>
                            </div>
                            <div className='w-[30%] absolute -bottom-24' >
                            
                                <h2 className='text-lg md:text-2xl  font-semibold'>Defined Processes and Roles</h2>
                                <p className='text-sm md:text-lg pt-3'>

                                    Together, they create a structured framework that promotes efficiency, accountability, and a shared understanding of expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='block lg:hidden'>
                    <div className=' pt-0 md:pt-10'>

<h2 className='text-lg md:text-2xl pt-0 '>Clear Communication</h2>
<p className='text-sm md:text-md pt-4'>

    The best teams prioritize effective communication, ensuring that all members are on the same page, and sharing information, ideas, and feedback openly and transparently.

</p>

</div>
<div className='w-full py-0 flex flex-col items-center justify-center'>

<div className='  pt-10  '>

    <h2 className='text-lg md:text-2xl'>Collaboration and Trust</h2>
    <p className='text-sm md:text-md pt-4'>

        A culture of collaboration and trust leverages the diverse expertise of team members, encouraging synergy and collective problem-solving.

    </p>
</div>
</div>
<div className=' pt-10'>

<h2 className='text-lg md:text-2xl'>Defined Processes and Roles</h2>
<p className='text-sm md:text-md pt-4'>

    Together, they create a structured framework that promotes efficiency, accountability, and a shared understanding of expectations.
</p>
</div>
                    </div>
                </div>
                <div className='w-full lg:w-[70%] mx-auto text-center mt-10 lg:mt-40 pb-10'>
                    <div className='w-full md:w-[80%] mx-auto'>
                        <h3 className=' font-bold text-3xl  md:text-4xl underline'>Our Story</h3>
                        <p className='text-sm lg:text-lg pt-6'>Our company was incorporated on 28th Jan,2022 in India to provide laptop products with features that give users the ability to remain in touch with the latest trend of technology. Intending to fill in the market need for a professional, customer-focused computer company. Ention™ is dynamic, entrepreneurial new business. Our company allows businesses and individuals to be informed of the latest trend in technology and grab it in the most accessible way through the internet. Our client can choose and shop a wide variety of laptops, computers, and business services through our website.</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 mt-10'>
                        <div className='w-full md:w-[50%] hover:scale-105 transition ease-in-out delay-150 hover:shadow-mission bg-[#F8F9FD] text-black  rounded-xl p-6 text-center'>
                            <h3 className='text-lg md:text-2xl font-bold'>
                                Business Services
                            </h3>
                            <p className='text-sm pt-4 text-[#64607D]'>
                                A range of professional offerings that help organizations thrive, providing tailored solutions to enhance efficiency, productivity, and growth.

                            </p>
                            <Link href="/service/start-a-business"><button className=' text-[12px] md:text-lg font-semibold bg-[#007E9E] px-10 py-2  rounded-lg mt-4 lg:mt-6 text-white  transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'>Connect</button></Link>

                        </div>
                        <div className='w-full md:w-[50%]  hover:scale-105 transition ease-in-out delay-150 hover:shadow-mission bg-[#F8F9FD] text-black  rounded-xl p-6 text-center'>
                            <h3 className='text-lg md:text-2xl font-bold'>
                                Product Services
                            </h3>
                            <p className='text-sm pt-4 text-[#64607D]'>
                                From development and manufacturing to distribution, customer support, and beyond, ensuring customer satisfaction and success.
                            </p>
                            <Link href="/products/laptops"><button className=' text-[12px] md:text-lg font-semibold bg-[#007E9E] px-10 py-2  rounded-lg mt-4 lg:mt-6 text-white  transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'>Connect</button></Link>

                        </div>
                    </div>
                </div> */}
        {/* About us section */}
        <div className="pt-10 md:pt-20 text-center text-white mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl pb-4 md:pb-4 text-center font-bold underline  ">
            About Us
          </h2>
          <p className="mx-auto w-full md:w-[90%] mt-2 md:mt-4 text-sm md:text-xl text-justify">
            We are Portable COMPUTING DEVICES MANUFACTURER and Business Services
            Consultant with Technology at its core to develop the most promising
            laptop and computer brand for quality and comprehensive, affordable
            price to establish and maintain an effective operational efficiency.
            We are always inquisitive to know what our customers want.
            Delivering qualitative products with promptitude; cost effective and
            reliable products services inclusive that fulfilling the need of
            every student, businesses and employees, alike.
            <br />
            <br />
            We are Ention™ to provide MADE IN INDIA Portable computing devices
            under own brand name Ention™ with quality, security and innovation
            that give users the ability to remain in touch with the latest trend
            of technology. <br />
            <br />
            Our vision is to create value based qualitative products for all
            members of society. We believe that, with efficient and quality
            solutions that help leverage to their existing business. Technology
            and co-creation, digital solutions inclusive services thereto; that
            can address society&apos;s needs by providing quality products and
            services to enable our partners and customers to compete effectively
            using the latest innovative technologies.
            <br />
            <br />
            To be a successful global information technology company trusted by
            its customers for service excellence, and collaborating with our
            customers to deliver innovative and value driven products and
            services to all and sundry.
          </p>
        </div>

        <div className="pt-0 md:pt-10 text-white mb-6 md:mb-10  w-full md:w-[90%] mx-auto">
          <div className="w-full flex flex-col md:flex-row px-0 md:px-0 gap-4 md:gap-10">
            <div className="w-full md:w-[50%]">
              <Image
                src={about2}
                width={400}
                height={300}
                alt="About Us"
                className="rounded"
              />
            </div>
            <div className="w-full md:w-[50%] flex items-center justify-center">
              <p className="text-sm md:text-xl text-justify">
                We are a dynamic, entrepreneurial new business. Intending to
                fill in the market need for a professional, customer-focused
                computer company. The company emphasizes service and support to
                differentiate itself. We are on the brink of penetrating a
                lucrative market in a rapidly growing industry. The current
                trend towards an increase in the number of entrepreneurs and
                competition amongst existing companies presents an opportunity
                for company to penetrate this market.
              </p>
            </div>
            {/* <div className="mt-10 md:mt-16">
                <Image src={about1} height={1300} alt="About Us" className='rounded' />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Mission;

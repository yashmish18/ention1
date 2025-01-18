import React,{useState} from 'react';
import {FaRegCalendarAlt} from 'react-icons/fa'
import {HiDownload} from 'react-icons/hi'
import Image from 'next/image'
import ReactPaginate from "react-paginate";
import JsonData from '../models/NEWS_DATA.json'
import moment from 'moment';
import { Navbar, Footer } from "components";
import { NodeNextRequest } from 'next/dist/server/base-http/node';

const News=() =>{
const [news, setNews] = useState(JsonData.slice(0,15));
const [pageNumber, setPageNumber] = useState(0);

const userPerPage = 3;
const pagesVisited = pageNumber * userPerPage;
const displayPost = news.slice(pagesVisited, pagesVisited + userPerPage)
.map((x) => {
    return(
    <div key={x} className="w-full h-full md:flex mb-10 rounded border border-[#007E9E] hover:bg-teal-600/10 pl-2 pr-4 py-4 gap-0 md:gap-4 lg:gap-0"> 
        <div className="md:w-[25%] my-auto">
               <Image src={x.image || ''} alt='Blog' width={500} height={500} className="max-w-full my-auto" />
           </div>
           <div className="md:w-[75%] lg:pl-5">
               <h3 className="text-xl font-semibold text-white pt-4 md:pt-0"> {x.title} </h3> 
               <p className="text-base font-semibold text-gray-300 mb-3"> {x.author} {x.date} </p>
               
               <h5 className="text-base text-gray-200"> {x.description} </h5>
               <button className="mt-4 px-3 py-[5px] rounded-md center space-x-3 text-white bg-[#007E9E]  hover:scale-105  transition duration-150 ease-in-out ">
                   <span>Download</span> 
                   <HiDownload size={20} />
               </button>
           </div>
       </div>
    )
});
const pageCount = Math.ceil(news.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const [search3, setNewSearch3] = useState("");
  const [showModal, setShowModal] = useState(false);

    return(
<>
<main>
      <Navbar />
<div className="px-6 lg:px-48 text-white bg-[#000F29] pt-0 lg:pt-16 pb-10 md:pb-20" id="section2" >
          <h1 className="text-2xl lg:text-4xl font-semibold text-center " data-animate="bounce-in-right" >
            News and Event
          </h1>
          <h3 className="text-center text-lg mt-5 max-w-[70%] mx-auto">
            We are a service company, you can choose and shop a wide variety of
            computers, laptops, and gadgets at all times and you have 24-hour
            access to us.
          </h3>
    
    </div>
      <section className="mt-0 px-6 lg:px-24 pb-14">
        {/*<div className="">
            <button className="px-7 py-[10px] rounded-md center space-x-3 text-white bg-[#007E9E]" >
                <span>Date Filter</span> 
                {showModal ? "" :  <FaRegCalendarAlt size={25}  onClick={() => setShowModal(true)}/>}
               {showModal ? ( <input className='date-input outline-none w-full bg-transparent text-white'
                    type="date"
                    id="event_date"
                    name="event_date"
                    onChange={(e) => setNewSearch3(e.target.value)} />
               ) : ""
    }
            </button>
  </div>*/}
        <div className="w-full my-10  mt-10 ">

              {displayPost}
              <ReactPaginate className='float-right flex gap-2 text-white text-lg font-semibold text-center'
              
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
        previousLabel={"< "}
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="arrow-item"
  
        nextClassName="arrow-item"
       
        nextLabel=">"
        activeClassName="currentlyactive"
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
       
      />

            </div>
            </section>

           
            <Footer />
    </main>
</>


    )
}
export default News;
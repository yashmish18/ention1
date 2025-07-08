import React, { useState, useEffect } from "react"


import { FeaturedPosts, PopularPosts } from "../../sections/index"
// import { LifestylePosts, TrendingPosts } from "../../sections/index" // Missing components

import { Footer, Navbar } from 'components'

import { Categories } from "components"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Blog () {
 {/*} const [posts, setPosts] = useState([])
  const [filterValue, setFilterValue] = useState([])
  const [showSearchbar, setShowSearchbar] = useState(false)

  useEffect(() => {
    getPosts().then((result) => {
      setPosts(result)
    })
  }, [])
*/}
{/*}  const handleSearch = (event) => {
    const searchValue = event.target.value
    const filterArray = posts.filter((e) => {
      return (
        e.keywords.toLowerCase().includes(searchValue) ||
        e.author.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    })
    if (searchValue === "") {
      setFilterValue([])
    } else {
      setFilterValue(filterArray)
    }
  }

*/}

    
  
    return (
      <>
        <main >
          <Navbar />

          <div className="">
            <h1 className='relative pt-10 lg:pt-28 pb-6 lg:pb-14 text-center text-white text-3xl md:text-6xl font-bold'>Lorem ipsum dolor sit</h1>
            <div className='header relative w-[75%] mx-auto' >
             <PopularPosts />
            </div>


            <div className="w-[80%] mx-auto ">
              <FeaturedPosts />

              <div className=" pt-14 md:pt-16 text-white w-full  text-white">
                <div className=" w-[70%]">
                  <h1 className="text-3xl md:text-5xl font-bold mb-0 lg:mb-12">Explore</h1>
                </div>
              </div>
              <div className=" w-full flex flex-col md:flex-row  text-white mt-0 lg:mt-10 mb-0 lg:mb-10">
               
                 <Categories />
                </div>

              {/* <TrendingPosts /> */}
              {/* <LifestylePosts /> */}
              


            </div>
          </div>
          <Footer />
        </main>
      </>
    )
  }



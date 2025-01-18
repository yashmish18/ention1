import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { CategoriesPostCard } from '../components';
import { getTrendingPosts } from '../services';
import Slider from 'react-slick';
//import Link from 'next/link'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  focusOnSelect: true,

  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MarketingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getTrendingPosts().then((result) => {
      setTrendingPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div className="mt-0">
      <div className="flex flex-row w-full">
        <Link href={`/blogs/category/marketing`}>
          {' '}
          <h2 className=" text-white  text-lg md:text-3xl font-semibold">
            Student
          </h2>
        </Link>
        <p className=" text-sm md:text-lg ml-8 text-white w-[70%] lg:w-[50%] pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis
        </p>
      </div>
      <hr className="w-full " />
      <div>
        <Slider {...settings}>
          {dataLoaded &&
            trendingPosts.map((post, index) => (
              <CategoriesPostCard key={index} post={post.node} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default MarketingPosts;

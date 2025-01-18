import React, { useState, useEffect } from 'react';

import { PopularPostCard } from '../components';
import { getFeaturedPosts } from '../services';

import Slider from 'react-slick';
//import Link from 'next/link'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ArrowLeft = (props) => (
  <button {...props} className="hidden ">
    <IoIosArrowDropleft />
  </button>
);
const ArrowRight = (props) => (
  <button {...props} className="text-white text-4xl float-right mt-4">
    <IoIosArrowDropright />
  </button>
);

const settings = {
  dots: false,
  infinite: true,

  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoPlay: true,
  focusOnSelect: true,
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
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
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
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
const PopularPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div className="mb-10 md:mb-0">
      <Slider {...settings}>
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <PopularPostCard key={index} post={post} />
          ))}
      </Slider>
    </div>
  );
};

export default PopularPosts;

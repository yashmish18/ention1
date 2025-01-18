import React, { useState, useEffect } from 'react';

import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';

import Slider from 'react-slick';
//import Link from 'next/link'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const settings = {
  dots: true,
  infinite: true,

  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  focusOnSelect: true,
  arrows: false,
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
const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div>
      <div className=" pt-10 md:pt-10">
        <h1 className="text-white text-3xl md:text-5xl  font-bold mt-0 md:mt-20">
          Features Blog
        </h1>
      </div>
      <div>
        <Slider {...settings}>
          {dataLoaded &&
            featuredPosts.map((post, index) => (
              <FeaturedPostCard key={index} post={post} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedPosts;

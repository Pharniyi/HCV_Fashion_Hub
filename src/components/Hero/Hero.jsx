import React from 'react';
import Image1 from '../../assets/hero/homepageBanner.jpg';
// import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image1,
    // img: '../assets/hero/homepageBanner.jpg',
    title: "Fashion Hub",
    description: "gyuftrd",
  },
  {
    id: 2,
    img: Image1,
    // img: '../assets/hero/homepageBanner.jpg',
    title: "Fashion Shop",
    description: "gyuftrd",
  },
  {
    id: 3,
    img: Image1,
    // img: '../assets/hero/homepageBanner.jpg',
    title: "Fashion Store",
    description: "gyuftrd",
  }
];

const Hero = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return (
    <div className="relative w-full h-[500px]">
      <Slider {...settings}>
        {ImageList.map((image) => (
          <div key={image.id} className="w-full h-[500px]">
            <div className="flex justify-between align-middle py-auto items-start h-full text-white">
              <div className="h-full w-1/2 flex align-middle my-auto py-auto px-6 bg-gray-800">
                <div className="w-full h-full content-center">
                  <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
                  <p className="text-lg">{image.description}</p>
                </div>
              </div>
              {/* </div> */}
              {/* <div className="flex-1 flex items-center"> */}
              <div className="flex-1 w-1/2 h-full"> 
                <img
                  src={image.img}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

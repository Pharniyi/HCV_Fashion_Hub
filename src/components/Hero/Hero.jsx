import React from 'react';
import Image1 from '../../assets/hero/homepageBanner.jpg';

const ImageList =[
    {
        id:1,
        img: Image1,
        // img: '../assets/hero/homepageBanner.jpg',
        title: "Fashion Hub",
        description:"gyuftrd",
    },
    {
        id:2,
        img: Image1,
        // img: '../assets/hero/homepageBanner.jpg',
        title: "Fashion Shop",
        description:"gyuftrd",
    }
];
const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100'>
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
      {ImageList.map((image) => (
        <img
          key={image.id}
          src={image.img}
          alt={image.title}
          className=" inset-0 w-full h-full object-cover"
        />
      ))}
    </div>
  );
};

export default Hero;

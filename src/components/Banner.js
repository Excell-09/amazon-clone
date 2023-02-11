import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full bg-gradient-to-t from-gray-300 to-transparent bottom-0 left-0 z-20 h-32'/>
      <Carousel
        className='z-30'
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <div>
          <img
            loading='lazy'
            src='http://links.papareact.com/gi1'
            alt='banner'
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='http://links.papareact.com/6ff'
            alt='banner'
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='http://links.papareact.com/7ma'
            alt='banner'
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
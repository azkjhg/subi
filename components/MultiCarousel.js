'use client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import React from 'react'
import Image from 'next/image';

const MultiCarousel = ({urls}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <Carousel infinite responsive={responsive}>
  {urls.map((item, i) => (
            <div key={i} className="parent-image">
          <Image className='child-image' key={i} src={item} width={2000} height={400} alt='매물 사진'/>
          </div>
        ))}
</Carousel>
  )
}

export default MultiCarousel
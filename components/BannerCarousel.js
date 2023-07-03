'use client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import React from 'react'
import Image from 'next/image';

const BannerCarousel = () => {
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
    <Carousel responsive={responsive}>
      <div className='커버아이템'>
  <div className="banner-info2 xs:w-96 ">
            <h1>양수비 공인중개사 사무소</h1>
            <p className="bg-green-300 rounded-sm">
              제주도의 부동산을 소개합니다.
            </p>
            <hr />
            <div className="banner-info-text text-2xl py-3">
              <p>010-8565-5310 / 064-753-5310</p>
              <h2>대표/공인중개사 양수비</h2>
            </div>
            <p className="banner-info-text-small self">등록번호: 50110-2020-00015<br />제주시 천수로63(일도이동)</p>
            
          </div>
          </div>
          <div className='커버아이템'>
          <div className="가게정보2">
            <Image
              alt="오시는 길"
              src="/오시는 길3.jpg"
              width={300}
              height={300}
              className='가게사진'
            />
          </div>
          </div>
          <div className='커버아이템'>
          <Image
              alt="가게 사진"
              src="/가게 사진2.jpg"
              width={500}
              height={400}
            />
          </div>
      
</Carousel>
  )
}

export default BannerCarousel
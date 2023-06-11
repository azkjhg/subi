'use client'
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image';

export default class MultiCarousel2 extends React.Component {
  render() {
    const { urls } = this.props;
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
        {urls.map((item, i) => (
            <Slide index={0}  key={i}>
          <Image className='child-image ' key={i} src={item} width={400} height={400} alt='매물 사진'/>
          </Slide>
        ))}
          
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
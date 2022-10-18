import React, { useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Image,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import style from './Hero.module.css';

export default function Hero() {
  // https://github.com/express-labs/pure-react-carousel
  const [slide, setSlide] = useState(0);

  return (
    <section className={style['carousel-container']}>
      <CarouselProvider
        visibleSlides={1}
        totalSlides={3}
        step={1}
        naturalSlideWidth={ window.innerWidth * 0.9 }
        naturalSlideHeight={ window.innerHeight * 0.7 }
        hasMasterSpinner
        currentSlide={slide}
        isPlaying
        infinite={true}
      >
        <Slider >
          <Slide
            index={0} 
            classNameHidden={ style["hidden-slide"]}
            classNameVisible={ style['visible-slide']}
          >
            <Image src={`${process.env.PUBLIC_URL}/assets/gelatto-text-filled-blue-edge.svg`} />
          </Slide>
          <Slide
            index={1} 
            classNameHidden={ style["hidden-slide"]}
            classNameVisible={ style['visible-slide']}
          >
            <Image src={`${process.env.PUBLIC_URL}/assets/gelatto-text-filled-blue-edge.svg`} />
          </Slide>
          <Slide
            index={2} 
            classNameHidden={ style["hidden-slide"]}
            classNameVisible={ style['visible-slide']}
          >
            <Image src={`${process.env.PUBLIC_URL}/assets/gelatto-text-filled-blue-edge.svg`} />
          </Slide>
        </Slider>
        <div className={ style['button-container'] }>
          <ButtonBack className={ style.button }>
            <ArrowBackIos className={ style.icon }/>
          </ButtonBack>
          <ButtonNext className={ style.button }>
            <ArrowForwardIos className={ style.icon }/>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </section>
  );
}

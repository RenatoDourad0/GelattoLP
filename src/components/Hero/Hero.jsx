import React from 'react';
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
  const slide = 0;

  return (
    <section className={style['carousel-container']}>
      <CarouselProvider
        visibleSlides={1}
        totalSlides={4}
        step={1}
        // hasMasterSpinner
        currentSlide={slide}
        isPlaying
        infinite={true}
        className="carousel-provider"
        naturalSlideWidth={1}
        naturalSlideHeight={0.65}
      >
        <Slider classNameTray={style['slider-container']}>
          <Slide index={0}>
            <Image
              tag="div"
              src={`${process.env.PUBLIC_URL}/assets/skate1.png`}
              className={style['image-container']}
              isBgImage={true}
            >
              <h2 className={ style['h2-text'] }>testetestestete</h2>
            </Image>
          </Slide>
          <Slide index={1}>
            <Image
              tag="div"
              src={`${process.env.PUBLIC_URL}/assets/surf1.png`}
              className={style['image-container']}
              isBgImage={true}
            >
              <h2 className={ style['h2-text'] }>testetestestete</h2>
            </Image>
          </Slide>
          <Slide index={2}>
            <Image
              tag="div"
              src={`${process.env.PUBLIC_URL}/assets/moto1.png`}
              className={style['image-container']}
            >
              <h2 className={ style['h2-text'] }>testetestestete</h2>
            </Image>
          </Slide>
          <Slide index={3}>
            <Image
              tag="div"
              src={`${process.env.PUBLIC_URL}/assets/wake1.png`}
              className={style['image-container']}
              isBgImage={true}
            >
              <h2 className={ style['h2-text'] }>testetestestete</h2>
            </Image>
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

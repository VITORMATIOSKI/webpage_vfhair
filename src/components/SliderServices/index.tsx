import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import 'swiper/css/effect-coverflow'

import { ImageContent, SliderMainSlider, TextContent } from './Styles'
import { ButtonInfo } from '../ButtoInfo'

export function CarouselServices() {
  const services = [
    {
      image: 'https://i.ibb.co/PzV139d/cabeloVF.png',
      title: 'Cabelo',
    },
    {
      image: 'https://i.ibb.co/jDs31sf/UnhasVF.png',
      title: 'Unhas',
    },
    {
      image: 'https://i.ibb.co/6ZshjD6/NoivasVf.png',
      title: 'Noivas',
    },
  ]
  return (
    <Swiper
      breakpoints={{
        1440: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        },
      }}
      loop={true}
      spaceBetween={10}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
    >
      {services.map((services, index) => (
        <SwiperSlide key={index}>
          <SliderMainSlider>
            <ImageContent>
              <img src={services.image} alt="" />
            </ImageContent>
            <TextContent>
              <h2>{services.title}</h2>
            </TextContent>
            <div>
              <ButtonInfo text="Saiba mais" page="/services" />
            </div>
          </SliderMainSlider>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

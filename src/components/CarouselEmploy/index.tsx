import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/hash-navigation'

import {
  CorouselContent,
  CorouselImage,
  CorouselInfo,
  CorouselMain,
} from './styles'
import { ButtonDirect } from '../ButtonDirect/Index'

export function CarouselEmploy() {
  const employ = [
    {
      key: 1,
      image: 'https://i.ibb.co/7nB80Bn/profissional-employ.png',
      name: 'Profissional 01',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae earum, suscipit eum a, molestiae perspiciatis eligendi quam laboriosam consequuntur in ducimus, molestias voluptatum. At doloribus tempore perferendis nostrum iure.',
    },
    {
      key: 2,
      image: 'https://i.ibb.co/wBvYyGF/Profissionais-VFHair2.png',
      name: 'Profissional 02',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae earum, suscipit eum a, molestiae perspiciatis eligendi quam laboriosam consequuntur in ducimus, molestias voluptatum. At doloribus tempore perferendis nostrum iure.',
    },
    {
      key: 2,
      image: 'https://i.ibb.co/HKTSvdq/Profissionais-VFHair.png',
      name: 'Profissional 03',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae earum, suscipit eum a, molestiae perspiciatis eligendi quam laboriosam consequuntur in ducimus, molestias voluptatum. At doloribus tempore perferendis nostrum iure.',
    },
  ]
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
      }}
    >
      {employ.map((employ, index) => (
        <SwiperSlide key={index}>
          <CorouselMain>
            <CorouselContent>
              <CorouselImage>
                <img src={employ.image} alt="" />
              </CorouselImage>
              <CorouselInfo>
                <h2>{employ.name}</h2>
                <p>{employ.description}</p>
                <div>
                  <ButtonDirect
                    link="https://wa.me/554736427194"
                    title="Agende seu horário"
                  />
                </div>
              </CorouselInfo>
            </CorouselContent>
          </CorouselMain>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

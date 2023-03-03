import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/Bs'
import { TypeAnimation } from 'react-type-animation'
import { useLottie } from 'lottie-react'
import whatsapp from '../../assets/whatsapp.json'

import {
  ContentFirstText,
  ContentIcons,
  FavoriteProducts,
  CardProducts,
  HistoryContent,
  HistorytextContent,
  HomeContent,
  HomeMain,
  SliderEmployees,
  SliderServices,
} from './styles'

import backgroundHome from '../../assets/background_home.png'
import FavoriteCard01 from '../../assets/Card-favoritos 1.png'
import FavoriteCard02 from '../../assets/Card-favoritos 2.png'
import HistorySection from '../../assets/1234.png'

import { CarouselEmploy } from '../../components/CarouselEmploy'
import { CarouselServices } from '../../components/SliderServices'
import { ButtonInfo } from '../../components/ButtoInfo'
import { Footer } from '../../components/Footer'

export function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: whatsapp,
  }

  const style = {
    width: 100,
    height: 100,
  }

  const { View } = useLottie(defaultOptions, style)
  return (
    <HomeMain>
      <HomeContent>
        <div className="content_principal_image">
          <img src={backgroundHome} alt="" />
        </div>
        <ContentFirstText className="mobile_icons_center">
          <p>
            A mais de 14 anos <br /> aumentando <br /> a sua <br />{' '}
          </p>
          <TypeAnimation
            sequence={[
              'Autoestima',
              2000,
              'Beleza',
              2000,
              'amor-próprio',
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="animation_principal"
          />

          <ContentIcons>
            <a
              href="https://www.facebook.com/vfhairbr"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare color="#3b5998" size={50} />
              vfhairbr
            </a>
            <a
              href="https://www.instagram.com/vf_hair_/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram color="#cd486b" size={50} />
              @vf_hair
            </a>
          </ContentIcons>
        </ContentFirstText>
      </HomeContent>
      <h1>PROFISSIONAIS</h1>

      <SliderEmployees>
        <CarouselEmploy />
      </SliderEmployees>

      <h1>Serviços</h1>

      <SliderServices>
        <CarouselServices />
      </SliderServices>

      <FavoriteProducts>
        <CardProducts>
          <div className="titleContent">
            <p>Produtos de beleza</p>
            <br />
            <TypeAnimation
              sequence={['Favoritos', 2000, 'mais vendidos', 2000]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="animation_principal"
            />
            <br />
            <p> de nossas clientes</p>
          </div>
          <div className="contentImage">
            <img src={FavoriteCard01} alt="" />
          </div>
        </CardProducts>
        <CardProducts>
          <div className="contentImage">
            <img src={FavoriteCard02} alt="" />
          </div>
          <div className="second_text_product">
            <p> conheça toda nossa linha de produtos</p>
            <div className="contentButton">
              <ButtonInfo text="Click aqui" page="/products" />
            </div>
          </div>
        </CardProducts>
      </FavoriteProducts>

      <HistoryContent>
        <HistorytextContent>
          <div className="ContentHistory">
            <h1 className="TitleHistory">Conheça nossa Historia</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              vel eaque quisquam eos maiores. Tenetur commodi provident natus.
              Corrupti aliquid optio molestiae ut voluptates nesciunt quos
              laudantium vel sed eligendi.
            </p>
            <div className="contentButton">
              <ButtonInfo text="Click aqui" page="/history" />
            </div>
          </div>
          <div className="ContentImageHistory">
            <img src={HistorySection} alt="" />
          </div>
        </HistorytextContent>
      </HistoryContent>
      <Footer />
      <div className="container_whatsapp">
        <a
          href="https://api.whatsapp.com/send?phone=5547988059087"
          target="_blank"
          rel="noreferrer"
        >
          {View}
        </a>
      </div>
    </HomeMain>
  )
}

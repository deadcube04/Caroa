import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import 'swiper/css' 
import './Carousel.css'
import camisaBranca from '../../assets/camisa-branca-com-detalhes.jpg'
import carr1 from '../../assets/carrosel-1.jpg'
import nordestina from '../../assets/nordestina.png'
import { Autoplay } from 'swiper/modules';

export function HomeCarousel() {
  return (
    <Swiper 
      slidesPerView={1} 
      loop={true} 
       autoplay={{
         delay: 3000, // 3 segundos
         disableOnInteraction: false,
          pauseOnMouseEnter: true,
       }}
      speed={1000} // Suaviza a transição entre os slides
      modules={[Autoplay]}
    >
      <SwiperSlide><img src={carr1} alt="Imagem 1" /></SwiperSlide>
      <SwiperSlide><img src={nordestina} alt="Ícone do Site" /></SwiperSlide>
      <SwiperSlide><img src={camisaBranca} alt="Camisa Branca" /></SwiperSlide>
      
    </Swiper>
  )
}

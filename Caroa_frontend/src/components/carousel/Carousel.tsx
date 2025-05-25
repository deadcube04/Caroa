import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import 'swiper/css' 
import './Carousel.css'
import carrosel1 from '../../assets/carrosel-1.jpg'
import carrosel2 from '../../assets/carrosel-2.png'
import carrosel3 from '../../assets/carrosel-3.png'
import { Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

export function HomeCarousel() {
  const navigate = useNavigate();
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
      <SwiperSlide>
        <img src={carrosel1} alt="imagem da coleção padrão caroá" style={{cursor: 'pointer'}} onClick={() => navigate('/colecao/1')} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carrosel2} alt="imagem para os produtos" style={{cursor: 'pointer'}} onClick={() => navigate('/produtos')} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carrosel3} alt="imagem para a coleção Nordestina da Caroá" style={{cursor: 'pointer'}} onClick={() => navigate('/colecao/2')} />
      </SwiperSlide>
    </Swiper>
  )
}

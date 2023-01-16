
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

import { Review } from "../atoms/Review";
import {FormattedMessage} from 'react-intl'
import ReactMarkdown from 'react-markdown'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import '../../../styles/reviews.scss';

export const Reviews = () => {
  return (
    <div className="reviews">
        <div className="container">
        <FormattedMessage id="reviews-title" >
            { 
              message => <ReactMarkdown className="reviews__title">
                {`${message}`}
              </ReactMarkdown>
            }
          </FormattedMessage>
        </div>
        <div className="container">
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                loop = {true}
                spaceBetween = {22}
                breakpoints = {{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }}
                navigation
                autoplay={{
                    delay: 6000,
                }}
                pagination={{
                    type: "bullets",
                    clickable: true,
                }}
            >
                <SwiperSlide>
                    <Review 
                        review = "“Con IT Globers contamos con el apoyo constante para todas las actividades que requiere un e-commerce, con ellos nuestras ventas aumentaron en promedio 25%.”"
                        name = "Roberto Vargas Rodriguez" 
                        position = "Gerente Comercial y Venta Omnicanal"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Review 
                        review = "“Implementamos por primera vez el desarrollo de cuentas shipper para Latinoamérica y gracias a ITGlobers, logramos integrar nuestra logística al ecommerce por medio de la gestión de órdenes y prealertas en el sistema.”"
                        name = "Nicole Saavedra" 
                        position = "Gerente de Operaciones"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Review 
                        review = "“I had a great experience working with the ITG team, they felt more like part of my team than an agency. Expectations, scope, change, and status were communicated effectively and frequently. I’d definitely recommend working with their team”"
                        name = "James Van Arsdale III" 
                        position = "Product Manager @ VTEX"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

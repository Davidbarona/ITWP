import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../../styles/testimony.scss"

import sony from "../../../assets/img/sony-latam.jpg";
import olimpica from "../../../assets/img/supermercados-olimpica.jpg";
import jumbo from "../../../assets/img/tiendas-jumbo.jpg";
import velez from "../../../assets/img/cueros-velez.jpg";
import chedraui from "../../../assets/img/chedraui-mexico.jpg";
import renaware from "../../../assets/img/renaware.jpg";
import jeffersPet from "../../../assets/img/jeffers.jpg";
import vtex from "../../../assets/img/vtex.jpg";
import {FormattedMessage} from 'react-intl'

export const Testimony = () => {
  return (
    <div className="testimony">
      <div>
      <FormattedMessage id="success-histories" >{message =>  <h2 className='testimony__main'>
          {message}
        </h2>}</FormattedMessage>
      </div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        autoplay={{
          delay: 6000,
        }}
        speed={800}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints = {{
          768: {
              slidesPerView: 3,
          },
          1024: {
              slidesPerView: 4,
          }
        }}
        loop
        className="testimony"
        pagination={{
          type: "bullets",
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className="testimony__image">
            <img
              src={sony}
              alt="soporte y mantenimiento"
              className="image_slider__testimony"
            />
          </div>
          <p className="testimony__title">Sony</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony__image">
            <img
              src={olimpica}
              alt="soporte y mantenimiento"
              className="image_slider__testimony"
            />
          </div>
          <p className="testimony__title">Olimpica</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony__image">
            <img
              src={jumbo}
              alt="soporte y mantenimiento"
              className="image_slider__testimony"
            />
          </div>
          <p className="testimony__title">Tiendas Jumbo</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony__image">
            <img
              src={velez}
              alt="soporte y mantenimiento"
              className="image_slider__testimony"
            />
          </div>
          <p className="testimony__title">Cueros Velez</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony__image">
            <img
              src={chedraui}
              alt="soporte y mantenimiento"
              className="image_slider__testimony"
            />
          </div>
          <p className="testimony__title">Chedraui México</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony__image">
            <img
              src={renaware}
              alt="soporte y mantenimiento"
              className="image_slider__testimony"
            />
          </div>
          <p className="testimony__title">Renaware</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony__image">
            <img
              src={jeffersPet}
              alt="soporte y mantenimiento"
              className="image_slider__testimony"
            />
          </div>
          <p className="testimony__title">Jefferspet</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony__image">
            <img
              src={vtex}
              alt="soporte y mantenimiento"
              className="image_slider__testimony"
            />
          </div>
          <p className="testimony__title">VTEX</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

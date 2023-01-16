import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import {FormattedMessage} from 'react-intl';
import ReactMarkdown from 'react-markdown'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../styles/client.scss";

import vtex from "../../../assets/img/vtex-logo.svg";
import meli from "../../../assets/img/meli-logo.svg";
import jumbo from "../../../assets/img/jumbo-client-logo.svg";
import metro from "../../../assets/img/metro-logo.svg";
import easy from "../../../assets/img/easy-logo.svg";
import sugo from "../../../assets/img/sugo-logo.svg";
import renaware from "../../../assets/img/rena-ware-logo.svg";
import rebaja from "../../../assets/img/la-rebaja-logo.svg";
import belcorp from "../../../assets/img/belcorp-logo.jpg";
import morado from "../../../assets/img/morado-logo.svg";
import velez from "../../../assets/img/velez-logo.svg";
import chedraui from "../../../assets/img/chedraui-logo.png";
import exito from "../../../assets/img/exito-logo.png";
import jeffers from "../../../assets/img/jeffers-logo.png";

export const Client = () => {

  return (
    <div className="client">
      <div className="container">
        <FormattedMessage id="clients-title" >
            { 
              message => <ReactMarkdown className="client__testimony">
                {`${message}`}
              </ReactMarkdown>
            }
          </FormattedMessage>
        
      </div>
      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          autoplay={{
            delay: 6000,
          }}
          speed={800}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints = {{
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 6,
            }
          }}
          loop
          className="client"
          pagination={{
            type: "bullets",
            clickable: true,
          }}
        >
          <SwiperSlide>
            <picture className="client__image">
              <img
                src={vtex}
                alt="soporte y mantenimiento"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture className="client__image">
              <img
                src={meli}
                alt="soporte y mantenimiento"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture className="client__image">
              <img
                src={jumbo}
                alt="soporte y mantenimiento"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture className="client__image">
              <img
                src={metro}
                alt="soporte y mantenimiento"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture className="client__image">
              <img
                src={easy}
                alt="soporte y mantenimiento"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__image">
              <img
                src={sugo}
                alt="soporte y mantenimiento"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__image">
              <img
                src={renaware}
                alt="soporte y mantenimiento"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__image">
              <img
                src={belcorp}
                alt="soporte y mantenimiento"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__image">
              <img
                src={morado}
                alt="soporte y mantenimiento"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__image">
              <img
                src={velez}
                alt="soporte y mantenimiento"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__image">
              <img
                src={chedraui}
                alt="soporte y mantenimiento"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__image">
              <img
                src={exito}
                alt="soporte y mantenimiento"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__image">
              <img
                src={jeffers}
                alt="soporte y mantenimiento"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__image">
              <img
                src={rebaja}
                alt="soporte y mantenimiento"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

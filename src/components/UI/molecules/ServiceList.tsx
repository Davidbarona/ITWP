import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ServiceItem } from "../atoms/ServiceItem"; 
import {FormattedMessage} from 'react-intl'

import maintenance from "../../../assets/img/soporte-y-mantenimiento.png";
import maintenanceDesktop from '../../../assets/img/soporte-y-mantenimiento-desktop.png'
import training from "../../../assets/img/capacitaciones.png";
import trainingDesktop from "../../../assets/img/capacitaciones-desktop.png";
import ui from "../../../assets/img/diseno-ux-ui-para-ecommerce.png";
import uiDesktop from "../../../assets/img/diseno-ux-ui-para-ecommerce-desktop.png";
import diagnosis from "../../../assets/img/diagnostico-de-ecommerce.png";
import diagnosisDesktop from "../../../assets/img/diagnostico-de-ecommerce-desktop.png";
import creation from "../../../assets/img/creacion-de-ecommerce.png";
import creationDesktop from "../../../assets/img/creacion-de-ecommerce-desktop.png";

import "../../../styles/service.scss";

export const ServiceList = () => {
  return (
    <div className="service">
      <div className="service__intro">
      <FormattedMessage id="value-services" >{message =>  <p className="service__paragraph">
          {message}
        </p>}</FormattedMessage>
      </div>
      <div className="container service__container">
        <p className="service__link">
          <strong>ITGLOBERS</strong>.com/services
        </p>
      </div>
      <div className="container service__container">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          autoplay={{
            delay: 6000,
          }}
          speed={800}
          spaceBetween={50}
          slidesPerView={1}
          loop
          className="slider__services"
          pagination={{
            type: "bullets",
            clickable: true,
          }}
        >
          
          <SwiperSlide>
            <ServiceItem 
              title = "slider-title-create"
              text = "slider-paragraph-create"
              desktopImage = { creationDesktop }
              image = { creation }
              altText = "soporte y mantenimiento"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem 
              title = "slider-title-Technical"
              text = "slider-paragraph-Technical"
              desktopImage = { diagnosisDesktop }
              image = { diagnosis }
              altText = "diagnóstico técnico para el ecommerce"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem 
              title = "slider-title-design"
              text = "slider-paragrah-design"
              desktopImage = { uiDesktop }
              image = { ui }
              altText = "Diseño UX/UI para el Ecommerce"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem 
              title = "slider-title-trainings"
              text = "slider-paragraph-trainings"
              desktopImage = {trainingDesktop }
              image = { training }
              altText = "Soporte y Mantenimiento"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem 
              title = "slider-tittle-support"
              text = "slider-paragraph-support"
              desktopImage = { maintenanceDesktop }
              image = { maintenance}
              altText = "Soporte y Mantenimiento"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

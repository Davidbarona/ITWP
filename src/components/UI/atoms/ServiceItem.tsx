import {FormattedMessage} from 'react-intl'
interface IServiceItem {
  title: string,
  text: string,
  desktopImage: any,
  image: any,
  altText: string
}

export const ServiceItem = ({
  title, 
  text, 
  desktopImage, 
  image, 
  altText
}: IServiceItem) => {

  console.log("Mi titulo", text);
  
  return (
    <div className="service__item">
      <div className="service__text">
        <FormattedMessage id={title} >
          { message => <h2 className="service__title">{ message }</h2> }
        </FormattedMessage>
        <FormattedMessage id="slider-subtitle-general">
          { message => <p className="service__subtitle">{message}</p> }
        </FormattedMessage>
        
        <FormattedMessage id={text} >
          { message => <p className="paragraph_service">{ message }</p> }
        </FormattedMessage>
      </div>
      <picture className="service__image">
        <source srcSet={desktopImage} media="(min-width: 768px)" />
        <img
          src={image}
          alt={altText}
          className="image_slider__service"
        />
      </picture>
    </div>
  )
}


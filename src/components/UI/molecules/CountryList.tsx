import '../../../styles/countries.scss';
import countriesImg from '../../../assets/img/flags-desktop.jpg';
import {FormattedMessage} from 'react-intl'

export const Countries = () => {
    
    return (
    <div className='container_country'>
      <div className='container__countries--text'>
            <FormattedMessage id="countries-title" >{message =>  <h2 className='title__country'>
          {message}
        </h2>}</FormattedMessage>
        <FormattedMessage id="counstries-paragraph" >{message =>  <p className='paragraph__country'>
          {message}
        </p>}</FormattedMessage>
        </div>
        <div className='container__image--country'>
            <img src={countriesImg}  alt="image_countries" loading='lazy' className='image__countries'/>
        </div>
    </div>
  )
}

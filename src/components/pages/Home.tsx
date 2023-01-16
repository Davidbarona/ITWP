import { Header } from '../templates/Header';
import { Value } from '../UI/organisms/Value'; 
import { Experience } from '../UI/organisms/Experience';
import { ServiceList } from '../UI/molecules/ServiceList';
import { Countries } from '../UI/molecules/CountryList';
import { Testimony } from '../UI/molecules/Testimony';
import { Client } from '../UI/molecules/Client';
import { Reviews } from '../UI/molecules/Reviews';
import { Footer } from '../UI/organisms/Footer';
import { Translate } from '../UI/molecules/translate';

export const Home = () => {
  return (
    <div className='homeContainer'>
      <Header />
      <Translate />
      <Value />
      <Experience />
      <ServiceList />
      <Countries /> 
      <Testimony />
      <Client />
      <Reviews />
      <Footer /> 
    </div>
  )
}
  
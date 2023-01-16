import { Menu } from '../UI/molecules/Menu';
import itglogo from '../../assets/img/itglobersLogo.svg';

import '../../styles/header.scss';
import '../../styles/languaje.scss';


export const Header = () => {

  return (
    <header className='header'>
      <div className="header__container">
        <div className="header__logo">
          <img className="header__picture" src={ itglogo } alt="logo-ItGlobers"/>
        </div>
        <Menu />
        
      </div>
    </header>
  )
}
  
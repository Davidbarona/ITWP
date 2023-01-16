import { useRef } from "react";
import {FormattedMessage} from "react-intl"
import menuBtn from "../../../assets/img/menu-btn.svg"; 

import "../../../styles/menu.scss";
import { Languaje } from "../atoms/Languaje";

export const Menu = () => {

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      const classList = menuRef.current.classList;
      classList.toggle("menu__navigation--active");
    }
  }

  return (
    <>
      <button className='menu__button' onClick={ toggleMenu }>
        <img src={ menuBtn } alt="" />
      </button>
      <nav className='menu__navigation' ref={ menuRef }>
        <ul className='menu__list'>
         <FormattedMessage id="header-about" >{message => <li className='menu__item'>{message}</li>}</FormattedMessage>
         <FormattedMessage id="header-solutions" >{message => <li className='menu__item'>{message}</li>}</FormattedMessage>
         <FormattedMessage id="header-ourWork" >{message => <li className='menu__item'>{message}</li>}</FormattedMessage>
         <FormattedMessage id="header-contactUs" >{message => <li className='menu__item'>{message}</li>}</FormattedMessage>
        </ul>
        <ul className="menu__list menu__list--work-with-us">
        <FormattedMessage id="button-workwithus" >{message => <li className="menu__item menu__item--work-with-us">{message}</li>}</FormattedMessage>
        </ul>
        <ul className="container_mobile_translate">
          <Languaje />
        </ul>
      </nav>
    </>
  );
};

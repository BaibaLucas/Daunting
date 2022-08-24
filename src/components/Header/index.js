import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/dauntingtlk.png'
import Burger from './Burger/index';
import Menu from './Menu/index';
import DesktopMenu from './DesktopMenu';


const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__container__dauntinglogo'>
          <NavLink to='/'>
            <img className='header__container__dauntinglogo-image' src={logo} alt='Daunting Logo' />
          </NavLink>
        </div>
        <div className='header__container__nav'>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <DesktopMenu />
        </div>
      </div>
    </div>
  )

};

export default Header;
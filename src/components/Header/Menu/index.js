import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = ({ open, setOpen }) => {
  const close = () => {
    setOpen(!open);
  }

  return (
    <div className={open ? 'menu active' : 'menu'}>
      <nav className='menu__nav'>
        <ul className='menu__nav__list'>
          <NavLink className='menu__nav__list__item' onClick={close} to ='/'>
            <li className='menu__nav__list__item__name'>
              Accueil
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item' onClick={close} to ='/recruitment'>
            <li className='menu__nav__list__item__name'>
              Recruitment
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item' onClick={close} to ='/progress'>
            <li className='menu__nav__list__item__name'>
              Progress
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item' onClick={close} to ='/about'>
            <li className='menu__nav__list__item__name'>
              About
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
};

export default Menu;
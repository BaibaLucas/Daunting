import React from 'react';
import { NavLink } from 'react-router-dom';


const DesktopMenu = ({ }) => {
  return (
    <div className='desktopmenu'>
      <nav className='desktopmenu__nav'>
        <ul className='desktopmenu__nav__list'>
            <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/recruitment'>
            <li className='desktopmenu__nav__list__item__name'>
              Recruitment
            </li>
            </NavLink>
            <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/progress'>
              <li className='desktopmenu__nav__list__item__name'>
                Progress
              </li>
            </NavLink>
            <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/about'>
              <li className='desktopmenu__nav__list__item__name'>
                About
              </li>
            </NavLink>
        </ul>
      </nav>
    </div>
  )
};

export default DesktopMenu;
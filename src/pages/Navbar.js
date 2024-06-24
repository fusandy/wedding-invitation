import { useEffect, useState } from 'react';
import {
  IconButton,
  CardMedia
} from '@mui/material';

import menu from '../assets/menu.svg'
import close from '../assets/close-menu.svg'
import './style/navbar.scss'

const NavBar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => setIsOpenMobileMenu(false))

    return () => window.removeEventListener('resize', () => setIsOpenMobileMenu(false))
  }, [])
  const mobileMenuHandler = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  }

  return (
    <div className='navbar-container'>
      <IconButton className='mobile-menu' onClick={() => mobileMenuHandler()}>
        {!isOpenMobileMenu && <CardMedia
          component='img'
          width='25px'
          height='25px'
          image={menu}
        />}
      </IconButton>
      <div className={`mobile-menu-container ${isOpenMobileMenu ? 'open' : 'close'}`}>
        <div className='close-button'>
          <IconButton className='mobile-menu' onClick={() => mobileMenuHandler()}>
            <CardMedia
              component='img'
              width='25px'
              height='25px'
              image={close}
            />
          </IconButton>
        </div>
        <div className='mobile-item'>
          THE WEDDING
        </div>
        <div className='mobile-item'>
        WEDDING DETAILS
        </div>
        <div className='mobile-item'>
          GALLERY
        </div>
        <div className='mobile-item'>
          GETTING THERE
        </div>
      </div>

      {/* desktop */}
      <div className='navbar-item'>
        THE WEDDING
      </div>
      <div className='navbar-item'>
      WEDDING DETAILS
      </div>
      <div className='navbar-item'>
        GALLERY
      </div>
      <div className='navbar-item'>
        GETTING THERE
      </div>
    </div>
  )
}

export default NavBar;
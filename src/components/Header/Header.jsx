import React from 'react'
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import style from './Header.module.css';
import Hero from '../Hero/Hero';

export default function Header() {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push('/');
  }

  return (
    <div className={ style['header-container'] }>
      <div className={ style['info-container'] }>
        <img
          src={`${process.env.PUBLIC_URL}/assets/gelatto-text-filled-blue-edge.svg`} alt="logo"
          className={ style.logo }
          onClick={ handleLogoClick }
        />
        <Nav />
      </div>
      <div className={ style['hero-container'] }>
        <Hero />
      </div>
    </div>
  )
}

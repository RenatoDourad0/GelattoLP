import React from 'react'
import Headroom from 'react-headroom';
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import style from './Header.module.css';
import Hero from '../Hero/Hero';

export default function Header() {
  // https://github.com/KyleAMathews/react-headroom
  const history = useHistory();

  const handleLogoClick = () => {
    history.push('/');
  }

  return (
    <section className={ style['header-container'] }>
      <Headroom>
        <div className={ style['info-container'] }>
          <img
            src={`${process.env.PUBLIC_URL}/assets/gelatto-text-filled-blue-edge.svg`} alt="logo"
            className={ style.logo }
            onClick={ handleLogoClick }
          />
          <Nav />
        </div>
      </Headroom>
      <Hero />
    </section>
  )
}

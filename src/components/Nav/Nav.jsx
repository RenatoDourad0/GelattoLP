import React from 'react'
import style from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={ style['nav-container'] }>
      <a className={ style.link } href="#sobre">Sobre </a>
      {' '}
      <a className={ style.link } href="#contato">Contato </a>
      {' '}
      <a className={ style.link } href="#produtos">Produtos </a>
    </nav>
  )
}

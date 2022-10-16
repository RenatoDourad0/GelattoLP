import React from 'react'
import Nav from './Nav';

export default function Header() {
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/assets/gelatto-text-filled-blue-edge.svg`} alt="logo" />
      <Nav />
    </>
  )
}

import React from 'react'
import homed from "./../img/Home.png"
import tar from "./../img/Tar.png"
import basket from "./../img/Basket.png"
import { NavLink } from 'react-router-dom'


export default function Footer() {
  return (
    <div className='footer-block'>

            <ul className='footer-ul'>

            <NavLink to="/">
                <li className='footer-li'><img className='img-footer' src={homed} alt="Home" /></li>
            </NavLink>

                <NavLink to="/menu">
                    <li className='footer-li'><img className='img-footer' src={tar} alt="Test" /></li>
                </NavLink>

                <NavLink to="/basket">
                <li className='footer-li'><img className='img-footer' src={basket} alt="Basket" /></li>
                </NavLink>

            </ul>

    </div>
  )
}
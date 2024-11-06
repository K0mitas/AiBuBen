import React from 'react'
import haynarus from "./../img/armnarus.png"
import rusnarm from "./../img/rusnaarm.png"
import zaim from "./../img/zaim.png"
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='menu-block'>

        <div className='menu-vniz-block'>

    <NavLink to="/rusarm">
        <button className='menu-button'>
            <img className='menu-img' src={haynarus} alt="haynarus" />
            <p className='menu-text'>Попробуйте написать предложенные русские слова армянскими буквами</p>
        </button>
    </NavLink>

    <NavLink to="/hayrus">
        <button className='menu-button'>
            <img className='menu-img' src={rusnarm} alt="rusnaarm" />
            <p className='menu-text'>Попробуйте написать предложенные армянские слова русскими буквами</p>
        </button>
    </NavLink>

    <NavLink to="/etymology">
      <button className='menu-button'>
            <img className='tar-img zaim-img' src={zaim} alt="rusnaarm" />
            <p className='menu-text'>Узнайте какие слова являются заимстованием и как они будут на армянском</p>
      </button>
    </NavLink>


    <div className='pusto'></div>

        </div>


    </div>
  )
}

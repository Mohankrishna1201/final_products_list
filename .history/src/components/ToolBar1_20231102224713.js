import React from 'react'
import "../ToolBar.css"
import { GiHamburgerMenu } from "react-icons/gi"
export default function ToolBar({ click }) {
  return (
    <div>
      <div className='header'>
        <GiHamburgerMenu className='imag' onClick={click} />
      </div>
    </div>
  )
}

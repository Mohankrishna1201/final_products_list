import React from 'react'
import "../ToolBar.css"
import { RxHamburgerMenu } from "react-icons/rx"
export default function ToolBar() {
  return (
    <div>
      <div className='header'>
        <RxHamburgerMenu className='imag' />
      </div>
    </div>
  )
}

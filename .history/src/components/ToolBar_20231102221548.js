import React from 'react'
import "../ToolBar.css"
import { GiHamburgerMenu } from "react-icons/gi"
export default function ToolBar() {
  return (
    <div>
      <div className='header'>
        <GiHamburgerMenu />
      </div>
    </div>
  )
}

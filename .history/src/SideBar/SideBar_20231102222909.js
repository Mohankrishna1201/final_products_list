import React from 'react'
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import { GiConverseShoe } from "react-icons/gi"
import "./SideBar.css"
function SideBar({ handleChange }) {
    return (
        <section className="sidebar">



            <GiConverseShoe className="logo-container" />

            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />

        </section>
    )
}
export default SideBar;
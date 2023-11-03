import React from 'react'
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import "./SideBar.css"
function SideBar({ handleChange }) {
    return (
        <section className="sidebar">

            <div className="logo-container">

                <img src="./Shoe Reps.png" />
            </div>
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />

        </section>
    )
}
export default SideBar;
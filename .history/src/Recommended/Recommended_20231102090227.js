import React from 'react'
import "./Recommended.css"
import Button from '../components/Button'
export default function Recommended({ handleClick }) {
    return (
        <div>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-flex'>
                <Button onClickHandler={handleClick} value="All products" title="All products" />
                <Button onClickHandler={handleClick} value="nike" title="Nike" />
                <Button onClickHandler={handleClick} value="vans" title="vans" />
                <Button onClickHandler={handleClick} value="adidas" title="Adidas" />
                <Button onClickHandler={handleClick} value="puma" title="Puma" />

            </div>
        </div>
    )
}

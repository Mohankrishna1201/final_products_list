import React from 'react'
import "./Recommended.css"
import Button from '../components/Button'
export default function Recommended({ handleClick }) {
    return (
        <div>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-flex'>
                <button className='btn' handleClick={handleClick}>All Products</button>
                <Button onClickHandler={handleClick} value="Nike" title="Nike" />

            </div>
        </div>
    )
}

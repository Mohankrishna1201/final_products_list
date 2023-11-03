import React from 'react'
import "./Recommended.css"
export default function Recommended({ handleClick }) {
    return (
        <div>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-flex'>

                <button className='btn' handleClick={handleClick}>Nike</button>
                <button className='btn' handleClick={handleClick}>Puma</button>
                <button className='btn' handleClick={handleClick}>Adidas</button>
                <button className='btn' handleClick={handleClick}>sparx</button>
            </div>
        </div>
    )
}

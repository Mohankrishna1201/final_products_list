import React from 'react'
import "./Category.css";
export default function Category() {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div>
                <label className='"sidebar-label-container'>

                    <input type="radio" name="test" id="" />
                    <span className='checKmark'>ALL</span>
                </label>

                <label className='"sidebar-label-container'>

                    <input type="radio" name="test" id="" />
                    <span className='checKmark'>ALL</span>
                </label>
                <label className='"sidebar-label-container'>

                    <input type="radio" name="test" id="" />
                    <span className='checKmark'>ALL</span>
                </label>
            </div>

        </div>
    )
}

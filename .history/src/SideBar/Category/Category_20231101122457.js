import "./Category.css"
import React from 'react'

export default function Category() {
    return (
        <div className="sidebar-title">
            <h2 className="sidebar-title"> Category</h2>

            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test"></input>
                    <span className="checkmark"></span> All
                </label>
            </div>


        </div>
    )
}

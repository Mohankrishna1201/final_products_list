import React from 'react'
import "./Colors.css"
export default function Colors() {
    return (
        <div className="ml">
            <h2 className="sidebar-title price-title"> Price</h2>
            <label className="sidebar-label-container">
                <input type="radio" name="test"></input>
                <span className="checkmark"></span> All
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test"></input>
                <span className="checkmark"></span> black
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test"></input>
                <span className="checkmark"></span> blue
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test"></input>
                <span className="checkmark"></span> red
            </label>
        </div>
    )
}

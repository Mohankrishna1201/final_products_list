import React from 'react'
import "./Colors.css"
import InputD from '../../components/InputD'
export default function Colors({ handleChange }) {
    return (
        <div className="ml">
            <h2 className="sidebar-title color-title"> Colours</h2>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="" name="test3" />
                <span className="checkmark"></span>All
            </label>

            <InputD
                handleChange={handleChange}
                value="black"
                title="Black"
                name="test3"
                color="black"
            />
            <InputD
                handleChange={handleChange}
                value="red"
                title="Red"
                name="test3"
                color="red"
            />
            <InputD
                handleChange={handleChange}
                value="green"
                title="Green"
                name="test3"
                color="green"
            />
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="white" name="test3" />
                <span className="checkmark" style={{ backround: "white", border: "2px solid black" }}></span> White
            </label>


        </div>
    )
}

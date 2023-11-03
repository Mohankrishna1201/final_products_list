import React from 'react'
import "./Colors.css"
import InputD from '../../components/InputD'
export default function Colors({ handleChange }) {
    return (
        <div className="ml">
            <h3 className="sidebar-title color-title"> Colours</h3>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="" name="test3" />
                <span className="checkmark all"></span> <p className="txt"> All</p>
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
                <span className="checkmark" style={{ backgroundColor: "white", border: "2px solid black" }}></span> <p className="txt"> white</p>
            </label>


        </div>
    )
}

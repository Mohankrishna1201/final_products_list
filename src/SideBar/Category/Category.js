
import InputD from "../../components/InputD";
import "./Category.css"
import React from 'react'

function Category({ handleChange }) {
    return (
        <div className="sidebar-title">
            <h3 className="sidebar-title"> Category</h3>

            <div>

                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark "></span><p className="txt"> All</p>
                </label>
            </div>

            <InputD
                handleChange={handleChange}
                value="sneakers"
                title="Sneakers"
                name="test"
            />
            <InputD
                handleChange={handleChange}
                value="flats"
                title="Flats"
                name="test"
            />
            <InputD
                handleChange={handleChange}
                value="sandals"
                title="Sandals"
                name="test"
            />
            <InputD
                handleChange={handleChange}
                value="heels"
                title="Heels"
                name="test"
            />

        </div>
    )
}

export default Category;
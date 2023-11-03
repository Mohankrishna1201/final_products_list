
import InputD from "../../components/InputD";
import "./Category.css"
import React from 'react'

function Category() {
    return (
        <div className="sidebar-title">
            <h2 className="sidebar-title"> Category</h2>

            <div>

                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>All
                </label>
            </div>


        </div>
    )
}

export default Category;
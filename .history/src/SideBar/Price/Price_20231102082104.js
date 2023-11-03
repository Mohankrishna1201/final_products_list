import React from 'react'
import "./Price.css";
import InputD from '../../components/InputD';
export default function Price({ handleChange }) {
    return (
        <div className="mlp">
            <h3 className="sidebar-title price-title"> Price</h3>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="" name="test2" />
                <span className="checkmark"></span><p className="txt"> All</p>
            </label>

            <InputD
                handleChange={handleChange}
                value={50}
                title="$0-50"
                name="test2"
            />
            <InputD
                handleChange={handleChange}
                value={100}
                title="$50-100"
                name="test2"
            />
            <InputD
                handleChange={handleChange}
                value={150}
                title="$100-150"
                name="test2"
            />
            <InputD
                handleChange={handleChange}
                value={200}
                title="over $150"
                name="test2"
            />
        </div>
    )
}

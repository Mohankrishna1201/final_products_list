import React, { useState } from 'react';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import { GiConverseShoe } from "react-icons/gi";
import "./SideBar.css";

function SideBar({ handleChange }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <section className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <GiConverseShoe className="logo-container" />
                <button className="toggle-button" onClick={toggleSidebar}>
                    {isOpen ? 'Close' : 'Open'} Sidebar
                </button>
            </div>

            {isOpen && (
                <div className="sidebar-content">
                    <Category handleChange={handleChange} />
                    <Price handleChange={handleChange} />
                    <Colors handleChange={handleChange} />
                </div>
            }
        </section>
    );
}

export default SideBar;

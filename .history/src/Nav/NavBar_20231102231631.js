import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = ({ handleInputChange, query, click }) => {
    return (
        <nav>

            <div>
                <div className='header'>
                    <GiHamburgerMenu className='image' onClick={click} />
                </div>
            </div>
            <div className="nav-container">
                <input
                    className="search-input"
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="Enter your search shoes."
                />
            </div>
            <div className="profile-container">
                <a href="#">
                    <FiHeart className="nav-icons" />
                </a>
                <a href="">
                    <AiOutlineShoppingCart className="nav-icons" />
                </a>
                <a href="">
                    <AiOutlineUserAdd className="nav-icons" />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
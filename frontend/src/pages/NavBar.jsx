import react, {useState, useEffect} from "react";
import { FaBell } from "react-icons/fa";

import profile from "../assets/react.svg";
import "../assets/NavBar.css";

function NavBar(){

    return(
        <nav className = "navbar">
            <div className = "navbar__top-section">
                <div className = "navbar__profile-container">
                    <div className = "img-container">
                        <img src = {profile}></img>
                    </div>
                    <div className = "username">Trinh Hiep</div>
                </div>
                <div className = "navbar__notification-container">
                    <FaBell/>
                </div>
            </div>
            <div className = "navbar__index">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Team</li>
                    <li>Draw</li>
                    <li>Note</li>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;
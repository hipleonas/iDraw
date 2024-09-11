import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import DrawBoard from "./DrawBoard";
import {FaSearch} from "react-icons/fa";
import "../assets/MainPage.css";

function MainPage(){
    return (
        <div className = "main-page__main-container">
            <NavBar/>
            <div className = "main-page__search-n-create-board-container">
                <div className = "category">
                    Drafts
                </div>
                <div className = "search-container">
                    <FaSearch/>
                    <input placeholder="Search"></input>
                </div>
                <div className = "create-board-container">
                    <button>Create Draft</button>
                </div>
            </div>
            <div className = "main-page__drawboards-container">
                <DrawBoard/>      
                <DrawBoard/>                
                <DrawBoard/>                
                <DrawBoard/>
                <DrawBoard/>
                <DrawBoard/>
                <DrawBoard/>
                <DrawBoard/>
                <DrawBoard/>
                <DrawBoard/>
                <DrawBoard/>
            </div>
        </div>
    );
}
export default MainPage;
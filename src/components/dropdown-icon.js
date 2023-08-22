import "./dropdown-icon.scss"
import React from "react";
import {useState} from "react";
export default function DropdownIcon({handleClick,open}){
    return(
        <div className="dropdownIcon">
            <div className={`dropdownIcon dropdownIcon--${open==="open" ? 'dropdown':'collapse'}`}
                 onClick={handleClick}></div>
        </div>
    )
}
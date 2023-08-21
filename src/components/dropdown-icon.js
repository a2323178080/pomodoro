import "./dropdown-icon.scss"
import React from "react";
import {useState} from "react";
export default function DropdownIcon(){

    const [open,setOpen]=useState(true);
    const handleOpen=()=>{
        setOpen(pre=>!pre);
    }
    return(
        <div className="dropdownIcon">
            <div className={`dropdownIcon dropdownIcon--${open===true ? 'dropdown':'collapse'}`}
                 onClick={handleOpen}></div>
        </div>
    )
}
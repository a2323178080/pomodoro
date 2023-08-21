import "./collapse.scss"
import React, {useState,useContext} from "react";
import {CartContext} from "../store/store";
import Date from "../../src/views/analytics/chart/date";
import Header from "./Header";
import DropdownIcon from "./dropdown-icon";

export default function Collapse({title,dropdownIcon,children,className,item}){
    const [state,dispatch]=useContext(CartContext);

    const [open,setOpen]=useState(true);
    const handleOpen=()=>{
        setOpen(pre=>!pre);
    }


    return(
    <div className={state.handlePosition('collapseTest', className)}>
        <Header title="TO-DO" rightContent={<DropdownIcon open={open}/>}/>


        <div className="content">
            {children}
        </div>
    </div>
    )
}


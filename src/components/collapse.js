import "./collapse.scss"
import React, {useState,useContext} from "react";
import {CartContext} from "../store/store";
import Date from "../../src/views/analytics/chart/date";
import Header from "./Header";
import DropdownIcon from "./dropdown-icon";

export default function Collapse({title,dropdownIcon,children,className,item,open}){
    const [state,dispatch]=useContext(CartContext);


    console.log(open);


    return(
    <div className={state.handlePosition('collapseTest', className)}>
        <Header title={title} rightContent={<DropdownIcon />}/>


        <div className="content">
            {children}
        </div>
    </div>
    )
}


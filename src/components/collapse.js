import "./collapse.scss"
import React, {useState,useContext} from "react";
import {CartContext} from "../store/store";
import Date from "../../src/views/analytics/chart/date"
export default function Collapse({title,dropdownIcon,children,className,item}){
    const [state,dispatch]=useContext(CartContext);

    const [open,setOpen]=useState(true);
    const handleOpen=()=>{
        setOpen(pre=>!pre);
    }


    return(
    <div className={state.handlePosition('collapseTest', className)}>
        <div className="title">
            <div className="titleBar" >
                <p>{title}</p>
                <div >
                    {item==="dropdownIcon"&&(
                        <div className={`dropdownIcon dropdownIcon--${open===true ? 'dropdown':'collapse'}`}
                             onClick={handleOpen}></div>
                    )}
                    {item==="date"&&<Date/>}


                </div>
            </div>
        </div>
        <div className="content">
            {open&&children}
        </div>
    </div>
    )
}


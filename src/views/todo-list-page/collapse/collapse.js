import "./collapse.scss"

import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../store/store";


export default function Collapse({title,text,className,dropdownIcon, children}){
    const [state,dispatch] = useContext(CartContext);


    const handleOpen=()=>{
        dispatch({
            type:"HANDLE_OPEN",
            payload:state.open==="open"?"collapse":"open"
        })
    }

    // const localTodoList=JSON.parse(localStorage.getItem("key"||"[]"));
    return(
        <>
            <div  className={state.handlePosition('collapse', className)}>
                <div className="title">
                    <div className="titleBar" >
                        <p>{title}</p>
                        <div >
                            {dropdownIcon&&(
                                <div className={`dropdownIcon dropdownIcon--${state.open==="open" ? 'dropdown':'collapse'}`}
                                     onClick={handleOpen}></div>
                            )}
                        </div>
                    </div>
                </div>




            </div>
            {children}
        </>
    )
}

import "./collapse.scss"
import React, {useState, useContext, useEffect} from "react";
import {CartContext} from "../../../store/store";

export default function Collapse({title,list,className}){
    const [state,dispatch]=useContext(CartContext);
    const [openCondition,setOpenCondition]=useState(true);

    const handleOpen=()=>{
        setOpenCondition(pre=>!pre);
    }

    const handlePosition =(type, className)=>type + (className ? ' ' + className : '');

    useEffect(()=>{
        dispatch({
            type:'HANDLE_POSITION',
            payload:handlePosition
        })

    },[])

    return(
        <div className={state.handlePosition('collapse', className)} >
            {list.map((event)=>{
                return (
                    <div>
                        <div className="title">
                            <div className="titleBar" onClick={handleOpen}>
                                <p>{title}</p>
                                <div className="dropdownIcon dropdownIcon--dropdown"
                                     ></div>
                            </div>
                        </div>



                        <div >

                            {openCondition&&<div>{event.text}</div>}
                        </div>
                    </div>)
            })}
        </div>
    )
}
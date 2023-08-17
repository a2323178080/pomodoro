import "./collapse-test.scss"
import React, {useState, useContext, useEffect} from "react";
import {CartContext} from "../../../store/store";
import Date from "../../analytics/chart/date";
export default function CollapseTest({title,list,className}){
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
        <div className={state.handlePosition('collapseTest', className)} >
            {list.map((event)=>{
                return (
                    <div key={event.do}>
                        <div className="title">
                            <div className="titleBar" >
                                <p>{title}</p>
                                {title==="CHART"&&<Date/>}
                                {(title==="TO-DO" || title=== "DONE") &&(
                                    <div className={`dropdownIcon dropdownIcon--${openCondition ? 'collapse':'dropdown'}`}
                                         onClick={handleOpen}></div>
                                )}
                            </div>
                        </div>

                        <div >
                            {openCondition&& <div>{event.text}</div>}
                        </div>
                    </div>)
            })}
        </div>
    )
}
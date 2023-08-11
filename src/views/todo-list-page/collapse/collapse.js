import "./collapse.scss"
import {useState,useContext} from "react";
import {CartContext} from "../../../store/store";

export default function Collapse({list}){
    const [state,dispatch] = useContext(CartContext);

    return(
        <div className="collapse">
            {list.map((event)=>{
                return (

                    <div>
                        <div >
                            {event.label}
                            {state.dropdownCondition === "dropdown"&&<div>{event.children}</div>}
                        </div>
                    </div>)
            })}
        </div>
    )
}
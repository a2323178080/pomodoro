import "./collapse.scss"
import {useState} from "react";
export default function Collapse({list}){
    const [openCondition,setOpenCondition]=useState(true);
    const handleOpen=()=>{
        setOpenCondition(pre=>!pre);

    }

    return(
        <div className="collapse">
            {list.map((event)=>{
                return (

                    <div>
                        <div onClick={handleOpen}>
                            {event.label}
                            {openCondition&&<div>{event.children}</div>}
                        </div>
                    </div>)
            })}
        </div>
    )
}
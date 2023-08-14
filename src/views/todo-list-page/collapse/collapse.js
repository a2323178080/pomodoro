import "./collapse.scss"
import React, {useState} from "react";

export default function Collapse({title,list}){
    const [openCondition,setOpenCondition]=useState(true);

    const handleOpen=()=>{
        setOpenCondition(pre=>!pre);

    }

    return(
        <div className="collapse">
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
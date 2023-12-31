import "./collapse.scss"
import React, {useState, useContext} from "react";
import {CartContext} from "../store/store";
import Header from "./Header";
import DropdownIcon from "./dropdown-icon";

export default function Collapse({title, dropdownIcon, children, className, item, render, renderList}) {
    const [state, dispatch] = useContext(CartContext);
    const [open, setOpen] = useState("open");
    const handleClick = (open) => {
        setOpen(pre => pre === "open" ? "collapse" : "open");
    }

    return (
        <div className={state.handlePosition('collapse', className)}>
            <Header title={title} rightContent={<DropdownIcon open={open} handleClick={handleClick}/>}/>
            <div className="content">
                {open === 'open' && renderList}
            </div>
        </div>
    )
}
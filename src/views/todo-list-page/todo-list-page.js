import "./todo-list-page.scss";
import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../../store/store";
import Input from "../home/input/input";

import Sidebar from "../../components/sidebar";

import DoneList from "./done-list/done-list";
import TodoList from "../../components/todo-list";
import Collapse from "../../components/collapse";

export default function TodoListPage() {
    const [state, dispatch] = useContext(CartContext);

    const handlePosition = (type, className) => type + (className ? ' ' + className : '');
    useEffect(() => {
        dispatch({
            type: 'HANDLE_POSITION',
            payload: handlePosition
        })
    }, [])


    const [open,setOpen]=useState(true);
    const handleOpen=()=>{
        setOpen(pre=>!pre);
    }



    return (
        <div className="todoListPage">
            <Sidebar position="onTodoListPage"/>
            <Input/>

            <Collapse title="TO-DO" >
                <TodoList color="white"/>
            </Collapse>

            <Collapse className="onTodoListPage" title="DONE">
                <DoneList/>
            </Collapse>
        </div>
    )
}
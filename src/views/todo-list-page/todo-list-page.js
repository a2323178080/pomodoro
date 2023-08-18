import "./todo-list-page.scss";
import React, {useContext, useEffect} from "react";
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

    return (
        <div className="todoListPage">
            <Sidebar position="onTodoListPage"/>
            <Input/>


            <Collapse title="TO-DO" dropdownIcon>
                <TodoList color="white"/>
            </Collapse>


            <Collapse className="onTodoListPage" title="DONE" dropdownIcon >
                <DoneList/>

            </Collapse>



        </div>
    )
}
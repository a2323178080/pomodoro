import "./todo-list-page.scss";
import React, {useContext, useEffect} from "react";
import {CartContext} from "../../store/store";
import Input from "../home/input/input";
import Collapse from "./collapse/collapse";
import Sidebar from "../../components/sidebar";
import List from "./list/list";

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
            <Collapse title="TO-DO" dropdownIcon >
                <List text="todoList"/>
            </Collapse>


            <Collapse title="DONE" dropdownIcon className="onTodoListPage">
                <List text="doneTodo" className="onTodoListPage"/>
            </Collapse>




        </div>
    )
}
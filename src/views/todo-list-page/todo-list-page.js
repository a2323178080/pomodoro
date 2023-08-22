import "./todo-list-page.scss";
import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../../store/store";
import Input from "../home/input/input";

import Sidebar from "../../components/sidebar";

import DoneItem from "../../components/list/done-item";
import TodoItem from "../../components/list/todo-item";
import Collapse from "../../components/collapse";
import List from "../../components/list/list";
import DropdownIcon from "../../components/dropdown-icon";

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

            <Collapse title="TO-DO" renderList={
                <List>
                    <TodoItem color="white" row={6}/>
                </List>
            }/>


            <Collapse className="onTodoListPage" title="DONE" renderList={
                <List>
                    <DoneItem/>
                </List>
            }/>


        </div>
    )
}
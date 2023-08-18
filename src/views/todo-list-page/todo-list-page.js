import "./todo-list-page.scss";
import React, {useContext} from "react";
import Input from "../home/input/input";


import Collapse from "./collapse/collapse";
import Sidebar from "../../components/sidebar";
import List from "./list/list";


export default function TodoListPage() {


    return (
        <div className="todoListPage">
            <Sidebar position="onTodoListPage"/>

            <Input/>
            <Collapse title="TO-DO" dropdownIcon/>

            <List text="todoList"/>
            <div >
                <Collapse title="DONE" dropdownIcon />

                <List text="doneTodo"/>
            </div>


        </div>
    )
}
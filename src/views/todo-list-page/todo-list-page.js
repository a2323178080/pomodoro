import "./todo-list-page.scss";
import React, {useContext} from "react";
import Input from "../home/input/input";


import Collapse from "./collapse/collapse";
import Sidebar from "../../components/sidebar";
import List from "./list/list";


export default function TodoListPage(){


    return(
        <div className="todoListPage">
            <Sidebar position="onTodoListPage"/>
                    <Input />
                    <Collapse title="TO-DO" text="todoList" dropdownIcon/>

            <List/>


            <Collapse title="DONE" text="doneTodo" dropdownIcon className="onTodoListPage"/>

        </div>
    )
}
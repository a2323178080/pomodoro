import "./todo-list-page.scss";
import React, {useContext} from "react";
import {CartContext} from "../../store/store";
import Logo from "./logo/logo";
import TodoList from "../home/todo-list/todo-list";
// import TodoArea from "./todo-area/todo-area";
// import DoneArea from "./done-area/done-area";
import Input from "../home/input/input";
// import Title from "./event-area";
import Slogan from "../../components/slogan"
import CrossIcon from "../../components/cross-icon";
import Sidebar from "../../components/sidebar";

import CollapseTest from "./collapse-test/collapse-test";
import Collapse from "./collapse/collapse";

import Circle from "../../components/circle";

export default function TodoListPage(){
    const [state] = useContext(CartContext);


    return(
        <div className="todoListPage">

            <div className="layout">
                <div className="col-5">
                    <Sidebar position="onTodoListPage"/>
                    <Logo/>
                </div>

                <div className="col-5">
                    <Input />
                    <Collapse title="TO-DO" text="todoList"/>

                    <Collapse title="DONE" text="doneTodo"/>

                    {/*<CollapseTest title="TO-DO" list={todo} />*/}
                    {/*<CollapseTest title="DONE" list={done} className="onTodoListPage"/>*/}
                </div>
                <div>
                    <CrossIcon/>
                    <Slogan/>
                </div>
            </div>
        </div>
    )
}
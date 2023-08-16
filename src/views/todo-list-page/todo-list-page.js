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

import Collapse from "./collapse/collapse";
import Circle from "../../components/circle";

export default function TodoListPage(){
    const [state] = useContext(CartContext);

    function handleDot(num) {
        let list = [];
        for (let i = 0; i < num; i++) {
            list.push(<div><Circle size={16} bg="white" border="2px solid #003164"
                                   marginLeft="eight"/>
            </div>);
        }
        return list;
    }
    const todo = [
        {
            text:<TodoList color="white"/>,
            do:0
        }
    ];
    const done = [
        {
            text:
                state.doneTodo.map((item)=>{
                return <ul className="item">
                    <li className="item--li">
                        <span className="material-icons">check_circle_outline</span>
                        <span className="font">{item.do}</span>
                        <span className="item--cycleIcon">{handleDot(item.number)}</span>
                    </li>
                </ul>
            }),
            do:0
        }
    ];
    return(
        <div className="todoListPage">
            <div className="layout">
                <div className="col-5">
                    <Sidebar position="onTodoListPage"/>
                    <Logo/>
                </div>

                <div className="col-5">
                    <Input />
                    <Collapse title="TO-DO" list={todo} />
                    <Collapse title="DONE" list={done} className="onTodoListPage"/>
                </div>
                <div>
                    <CrossIcon/>
                    <Slogan/>
                </div>
            </div>
        </div>
    )
}
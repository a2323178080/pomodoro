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




export default function TodoListPage(){
    const [state] = useContext(CartContext);



    const todo = [
        {
            label:
                <div className="title">
                    <div className="titleBar" >
                        <p>TODO</p>
                        <div className="dropdownIcon dropdownIcon--dropdown"
                        ></div>
                    </div>
                </div>
            ,
            children:<TodoList color="white"/>

        }
    ];


    const done = [
        {
            label:
                <div className="title">
                    <div className="titleBar" >
                        <p>DONE</p>
                        <div className="dropdownIcon dropdownIcon--dropdown"
                        ></div>
                    </div>
                </div>
            ,
            children:
                state.doneTodo.map((item)=>{
                return <ul className="item">
                    <li className="item--li">
                        <span className="material-icons">check_circle_outline</span>
                        <span className="font">{item.do}</span>
                        <span className="item--cycleIcon"></span>
                    </li>
                </ul>
            })
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

                    {/*<TodoArea position="center"/>*/}
                    {/*<DoneArea position="lowerMiddle"/>*/}
    {/*---------------------------------------------------------*/}
                    {/*<Title area="todo" >*/}
                    {/*    <Title.List area="todo"/>*/}
                    {/*</Title>*/}

                    {/*<Title area="done">*/}
                    {/*    <Title.List area="done"/>*/}
                    {/*</Title>*/}
    {/*---------------------------------------------------------*/}

                    <Collapse list={todo}/>
                    <Collapse list={done}/>


                </div>

                <div>
                    <CrossIcon/>
                    <Slogan/>
                </div>


            </div>


        </div>
    )
}
import {useEffect, useState} from "react";

import Disc from './disc/disc'
import "./home.scss"
import Input from "./input/input";
import Task from "./task/task.js";
import Time from "./time/time.js";
import TodoList from "./todo-list/todo-list"

export default function Home(){

    return(
        <div className="home">

            <div className="layout">
                <Input/>
                <Time/>
                <Disc/>
                <TodoList/>

            </div>

        </div>
    )
}
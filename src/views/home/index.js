import Disc from './disc/disc'
import "./home.scss"
import useColor from "../../hook/useColor";

import Input from "./input/input";
import Task from "./task/task.js";
import Time from "./time/time.js";
import TodoList from "./todo-list/todo-list"

export default function Home(){
    const {all}=useColor()

    return(
        <div className="home">
            <div className="layout">
                <Input/>
                <Time className="position" color={all('time')}/>
                <Disc className="position"/>
                <TodoList/>
            </div>
        </div>
    )
}
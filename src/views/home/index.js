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
                <Time className="position"/>
                <Disc className="position"/>
                <TodoList/>
            </div>
        </div>
    )
}
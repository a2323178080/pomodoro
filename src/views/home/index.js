import Disc from './disc/disc'
import "./home.scss"
import useColor from "../../hook/useColor";
import Input from "./input/input";
import Task from "./task/task.js";
import Time from "./time/time.js";
import TodoList from "./todo-list/todo-list";
import IconGroup from "./icon-group/icon-group";
import Slogan from "../../components/slogan";

export default function Home(){
    const {circle}=useColor()

    return(
        <div className="home">
            <div className="layout">
                <Input/>
                <Time className="position" color={circle}/>
                <Disc className="position"/>
                <TodoList/>
                <IconGroup/>
                <Slogan/>
            </div>
        </div>
    )
}
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
    const {time, homeBackground,input}=useColor()

    return(
            <div className={`home ${homeBackground}`}>
            <div className="layout">
                <Input color={input}/>
                <Time className="position" color={time}/>
                <Disc className="position"/>
                <TodoList/>
                <IconGroup/>
                <Slogan/>
            </div>
        </div>
    )
}

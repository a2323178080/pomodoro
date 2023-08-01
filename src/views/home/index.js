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
    const {time, home}=useColor()

    const bgColor = {
        pink: {
            background:
                'linear-gradient(to right,var(--lightPink) 0%,var(--lightPink) 830px,#003164 0%,#003164 450px)'

        },
        blue: {
            background:
                'linear-gradient(to right,var(--lightBlue) 0%,var(--lightBlue) 830px,#003164 0%,#003164 450px)'
        },
    }

    const newStyle = {
        ...bgColor[home]
    }

    return(
        <div className="home" style={newStyle}>
            <div className="layout">
                <Input/>
                <Time className="position" color={time}/>
                <Disc className="position"/>
                <TodoList/>
                <IconGroup/>
                <Slogan/>
            </div>
        </div>
    )
}

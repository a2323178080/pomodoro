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
    const {homeBackground,input}=useColor()

    const newBackground={
        background:` linear-gradient(to right,
        var(--light${homeBackground}) 0%,
        var(--light${homeBackground}) 830px,
        #003164 0%,
        #003164 450px)`

    }

    return(
            <div className="home"
                style={newBackground}
            >
            <div className="layout">
                <Input color={input}/>
                <Time className="middleLeft" />
                <Task/>
                <TodoList position="lowerLeft"/>
                <Disc className="middleRight"/>
                <IconGroup/>
                <Slogan/>

            </div>
        </div>
    )
}

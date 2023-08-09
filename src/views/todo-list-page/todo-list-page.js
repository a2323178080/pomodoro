import "./todo-list-page.scss";
import Input from "../home/input/input";
import TodoArea from "./todo-area/todo-area";
import DoneArea from "./done-area/done-area";
import Logo from "./logo/logo";
import Title from "../todo-list-page/event-area/title";
export default function TodoListPage(){
    return(
        <div className="todoListPage">
            <Input position="upperMiddle"/>
            <TodoArea position="center"/>
           <DoneArea position="lowerMiddle"/>
            <Logo/>
            <Title/>
        </div>
    )
}
import "./todo-list-page.scss";
import Input from "../home/input/input";
import TodoArea from "./todo-area/todo-area";
import DoneArea from "./done-area/done-area";
import Logo from "./logo/logo";

import Title from "./event-area";





export default function TodoListPage(){
    return(
        <div className="todoListPage">
            <Input position="upperMiddle"/>
            <TodoArea position="center"/>
            <DoneArea position="lowerMiddle"/>



            <Title area="todo">
                <Title.List area="todo"/>
            </Title>

            <Title area="done">
                <Title.List area="done"/>

            </Title>

            <Logo/>


        </div>
    )
}
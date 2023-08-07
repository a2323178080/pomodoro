import "./todo-list-page.scss";
import Input from "../home/input/input";
import TodoArea from "./todo-area/todo-area";
export default function TodoListPage(){
    return(
        <div className="todoListPage">
            <Input position="upperMiddle"/>
            <TodoArea position="center"/>
        </div>
    )
}
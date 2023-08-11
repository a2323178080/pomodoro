import "./todo-list-page.scss";
import Input from "../home/input/input";
// import TodoArea from "./todo-area/todo-area";
// import DoneArea from "./done-area/done-area";
import Logo from "./logo/logo";
import Title from "./event-area";
import Slogan from "../../components/slogan"
import CrossIcon from "../../components/cross-icon";
import Sidebar from "../../components/sidebar";



export default function TodoListPage(){
    return(
        <div className="todoListPage">
            <div className="layout">

                <div className="col-5">

                    <Sidebar position="onTodoListPage"/>
                    <Logo/>
                </div>


                {/*<TodoArea position="center"/>*/}
                {/*<DoneArea position="lowerMiddle"/>*/}
                <div className="col-5">
                    <Input />
                    <Title area="todo" >
                        <Title.List area="todo"/>
                    </Title>

                    <Title area="done">
                        <Title.List area="done"/>
                    </Title>
                </div>

                <div>
                    <CrossIcon/>
                    <Slogan/>
                </div>


            </div>


        </div>
    )
}
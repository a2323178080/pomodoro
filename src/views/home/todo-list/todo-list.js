
import {CartContext} from "../../../components/store"
import { useContext} from "react";

import "./todo-list.scss";
export default function TodoList(){
    const [state, dispatch] = useContext(CartContext);
    return(
        <div className="todoList" >
            {state.todoList.map((todo,index)=>{
                if(index<3){
                    return(
                        <ul  key={todo.id} className="todoList--font">
                                <li className="todoList--li">
                                    <span className="material-icons todoList--icon">radio_button_unchecked</span>
                                    <span>{todo.do}</span>
                                    <span className="material-icons todoList--icon playIcon">play_circle_outline</span>
                                </li>
                    </ul>)
                }
            })}
            {state.todoList.length>3?<div className={`more more--${state.workCondition}`}>MORE</div>:<div></div>}
        </div>
    )
}
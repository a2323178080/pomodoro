import {CartContext} from "../../../store/store";
import {useContext, useEffect} from "react";
import "./todo-list.scss";
import useColor from "../../../hook/useColor";
export default function TodoList(){
    const {word}=useColor();
    const [state, dispatch] = useContext(CartContext);
    const removeTodo = (id) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: {
                id
            }
        })
    }
    const showTodo = (id,value) => {
        dispatch({
            type: 'SHOW_TODO',
            payload: {
                value
            }
        })
        dispatch({
            type: 'REMOVE_TODO',
            payload: {
                id
            }
        })
        dispatch({
            type:'REMOVE_CYCLES',
            payload:{}
        })
    }

    const localTodoList=JSON.parse(localStorage.getItem("key"||"[]"));
    return(
        <div className="todoList" >
            {localTodoList.map((todo,index)=>{
                if(index<3){
                    return(
                        <ul key={todo.id} className="todoList--font">
                                <li className="todoList--li">
                                    <span className="material-icons todoList--icon"
                                    onClick={() => removeTodo(todo.id)}
                                    >radio_button_unchecked</span>
                                    <span>{todo.do}</span>
                                    <span className="material-icons todoList--icon playIcon"
                                          onClick={() => showTodo(todo.id,todo.do)}>play_circle_outline
                                    </span>
                                </li>
                    </ul>)
                }
            })}
            {localTodoList.length>3?<div className="more" style={{color:`var(--${word})`}}>MORE</div>:<div></div>}
        </div>
    )
}


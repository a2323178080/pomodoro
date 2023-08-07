import {CartContext} from "../../../store/store";
import {useContext, useEffect} from "react";
import "./todo-list.scss";
import useColor from "../../../hook/useColor";
export default function TodoList({position,page,color}){
    const {word}=useColor();
    const [state, dispatch] = useContext(CartContext);
    const removeTodo = (id) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: {
                id
            }
        })

        dispatch({
            type: 'DONE_TODO',
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

    const newPosition={
        lowerLeft:{
            top:'562px'
        }
    }

    const newColor={
        white:{
            color:'var(--white)'
        }
    }

    const newStyle={
        ...newPosition[position],
        ...newColor[color]
    }


    return(
        <div className="todoList" style={newStyle}>
            {page==="home"?localTodoList.map((todo,index)=>{
                if(index<3){
                    return(
                        <ul key={todo.id} className="todoList--font" >
                                <li className="todoList--li">
                                    <span className="material-icons todoList--icon"
                                    onClick={() => removeTodo(todo.id)}
                                    >radio_button_unchecked</span>
                                    <span style={newStyle}>{todo.do}</span>
                                    <span className="material-icons todoList--icon playIcon"
                                          onClick={() => showTodo(todo.id,todo.do)}>play_circle_outline
                                    </span>
                                </li>
                    </ul>)
                }
            }):
                localTodoList.map((todo,index)=>{
                        return(
                            <ul key={todo.id} className="todoList--font" style={newStyle}>
                                <li className="todoList--li">
                                    <span className="material-icons todoList--icon"
                                          onClick={() => removeTodo(todo.id)}
                                    >radio_button_unchecked</span>
                                    <span >{todo.do}</span>
                                    <span className="material-icons todoList--icon playIcon"
                                          onClick={() => showTodo(todo.id,todo.do)}>play_circle_outline
                                    </span>
                                </li>
                            </ul>)
                    })

            }
            {page==="home"&&localTodoList.length>3?<div className="more" style={{color:`var(--${word})`}}>MORE</div>:<div></div>}
        </div>
    )
}


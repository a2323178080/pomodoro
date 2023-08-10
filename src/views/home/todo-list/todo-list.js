import {Link} from "react-router-dom";
import {CartContext} from "../../../store/store";
import {useContext, useEffect} from "react";
import "./todo-list.scss";
import useColor from "../../../hook/useColor";
export default function TodoList({position,page,color,className}){
    const {word}=useColor();
    const [state, dispatch] = useContext(CartContext);
    const removeTodo = (id) => {

        dispatch({
            type: 'DONE_TODO',
            payload: {
                id
            }
        })
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
                id
            }
        })

        dispatch({
            type:'REMOVE_CYCLES',
            payload:{}
        })
    }
    // const localTodoList=JSON.parse(localStorage.getItem("key"||"[]"));
    const localTodoList=state.todoList;


    const newColor={
        white:{
            color:'var(--white)'
        },
        blue:{
            color:'var(--blue)'
        }
    }

    const newStyle={
         ...newColor[color]
    }

    return(
        <div className={state.handlePosition('todoList', className)} style={newStyle}>
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


                                       <Link to='/' className="material-icons todoList--icon playIcon"
                                          onClick={() => showTodo(todo.id,todo.do)}>
                                           play_circle_outline
                                        </Link>

                                </li>
                            </ul>)
                    })

            }
            {page==="home"&&localTodoList.length>3?<Link to='./todoListPage'><div className="more" style={{color:`var(--${word})`}}>MORE</div></Link>:<div></div>}
        </div>
    )
}


import {Link} from "react-router-dom";
import {CartContext} from "../../store/store";
import {useContext} from "react";
import "./todo-item.scss";
import useColor from "../../hook/useColor";

export default function TodoItem({position, page, color, className, row,border}) {
    const {word} = useColor();
    const [state, dispatch] = useContext(CartContext);
    const removeTodo = (id) => {
        dispatch({
            type: 'DONE_TODO', payload: {
                id
            }
        })
        dispatch({
            type: 'REMOVE_TODO', payload: {
                id
            }
        })
    }
    const showTodo = (id, value) => {
        dispatch({
            type: 'SHOW_TODO', payload: {
                id
            }
        })
        dispatch({
            type: 'REMOVE_CYCLES', payload: {}
        })
    }
    const localTodoList = JSON.parse(localStorage.getItem(("key") || "[]"));
    const newColor = {
        white: {
            color: 'var(--white)'
        }, darkBlue: {
            color: 'var(--darkBlue)'
        }
    }
    const newBorder = {
        silver: {
            borderBottom: '1px solid silver'
        }
    }
    const newStyle = {
        ...newColor[color],
        ...newBorder[border]
    }
    localStorage.setItem("doneTodoKey", JSON.stringify(state.doneTodo));

    return (
        <div className={state.handlePosition('todoList', className)}>
            {localTodoList.slice(0, row).map((todo) => {
                return (
                    <ul key={todo.id} className="todoList--font" style={newStyle} >
                        <li className="todoList--li"  >
                            <span className="material-icons todoList--icon"
                                  onClick={() => removeTodo(todo.id)}
                            >radio_button_unchecked
                            </span>
                            <span>
                                {todo.do}
                            </span>
                            <Link to='/' className="material-icons todoList--icon playIcon"
                                  onClick={() => showTodo(todo.id, todo.do)} style={newStyle}>
                                play_circle_outline
                            </Link>
                        </li>
                    </ul>)
            })
            }
            {page === "home" && localTodoList.length > 3 ? <Link to='/backStage/todoListPage'>
                <div className="more" style={{color: `var(--${word})`}}>MORE</div>
            </Link> : <div></div>}
        </div>)
}


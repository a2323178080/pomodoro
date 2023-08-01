import {CartContext} from "../../../store/store";
import { useContext} from "react";
import "./todo-list.scss";
export default function TodoList(){
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
    }

    return(
        <div className="todoList" >
            {state.todoList.map((todo,index)=>{
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
            {state.todoList.length>3?<div className={`more more--${state.workCondition}`}>MORE</div>:<div></div>}
            <div>{state.showTodoList}</div>
        </div>
    )
}

//     {/* done註記 */
//     }
//     const newDoneTodoList = todoList.filter((item) => {
//         return item.id == id;
//     });
//     setDoneTodoList(
//         [...doneTodoList, ...newDoneTodoList]
//     )
// };
//
//
// // 與todoList組件有關
// const [selectValue, setSelectValue] = useState("");
// const showValue = (id) => {
//     const selectArray = todoList.filter((item) => {
//         return item.id == id;
//     });
//     setSelectValue(selectArray[0].do);
// };
//

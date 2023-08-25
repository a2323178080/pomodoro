import "./done-item.scss"
import React, {useContext} from "react";
import {CartContext} from "../../store/store";
import Circle from "../circle";

export default function DoneItem() {
    const [state, dispatch] = useContext(CartContext);
    const removeDoneTodo = (id) => {
        dispatch({
            type: 'REMOVE_DONE_TODO', payload: {
                id
            }
        })
    }

    function handleDot(num) {
        let list = [];
        for (let i = 0; i < num; i++) {
            list.push(
                <div><Circle size={16} bg="white" border="2px solid #003164"
                             marginLeft="eight"/>
                </div>);
        }
        return list;
    }

    const localDoneTodoList = JSON.parse(localStorage.getItem("doneTodoKey" || "[]"));
    return (
        <div className="doneList">
            {localDoneTodoList.map((todo) => {
                return (
                    <ul key={todo.id}>
                        <li className="text">
                            <span className="material-icons"
                                  onClick={() => removeDoneTodo(todo.id)}
                            >check_circle_outline
                            </span>
                            <span className="font">{todo.do}</span>
                            <span className="playIcon">{handleDot(todo.number)}</span>
                        </li>
                    </ul>)
            })}
        </div>)
}
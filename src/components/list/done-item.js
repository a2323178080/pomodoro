import "./done-item.scss"
import React, {useContext, useEffect} from "react";
import {CartContext} from "../../store/store";
import Circle from "../circle";

export default function DoneItem() {
    const [state, dispatch] = useContext(CartContext);


    function handleDot(num) {
        let list = [];
        for (let i = 0; i < num; i++) {
            list.push(<div><Circle size={16} bg="white" border="2px solid #003164"
                                   marginLeft="eight"/>
            </div>);
        }
        return list;
    }

    return (
        <div className="doneList">
            {state.doneTodo.map((todo) => {
                return (
                    <ul key={todo.id}>
                        <li className="text">
                            <span className="material-icons">check_circle_outline</span>

                            <span className="font">{todo.do}</span>

                            <span className="playIcon">{handleDot(todo.number)}</span>
                        </li>
                    </ul>)
            })
            }

        </div>
    )
}


import "./list.scss"
import React, {useContext} from "react";
import {CartContext} from "../../../store/store";
import Circle from "../../../components/circle";
import TodoList from "../../home/todo-list/todo-list";


const List = ({position, area}) => {

    const [state] = useContext(CartContext);

    function handleDot(num) {
        let list = [];
        for (let i = 0; i < num; i++) {
            list.push(<div><Circle size={16} bg="white" border="2px solid #003164"
                                   marginLeft="eight"/>
            </div>);
        }
        return list;
    }

    return(
        <div className="list" >

            <div className="item">

                {area === "todo" &&
                    <TodoList color="white"/>
                }

                {state.dropdownCondition==="dropdown"&&area === "done" && state.doneTodo.map((item) => {
                    return (
                        <ul>
                            <li className="item--li">
                                <span className="material-icons">check_circle_outline</span>
                                <span className="font">{item.do}</span>
                                <span className="item--cycleIcon">{handleDot(item.number)}</span>
                            </li>
                        </ul>
                    )
                })}

            </div>
        </div>
    )
}
export default List

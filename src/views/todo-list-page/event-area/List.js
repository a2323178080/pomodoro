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
            list.push(<div><Circle size={12} bg="white" border="2px solid #003164"
                                   marginLeft="eight"/>
            </div>);
        }
        return list;
    }

    return(
        <div className="list" >

            <div className="item">
                {area === "todo" &&
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad assumenda corporis ducimus enim excepturi illum in minima nesciunt nobis odio optio quidem quos rem sed, sit tenetur veniam voluptatum?</div>
                }

                {area === "done" &&
                    <div>lorem done測試</div>
                }

                {/*{area === "done" && state.doneTodo.map((item) => {*/}
                {/*    return (*/}
                {/*        <ul>*/}
                {/*            <li className="item--li">*/}
                {/*                <span className="material-icons">check_circle_outline</span>*/}
                {/*                <span>{item.do}</span>*/}
                {/*                <span className="item--cycleIcon">{handleDot(item.number)}</span>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    )*/}
                {/*})}*/}

            </div>
        </div>
    )
}
export default List
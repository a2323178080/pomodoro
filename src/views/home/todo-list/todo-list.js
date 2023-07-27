
import {CartContext} from "../../../components/store"
import { useContext} from "react";

import "./todo-list.scss";
export default function TodoList(){

    const [state, dispatch] = useContext(CartContext);
    return(
        <div className="todoList" >

            {/*{state.todoList.map((item,index)=>{*/}
            {/*    if(index<3){*/}
            {/*        return <div>{item.do}</div>*/}
            {/*    }*/}
            {/*})}*/}

            {state.todoList.map((todo,index)=>{
                if(index<3){
                    return(
                        <ul  key={todo.id}>
                                <li >
                                    <span>圓形</span>
                                    <span>{todo.do}</span>
                                    <span></span>
                                </li>
                    </ul>)
                }
            })}


        </div>
    )
}
import "./task.scss"
import {useContext} from "react";
import {CartContext, cartContext} from "../../../store/store";
import Circle from "../../../components/circle"
export default function Task(){
    const [state]=useContext(CartContext);
    return(
        <div className="task">
            <ul>
                <li>
                    <div><Circle size={48} bg="transparent" borderStyle="border"/></div>
                    <div >
                        <div className="task--font">{state.showTodoList}</div>
                        <div>小園</div>
                    </div>
                </li>
            </ul>
       </div>
    )
}


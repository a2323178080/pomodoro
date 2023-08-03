import "./task.scss"
import {useContext, useEffect} from "react";
import {CartContext, cartContext} from "../../../store/store";
import Circle from "../../../components/circle"
export default function Task(){
    const [state,dispatch]=useContext(CartContext);



    useEffect(()=>{
    if(state.times<1){
        dispatch({
            type:'ADD_CYCLES',
            payload:{}
        })
    }
    },[state.times])


    return(
        <div className="task">
            <ul>
                <li>
                    <div><Circle size={48} bg="transparent" borderStyle="darkBlue"/></div>
                    <div >
                        <div className="task--font">{state.showTodoList}</div>
                        <div className="task--cycleIcon">
                            {state.cycles.map(()=>{
                            return <div><Circle size={12} bg="darkBlue" borderStyle="darkBlue" marginLeft="eight"/></div>
                        })}
                        </div>
                    </div>
                </li>
            </ul>
       </div>
    )
}


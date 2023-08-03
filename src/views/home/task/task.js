import "./task.scss"
import {useContext, useEffect} from "react";
import {CartContext, cartContext} from "../../../store/store";
import Circle from "../../../components/circle"
import ProgressChart from "./progress-chart";
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
                    <div>{state.showTodoList!==""&&<Circle size={48} bg="transparent" borderStyle="darkBlue"/>}</div>
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


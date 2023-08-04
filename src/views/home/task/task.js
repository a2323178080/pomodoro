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

    const removeShowTodoList=()=>{
        dispatch({
            type:'REMOVE_SHOW_TODO',
            payload:""
        })


    }

    return(
        <div className="task">
                <div className="flex">
                    {state.showTodoList!==""&&<Circle size={48} bg="transparent" border="2px solid #003164" cursor="pointer" onClick={removeShowTodoList}/>}

                    <div >
                        <div className="task--font">{state.showTodoList}</div>
                        <div className="task--cycleIcon">
                            {state.showTodoList!==""&&state.cycles.map(()=>{
                            return <div><Circle size={12} bg="darkBlue" border="2px solid #003164" marginLeft="eight"/>
                            </div>
                             })}
                            {state.showTodoList!==""&&<ProgressChart/>}
                        </div>
                    </div>
                </div>

       </div>
    )
}


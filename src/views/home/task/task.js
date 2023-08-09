import "./task.scss"
import {useContext, useEffect, useState} from "react";
import {CartContext, cartContext} from "../../../store/store";
import Circle from "../../../components/circle"
import ProgressChart from "./progress-chart";

export default function Task() {


    const [state, dispatch] = useContext(CartContext);
    const [uuid, setUUid] = useState()
    useEffect(() => {
        if (state.times < 1) {
            dispatch({
                type: 'ADD_CYCLES',
                payload: {}
            })
        }
    }, [state.times])


    const removeShowTodoList = (id) => {
        setUUid(id)
        dispatch({
            type: 'COUNT_CYCLES',
            payload: state.cycles.length
        })


    }
    useEffect(() => {
        dispatch({
            type: 'DONE_TODO',
            payload: {
                id: uuid,
                cyclesNumber: state.cyclesNumber
            }
        })
        dispatch({
            type: 'REMOVE_TODO',
            payload: {
                id: uuid
            }
        })

        dispatch({
            type: 'REMOVE_SHOW_TODO',
            payload: []
        })
    }, [state.cyclesNumber])


    return (
        <div className="task">
            <div>
                <div className="task--font">{state.showTodoList.map((todo) => {
                    return (
                        <div className="flex">
                            <Circle size={48} bg="transparent" border="2px solid #003164" cursor="pointer"
                                    onClick={() => removeShowTodoList(todo.id)}/>
                            <div>
                                <div className="task--do">{todo.do}</div>

                                <div className="task--cycleIcon">
                                    {state.cycles.map(() => {
                                        return <div><Circle size={12} bg="darkBlue" border="2px solid #003164"
                                                            marginLeft="eight"/>
                                        </div>
                                    })}
                                    <ProgressChart/>
                                </div>

                            </div>

                        </div>)
                })}</div>


            </div>

        </div>
    )
}


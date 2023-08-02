import "./stop-icon.scss"
import Circle from "../../../components/circle";
import Rectangle from "../../../components/rectangle";
import useColor from "../../../hook/useColor";
import {useContext, useEffect} from 'react';
import {CartContext} from "../../../store/store";
export default function StopIcon(){
    const [state,dispatch]=useContext(CartContext);
    const {iconCircle}=useColor();

    return(
        <div className="stopIcon" onClick={()=>{
            dispatch({
                type:'START_AND_STOP',
                payload: state.startCondition==='stop'?'start':'stop'
            })
        }}>
            <Circle  size={96} bg={iconCircle}>
                <Rectangle/>
            </Circle>

        </div>
    )
}


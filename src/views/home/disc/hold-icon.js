import "./hold-icon.scss"
import Circle from "../../../components/circle";
import Rectangle from "../../../components/rectangle";
import useColor from "../../../hook/useColor";
import {useContext, useEffect} from 'react';
import {CartContext} from "../../../store/store";
export default function HoldIcon(){
    const [state,dispatch]=useContext(CartContext);
    const {iconCircle}=useColor();

    return(
        <div className="holdIcon" onClick={()=>{
            dispatch({
                type:'START_AND_HOLD',
                payload: state.startCondition==='hold'?'start':'hold'
            })
        }}>
            <Circle  size={96} bg={iconCircle}>
                <Rectangle/>
            </Circle>

        </div>
    )
}
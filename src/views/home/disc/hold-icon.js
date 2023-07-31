import "./hold-icon.scss"
import Circle from "../../../components/circle";
import Rectangle from "../../../components/rectangle";
import useColor from "../../../hook/useColor";
import {useContext, useEffect} from 'react';
import {CartContext} from "../../../components/store";
export default function HoldIcon(){
    const [state,dispatch]=useContext(CartContext);
    const {all}=useColor();

    return(
        <div className="holdIcon" onClick={()=>{
            dispatch({
                type:'START_AND_HOLD',
                payload: state.startCondition==='hold'?'start':'hold'
            })
        }}>
            <Circle  size={96} bg={all('iconCircle')}>
                <Rectangle/>
            </Circle>

        </div>
    )
}
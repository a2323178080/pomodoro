import "./start-icon.scss";
import Circle from "../../../components/circle";
import Triangle from "../../../components/triangle";
import {useContext, useEffect} from 'react';
import {CartContext} from "../../../components/store";
import useColor from "../../../hook/useColor";
export default function StartIcon(){

    const [state,dispatch]=useContext(CartContext);

    const {circle}=useColor();
    return(
        <div className="startIcon" onClick={()=>{
            dispatch({
                type:'START_AND_HOLD',
                payload: state.startCondition==='hold'?'start':'hold'
            })
        }}>
            <Circle  size={96} bg="white">
                <Triangle borderColor={circle}></Triangle>
            </Circle>
        </div>
    )
}
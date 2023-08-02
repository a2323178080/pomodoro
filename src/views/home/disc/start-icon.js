import "./start-icon.scss";
import Circle from "../../../components/circle";
import Triangle from "../../../components/triangle";
import {useContext, useEffect} from 'react';
import {CartContext} from "../../../store/store";
import useColor from "../../../hook/useColor";
export default function StartIcon(){

    const [state,dispatch]=useContext(CartContext);

    const {triangle}=useColor();
    return(
        <div className="startIcon" onClick={()=>{
            dispatch({
                type:'START_AND_STOP',
                payload: state.startCondition==='stop'?'start':'stop'
            })
        }}>
                <Triangle borderColor={triangle}></Triangle>
        </div>
    )
}

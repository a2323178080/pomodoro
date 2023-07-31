import "./start-icon.scss";
import Circle from "../../../components/circle";
import Triangle from "../../../components/triangle";

import {useContext, useEffect} from 'react';
import {CartContext} from "../../../components/store";
import useColor from "../../../hook/useColor";
export default function StartIcon(){

    const [state,dispatch]=useContext(CartContext);

    const {all}=useColor();
    return(
        <div className="button" onClick={()=>{
            dispatch({
                type:'START_AND_HOLD',
                payload: state.startCondition==='hold'?'start':'hold'
            })
        }}>
            <Circle  size={96} bg="white">
                <Triangle borderColor={all('triangle')}></Triangle>
            </Circle>

        </div>
    )
}
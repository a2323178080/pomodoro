import "./button.scss";
import Circle from "../../../components/circle";
import Triangle from "../../../components/triangle";

import {useContext, useEffect} from 'react';
import {CartContext} from "../../../components/store";
export default function Button(){

    const [state,dispatch]=useContext(CartContext);


    return(
        <div className="button" onClick={()=>{
            dispatch({
                type:'START_AND_HOLD',
                // payload: !state.startCondition,
                payload:state.startCondition=='hold'?'start':'hold'
            })
        }}>
            <Circle  size={96} bg="white">
                <Triangle ></Triangle>
            </Circle>
        </div>
    )
}
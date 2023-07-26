import "./button.scss";
import Circle from "../../../components/circle";
import Triangle from "../../../components/triangle";

import {useContext, useEffect} from 'react';
import {CartContext} from "../../../components/store";
export default function Button(){

    const [state,dispatch]=useContext(CartContext);

    const style={

        triangle:{
            borderColor: 'transparent transparent transparent red',
            marginLeft:'25px',
        }
    }
    return(
        <div className="button" onClick={()=>{
            dispatch({
                type:'START_AND_HOLD',
                payload: !state.buttonSwitch
            })
        }}>
            <Circle  size={96} bg="white">
                <Triangle customStyle={style.triangle}></Triangle>
            </Circle>
        </div>
    )
}
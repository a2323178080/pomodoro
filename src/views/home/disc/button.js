import "./button.scss";
import Circle from "../../../components/circle";
import Triangle from "../../../components/triangle";

import {useContext, useEffect} from 'react';
import {CartContext} from "../../../components/store";
export default function Button(){

    const [state,dispatch]=useContext(CartContext);

    const style={
        circle:{
            width: '96px',
            height: '96px',
            backgroundColor: 'var(--white)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
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
            <Circle customStyle={style.circle}>
                <Triangle customStyle={style.triangle}></Triangle>
            </Circle>

        </div>
    )
}
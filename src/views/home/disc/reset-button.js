
import "./reset-button.scss"

import {useContext, useEffect, useState} from 'react';
import {CartContext} from "../../../components/store";
export default function ResetButton({bg}){
    const [state, dispatch]=useContext(CartContext);



    const initStyle = {}

    const bgColor = {
        pink: {
            backgroundColor: 'var(--pink)',
        },
        white: {
            backgroundColor: 'var(--white)',
        },
        blue: {
            backgroundColor: 'var(--blue)',
        },
    }

    const newStyle = {
        ...initStyle,
        ...bgColor[bg],

    }


    return(
        <div className="reset-button" style={newStyle}
             onClick={()=>{
            dispatch({
                type:'START_AND_HOLD',
                payload: false
            })
        }}>

        </div>
    )
}
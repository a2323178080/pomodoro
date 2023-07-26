
import "./reset-button.scss"

import {useContext, useEffect, useState} from 'react';
import {CartContext} from "../../../components/store";
export default function ResetButton(){
    const [state, dispatch]=useContext(CartContext);

    return(
        <div className="reset-button" onClick={()=>{
            dispatch({
                type:'START_AND_HOLD',
                payload: false
            })
        }}>

        </div>
    )
}
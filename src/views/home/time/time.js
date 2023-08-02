import "./time.scss"
import {useContext, useEffect, useState} from 'react';
import {CartContext} from "../../../store/store";
import useColor from "../../../hook/useColor";
let countdown = null;
export default function Time({className}){
    const {time}=useColor()

    const [state, dispatch]=useContext(CartContext);
    useEffect(
        () => {
        if (state.startCondition==='start') {
            countdown= setInterval(function() {
                state.times=state.times-1;
                dispatch({
                    type:'TIME',
                    payload:state.times,
                })
            }, 1000);
        }

        return () => {
            clearInterval(countdown);
        }
    }, [state.startCondition])

    useEffect(() => {

        if(state.times === 0) {
            console.log('123456')
            dispatch({
                type:'WORK_AND_REST',
                payload:state.workCondition==='work'?'rest':'work'
            })
            dispatch({
                type:'START_AND_HOLD',
                payload: 'hold'
            })
            dispatch({
                type:'TIME',
                payload: 5
            })
        }
    }, [state.times])
    const minutes = Math.floor(state.times / 60);
    const remainderSeconds = state.times % 60;

    return(
        <div className={`time${className ? ' ' + className : ''}`} style={{color:`var(--${time})`}}>
            <div>{`
                ${minutes}:${remainderSeconds < 10
                ? "0" + remainderSeconds
                : remainderSeconds}`}
            </div>
        </div>
    )
}

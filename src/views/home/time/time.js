import "./time.scss"
import {useContext, useEffect, useState} from 'react';
import {CartContext} from "../../../components/store";

let countdown = null;

export default function Time({className}){

    const [state, dispatch]=useContext(CartContext);

    const [time, setTime] = useState(5);
    const minutes = Math.floor(time / 60);
    const remainderSeconds = time % 60;

    // 與Disc.js組件相關
    useEffect(() => {
        if (state.startCondition==='start') {
            countdown= setInterval(function() {
                setTime((pre) => pre - 1)
            }, 1000);

        } else {
            setTime(5)
        }
        return () => {
            clearInterval(countdown);
        }
    }, [state.startCondition])

    useEffect(() => {
        if(time === 0) {
            clearInterval(countdown);

            (function(){
                dispatch({
                    type:'WORK_AND_REST',
                    payload:state.workCondition==='work'?'rest':'work'
                })
                dispatch({
                    type:'START_AND_HOLD',
                    payload: 'hold'
                })
            })();

        }
    }, [time])

    console.log('time組件',state.workCondition);

    return(
        <div className={`time${className ? ' ' + className : ''}`}>
            <div>{`
                ${minutes}:${remainderSeconds < 10
                ? "0" + remainderSeconds
                : remainderSeconds}`}
            </div>
        </div>
    )
}

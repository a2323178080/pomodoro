import "./time.scss"
import {useContext, useEffect, useState} from 'react';
import {CartContext} from "../../../components/store";
let countdown = null;
export default function Time({className,color}){

    const newColor={
        pink:{
            color:'var(--pink)',
        },
        blue:{
            color:'var(--blue)'
        }
    }

    const newStyle={
        ...newColor[color]
    }

    const [state, dispatch]=useContext(CartContext);
    const [time, setTime] = useState(5);
    const minutes = Math.floor(time / 60);
    const remainderSeconds = time % 60;
    // 與Disc.js組件相關
    useEffect(() => {
        if (state.startCondition==='start') {

            // 沒有延遲
            // function instant() {
            //         setTime((pre) => pre - 1)
            //     }
            // countdown=setInterval(instant,1000)
            // instant();

            // 有遲延
            countdown= setInterval(function() {
                setTime((pre) => pre - 1)
            }, 1000);
        }
        return () => {
            clearInterval(countdown);
        }
    }, [state.startCondition])

    useEffect(() => {
        if(time === 0) {
            setTime(5);
            // clearInterval(countdown);

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
    return(
        <div className={`time${className ? ' ' + className : ''}`} style={newStyle}>
            <div>{`
                ${minutes}:${remainderSeconds < 10
                ? "0" + remainderSeconds
                : remainderSeconds}`}
            </div>
        </div>
    )
}

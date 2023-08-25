import "./time.scss"
import {useContext, useEffect, useState} from 'react';
import {CartContext} from "../../../store/store";
import useColor from "../../../hook/useColor";

let countdown = null;
export default function Time({className, size}) {
    const {time} = useColor()
    const [state, dispatch] = useContext(CartContext);
    useEffect(() => {
        if (state.startCondition === 'start') {
            countdown = setInterval(function () {
                state.times = state.times - 1;
                dispatch({
                    type: 'TIME', payload: state.times,
                })
            }, 1000);
        }
        return () => {
            clearInterval(countdown);
        }
    }, [state.startCondition])
    useEffect(() => {
        if (state.times === 0) {
            dispatch({
                type: 'WORK_AND_REST', payload: state.workCondition === 'work' ? 'rest' : 'work'
            })
            dispatch({
                type: 'START_AND_STOP', payload: 'stop'
            })
            dispatch({
                type: 'TIME', payload: 2
            })
        }
    }, [state.times])
    const minutes = Math.floor(state.times / 60);
    const seconds = state.times % 60;
    const newSize = {
        forLogo: {
            font: 'normal normal bold 64px/64px Roboto'
        }
    }
    const newStyle = {
        color: `var(--${time})`, ...newSize[size]
    }

    return (<div className={state.handlePosition('time', className)} style={newStyle}>
        <div>{`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`}
        </div>
    </div>)
}

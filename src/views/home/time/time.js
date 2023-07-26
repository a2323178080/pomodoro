import "./time.scss"
import {useContext, useEffect, useState} from 'react';
import {CartContext} from "../../../components/store";

let apple = null;

export default function Time(){

    const [state, dispatch]=useContext(CartContext);

    const [time, setTime] = useState(2);
    const minutes = Math.floor(time / 60);
    const remainderSeconds = time % 60;

    // 與Disc.js組件相關
    useEffect(() => {
        console.log('test b',state);
        console.log('56165');
        if (state.buttonSwitch) {
            apple = setInterval(function() {
                setTime((pre) => pre - 1)
            }, 1000);
            console.log('apple', apple)
        } else {
            setTime(2)
        }
        return () => {
            clearInterval(apple);
        }
    }, [state.buttonSwitch])

    useEffect(() => {

        console.log('test a',time);

        if(time === 0) {
            console.log('time', time)
            dispatch({type:'END'})
            // dispatch({
            //     type:'START_AND_HOLD',
            //     payload: false
            // })
            clearInterval(apple);
        }
    }, [time])

    return(

        <div className="time">

            <div>{`
                ${minutes}:${remainderSeconds < 10
                ? "0" + remainderSeconds
                : remainderSeconds}`}
            </div>
        </div>
    )
}
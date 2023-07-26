import "./time.scss"
import {useContext, useEffect, useState} from 'react';
import {CartContext} from "../../../components/store";

let apple = null;
export default function Time(){
    const time=1500;
    const minutes = Math.floor(time / 60);
    const remainderSeconds = time % 60;

    const [state, dispatch]=useContext(CartContext);

    const [times, setTime] = useState(1500);

    // useEffect(() => {
    //     console.log('statestatestatestatestate', state)
    // }, [state])

    // 與Disc.js組件相關
    useEffect(() => {
        if (state.buttonSwitch) {
            apple = setInterval(() => {
                setTime((pre) => pre - 1)
            }, 1000);

        }
        return () => {
            clearInterval(apple);
        }
    }, [state])

    return(

        <div className="time">
            <p>{times}</p>
            <div>{`
                ${minutes}:${remainderSeconds < 10
                ? "0" + remainderSeconds
                : remainderSeconds}`}
            </div>
        </div>
    )
}
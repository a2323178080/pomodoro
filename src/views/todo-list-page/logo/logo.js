import "./logo.scss";
import {useContext,useEffect} from "react";
import {CartContext} from "../../../store/store";

// const localTimes=JSON.parse(localStorage.getItem("keyTimes"));
// console.log("我是時間呀",localTimes);

export default function Logo() {

    const [state,dispatch] = useContext(CartContext);


    // useEffect(
    //     () => {setInterval(function() {
    //                 state.times=state.times-1;
    //                 dispatch({
    //                     type:'TIME',
    //                     payload:state.times,
    //                 })
    //             }, 1000);
    //
    //     }, [state.times])





    return (
        <div className="logo">
            <div className="big_circle">
                <div className="small_circle">
                    <div className="triangle"></div>
                    <div className="small_circle_border"></div>
                </div>
                <div className="clock">
                    <div>{state.times}</div>
                    <div>:</div>
                    <div>00</div>
                </div>
                <div className="text">THE FIRST THING TO DO TODAY</div>
            </div>
        </div>
    )
}
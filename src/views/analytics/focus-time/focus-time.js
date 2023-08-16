import "./focus-time.scss";
import {CartContext} from "../../../store/store";
import {useContext} from "react";

export default function FocusTime() {
    const [state] = useContext(CartContext);
    const focusTime = state.doneTodo.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.number
    }, 0)

    return (
        <div className="focusTime">
            <div>
                <div className="duration">TODAY</div>
                <span className="cyclesNumber">{focusTime}</span><span className="font-tomato">/TOMATO</span>
            </div>
            <div>
                <div className="duration">WEEK</div>
                <span className="cyclesNumber">{focusTime}</span><span className="font-tomato">/TOMATO</span>
            </div>
        </div>
    )
}
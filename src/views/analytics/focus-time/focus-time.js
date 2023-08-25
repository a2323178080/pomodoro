import "./focus-time.scss";
import {CartContext} from "../../../store/store";
import {useContext} from "react";
import useCount from "../../../hook/useCount";

export default function FocusTime() {
    const [state] = useContext(CartContext);
    const {countTomato}=useCount();
    console.log(countTomato(state.firstDay.format('DD')))

    return (
        <div className="focusTime">
            <div>
                <div className="duration">TODAY</div>
                <span className="cyclesNumber">{countTomato(state.firstDay.format('DD'))}</span><span className="font-tomato">/TOMATO</span>
            </div>
            <div>
                <div className="duration">WEEK</div>
                <span className="cyclesNumber">{state.weekCount}</span><span className="font-tomato">/TOMATO</span>
            </div>
        </div>
    )
}
import "./focus-time.scss";
import {CartContext} from "../../../store/store";
import {useContext} from "react";
import useColor from "../../../hook/useColor";
import useWeekDate from "../../../hook/useWeekDate";
import moment from 'moment';

export default function FocusTime() {
    const [state] = useContext(CartContext);
    const {calDateMatchCount}=useWeekDate();

    // const focusTime = state.doneTodo
    //     .filter((item) => {
    //         return item.date === new Date().getDate()
    //     })
    //     .reduce((accumulator, currentValue) => {
    //         if (currentValue.number === undefined) {
    //             return accumulator + 0
    //         }
    //         return accumulator + currentValue.number
    //     }, 0)
    console.log(calDateMatchCount(state.firstDay.format('DD')))

    return (
        <div className="focusTime">
            <div>
                <div className="duration">TODAY</div>
                <span className="cyclesNumber">{calDateMatchCount(state.firstDay.format('DD'))}</span><span className="font-tomato">/TOMATO</span>
            </div>
            <div>
                <div className="duration">WEEK</div>
                <span className="cyclesNumber">{state.weekCount}</span><span className="font-tomato">/TOMATO</span>
            </div>
        </div>
    )
}
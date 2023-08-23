import "./bar.scss";
import moment from 'moment';
import {CartContext} from "../../../store/store";
import {useContext} from "react";

export default function Bar({firstDay,seventhDay}){
    const [state] = useContext(CartContext);

    const count=[24,20,16,12,8,4];

    const startDate = moment(firstDay.format('YYYY.MM.DD'));
    const endDate = moment(seventhDay.format('YYYY.MM.DD'));
    const days = [];
    while (startDate.isSameOrBefore(endDate)) {
        days.push(startDate.format('MM/DD'));
        startDate.add(1, 'days');
    }

    const focusTime = state.doneTodo
        .filter((item)=>{
            return item.date===parseInt(firstDay.format("DD"))})
        .reduce((accumulator, currentValue) => {
            if(currentValue.number===undefined){
                return accumulator + 0
            }
            return accumulator + currentValue.number
        }, 0)


    console.log("done是啥?",state.doneTodo)
    console.log("format是",typeof firstDay.format("DD"))




    return(
        <div className="chart">
            <div className="d-flex">
                <div className="count">
                    {count.map((item,index)=>{
                        return <p key={index}>{item}</p>
                    })}


                </div>
                <div className="content">
                    <div className={`bar bar--${focusTime}`}></div>
                    <div className={`bar bar--${focusTime}`}></div>
                    <div className={`bar bar--${focusTime}`}></div>
                    <div className={`bar bar--${focusTime}`}></div>
                    <div className={`bar bar--${focusTime}`}></div>
                    <div className={`bar bar--${focusTime}`}></div>
                    <div className={`bar bar--${focusTime}`}></div>

                </div>
            </div>

            <div className="date">
                {days.map((day, index) => (
                    <div key={index}>{day}</div>
                ))}
            </div>




        </div>
    )
}
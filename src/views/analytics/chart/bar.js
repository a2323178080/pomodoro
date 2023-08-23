import "./bar.scss";
import moment from 'moment';
import {CartContext} from "../../../store/store";
import {useContext} from "react";

export default function Bar({year,month,day}){
    const [state] = useContext(CartContext);


    const focusTime = state.doneTodo
        .filter((item)=>{
        return item.date===new Date().getDate()})
        .reduce((accumulator, currentValue) => {
        if(currentValue.number===undefined){
            return accumulator + 0
        }
        return accumulator + currentValue.number
    }, 0)



    const count=[24,20,16,12,8,4];
    // const dateArray=[{date},{date}+1]


    const startDate = moment('2023-08-23');
    const endDate = moment('2023-08-29');
    const days = [];
    while (startDate.isSameOrBefore(endDate)) {
        days.push(startDate.format('MM/DD'));
        startDate.add(1, 'days');
    }



    return(
        <div className="chart">
            <div className="d-flex">
                <div className="count">
                    {count.map((item)=>{
                        return <p>{item}</p>
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
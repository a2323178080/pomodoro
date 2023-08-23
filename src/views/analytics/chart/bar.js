import "./bar.scss";
import moment from 'moment';
import {CartContext} from "../../../store/store";
import {useContext} from "react";

export default function Bar({firstDay,seventhDay}){
    const [state] = useContext(CartContext);

    const count=[24,20,16,12,8,4];

    const startDate = moment(firstDay.format('YYYY.MM.DD'));
    const endDate = moment(seventhDay.format('YYYY.MM.DD'));
    const dates = [];
    while (startDate.isSameOrBefore(endDate)) {
        dates.push(startDate.format('MM/DD'));
        startDate.add(1, 'days');
    }


    console.log(dates)


    const test=(whatDate)=>{

        return state.doneTodo
            .filter((item)=>{
                return item.date===parseInt(whatDate.format("DD"))})
            .reduce((accumulator, currentValue) => {
                if(currentValue.number===undefined){
                    return accumulator + 0
                }
                return accumulator + currentValue.number
            }, 0)
    }


    // console.log(test());
    //
    // console.log("done是啥?",state.doneTodo)
    // console.log("format是",typeof firstDay.format("DD"))




    return(
        <div className="chart">
            <div className="d-flex">
                <div className="count">
                    {count.map((item,index)=>{
                        return <p key={index}>{item}</p>
                    })}


                </div>
                <div className="content">
                    {/*<div className={`bar bar--${focusTime}`}></div>*/}
                    {/*<div className={`bar bar--${focusTime}`}></div>*/}
                    {/*<div className={`bar bar--${focusTime}`}></div>*/}
                    {/*<div className={`bar bar--${focusTime}`}></div>*/}
                    {/*<div className={`bar bar--${focusTime}`}></div>*/}
                    {/*<div className={`bar bar--${focusTime}`}></div>*/}
                    {/*<div className={`bar bar--${focusTime}`}></div>*/}
                    {dates.map((date, index) => (
                        <div key={index}>{date.slice(3,5)}</div>

                    ))}

                </div>
            </div>

            <div className="date">
                {dates.map((date, index) => (
                    <div key={index}>{date}</div>

                ))}


            </div>




        </div>
    )
}
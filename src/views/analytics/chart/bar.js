import "./bar.scss";
import moment from 'moment';
import {CartContext} from "../../../store/store";
import {useContext, useEffect} from "react";

export default function Bar({firstDay,lastSevenDay}){
    const [state] = useContext(CartContext);

    const count=[24,20,16,12,8,4];

    const dates = [];
    const startDate = moment(lastSevenDay.format('YYYY.MM.DD'));
    const endDate = moment(firstDay.format('YYYY.MM.DD'));
    while (startDate.isSameOrBefore(endDate)) {
        dates.push(startDate.format('MM/DD'));
        startDate.add(1, 'days');
    }



    const calDateWithCount=(whichDate)=>{
        return state.doneTodo
            .filter((item)=>{
                return item.date===parseInt(whichDate)})
            .reduce((accumulator, currentValue) => {
                if(currentValue.number===undefined){
                    return accumulator + 0
                }
                return accumulator + currentValue.number
            }, 0)
    }

    return(
        <div className="bar">
            <div className="d-flex">
                <div className="count">
                    {count.map((item,index)=>{
                        return <p key={index}>{item}</p>
                    })}
                </div>

                <div className="content">
                    {dates.map((date, index) => (
                        <div key={index} className={`column column--${calDateWithCount(date.slice(3,5))} `}
                        style={{backgroundColor:date===moment().format('MM/DD')?'var(--pink)':'var(--white)'}}
                        >
                        </div>
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
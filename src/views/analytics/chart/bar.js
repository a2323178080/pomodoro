import "./bar.scss";
import moment from 'moment';
import {CartContext} from "../../../store/store";
import {useContext, useEffect} from "react";
import useWeekDate from "../../../hook/useWeekDate";

export default function Bar({firstDay, lastSevenDay}) {
    const [state, dispatch] = useContext(CartContext);
    const count = [24, 20, 16, 12, 8, 4];
    const {dates,calDateMatchCount}=useWeekDate();

    return (
        <div className="bar">
            <div className="d-flex">
                <div className="count">
                    {count.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })}
                </div>
                <div className="content">
                    {dates.map((date, index) => (
                        <div key={index} className={`column column--${calDateMatchCount(date.slice(3, 5))} `}
                             style={{backgroundColor: date === moment().format('MM/DD') ? 'var(--pink)' : 'var(--white)'}}
                        >
                        </div>))}
                </div>
            </div>
            <div className="date">
                {dates.map((date, index) => (<div key={index}>{date}</div>))}
            </div>
        </div>)
}
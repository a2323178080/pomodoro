import "./chart.scss";
import {CartContext} from "../../../store/store";
import {useContext} from "react";

export default function Chart(){
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

    const Today=new Date();

    console.log("done是",state.doneTodo);

    return(
        <div className="chart">
            <div className="d-flex">
                <div className="count">
                    <p>24</p>
                    <p>20</p>
                    <p>16</p>
                    <p>12</p>
                    <p>8</p>
                    <p>4</p>

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
                <p>{`${Today.getMonth()+1}/${Today.getDate()-6}`}</p>
                <p>{`${Today.getMonth()+1}/${Today.getDate()-5}`}</p>
                <p>{`${Today.getMonth()+1}/${Today.getDate()-4}`}</p>
                <p>{`${Today.getMonth()+1}/${Today.getDate()-3}`}</p>
                <p>{`${Today.getMonth()+1}/${Today.getDate()-2}`}</p>
                <p>{`${Today.getMonth()+1}/${Today.getDate()-1}`}</p>
                <p>{`${Today.getMonth()+1}/${Today.getDate()}`}</p>

            </div>


        </div>
    )
}
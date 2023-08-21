import "./chart.scss";
import {CartContext} from "../../../store/store";
import {useContext} from "react";

export default function Chart(){
    const [state] = useContext(CartContext);



    const focusTime = state.doneTodo.reduce((accumulator, currentValue) => {
        if(currentValue.number===undefined){
            return accumulator + 0
        }
        return accumulator + currentValue.number
    }, 0)




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

            <div className="day">
                <p>7/1</p>
                <p>7/2</p>
                <p>7/3</p>
                <p>7/4</p>
                <p>7/5</p>
                <p>7/6</p>
                <p>7/7</p>

            </div>


        </div>
    )
}
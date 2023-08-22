import "./bar.scss";
import {CartContext} from "../../../store/store";
import {useContext} from "react";

export default function Bar({year,month,day}){
    const [state] = useContext(CartContext);

    const selectDate=new Date(year,month-1,day);
    console.log("selectDate是啥咪",selectDate);



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



    const count=[24,20,16,12,8,4];
    // const dateArray=[{date},{date}+1]

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
                {/*<p>{`${Today.getMonth()+1}/${Today.getDate()-6}`}</p>*/}
                {/*<p>{`${Today.getMonth()+1}/${Today.getDate()-5}`}</p>*/}
                {/*<p>{`${Today.getMonth()+1}/${Today.getDate()-4}`}</p>*/}
                {/*<p>{`${Today.getMonth()+1}/${Today.getDate()-3}`}</p>*/}
                {/*<p>{`${Today.getMonth()+1}/${Today.getDate()-2}`}</p>*/}
                {/*<p>{`${Today.getMonth()+1}/${Today.getDate()-1}`}</p>*/}
                {/*<p>{`${Today.getMonth()+1}/${Today.getDate()}`}</p>*/}
               <p>{selectDate.getDate()}</p>


            </div>


        </div>
    )
}
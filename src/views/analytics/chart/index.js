import "./index.scss";
import {useState} from "react";
import Header from "../../../components/Header";
import DropdownIcon from "../../../components/dropdown-icon";
import React from "react";
import Date from "./date"
import Bar from "./bar"
import moment from "moment/moment";




export default function Index(){

    const [firstDay,setFirstDay]=useState(moment())
    const [lastSevenDay,setLastSevenDay]=useState(moment().subtract(6, 'days'));
    const [key,setKey]=useState(1)

    const nextCycleDay=()=>{
        setLastSevenDay(pre=> pre.add(7, 'days'));
        setFirstDay(pre=>pre.add(7, 'days'));
        setKey(pre=>pre+1);
    }
    const previousCycleDay=()=>{
        setLastSevenDay(pre=>pre.subtract(7, 'days'));
        setFirstDay(pre=>pre.subtract(7, 'days'));
        setKey(pre=>pre-1);
    }



    return(
        <div className="chart">
            <Header title="CHART" rightContent={<Date
                firstDay={firstDay}
                lastSevenDay={lastSevenDay}
                key={key}
                previousCycleDay={previousCycleDay}
                nextCycleDay={nextCycleDay}


            />}/>

            <div >
                <Bar firstDay={firstDay} lastSevenDay={lastSevenDay}/>
            </div>


        </div>
    )
}
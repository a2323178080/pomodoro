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
    const [seventhDay,setSeventhDay]=useState(moment().subtract(6, 'days'));
    const [key,setKey]=useState(1)

    const nextCycleDay=()=>{
        setSeventhDay(pre=> pre.add(7, 'days'));
        setFirstDay(pre=>pre.add(7, 'days'));
        setKey(pre=>pre+1);
    }
    const previousCycleDay=()=>{
        setSeventhDay(pre=>pre.subtract(7, 'days'));
        setFirstDay(pre=>pre.subtract(7, 'days'));
        setKey(pre=>pre-1);
    }



    return(
        <div className="chart">
            <Header title="CHART" rightContent={<Date
                firstDay={firstDay}
                seventhDay={seventhDay}
                key={key}
                previousCycleDay={previousCycleDay}
                nextCycleDay={nextCycleDay}


            />}/>

            <div >
                <Bar firstDay={firstDay} seventhDay={seventhDay}/>
            </div>


        </div>
    )
}
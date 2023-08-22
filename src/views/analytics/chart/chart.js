import "./chart.scss";
import {useState} from "react";
import Header from "../../../components/Header";
import DropdownIcon from "../../../components/dropdown-icon";
import React from "react";
import Date from "./date";
import Bar from "./bar"

export default function Chart({renderContent}){
    const [year,setyear]=useState("");
    const [month,setMonth]=useState("");
    const [day,setDay]=useState("");
    const handleDate=(date,dateString)=>{
        setyear(dateString[0].slice(0,4));
        setMonth(dateString[0].slice(5,7));
        setDay(dateString[0].slice(8,10));


    }
    console.log(year)

    return(
        <div className="chart">

            <Header title="CHART" rightContent={<Date handleDate={handleDate}/>}/>


            <div >
                <Bar year={year} month={month} day={day}/>
            </div>




        </div>
    )
}
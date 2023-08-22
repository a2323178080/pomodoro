import "./chart.scss";
import {useState} from "react";
import Header from "../../../components/Header";
import DropdownIcon from "../../../components/dropdown-icon";
import React from "react";
import Date from "./date";
import Bar from "./bar"

export default function Chart({renderContent}){
    const [date,setDate]=useState("")
    const handleDate=(date,dateString)=>{
        setDate(dateString[0]);

    }
    console.log(date);

    return(
        <div className="chart">

            <Header title="CHART" rightContent={<Date handleDate={handleDate}/>}/>


            <div >
                <Bar date={date}/>
            </div>




        </div>
    )
}
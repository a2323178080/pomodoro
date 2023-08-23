import "./index.scss";
import {useState} from "react";
import Header from "../../../components/Header";
import DropdownIcon from "../../../components/dropdown-icon";
import React from "react";
import Date from "./date"
import Bar from "./bar"









export default function Index({renderContent}){






    return(
        <div className="chart">

            <Header title="CHART" rightContent={<Date />}/>

            <div >
                <Bar />
            </div>


        </div>
    )
}
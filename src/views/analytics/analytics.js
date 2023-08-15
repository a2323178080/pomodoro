import "./analytics.scss";
import React, {useContext} from "react";
import {CartContext} from "../../store/store";

import Sidebar from "../../components/sidebar";
import Logo from "../todo-list-page/logo/logo";
import CrossIcon from "../../components/cross-icon";
import Slogan from "../../components/slogan";
import BarChart from "./bar-chart/bar-chart";
import Collapse from "../todo-list-page/collapse/collapse";


export default function Analytics(){
    const [state] = useContext(CartContext);

    const focusTime = [
        {
            text:1,
            do:0
        }
    ];




    return(
        <div className="analytics">
            <div className="layout">
                <div className="col-5">
                    <Sidebar position="onAnalyticsPage"/>
                    <Logo/>
                </div>

                <div className="col-5">

                    {/*{state.doneTodo.reduce((accumulator,currentValue)=>{*/}
                    {/*    return accumulator+currentValue.number*/}
                    {/*},0)}*/}

                    <Collapse title="FOCUS TIME" list={focusTime}/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <BarChart/>

                </div>
                <div>
                    <CrossIcon/>
                    <Slogan/>
                </div>
            </div>
        </div>
    )
}
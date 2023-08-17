import "./analytics.scss";
import React, {useContext} from "react";
import {CartContext} from "../../store/store";
import Sidebar from "../../components/sidebar";
import Logo from "../todo-list-page/logo/logo";
import CrossIcon from "../../components/cross-icon";
import Slogan from "../../components/slogan";
import BarChart from "./bar-chart/bar-chart";
import CollapseTest from "../todo-list-page/collapse-test/collapse-test";
import FocusTime from  "../analytics/focus-time/focus-time";
export default function Analytics(){
    const [state] = useContext(CartContext);

    const focusTime = [
        {
            text:<FocusTime/>,
            do:0
        }
    ];
    const chart = [
        {
            text:<BarChart/>,
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
                    <CollapseTest title="FOCUS TIME" list={focusTime}/>
                    <br/>
                    <br/>
                    <br/>
                    <CollapseTest title="CHART" list={chart}/>

                </div>
                <div>
                    <CrossIcon/>
                    <Slogan/>
                </div>
            </div>
        </div>
    )
}
import "./analytics.scss";
import React, {useContext, useEffect} from "react";
import {CartContext} from "../../store/store";
import Sidebar from "../../components/sidebar";
import Logo from "../todo-list-page/logo/logo";
import CrossIcon from "../../components/cross-icon";
import Slogan from "../../components/slogan";
import ChartTest from "./chart/chart-test";
import CollapseTest from "../todo-list-page/collapse-test/collapse-test";
import FocusTime from  "../analytics/focus-time/focus-time";
import CollapseTest2 from "../todo-list-page/collapse-test2/collapse-test2";
import Collapse from "../../components/collapse";
import Chart from "./chart/chart";
import Header from "../../components/Header";
import Date from "../analytics/chart/date"
export default function Analytics(){
    const [state, dispatch] = useContext(CartContext);

    const handlePosition = (type, className) => type + (className ? ' ' + className : '');
    useEffect(() => {
        dispatch({
            type: 'HANDLE_POSITION',
            payload: handlePosition
        })
    }, [])


    return(
        <div className="analytics">
            <Sidebar position="onAnalyticsPage"/>
            <Header title="FOCUS TIME"/>
            <FocusTime/>

            <br/>
            <br/>
            <br/>

            <Header title="CHART" rightContent={<Date/>}/>
            <Chart/>


        </div>
    )
}
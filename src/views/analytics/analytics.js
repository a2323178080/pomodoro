import "./analytics.scss";
import React, {useContext} from "react";
import {CartContext} from "../../store/store";
import Sidebar from "../../components/sidebar";
import Logo from "../todo-list-page/logo/logo";
import CrossIcon from "../../components/cross-icon";
import Slogan from "../../components/slogan";
import Chart from "./chart/chart";
import CollapseTest from "../todo-list-page/collapse-test/collapse-test";
import FocusTime from  "../analytics/focus-time/focus-time";
import CollapseTest2 from "../todo-list-page/collapse-test2/collapse-test2";
import Collapse from "../../components/collapse";
export default function Analytics(){
    const [state] = useContext(CartContext);



    return(
        <div className="analytics">
            <Sidebar position="onAnalyticsPage"/>
            <Collapse title="FOCUS TIME">
                <FocusTime/>
            </Collapse>

            <br/>
            <br/>
            <br/>

            <Collapse title="CHART">
                <Chart/>
            </Collapse>



        </div>
    )
}
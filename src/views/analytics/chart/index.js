import {useState} from "react";
import Header from "../../../components/Header";
import React from "react";
import Date from "./date"
import Bar from "./bar"
import moment from "moment/moment";

moment.suppressDeprecationWarnings = true;

export default function Index() {
    // const [firstDay, setFirstDay] = useState(moment())
    // const [lastSevenDay, setLastSevenDay] = useState(moment().subtract(6, 'days'));

    return (
        <div>
            <Header title="CHART" rightContent={<Date

            />}/>
            <div>
                <Bar/>
            </div>
        </div>
    )
}
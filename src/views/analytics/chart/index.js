import {useState} from "react";
import Header from "../../../components/Header";
import React from "react";
import Date from "./date"
import Bar from "./bar"
import moment from "moment/moment";

moment.suppressDeprecationWarnings = true;

export default function Index() {
    const [firstDay, setFirstDay] = useState(moment())
    const [lastSevenDay, setLastSevenDay] = useState(moment().subtract(6, 'days'));

    const nextCycleDay = () => {
        setLastSevenDay(pre => pre.clone().add(7, 'days'));
        setFirstDay(pre => pre.clone().add(7, 'days'));
    }
    const previousCycleDay = () => {
        setLastSevenDay(pre => pre.clone().subtract(7, 'days'));
        setFirstDay(pre => pre.clone().subtract(7, 'days'));
    }

    return (
        <div>
            <Header title="CHART" rightContent={<Date
                firstDay={firstDay}
                lastSevenDay={lastSevenDay}
                previousCycleDay={previousCycleDay}
                nextCycleDay={nextCycleDay}
            />}/>
            <div>
                <Bar firstDay={firstDay} lastSevenDay={lastSevenDay}/>
            </div>
        </div>
    )
}
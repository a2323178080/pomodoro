import "./analytics.scss";
import React, {useContext, useEffect} from "react";
import {CartContext} from "../../store/store";
import Sidebar from "../../components/sidebar";

import FocusTime from  "../analytics/focus-time/focus-time";
import Bar from "./chart/bar";
import Header from "../../components/Header";
import Date from "../analytics/chart/date";
import Index from "./chart";
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
            <Index />


        </div>
    )
}
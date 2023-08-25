import React, {useContext, useEffect} from "react";
import {CartContext} from "../../store/store";
import Sidebar from "../../components/sidebar";
import FocusTime from "../analytics/focus-time/focus-time";
import Header from "../../components/Header";
import Index from "./chart";

export default function Analytics() {
    const [state, dispatch] = useContext(CartContext);
    const handlePosition = (type, className) => type + (className ? ' ' + className : '');
    useEffect(() => {
        dispatch({
            type: 'HANDLE_POSITION',
            payload: handlePosition
        })
    }, [])

    return (
        <div>
            <Sidebar position="onAnalyticsPage"/>
            <Header title="FOCUS TIME"/>
            <FocusTime/>
            <br/>
            <br/>
            <br/>
            <Index/>
        </div>
    )
}
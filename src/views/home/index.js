import {useEffect, useState} from "react";

import Disc from './disc/disc'
import "./home.scss"
import Input from "./input/input";
import Task from "./task/task.js";
import Time from "./time/time.js";

export default function Home(){


    // 與Disc.js組件相關
    // const startAndHold = () => {
    //     alert("測試");
    // }

    return(
        <div className="home">

            <div className="left-section">
                <div className="upper"><Input/></div>
                <div className="middle"><Task/></div>
                <div className="lower-middle"><Time/></div>
                <div className="lower"></div>
            </div>
            <div className="right-section">
            </div>

            <Disc/>
        </div>
    )
}
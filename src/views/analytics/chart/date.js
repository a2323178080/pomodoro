import "./date.scss";
import moment from 'moment';
import {useEffect, useState} from "react";
import {RightOutlined,LeftOutlined } from '@ant-design/icons'

export default function Date({firstDay,lastSevenDay,key,previousCycleDay,nextCycleDay}){




    return(
        <div className="date">
            <div key={key}><LeftOutlined onClick={previousCycleDay}/>
                {lastSevenDay.format('YYYY.MM.DD')}--{firstDay.format('YYYY.MM.DD')}
                <RightOutlined onClick={nextCycleDay}/>

            </div>



        </div>
    )
}
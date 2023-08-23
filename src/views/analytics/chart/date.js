import "./date.scss";
import moment from 'moment';
import {useEffect, useState} from "react";
import {RightOutlined,LeftOutlined } from '@ant-design/icons'

export default function Date({firstDay,seventhDay,key,previousCycleDay,nextCycleDay}){




    return(
        <div className="date" >
            <div key={key}><LeftOutlined onClick={previousCycleDay}/>
                {firstDay.format('YYYY.MM.DD')}-{seventhDay.format('YYYY.MM.DD')}

                <RightOutlined onClick={nextCycleDay}/>




            </div>



        </div>
    )
}
import "./date.scss";
import moment from 'moment';
import {useEffect, useState} from "react";
import {RightOutlined,LeftOutlined } from '@ant-design/icons'

export default function Date(){

    const [firstDay,setFirstDay]=useState(moment())
    const [seventhDay,setSeventhDay]=useState(moment().add(6, 'days'));
    const [key,setKey]=useState(1)

    const nextCycleDay=()=>{
       setSeventhDay(pre=> pre.add(7, 'days'));
        setFirstDay(pre=>pre.add(7, 'days'));
       setKey(pre=>pre+1);
    }
    const previousCycleDay=()=>{
        setSeventhDay(pre=>pre.subtract(7, 'days'));
        setFirstDay(pre=>pre.subtract(7, 'days'));
        setKey(pre=>pre-1);
    }


    return(
        <div className="date" >
            <div key={key}><LeftOutlined onClick={previousCycleDay}/>
                {firstDay.format('YYYY.MM.DD')}-{seventhDay.format('YYYY.MM.DD')}

                <RightOutlined onClick={nextCycleDay}/>




            </div>



        </div>
    )
}
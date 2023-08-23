import "./date.scss";
import moment from 'moment';
import {useState,useEffect} from "react";
import {RightOutlined,LeftOutlined } from '@ant-design/icons'

export default function Date(){

    const [firstDay,setFirstDay]=useState(moment())
    const [seventhDay,setSeventhDay]=useState(moment().add(6, 'days'));

    const next=()=>{
       setSeventhDay(pre=>pre.add(6, 'days'));
       console.log(123)
    }



    return(
        <div className="date">
            <div><LeftOutlined />
                {firstDay.format('YYYY.MM.DD')}-{seventhDay.format('YYYY.MM.DD')}
{}
                {/*<RightOutlined onClick={next}/>*/}
                <button type="button" onClick={next}>測試按鈕</button>
            </div>



        </div>
    )
}
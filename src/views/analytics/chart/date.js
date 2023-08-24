import "./date.scss";
import {RightOutlined,LeftOutlined } from '@ant-design/icons'
export default function Date({firstDay,lastSevenDay,previousCycleDay,nextCycleDay}){


    return(
        <div className="date">

            <div ><LeftOutlined onClick={previousCycleDay}/>
                {lastSevenDay.format('YYYY.MM.DD')}--{firstDay.format('YYYY.MM.DD')}
                <RightOutlined onClick={nextCycleDay}/>
            </div>
        </div>
    )
}
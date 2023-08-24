import "./date.scss";
import {RightOutlined,LeftOutlined } from '@ant-design/icons'
export default function Date({firstDay,lastSevenDay,previousCycleDay,nextCycleDay}){



    return(
        <div className="date">

            <div className="flex"><LeftOutlined onClick={previousCycleDay} />
                <p className="font">{lastSevenDay.format('YYYY.MM.DD')}--{firstDay.format('YYYY.MM.DD')}</p>
                <RightOutlined onClick={nextCycleDay}/>
            </div>
        </div>
    )
}
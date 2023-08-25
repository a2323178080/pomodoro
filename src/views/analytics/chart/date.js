import "./date.scss";
import {RightOutlined, LeftOutlined} from '@ant-design/icons'

export default function Date({firstDay,setFirstDay, lastSevenDay,setLastSevenDay}) {
    const nextCycleDay = () => {
        setLastSevenDay(pre => pre.clone().add(7, 'days'));
        setFirstDay(pre => pre.clone().add(7, 'days'));
    }
    const previousCycleDay = () => {
        setLastSevenDay(pre => pre.clone().subtract(7, 'days'));
        setFirstDay(pre => pre.clone().subtract(7, 'days'));
    }

    return (
        <div className="date">
            <div className="flex"><LeftOutlined onClick={previousCycleDay}/>
                <p className="font">{lastSevenDay.format('YYYY.MM.DD')}--{firstDay.format('YYYY.MM.DD')}</p>
                <RightOutlined onClick={nextCycleDay}/>
            </div>
        </div>)
}
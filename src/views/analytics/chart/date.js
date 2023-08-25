import "./date.scss";
import {RightOutlined, LeftOutlined} from '@ant-design/icons';
import {useContext} from "react";
import {CartContext} from "../../../store/store";
import moment from "moment/moment";
moment.suppressDeprecationWarnings = true;

export default function Date() {
    const [state, dispatch] = useContext(CartContext);
    const nextCycleDay = () => {
        dispatch({
            type: 'COUNT_FIRST_DAY',
            payload: state.firstDay.clone().add(7, 'days')
        })
        dispatch({
            type: 'COUNT_LAST_SEVEN_DAY',
            payload: state.lastSevenDay.clone().add(7, 'days')
        })
        // setLastSevenDay(pre => pre.clone().add(7, 'days'));
        // setFirstDay(pre => pre.clone().add(7, 'days'));
    }
    const previousCycleDay = () => {
        dispatch({
            type: 'COUNT_FIRST_DAY',
            payload: state.firstDay.clone().subtract(7, 'days')
        })
        dispatch({
            type: 'COUNT_LAST_SEVEN_DAY',
            payload: state.lastSevenDay.clone().subtract(7, 'days')
        })
    }

    return (
        <div className="date">
            <div className="flex"><LeftOutlined onClick={previousCycleDay}/>
                <p className="font">{state.lastSevenDay.format('YYYY.MM.DD')}--{state.firstDay.format('YYYY.MM.DD')}</p>
                <RightOutlined onClick={nextCycleDay}/>
            </div>
        </div>)
}
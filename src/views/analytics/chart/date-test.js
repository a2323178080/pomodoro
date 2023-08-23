import "./date-test.scss"
import 'antd/dist/antd.css';
import {DatePicker, Space} from 'antd';
import moment from 'moment';
import React from 'react';
const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD';
export default function DateTest({handleDate}) {

    return (
        <div className="date">
            <RangePicker
                defaultValue={[moment('2023/01/01', dateFormat), moment('2023/01/30', dateFormat)]}
                format={dateFormat} onChange={handleDate}
            />
        </div>
    )
}
import "./bar-chart.scss";
import { Column } from '@ant-design/charts';


export default function BarChart(){
    const data = [
        {
            type: '7/1',
            sales: 16,
        },
        {
            type: '7/2',
            sales: 52,
        },
        {
            type: '7/3',
            sales: 12,
        },
        {
            type: '7/4',
            sales: 145,
        },
        {
            type: '7/5',
            sales: 48,
        },
        {
            type: '7/6',
            sales: 38,
        },
        {
            type: '7/7',
            sales: 38,
        },

    ];
    const config = {
        title: {
            visible: true,
            text: '基础柱状图-图形标签位置',
        },
        description: {
            visible: true,
            text:
                '基础柱状图的图形标签位置可以指定为top-柱形上部\uFF0Cmiddle-柱形中心\uFF0Cbottom-柱形底部\u3002',
        },
        forceFit: true,
        data,
        padding: 'auto',
        xField: 'type',
        yField: 'sales',
        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '次數',
            },
        },
        label: {
            visible: true,
            position: 'middle',
        },
    };


    return(
        <div className="barChart">
            <Column {...config} />
        </div>
    )
}
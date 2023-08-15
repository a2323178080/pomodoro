import "./bar-chart.scss";
import { Column } from '@ant-design/charts';


export default function BarChart(){
    const data = [
        {
            action: '7/1',
            pv: 5000,
        },
        {
            action: '7/2',
            pv: 35000,
        },
        {
            action: '7/3',
            pv: 25000,
        },
        {
            action: '7/4',
            pv: 15000,
        },
        {
            action: '7/5',
            pv: 8500,
        },
        {
            action: '7/6',
            pv: 8500,
        },
        {
            action: '7/7',
            pv: 8500,
        },
    ];
    const config = {
        title: {
            visible: true,
            text: '基础柱状图-转化率组件',
        },
        description: {
            visible: true,
            text: '基础柱状图的图形之间添加转化率标签图形\uFF0C用户希望关注从左到右的数据变化比例',
        },
        forceFit: true,
        data,
        padding: 'auto',
        xField: 'action',
        yField: 'pv',
        conversionTag: {
            visible: true,
        },
    };


    return(
        <div className="barChart">
            <Column {...config} />
        </div>
    )
}
import "./list.scss"
import React, {useContext} from "react";
import {CartContext} from "../../../store/store";
import Circle from "../../../components/circle";

const List = ({position, aaa}) => {
    console.log('aaa', aaa)
    const [state] = useContext(CartContext);

    const newPosition = {
        lowerMiddle: {
            left: '475px',
            top: '498px'
        },
    }
    const newStyle = {
        ...newPosition[position],
    }

    function handleDot(num) {
        let list = [];
        for (let i = 0; i < num; i++) {
            list.push(<div><Circle size={12} bg="white" border="2px solid #003164"
                                   marginLeft="eight"/>
            </div>);
        }
        return list;
    }

    return(
        <div className="list" style={newStyle}>


            <div className="item">
                {aaa === 1 && state.doneTodo.map((item) => {
                    return (
                        <ul>
                            <li className="item--li">
                                <span className="material-icons">check_circle_outline</span>
                                <span>{item.do}</span>
                                <span className="item--cycleIcon">{handleDot(item.number)}</span>
                            </li>
                        </ul>


                    )
                })}
                {aaa === 2 && <div>222222222222</div>}
            </div>
        </div>
    )
}

export default List
import "./list.scss"
import {useContext} from "react";
import {CartContext} from "../../../store/store";
import Circle from "../../../components/circle";

export default function List({position}){
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
                {state.doneTodo.map((item) => {
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
            </div>
        </div>
    )
}
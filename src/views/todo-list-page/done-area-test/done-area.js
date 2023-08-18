import "./done-area.scss"
import {useContext} from "react";
import {CartContext} from "../../../store/store";
import Circle from "../../../components/circle";
export default function DoneArea({position}) {

    const [state] = useContext(CartContext);

    const newPosition = {
        lowerMiddle: {
            left: '575px',
            top: '498px'
        },
    }
    const newStyle = {
        ...newPosition[position],
    }

    function handleDot(num) {
        let list = [];
        for (let i = 0; i < num; i++) {
            list.push(<div><Circle size={15} bg="white" border="2px solid #003164"
                                   marginLeft="eight"/>
            </div>);
        }
        return list;
    }


    return (
        <div className="doneArea" style={newStyle}>
            <div className="doneBar">DONE
                <div className="dropdown"></div>
            </div>

            <div className="item">
                {state.doneTodo.map((item) => {
                    return (

                    <ul>
                        <li className="item--li">
                            <span className="material-icons">check_circle_outline</span>
                            <span className="font">{item.do}</span>
                            <span className="item--cycleIcon">{handleDot(item.number)}</span>
                        </li>
                    </ul>


                    )
                })}
            </div>
        </div>
    )
}

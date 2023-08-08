import "./done-area.scss"
import {useContext} from "react";
import {CartContext} from "../../../store/store";

export default function DoneArea({position}){

    const [state] = useContext(CartContext);

    const newPosition={
        lowerMiddle:{
            left:'475px',
            top:'498px'
        },

    }

    const newStyle={
        ...newPosition[position],

    }
    return(
        <div className="doneArea" style={newStyle}>
            <div className="doneBar">DONE
                <div className="dropdown"></div>
            </div>

            {state.doneTodo.map((item)=>{
                console.log('item', item)
                return <div >{item.do}
                    {item.number}



                </div>

            })}
        </div>
    )
}
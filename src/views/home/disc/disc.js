
import {useContext} from 'react';
import {CartContext} from "../../../components/store";


import "./disc.scss";
import Circle from '../../../components/circle';
import Triangle from "../../../components/triangle";
import ResetButton from "./reset-button";
import Button from "./button";

export default function Disc({startAndHold}){

    const [state,dispatch]=useContext(CartContext);

    const circleColor = {
        "hold": {
            "work": "pink",
            "rest": "blue"
        },
        "start": {
            "work": 'white',
            "rest": "white"
        }
    }

    return(
        <div className="disc">

            <Circle size={540} shape="circle" border="bold" >
                <Circle size={520} >


                    <Circle shape="circle" bg={circleColor[state.startCondition][state.workCondition]} size={520} >
                        <Button/>
                    </Circle>

                </Circle>
            </Circle>
            <ResetButton/>
        </div>
    )
}


// {state.startCondition=='hold'?<Circle shape="circle" bg="pink"  size={520} >
//         <Button/>
//     </Circle>:
//     <Circle shape="circle" bg="white"  size={520} >
//         <Button/>
//     </Circle>}
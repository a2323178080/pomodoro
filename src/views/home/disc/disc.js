
import {useContext} from 'react';
import {CartContext} from "../../../components/store";


import "./disc.scss";
import Circle from '../../../components/circle';
import Triangle from "../../../components/triangle";
import ResetButton from "./reset-button";
import Button from "./button";

export default function Disc({className}){

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
    const borderColor = {
        "work":"pink",
        "rest":"blue"
    }
    const resetColor = {
        "hold": {
            "work": "white",
            "rest": "white"
        },
        "start": {
            "work": 'pink',
            "rest": "blue"
        }
    }
    return(
        <div className={`disc${className ? ' ' + className : ''}`} >

            <Circle size={540} shape="circle" borderColor={borderColor[state.workCondition]}  >
                <Circle size={520}  >

                    <Circle shape="circle" bg={circleColor[state.startCondition][state.workCondition]} size={520}
                            borderColor={borderColor[state.workCondition]}>
                        <Button/>
                    </Circle>
                </Circle>
            </Circle>
            <ResetButton bg={resetColor[state.startCondition][state.workCondition]}/>
        </div>
    )
}



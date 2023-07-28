
import {useContext} from 'react';
import {CartContext} from "../../../components/store";
import useCircleColor from "../../../hook/useCircleColor"

import "./disc.scss";
import Circle from '../../../components/circle';
import Triangle from "../../../components/triangle";
import ResetButton from "./reset-button";
import Button from "./button";

export default function Disc({className}){

    // const [state,dispatch]=useContext(CartContext);

    const {bg, border, reset, classRoot, number} = useCircleColor()
    console.log('bg, border, reset', bg, border, reset, classRoot, number)

    return(
        <div className={`disc${className ? ' ' + className : ''}`} >

            <Circle size={540} shape="circle" borderColor={border}  >
                <Circle size={520}  >

                    <Circle shape="circle" bg={bg} size={520}
                            borderColor={border}>
                        <Button/>
                    </Circle>
                </Circle>
            </Circle>
            <ResetButton bg={reset}/>
        </div>
    )
}



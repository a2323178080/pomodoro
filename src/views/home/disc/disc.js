
import {useContext} from 'react';
import {CartContext} from "../../../components/store";
import useColor from "../../../hook/useColor"

import "./disc.scss";
import Circle from '../../../components/circle';
import Triangle from "../../../components/triangle";
import ResetButton from "./reset-button";
import Button from "./button";
import PieRing from "./pie-ring";

export default function Disc({className}){

    // const [state,dispatch]=useContext(CartContext);

    const {ringColor,circleColor, reset,allColor, all} = useColor ()

    return(
        <div className={`disc${className ? ' ' + className : ''}`} >

            <Circle size={540} shape="circle" borderColor={all('ring')}  >
                <Circle size={520}  >

                    <Circle shape="circle" bg={all('circle')} size={520}
                            borderColor={all('ring')}>
                        <Button/>
                    </Circle>
                </Circle>
            </Circle>
            <ResetButton bg={reset}/>

            <PieRing/>
        </div>
    )
}



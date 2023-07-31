
import {useContext} from 'react';
import {CartContext} from "../../../components/store";
import useColor from "../../../hook/useColor"
import "./disc.scss";
import Circle from '../../../components/circle';
import Triangle from "../../../components/triangle";
import ResetButton from "./reset-button";
import StartIcon from "./start-icon";
import HoldIcon from "./hold-icon";
import PieRing from "./pie-ring";
export default function Disc({className}){
    const [state]=useContext(CartContext);
    const {circle,ring,reset} = useColor ()
    return(
        <div className={`disc${className ? ' ' + className : ''}`} >
            <Circle size={540}  borderColor={ring}  >
                <Circle size={520}  >
                    <Circle  bg={circle} size={520}
                            borderColor={ring}>
                        {state.startCondition==="hold"? <StartIcon/>:<HoldIcon/>}
                    </Circle>
                </Circle>
            </Circle>
            <ResetButton bg={reset}/>
            <PieRing/>
        </div>
    )
}


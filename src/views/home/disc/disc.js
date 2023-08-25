import {useContext} from 'react';
import {CartContext} from "../../../store/store";
import useColor from "../../../hook/useColor"
import "./disc.scss";
import Circle from '../../../components/circle';
import Triangle from "../../../components/triangle";
import ResetButton from "./reset-button";
import StartIcon from "./start-icon";
import StopIcon from "./stop-icon";
import ProgressBar from "./progress-bar";

export default function Disc({className}) {
    const [state] = useContext(CartContext);
    const {reset} = useColor();

    return (
        <div className={state.handlePosition('disc', className)}>
            <Circle size={540} bg="transparent">
                <Circle size={510}>
                    {state.startCondition === "stop" ? <StartIcon/> : <StopIcon/>}
                </Circle>
            </Circle>
            <ResetButton bg={reset}/>
            <ProgressBar/>
        </div>
    )
}


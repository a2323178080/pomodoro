
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
    const {reset, all} = useColor ()
    return(
        <div className={`disc${className ? ' ' + className : ''}`} >
            <Circle size={540} shape="circle" borderColor={all('ring')}  >
                <Circle size={520}  >

                    <Circle shape="circle" bg={all('circle')} size={520}
                            borderColor={all('ring')}>
                        {state.startCondition==="hold"? <StartIcon/>:<HoldIcon/>}
                    </Circle>
                </Circle>
            </Circle>
            <ResetButton bg={reset}/>
            <PieRing/>
        </div>
    )
}



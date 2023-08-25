import "./stop-icon.scss"
import Rectangle from "../../../components/rectangle";
import useColor from "../../../hook/useColor";
import {useContext} from 'react';
import {CartContext} from "../../../store/store";

export default function StopIcon() {
    const [state, dispatch] = useContext(CartContext);
    const {iconCircle} = useColor();

    return (
        <div className="stopIcon" style={{backgroundColor: `var(--${iconCircle})`}}
             onClick={() => {
                 dispatch({
                     type: 'START_AND_STOP',
                     payload: state.startCondition === 'stop' ? 'start' : 'stop'
                 })
             }}>
            <Rectangle/>
        </div>
    )
}


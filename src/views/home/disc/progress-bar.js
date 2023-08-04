import "./progress-bar.scss"
import {useContext, useEffect} from 'react';
import {CartContext} from "../../../store/store";
import useColor from "../../../hook/useColor";
export default function ProgressBar() {
    const {progressBar} = useColor ()
    const [state] = useContext(CartContext);




    return (
        <div className="progressBar">
            <div className={`element1 element1--${state.startCondition}`}
            style={{borderColor:`var(--${progressBar})`}}
            >
                <div className={`element2 element2--${state.startCondition}`}
                     style={{borderColor:`var(--${progressBar})`}}></div>
                <div className={`element3 element3--${state.startCondition}`}
                     style={{borderColor:`var(--${progressBar})`}}></div>
            </div>
        </div>
    )
}
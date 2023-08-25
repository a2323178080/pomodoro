import "./progress-bar.scss"
import {useContext} from 'react';
import {CartContext} from "../../../store/store";
import useColor from "../../../hook/useColor";

export default function ProgressBar() {
    const {progressBar} = useColor()
    const [state] = useContext(CartContext);

    return (
        <div className="progressBar">
            <div className={`element1 element1--${state.startCondition}`}
                 style={state.resetCondition === false ? {borderColor: `var(--${progressBar}`} : {animation: 'reset-a1 5s linear 0s infinite'}}>
                <div className={`element2 element2--${state.startCondition}`}
                     style={state.resetCondition === false ? {borderColor: `var(--${progressBar}`} : {animation: 'reset-a2 5s linear 0s infinite'}}>
                </div>
                <div className={`element3 element3--${state.startCondition}`}
                     style={state.resetCondition === false ? {borderColor: `var(--${progressBar}`} : {animation: 'reset-a3 5s linear 0s infinite'}}>
                </div>
            </div>
        </div>
    )
}
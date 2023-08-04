import "./progress-chart.scss"
import {CartContext} from "../../../store/store";
import {useContext} from "react";
import useColor from "../../../hook/useColor";


export default function ProgressChart(){
    const {progressBar} = useColor ()
    const [state] = useContext(CartContext);
    return(
        <div className="progressChart">
            <div className={`element1 element1--${state.startCondition}`}
                 style={{borderColor:`var(--${progressBar})`}}>
                <div className={`element2 element2--${state.startCondition}`}
                     style={{borderColor:`var(--${progressBar})`,backgroundColor:`var(--${progressBar})`}}></div>
                <div className={`element3 element3--${state.startCondition}`}
                     style={{borderColor:`var(--${progressBar})`,backgroundColor:`var(--${progressBar})`}}></div>
            </div>
        </div>
    )
}

import "./pie-ring.scss"
import {useContext, useEffect} from 'react';
import {CartContext} from "../../../components/store";



export default function PieRing(){
    const [state]=useContext(CartContext);




    return(
        <div className="pieRing">
            <div className={`element1 element1--${state.workCondition}--${state.startCondition}`}>
                <div className={`element2 element2--${state.workCondition}--${state.startCondition}`}></div>
                <div className={`element3 element3--${state.workCondition}--${state.startCondition}`}> </div>
            </div>
        </div>


    )


}
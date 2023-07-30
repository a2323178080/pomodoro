import "./pie-ring.scss"
import {useContext, useEffect} from 'react';
import {CartContext} from "../../../components/store";



export default function PieRing(){
    const [state]=useContext(CartContext);




    return(
        <div className="pieRing">
            圓餅
            <div className={`element1 element1--${state.workCondition}--${state.startCondition}`}>
                <div className={`element2 element2--${state.workCondition}--${state.startCondition}`}></div>
                <div className={`element3 element3--${state.workCondition}--${state.startCondition}`}> </div>
            </div>
            {/*圓餅*/}
            {/*<div className={state.startCondition=='hold'?"element1 element1--hold":"element1"}>*/}
            {/*    <div className={state.startCondition=='hold'?"element2 element2--hold":"element2"}></div>*/}
            {/*    <div className={state.startCondition=='hold'?"element3 element3--hold":"element3"}> </div>*/}
            {/*</div>*/}


        </div>


    )


}
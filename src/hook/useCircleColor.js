import {useState, useEffect, useContext} from 'react';
import {CartContext} from "../components/store";

const circleColor = {
    "hold": {
        "work": "pink",
        "rest": "blue"
    },
    "start": {
        "work": 'white',
        "rest": "white"
    }
}

const borderColor = {
    "work":"pink",
    "rest":"blue"
}

const resetColor = {
    "hold": {
        "work": "white",
        "rest": "white"
    },
    "start": {
        "work": 'pink',
        "rest": "blue"
    }
}

const useCircleColor = () => {
    const [ state ]=useContext(CartContext);
    const [bg, setBg] = useState("");
    const [border, setBorder] = useState("");
    const [reset, setReset] = useState("");
    const [classRoot, setClassRoot] = useState("");

    const [number, setNumber] = useState(0)

    useEffect(() => {

        if(state.startCondition === 'hold' && state.workCondition === 'work') {
            setClassRoot('pink')
        }
        setBg(circleColor[state.startCondition][state.workCondition])
        setBorder(borderColor[state.workCondition])
        setReset(resetColor[state.startCondition][state.workCondition])
    }, [state])
    return {bg, border, reset, classRoot, number}
}

export default useCircleColor;
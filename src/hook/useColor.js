import {useState, useEffect, useContext} from 'react';
import {CartContext} from "../components/store";

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
const useColor = () => {
    const [ state ]=useContext(CartContext);
    const [ringColor,setRingColor]=useState("");
    const [circleColor,setCircleColor]=useState("");
    const [reset, setReset] = useState("");

    const [allColor,setAllColor]=useState("");
    function ring(){
        if(state.workCondition === 'work') {
            return "pink"
        }
        else{
            return "blue"
        }
    }
    function circle(){
        if(state.workCondition === 'work' && state.startCondition==="hold") {
            return "pink"
        }
        else if(state.workCondition === 'rest'&&state.startCondition==="hold"){
            return "blue"
        }
        else{
            return "white"
        }
    }
    // function all(shapeType) {
    //     console.log('shapeType', shapeType)
    //     const colorMap = {
    //         'ring': state.workCondition === 'work' ? "pink" : "blue",
    //         'circle': (state.workCondition === 'work' && state.startCondition === "hold") ? "pink"
    //             : (state.workCondition === 'rest' && state.startCondition === "hold") ? "blue"
    //                 : "white"
    //     };
    //     console.log('123456', colorMap[shapeType])
    //     return colorMap[shapeType] || "Invalid shape type";
    // }
    // function all() {
    //     if (state.startCondition === "hold") {
    //         if (state.workCondition === "work") {
    //             return "pink";
    //         } else if (state.workCondition === "rest") {
    //             return "blue";
    //         } else {
    //             return "white";
    //         }
    //     } else {
    //         return "white";
    //     }
    // }
    function all(type){
        if(type === 'circle' && state.startCondition==="start"){
            return "white"
        }
        return state.workCondition === 'work'?'pink':'blue'
    }
    useEffect(() => {
        setReset(resetColor[state.startCondition][state.workCondition])
        setRingColor(ring())
        setCircleColor(circle())
    }, [state])
    return {ringColor,circleColor, reset, allColor, setAllColor, all}
}
export default useColor;
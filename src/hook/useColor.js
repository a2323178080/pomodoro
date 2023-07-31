import {useState, useEffect, useContext} from 'react';
import {CartContext} from "../components/store";


const useColor = () => {
    const [ state ]=useContext(CartContext);

    const [circle,setCircle]=useState("");
    const [ring,setRing]=useState("");
    const [reset,setReset]=useState("");
    const [triangle,setTriangle]=useState("");
    const [time,setTime]=useState("");
    const [iconCircle,setIconCircle]=useState("");
    const [home,setHome]=useState("");



    function color(type){
        if((type === 'circle' && state.startCondition==="start")||(type==="reset"&& state.startCondition==="hold")){
            return "white"
        }
        else if ((type==="reset"||"iconCircle")&& state.startCondition==="start"){
            return state.workCondition === 'work'?'pink':'blue'
        }

        else if (type==="ring"||"circle"||"triangle"||"time"||"home"){
            return state.workCondition === 'work'?'pink':'blue'
        }
    }

    useEffect(() => {
        setCircle(color('circle'))
        setRing(color('ring'))
        setReset(color('reset'))
        setTriangle(color('triangle'))
        setTime(color('time'))
        setIconCircle(color('iconCircle'))
        setHome(color('home'))
    }, [state])
    return {circle,ring,reset,triangle,time,iconCircle,home}
}
export default useColor;
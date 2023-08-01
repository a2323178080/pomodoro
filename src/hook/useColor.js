import {useState, useEffect, useContext} from 'react';
import {CartContext} from "../components/store";

const workColor = ['ring', 'circle', 'triangle', 'time', 'home','input'];

const useColor = () => {
    const [ state ]=useContext(CartContext);

    const [circle,setCircle]=useState("");
    const [ring,setRing]=useState("");
    const [reset,setReset]=useState("");
    const [triangle,setTriangle]=useState("");
    const [time,setTime]=useState("");
    const [iconCircle,setIconCircle]=useState("");
    const [home,setHome]=useState("");
    const [input,setInput]=useState("");

    const handleColor=(type)=>{
        if((type === 'circle' && state.startCondition==="start")||(type==="reset"&& state.startCondition==="hold")){
            return "white"
        }
        else if ((type==="reset"||"iconCircle")&& state.startCondition==="start"){
            return state.workCondition === 'work'?'pink':'blue'
        }

        else if (workColor.includes(type)){
            return state.workCondition === 'work'?'pink':'blue'
        }
    }

    useEffect(() => {
        setCircle(handleColor('circle'))
        setRing(handleColor('ring'))
        setReset(handleColor('reset'))
        setTriangle(handleColor('triangle'))
        setTime(handleColor('time'))
        setIconCircle(handleColor('iconCircle'))
        setHome(handleColor('home'))
        setInput(handleColor('input'))
    }, [state])
    return {circle,ring,reset,triangle,time,iconCircle,home,input}
}
export default useColor;
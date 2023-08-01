import {useState, useEffect, useContext} from 'react';
import {CartContext} from "../store/store";


const useColor = () => {
    const [ state ]=useContext(CartContext);

    const [circle,setCircle]=useState("");
    const [ring,setRing]=useState("");
    const [reset,setReset]=useState("");
    const [triangle,setTriangle]=useState("");
    const [time,setTime]=useState("");
    const [iconCircle,setIconCircle]=useState("");
    const [homeBackground,setHomeBackground]=useState("");
    const [input,setInput]=useState("");

    const handleColor=(type)=>{
        if((type === 'circle' && state.startCondition==="start")||(type==="reset"&& state.startCondition==="hold")){
            return "white"
        }
        return state.workCondition === 'work'?'pink':'blue'

    }

    useEffect(() => {
        setCircle(handleColor('circle'))
        setRing(handleColor('ring'))
        setReset(handleColor('reset'))
        setTriangle(handleColor('triangle'))
        setTime(handleColor('time'))
        setIconCircle(handleColor('iconCircle'))
        setHomeBackground(handleColor('homeBackground'))
        setInput(handleColor('input'))
    }, [state])
    return {circle,ring,reset,triangle,time,iconCircle,homeBackground,input}
}
export default useColor;
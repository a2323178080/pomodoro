import {useState, useEffect, useContext} from 'react';
import {CartContext} from "../components/store";


const useColor = () => {
    const [ state ]=useContext(CartContext);

    const [circle,setCircle]=useState("");
    const [ring,setRing]=useState("");



    function color(type){
        if(type === 'circle' && state.startCondition==="start"){
            return "white"
        }
        else if (type==="ring"||"circle"){
            return state.workCondition === 'work'?'pink':'blue'
        }
    }

    useEffect(() => {
        setCircle(color('circle'))
        setRing(color('ring'))
    }, [state])
    return {circle,ring}
}
export default useColor;
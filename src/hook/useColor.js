import {useState, useEffect, useContext} from 'react';
import {CartContext} from "../store/store";

const useColor = () => {
    const [state] = useContext(CartContext);
    const [circle, setCircle] = useState("");
    const [ring, setRing] = useState("");
    const [reset, setReset] = useState("");
    const [triangle, setTriangle] = useState("");
    const [time, setTime] = useState("");
    const [iconCircle, setIconCircle] = useState("");
    const [homeBackground, setHomeBackground] = useState("");
    const [input, setInput] = useState("");
    const [progressBar, setProgressBar] = useState("");
    const [word, setWord] = useState("");
    const [logo, setLogo] = useState("");
    const handleColor = (type) => {
        if ((type === 'circle' && state.startCondition === "start") || (type === "reset" && state.startCondition === "stop")) {
            return "white"
        }
        return state.workCondition === 'work' ? 'pink' : 'blue'
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
        setProgressBar(handleColor('progressBar'))
        setWord(handleColor('word'))
        setLogo(handleColor('logo'))
    }, [state])
    return {circle, ring, reset, triangle, time, iconCircle, homeBackground, input, progressBar, word, logo}
}
export default useColor;
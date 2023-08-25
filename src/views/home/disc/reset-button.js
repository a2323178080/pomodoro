import "./reset-button.scss"
import {useContext} from 'react';
import {CartContext} from "../../../store/store";
import useColor from "../../../hook/useColor";

export default function ResetButton({bg}) {
    const {reset} = useColor();
    const [state, dispatch] = useContext(CartContext);
    const newColor = {backgroundColor: `var(--${reset})`}

    return (
        <div className="reset-button" style={newColor}
             onClick={() => {
                 dispatch({
                     type: 'START_AND_STOP',
                     payload: "stop"
                 })
                 dispatch({
                     type: 'TIME',
                     payload: 2
                 })
                 dispatch({
                     type: 'RESET_CONDITION',
                     payload: true
                 })
             }}>
        </div>
    )
}
// import {useContext} from 'react';
// import {CartContext} from "../../../components/store";

import "./circle.scss"
export default function Circle({children, startAndHold, size, bg,borderColor}){

    // const [state,dispatch]=useContext(CartContext);

    const initStyle = {
        width: size,
        height: size,
    }


    const bgColor = {
        pink: {
            backgroundColor: 'var(--pink)',
        },
        white: {
            backgroundColor: 'var(--white)',
        },
        blue: {
            backgroundColor: 'var(--blue)',
        },

    }

    const newBorderColor = {
        pink: {
            border: '3px solid var(--pink)',
        },
        white: {
            border: '3px solid var(--white)',
        },

        blue: {
            border: '3px solid var(--blue)',
        },

    }

    const newStyle = {
        ...initStyle,
        ...bgColor[bg],
        ...newBorderColor[borderColor]
    }

    return(
        <div className="circle" style={newStyle} onClick={startAndHold}>
            {children}
        </div>
    )
}


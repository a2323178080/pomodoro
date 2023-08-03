// import {useContext} from 'react';
// import {CartContext} from "../../../components/store";
import useColor from "../hook/useColor";

import "./circle.scss"
export default function Circle({children, startAndStop, size,borderStyle, bg,borderColor}){

    const {ring,circle} = useColor ()

    // const [state,dispatch]=useContext(CartContext);

    const initStyle = {
        width: size,
        height: size,
    }

    const bgColor = {
        transparent: {
            backgroundColor: 'transparent',
        },
    }


    const newBorder={
        border:{
            border:'2px solid #003164'
        }
    }

    const newStyle = {
        backgroundColor: `var(--${circle})`,
        border: `3px solid var(--${ring})`,
        ...initStyle,
        ...bgColor[bg],
        ...newBorder[borderStyle]


    }



    return(
        <div className="circle" style={newStyle} onClick={startAndStop}>
            {children}
        </div>
    )
}


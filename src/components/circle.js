// import {useContext} from 'react';
// import {CartContext} from "../../../components/store";
import useColor from "../hook/useColor";

import "./circle.scss"
export default function Circle({children, startAndStop, size, bg,borderColor}){

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
        pink:{
            backgroundColor:'var(--pink)',
        },
        blue:{
            backgroundColor:'var(--blue)'
        },
        white:{
            backgroundColor:'var(--white)'
        }
    }

    const newStyle = {
        ...initStyle,
        backgroundColor: `var(--${circle})`,
        border: `3px solid var(--${ring})`,
        ...bgColor[bg],

    }



    return(
        <div className="circle" style={newStyle} onClick={startAndStop}>
            {children}
        </div>
    )
}


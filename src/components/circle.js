// import {useContext} from 'react';
// import {CartContext} from "../../../components/store";
import useColor from "../hook/useColor";

import "./circle.scss"
export default function Circle({children, size,borderStyle, bg,marginLeft,onClick,cursor,borderColor}){

    const {ring,circle} = useColor ()

    // const [state,dispatch]=useContext(CartContext);

    const initStyle = {
        width: size,
        height: size,
    }

    const newBackgroundColor = {
        transparent: {
            backgroundColor: 'transparent',
        },
        darkBlue:{
            backgroundColor: '#003164',
        }
    }

    const newBorder={
        darkBlue:{
            border:'2px solid #003164'
        }
    }

    const newMarginLeft={
        eight:{
            marginLeft:'8px'
        }
    }

    const newCusor={
        pointer:{
            cursor:'pointer'
        }
    }



    const newStyle = {
        backgroundColor: `var(--${circle})`,
        border: `3px solid var(--${ring})`,
        ...initStyle,
        ...newBackgroundColor[bg],
        ...newBorder[borderStyle],
        ...newMarginLeft[marginLeft],
        ...newCusor[cursor]

    }



    return(
        <div className="circle" style={newStyle} onClick={onClick}>
            {children}
        </div>
    )
}


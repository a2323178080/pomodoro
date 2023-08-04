// import {useContext} from 'react';
// import {CartContext} from "../../../components/store";
import useColor from "../hook/useColor";
import "./circle.scss"
export default function Circle({children, size,border, bg,marginLeft,onClick,cursor}){
    const {ring,circle} = useColor ()
    // const [state,dispatch]=useContext(CartContext);

    const initStyle = {
        width: size,
        height: size,
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
        backgroundColor: bg? `var(--${bg})` : `var(--${circle})`,
        border: border?border:`3px solid var(--${ring})`,
        ...initStyle,
        ...newMarginLeft[marginLeft],
        ...newCusor[cursor]
    }
    return(
        <div className="circle" style={newStyle} onClick={onClick}>
            {children}
        </div>
    )
}


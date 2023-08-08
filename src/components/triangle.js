import "./triangle.scss";
import useColor from "../hook/useColor";

export default function Triangle({borderColor}){

    const {triangle}=useColor();



    const newColor= {
        borderColor: `transparent transparent transparent var(--${triangle})`
    }



    return(
        <div className="triangle" style={newColor} >

        </div>
    )
}
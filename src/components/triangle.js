import "./triangle.scss";

export default function Triangle({borderColor}){
    const initStyle = {
        width: '0px',
        height: '0px',
    }

    const newColor= {
        pink: {
            borderColor: 'transparent transparent transparent var(--pink)'
        },
        blue: {
            borderColor: 'transparent transparent transparent var(--blue)'
        },
    }

    const newStyle = {
        ...initStyle,
        ...newColor[borderColor]
    }


    return(
        <div className="triangle" style={newStyle} >

        </div>
    )
}
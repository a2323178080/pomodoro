import "./circle.scss"
export default function Circle({children, startAndHold, size, shape, bg, border}){

    const initStyle = {
        width: size,
        height: size,
    }

    const newShape = {
        circle: {
            border: '1px solid var(--pink)'
        },
    }

    const bgColor = {
        pink: {
            backgroundColor: 'var(--pink)',
        },
        white: {
            backgroundColor: 'var(--white)',
        }
    }
    const borderWidth = {
        bold: {
            borderWidth: '5px'
        }
    }
    const newStyle = {
        ...initStyle,
        ...newShape[shape],
        ...bgColor[bg],
        ...borderWidth[border]
    }

    return(
        <div className="circle" style={newStyle} onClick={startAndHold}>
            {children}
        </div>
    )
}


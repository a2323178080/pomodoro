import "./circle.scss"
export default function Circle({customStyle, children, startAndHold}){
    return(
        <div className="circle" style={customStyle} onClick={startAndHold}>
            {children}
        </div>
    )
}


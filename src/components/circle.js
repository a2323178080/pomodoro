import "./circle.scss"
export default function Circle({customStyle, children}){
    return(
        <div className="circle" style={customStyle}>
            {children}
        </div>
    )
}
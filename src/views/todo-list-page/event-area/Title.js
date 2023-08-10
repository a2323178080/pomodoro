import "./title.scss";
const Title = ({children,area}) => {
    return(
        <div className="title">
            <div className="titleBar">
                {area==="done"&&<p>DONE</p>}
                {area==="todo"&&<p>TO-DO</p>}
                <div className="dropdown"></div>
                {children}
            </div>
        </div>
    )
}

export default Title
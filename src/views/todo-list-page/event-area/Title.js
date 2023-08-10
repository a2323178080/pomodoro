import "./title.scss";
const Title = ({children}) => {
    return(
        <div className="title">
            <div className="titleBar">test DONE
                <div className="dropdown"></div>
                {children}
            </div>
        </div>
    )
}

export default Title
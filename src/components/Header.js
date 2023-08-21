import "./Header.scss";

export default function Header({title,rightContent}){
    return(
        <div className="header">
            <div className="title">
                <div className="titleBar" >
                    <p>{title}</p>
                    <div>
                        {rightContent}
                    </div>
                </div>
            </div>
        </div>
    )
}


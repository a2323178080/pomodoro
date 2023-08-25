import "./Header.scss";

export default function Header({title, rightContent, handleClick}) {
    return (
        <div className="header" onClick={handleClick}>
            <div className="title">
                <div className="titleBar">
                    <p>{title}</p>
                    <div>
                        {rightContent}
                    </div>
                </div>
            </div>
        </div>
    )
}
import "./cross-icon.scss";
import {Link} from "react-router-dom";

export default function CrossIcon() {
    return (
        <div className="crossIcon">
            <Link to="/" className="fas fa-times fa-2x"></Link>
        </div>
    )
}
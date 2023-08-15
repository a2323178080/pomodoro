import "./icon-group.scss";
import {Link} from "react-router-dom";

export default function IconGroup(){
    return(
        <div className="iconGroup">
            <Link to="todoListPage" className="fa fa-list-ul fa-2x homeBackground--iconContent--listIcon"></Link>
            <Link to="analytics" className="fas fa-chart-bar fa-2x homeBackground--iconContent--chartIcon"></Link>
            <i className="fas fa-music fa-2x homeBackground--iconContent--musicIcon"></i>
        </div>
    )
}
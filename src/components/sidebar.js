import "./sidebar.scss";
import {Link} from "react-router-dom";

export default function Sidebar({position}) {

    return (
        <div className="sidebar">
            <Link to="/backStage/todoListPage"
                  className={`fa fa-list-ul fa-2x homeBackground--iconContent--listIcon ${position === 'onTodoListPage' ? 'pink' : 'gray'}`}>
                <span className={`font ${position === 'onTodoListPage' ? 'pink' : 'gray'}`}>TO-DO LIST</span>
            </Link>
            <Link to="/backStage/analytics"
                  className={`fas fa-chart-bar fa-2x homeBackground--iconContent--chartIcon ${position === 'onAnalyticsPage' ? 'pink' : 'gray'}`}>
                <span className={`font ${position === 'onAnalyticsPage' ? 'pink' : 'gray'}`}>ANALYTICS</span>
            </Link>
            <i className="fas fa-music fa-2x homeBackground--iconContent--musicIcon">
                <span className="font">RINGTONES</span>
            </i>
        </div>
    )
}
import "./sidebar.scss";
import {Link} from "react-router-dom";

export default function Sidebar({position}){

    const newStyle={
        onTodoListPage:{
            color:'var(--pink)'
        },
        onAnalyticsPage:{
            color:'var(--pink)'
        }
    }


    return(
        <div className="sidebar">

            <Link  to="/todoListPage" className="fa fa-list-ul fa-2x homeBackground--iconContent--listIcon" style={newStyle[position]}>
                <span className="font" style={newStyle[position]}>TO-DO LIST</span>
            </Link>

            <Link to="/analytics" className="fas fa-chart-bar fa-2x homeBackground--iconContent--chartIcon">
                <span className="font" >ANALYTICS</span>
            </Link>

            <i className="fas fa-music fa-2x homeBackground--iconContent--musicIcon">
                <span className="font">RINGTONES</span>
            </i>
        </div>
    )
}


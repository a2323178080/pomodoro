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

            <Link  to="/todoListPage" className={`fa fa-list-ul fa-2x homeBackground--iconContent--listIcon ${position==='onAnalyticsPage'?'pink':'gray'}`}>
                <span className={`font ${position==='onAnalyticsPage'?'pink':'gray'}`} >TO-DO LIST</span>
            </Link>

            <Link to="/analytics" className={`fas fa-chart-bar fa-2x homeBackground--iconContent--chartIcon ${position==='onAnalyticsPage'?'pink':'gray'}`} >
                <span className={`font ${position==='onAnalyticsPage'?'pink':'gray'}`}  >ANALYTICS</span>
            </Link>

            <i className="fas fa-music fa-2x homeBackground--iconContent--musicIcon">
                <span className="font">RINGTONES</span>
            </i>
        </div>
    )
}


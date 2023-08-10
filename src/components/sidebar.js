import "./sidebar.scss"
export default function Sidebar(){
    return(
        <div className="sidebar">
            <i  className="fa fa-list-ul fa-2x homeBackground--iconContent--listIcon"></i>
            <i className="fas fa-chart-bar fa-2x homeBackground--iconContent--chartIcon"></i>
            <i className="fas fa-music fa-2x homeBackground--iconContent--musicIcon"></i>
        </div>
    )
}
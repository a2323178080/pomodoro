import "./sidebar.scss"
export default function Sidebar({position}){

    const newStyle={
        onTodoListPage:{
            color:'var(--pink)'
        }
    }



    return(
        <div className="sidebar">
            <i  className="fa fa-list-ul fa-2x homeBackground--iconContent--listIcon" style={newStyle[position]}>
                <span className="font" style={newStyle[position]}>TO-DO LIST</span>
            </i>

            <i className="fas fa-chart-bar fa-2x homeBackground--iconContent--chartIcon">
                <span className="font">ANALYTICS</span>
            </i>

            <i className="fas fa-music fa-2x homeBackground--iconContent--musicIcon">
                <span className="font">RINGTONES</span>
            </i>
        </div>
    )
}


import "./list.scss";
import TodoItem from "./todo-item";
import DoneItem from "./done-item";


export default function List({children}){
    return(
        <div className="list">
            {children}
        </div>
    )
}
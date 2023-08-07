import "./todo-area.scss";
import TodoList from "../../home/todo-list/todo-list";

export default function TodoArea({position}){

    const newPosition={
        upperMiddle:{
            left:'475px'
        },
        center:{
            left:'475px',
            top:'152px'
        }
    }

    const newStyle={
        ...newPosition[position]
    }
    return(
        <div className="todoArea" style={newStyle}>
            <div className="todoBar">TO-DO</div>
            <TodoList/>



        </div>
    )
}
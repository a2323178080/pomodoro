import "./todo-area.scss";
import TodoList from "../../../components/todo-list";

export default function TodoArea({position}){

    const newPosition={
        upperMiddle:{
            left:'475px'
        },
        center:{
            left:'575px',
            top:'152px'
        }
    }

    const newStyle={
        ...newPosition[position],

    }
    return(
        <div className="todoArea" style={newStyle}>
            <div className="todoBar">TO-DO
                <div className="dropdown"></div>
            </div>
            <TodoList color="white"/>



        </div>
    )
}
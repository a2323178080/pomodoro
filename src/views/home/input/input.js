import {CartContext} from "../../../components/store";
import {useState, useContext} from "react";
import "./input.scss";
import {PlusOutlined} from "@ant-design/icons";

export default function Input({className}) {
    const [state, dispatch] = useContext(CartContext);

    const [value, setValue] = useState("");
    // const [todoList, setTodoList] = useState([]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const addTodo = () => {
        if (value.trim() !== "") {
            //測試
            dispatch({
                type: 'ADD_TODO',
                payload: {
                    do: value,
                    id: Date.now()
                },
            })

            setValue("");
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // 👇 Get input value
            addTodo()
        }
    }
//測試
    console.log("input頁面", state.todoList);

    return (
        <div className={`input${className ? ' ' + className : ''}`}>
            <input type="text"
                   value={value}
                   placeholder="ADD A NEW MISSION..."
                   className="inputArea"
                   onChange={handleChange}
                   onKeyDown={handleKeyDown}
            />

            <PlusOutlined className="inputArea__plusIcon"
                          onClick={addTodo}
            />




        </div>
    )
}
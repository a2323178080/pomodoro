import {CartContext} from "../../../store/store";
import {useState, useContext, useEffect} from "react";
import "./input.scss";
import {PlusOutlined} from "@ant-design/icons";
import useColor from "../../../hook/useColor";

export default function Input({className,color}) {
    const {input}=useColor();
    const [state, dispatch] = useContext(CartContext);
    const [value, setValue] = useState("");
    const cyclesNumber=state.cyclesNumber;



    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const addTodo = () => {
        if (value.trim() !== "") {
            dispatch({
                type: 'ADD_TODO',
                payload: {
                    value,cyclesNumber
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
    // localStorage.setItem("key", JSON.stringify(state.todoList));




    return (
        <div className={state.handlePosition('input', className)}  >
        <input type="text"
               value={value}
               placeholder="ADD A NEW MISSION..."
               className={`inputArea inputArea--${state.workCondition}`}
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               style={{color:`var(--${input})`}}
        />
        <PlusOutlined className="inputArea--plusIcon"
                      onClick={addTodo}
                      style={{color:`var(--${input})`}}
        />
    </div>
    )
}

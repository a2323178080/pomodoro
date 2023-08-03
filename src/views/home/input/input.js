import {CartContext} from "../../../store/store";
import {useState, useContext} from "react";
import "./input.scss";
import {PlusOutlined} from "@ant-design/icons";
import useColor from "../../../hook/useColor";

export default function Input({className,color}) {
    const {input}=useColor();
    const [state, dispatch] = useContext(CartContext);
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const addTodo = () => {
        if (value.trim() !== "") {

            dispatch({
                type: 'ADD_TODO',
                payload: {
                    value
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

    return (
        <div className={`input${className ? ' ' + className : ''}`}>
        <input type="text"
               value={value}
               placeholder="ADD A NEW MISSION..."
               className={`inputArea inputArea--${state.workCondition}`}
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               style={{color:`var(--${input})`}}

        />
        <PlusOutlined className="inputArea__plusIcon"
                      onClick={addTodo}
                      style={{color:`var(--${input})`}}
        />
    </div>
    )
}
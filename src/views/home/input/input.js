import {CartContext} from "../../../store/store";
import {useState, useContext, useEffect} from "react";
import "./input.scss";
import {PlusOutlined} from "@ant-design/icons";
import useColor from "../../../hook/useColor";

export default function Input({className,color,position}) {
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
    localStorage.setItem("key", JSON.stringify(state.todoList));


    const newPosition={
        upperMiddle:{
            left:'475px'
        }
    }

    const newStyle={
        ...newPosition[position]

    }

    return (
        <div className={`input${className ? ' ' + className : ''}`} style={newStyle}>
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

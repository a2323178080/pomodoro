import {CartContext} from "../../../store/store";
import {useState, useContext} from "react";
import "./input.scss";
import {PlusOutlined} from "@ant-design/icons";

export default function Input({className,color}) {
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

    const newColor={
        pink:{
            color:'var(--pink)'
        },
        blue:{
            color:'var(--blue)'
    }
    }
    const newStyle={
        ...newColor[color]
    }
    return (
        <div className={`input${className ? ' ' + className : ''}`}>
        <input type="text"
               value={value}
               placeholder="ADD A NEW MISSION..."
               className={`inputArea inputArea--${state.workCondition}`}
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               style={newStyle}

        />
        <PlusOutlined className="inputArea__plusIcon"
                      onClick={addTodo}
                      style={newStyle}
        />
    </div>
    )
}
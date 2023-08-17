import "./collapse.scss"
import Circle from "../../../components/circle";
import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../store/store";
import {Link} from "react-router-dom";

export default function Collapse({title,text,className,dropdownIcon}){
    const [state,dispatch] = useContext(CartContext);


    const [openCondition,setOpenCondition]=useState(true);
    const handleOpen=()=>{
        setOpenCondition(pre=>!pre);
    }

    const handlePosition =(type, className)=>type + (className ? ' ' + className : '');
    useEffect(()=>{
        dispatch({
            type:'HANDLE_POSITION',
            payload:handlePosition
        })
    },[])

    function handleDot(num) {
        let list = [];
        for (let i = 0; i < num; i++) {
            list.push(<div><Circle size={16} bg="white" border="2px solid #003164"
                                   marginLeft="eight"/>
            </div>);
        }
        return list;
    }
    const removeTodo = (id) => {
        dispatch({
            type: 'DONE_TODO',
            payload: {
                id
            }
        })
        dispatch({
            type: 'REMOVE_TODO',
            payload: {
                id
            }
        })

    }

    // const localTodoList=JSON.parse(localStorage.getItem("key"||"[]"));
    return(
        <div  className={state.handlePosition('collapse', className)}>
                <div className="title">
                    <div className="titleBar" >
                        <p>{title}</p>
                        <div >
                            {dropdownIcon&&(
                                <div className={`dropdownIcon dropdownIcon--${openCondition ? 'dropdown':'collapse'}`}
                                     onClick={handleOpen}></div>
                            )}
                        </div>
                    </div>
                </div>


            {text!==undefined&&openCondition&&
                <div >
                    {(text==="todoList"?state.todoList:state.doneTodo).map((todo)=>{
                        return(

                            <ul key={todo.id}  >
                                <li className="text">
                                    {text==="todoList"&& <span className="material-icons "
                                                             onClick={() => removeTodo(todo.id)}
                                    >radio_button_unchecked</span>}
                                    {text==="doneTodo"&&<span className="material-icons">check_circle_outline</span>}



                                    <span className="font">{todo.do}</span>




                                    {text==="todoList"&&<span className="material-icons playIcon"
                                    >play_circle_outline
                                    </span>}
                                    { text==="doneTodo"&&<span className="playIcon">{handleDot(todo.number)}</span>}
                                </li>
                            </ul>)

                    })
                    }
                </div>}

        </div>
    )
}

import {createContext} from "react";

export const CartContext=createContext({});

export function context(state,action){
    switch(action.type){
        case 'START_AND_HOLD':
            return {
                ...state,
                startCondition: action.payload
            }
        case 'WORK_AND_REST':
            return {
                ...state,
                workCondition: action.payload
            }

        case 'TIME':
            return {
                ...state,
                times: action.payload
            }

        case 'ADD_TODO':
            const newTodo = {
                do: action.payload.value,
                id: Date.now()
            }
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    newTodo
                ]
            }
        case 'REMOVE_TODO':
            const afterRemoveTodo = [...state.todoList].filter((item) => {
                return item.id !== action.payload.id;
            });
            return {
                ...state,
                todoList: afterRemoveTodo
            }
        case 'SHOW_TODO':
            return {
                ...state,
                showTodoList: action.payload.value
            }

        case 'HANDLE_POSITION':
            return {
                ...state,
                handlePosition: action.payload
            }
        default:
            return state
    }
}
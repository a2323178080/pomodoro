import {createContext} from "react";

export const CartContext=createContext({});

export function context(state,action){
    switch(action.type){
        case 'START_AND_STOP':
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
                id: Date.now(),
                number:action.payload.cyclesNumber
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



        case 'DONE_TODO':
            const newDoneTodo = [...state.todoList].map((item) => {
                if(item.id === action.payload.id) {
                    item.number =action.payload.cyclesNumber;
                }
                return item;
            });

            console.log("store檔案的",newDoneTodo);


            return {
                ...state,
                doneTodo: [
                    ...state.doneTodo,
                    ...newDoneTodo,

                ]
            }


        case 'SHOW_TODO':
            const newShowTodo = [...state.todoList].filter((item) => {
                return item.id === action.payload.id;
            });
            return {
                ...state,
                showTodoList: newShowTodo
            }

        case 'REMOVE_SHOW_TODO':
            return {
                ...state,
                showTodoList: action.payload
            }

        case 'HANDLE_POSITION':
            return {
                ...state,
                handlePosition: action.payload
            }

        case 'ADD_CYCLES':
            const newCycles = {
                id: Date.now()
            }
            return {
                ...state,
                cycles: [
                    ...state.cycles,
                    newCycles
                ]
            }

        case 'REMOVE_CYCLES':
            return {
                ...state,
                 cycles:[]
            }


        case 'COUNT_CYCLES':
            console.log('action.payload', action.payload)
            return {
                ...state,
                cyclesNumber: action.payload
            }



        case 'RESET_CONDITION':
            return {
                ...state,
                resetCondition:action.payload
            }
        default:
            return state
    }
}
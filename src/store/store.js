import {createContext} from "react";
import moment from "moment";

const localTodoList = JSON.parse(localStorage.getItem("key"));
const localDoneTodoList = JSON.parse(localStorage.getItem("doneTodoKey"));
export const CartContext = createContext({});

export const initialState={
    startCondition: 'stop',
    workCondition: 'work',
    todoList: localTodoList,
    doneTodo: localDoneTodoList || [],
    showTodoList: [],
    times: 2,
    handlePosition: () => {
    },
    cycles: [],
    cyclesNumber: 0,
    totalCyclesNumber: 0,
    dropdownCondition: "dropdown",
    open: "open",
    weekCount: 0,
    firstDay:moment(),
    lastSevenDay:moment().subtract(6, 'days')
}


export function context(state, action) {
    switch (action.type) {
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
                number: action.payload.cyclesNumber,
                date: action.payload.date,
            }
            return {
                ...state,
                todoList: state.todoList ? [...state.todoList, newTodo] : [newTodo]
            }
        case 'REMOVE_TODO':
            const afterRemoveTodo = state.todoList ? [...state.todoList].filter((item) => {
                return item.id !== action.payload.id;
            }) : [];
            return {
                ...state,
                todoList: afterRemoveTodo
            }
        case 'DONE_TODO':
            const newDoneTodo = state.todoList ? [...state.todoList].filter((item) => {
                return item.id === action.payload.id
            }).map((item) => {
                return {
                    do: item.do,
                    id: item.id,
                    number: action.payload.cyclesNumber,
                    date: action.payload.date,
                }
            }):[];
            return {
                ...state,
                doneTodo: [
                    ...state.doneTodo,
                    ...newDoneTodo,
                ]
            }
        case 'REMOVE_DONE_TODO':
            const afterRemoveDoneTodo = [...state.doneTodo].filter((item) => {
                return item.id !== action.payload.id;
            });
            return {
                ...state,
                doneTodo: afterRemoveDoneTodo
            }
        case 'SHOW_TODO':
            const newShowTodo = state.todoList ? [...state.todoList].filter((item) => {
                return item.id === action.payload.id;
            }) : [];
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
                cycles: []
            }
        case 'COUNT_CYCLES':
            return {
                ...state,
                cyclesNumber: action.payload
            }
        case 'RESET_CONDITION':
            return {
                ...state,
                resetCondition: action.payload
            }
        case 'HANDLE_DROPDOWN':
            return {
                ...state,
                dropdownCondition: action.payload
            }
        case 'HANDLE_OPEN':
            return {
                ...state,
                open: action.payload
            }
        case 'WEEK_COUNT':
            return {
                ...state,
                weekCount: action.payload
            }
        case 'COUNT_FIRST_DAY':
            return {
                ...state,
                firstDay: action.payload
            }
        case 'COUNT_LAST_SEVEN_DAY':
            return {
                ...state,
                lastSevenDay: action.payload
            }
        default:
            return state
    }
}

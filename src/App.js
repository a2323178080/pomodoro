
import {useReducer} from "react";

import Home from "./views/home/index"

import {CartContext} from "./components/store";

function App() {

  const cartReducer=useReducer((state,action)=>{
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
        const newTodoList = [...state.todoList].filter((item) => {
          return item.id !== action.payload.id;
        });
        return {
          ...state,
          todoList: newTodoList
        }

      default:
        return state
    }
  },{
    startCondition: 'hold',
    workCondition:'work',
    todoList:[]

  })
  return (
      <CartContext.Provider value={cartReducer}>
    <div>
    <Home></Home>

    </div>
      </CartContext.Provider>
  );
}
export default App;

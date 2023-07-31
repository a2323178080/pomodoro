
import {useReducer} from "react";

import Home from "./views/home/index"
import {CartContext} from "./components/store";

// import useColor from "./hook/useColor";
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
      default:
        return state
    }
  },{
    startCondition: 'hold',
    workCondition:'work',
    todoList:[],
    showTodoList:"",
  })
// const {home}=useColor();



  return (
      <CartContext.Provider value={cartReducer}>
    <div>
    <Home bg="pink"></Home>

    </div>
      </CartContext.Provider>
  );
}
export default App;

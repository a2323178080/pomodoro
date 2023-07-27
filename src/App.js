
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
        return {
          ...state,
          todoList: [
              ...state.todoList,
            action.payload
          ]
        }


      default:
        return state
    }
  },{
//測試
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

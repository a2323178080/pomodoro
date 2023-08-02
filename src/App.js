import {context} from "./store/context";

import { useReducer} from "react";

import Home from "./views/home/index"
import {CartContext} from "./store/store";

function App() {


  const cartReducer=useReducer(context
      ,{
        startCondition: 'hold',
        workCondition:'work',
        todoList:[],
        showTodoList:"",
        times:5,
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

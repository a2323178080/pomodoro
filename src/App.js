import {context} from "./store/store";

import { useReducer} from "react";

import Home from "./views/home/index"
import {CartContext} from "./store/store";

function App() {


  const cartReducer=useReducer(context
      ,{
        startCondition: 'stop',
        workCondition:'work',
        todoList:[],
        showTodoList:"",
        times:5,
        handlePosition:()=>{},
          cycles:[]
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

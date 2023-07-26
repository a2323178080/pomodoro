
import {useReducer} from "react";

import Home from "./views/home/index"

import {CartContext} from "./components/store";

function App() {

  const cartReducer=useReducer((state,action)=>{
    switch(action){
      default:
        return state
    }
  },{
    cartList:[],
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

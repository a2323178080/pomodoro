
import {useReducer} from "react";

import Home from "./views/home/index"

import {CartContext} from "./components/store";

function App() {

  const cartReducer=useReducer((state,action)=>{
    switch(action.type){
      case 'START_AND_HOLD':
        console.log('actionaction', action)
        return {
          ...state,
          buttonSwitch: action.payload
        }
      default:
        return state
    }
  },{
    buttonSwitch: false,
    todos: []
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

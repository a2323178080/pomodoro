
import {useReducer} from "react";

import Home from "./views/home/index"

import {CartContext} from "./components/store";

function App() {

  const cartReducer=useReducer((state,action)=>{
    switch(action.type){
      case 'START_AND_HOLD':

        return {
          ...state,
          buttonSwitch: action.payload
        }

      // case 'RESET':
      //   console.log('REST測試', action)
      //   return {
      //     ...state,
      //     buttonSwitch: action.payload
      //   }

      case "END":
        console.log('111111')
        return  {
          ...state,
          end: true
        }

      default:
        return state
    }
  },{
    buttonSwitch: false,
    time: 1500,
    end: false,
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

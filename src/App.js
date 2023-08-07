import {Routes,Route} from 'react-router-dom';
import {context} from "./store/store";
import { useReducer} from "react";
import Home from "./views/home/index";
import TodoListPage from "./views/todo-list-page/todo-list-page";
import {CartContext} from "./store/store";

function App() {
    const localTodoList=JSON.parse(localStorage.getItem("key"));

  const cartReducer=useReducer(context
      ,{
        startCondition: 'stop',
        workCondition:'work',
        todoList:localTodoList,
          doneTodo:[],
        showTodoList:"",
        times:5,
        handlePosition:()=>{},
          cycles:[],
          resetCondition:false
      })

  return (
      <CartContext.Provider value={cartReducer}>
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/todoListPage' element={<TodoListPage/>}></Route>
            </Routes>
        </div>
      </CartContext.Provider>
  );
}

export default App;

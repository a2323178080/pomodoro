import {Routes, Route} from 'react-router-dom';
import {context} from "./store/store";
import {useReducer} from "react";
import Home from "./views/home/index";
import TodoListPage from "./views/todo-list-page/todo-list-page";
import Analytics from "./views/analytics/analytics";
import Backstage from "./views/backstage/backstage";
import {CartContext} from "./store/store";
import moment from "moment/moment";
moment.suppressDeprecationWarnings = true;

function App() {
    const localTodoList = JSON.parse(localStorage.getItem("key"));
    const localDoneTodoList = JSON.parse(localStorage.getItem("doneTodoKey"));
    // const localShowTodoList=JSON.parse(localStorage.getItem("showTodoListKey"));
    const cartReducer = useReducer(context, {
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
    })

    return (<CartContext.Provider value={cartReducer}>
            <div>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/backStage' element={<Backstage/>}>
                        <Route path='todoListPage' element={<TodoListPage/>}></Route>
                        <Route path='analytics' element={<Analytics/>}></Route>
                    </Route>
                </Routes>
            </div>
        </CartContext.Provider>);
}
export default App;


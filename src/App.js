import {Routes, Route} from 'react-router-dom';
import {context, initialState} from "./store/store";
import {useReducer} from "react";
import Home from "./views/home/index";
import TodoListPage from "./views/todo-list-page/todo-list-page";
import Analytics from "./views/analytics/analytics";
import Backstage from "./views/backstage/backstage";
import {CartContext} from "./store/store";
import moment from "moment/moment";
moment.suppressDeprecationWarnings = true;

function App() {
    const cartReducer = useReducer(context, initialState)

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


import {CartContext} from "../../store/store";
import {useContext, useEffect, useState} from 'react';
import Disc from './disc/disc'
import "./home.scss"
import useColor from "../../hook/useColor";
import Input from "./input/input";
import Task from "./task/task.js";
import Time from "./time/time.js";
import TodoList from "./todo-list/todo-list";
import IconGroup from "./icon-group/icon-group";
import Slogan from "../../components/slogan";


export default function Home(){
    const [state, dispatch]=useContext(CartContext);
    const handlePosition =(type, className)=>type + (className ? ' ' + className : '');

    useEffect(()=>{
        dispatch({
            type:'HANDLE_POSITION',
            payload:handlePosition
        })

    },[])



    const {homeBackground,input}=useColor()

    const newBackground={
        background:` linear-gradient(to right,
        var(--light${homeBackground}) 0%,
        var(--light${homeBackground}) 830px,
        #003164 0%,
        #003164 450px)`
    }

    return(
            <div className="home"
                style={newBackground}
            >
            <div className="layout">
                <Input color={input}/>
                <Time className="onHomePage" />
                <Task/>
                <TodoList className="onHomePage" page="home"/>
                <Disc className="onHomePage"/>
                <IconGroup/>
                <Slogan/>


            </div>
        </div>
    )
}

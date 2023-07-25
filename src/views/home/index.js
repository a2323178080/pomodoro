import Disc from './disc/disc'
import "./home.scss"
import Input from "./input/input";
import Task from "./task/task.js"

export default function Home(){
    return(
        <div className="home">

            <div className="left-section">
                <div className="upper"><Input/></div>
                <div className="middle"><Task/></div>
                <div className="lower-middle"></div>
                <div className="lower"></div>
            </div>
            <div className="right-section">


            </div>

            <Disc></Disc>






            

        </div>
    )
}
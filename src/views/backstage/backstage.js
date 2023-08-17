import "./backstage.scss"
import Sidebar from "../../components/sidebar";
import Logo from "../todo-list-page/logo/logo";

import CrossIcon from "../../components/cross-icon";
import Slogan from "../../components/slogan";
import {Outlet} from "react-router-dom";

export default function Backstage(){
    return(
        <div className="backstage">
            <div className="layout">
                <div className="col-5">
                    <Sidebar position="onTodoListPage"/>
                    <Logo/>
                </div>

                <div className="col-5">
                    <Outlet/>
                </div>
                <div>
                    <CrossIcon/>
                    <Slogan/>
                </div>
            </div>

        </div>
    )
}
import "./analytics.scss"
import Sidebar from "../../components/sidebar";
import Logo from "../todo-list-page/logo/logo";
import CrossIcon from "../../components/cross-icon";
import Slogan from "../../components/slogan";

export default function Analytics(){
    return(
        <div className="analytics">
            <div className="layout">
                <div className="col-5">
                    <Sidebar position="onAnalyticsPage"/>
                    <Logo/>
                </div>

                <div className="col-5">


                    chart區域
                </div>
                <div>
                    <CrossIcon/>
                    <Slogan/>
                </div>
            </div>
        </div>
    )
}
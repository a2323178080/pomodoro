import "./logo.scss";
import useColor from "../../../hook/useColor";
import Time from "../../home/time/time"

export default function Logo() {
    const {logo} = useColor()

    return (<div className="logo">
        <Time size="forLogo" className="onTodoListPage"/>
        <div className="big_circle" style={{backgroundColor: `var(--light${logo})`}}>
            <div className="small_circle" style={{backgroundColor: `var(--${logo})`}}>
                <div className="triangle"></div>
                <div className="small_circle_border" style={{borderColor: `var(--${logo})`}}></div>
            </div>
            <div className="text">THE FIRST THING TO DO TODAY</div>
        </div>
    </div>)
}
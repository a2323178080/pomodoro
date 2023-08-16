import "./logo.scss";
export default function Logo() {
    return (
        <div className="logo">
            <div className="big_circle">
                <div className="small_circle">
                    <div className="triangle"></div>
                    <div className="small_circle_border"></div>
                </div>
                <div className="clock">
                    <div>25</div>
                    <div>:</div>
                    <div>00</div>
                </div>
                <div className="text">THE FIRST THING TO DO TODAY</div>
            </div>
        </div>
    )
}
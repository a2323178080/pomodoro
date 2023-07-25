import "./time.scss"
export default function Time(){
    const time=1500;
    const minutes = Math.floor(time / 60);
    const remainderSeconds = time % 60;
    return(

        <div className="time">
            <div>{`
                ${minutes}:${remainderSeconds < 10
                ? "0" + remainderSeconds
                : remainderSeconds}`}
            </div>
        </div>
    )
}
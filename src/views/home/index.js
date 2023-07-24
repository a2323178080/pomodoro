import Disc from './disc/disc'
import "./home.scss"

export default function Home(){
    return(
        <div className="home">
            
            <div className="left-section">
                <div className="upper"></div>
                <div className="middle"></div>
                <div className="lower-middle"></div>
                <div className="lower"></div>
            </div>

            <div className="right-section">
           

            </div>

            <Disc></Disc>


            

        </div>
    )
}
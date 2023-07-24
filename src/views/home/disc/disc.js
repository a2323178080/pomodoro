import "./disc.scss";
import Circle from '../../../components/circle'

export default function Disc(){

    const style={
        outerDisc:{
            width: '540px',
            height: '540px',
            backgroundColor: 'blue'
        },
        innerDisc:{
            width: '500px',
            height: '500px',
            backgroundColor:'red'
        }
    }

    return(
        <div className="disc">
            <Circle customStyle={style.outerDisc} >
                <Circle customStyle={style.innerDisc}/>
            </Circle>


        </div>
    )
}
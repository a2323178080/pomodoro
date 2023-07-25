
import "./disc.scss";
import Circle from '../../../components/circle';
import Triangle from "../../../components/triangle";
import ResetButton from "./reset-button";
import Input from "../input/input"

export default function Disc(){

    const style={
        outerDisc:{
            width: '540px',
            height: '540px',
            border: `5px solid var(--pink)`,


        },
        countdownBar:{
            width: '520px',
            height: '520px',
            backgroundColor:'transparent',


        },
        innerDisc:{
            width: '520px',
            height: '520px',
            backgroundColor: 'var(--pink)',
            margin:'10px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',


        },
        button:{
            width: '96px',
            height: '96px',
            backgroundColor: 'var(--white)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        triangle:{
            borderColor: 'transparent transparent transparent red',
            marginLeft:'25px',

        }
    }
    return(
        <div className="disc">

            <Circle customStyle={style.outerDisc} >
                <Circle customStyle={style.countdownBar}>
                    <Circle customStyle={style.innerDisc}>
                        <Circle customStyle={style.button} >
                            <Triangle customStyle={style.triangle}></Triangle>
                        </Circle>
                    </Circle>
                </Circle>
            </Circle>


            <ResetButton/>



        </div>
    )
}



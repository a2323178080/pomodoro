import "./button.scss";
import Circle from "../../../components/circle";
import Triangle from "../../../components/triangle";
export default function Button(){

    const style={
        circle:{
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
        <div className="button">
            <Circle customStyle={style.circle}>
                <Triangle customStyle={style.triangle}></Triangle>
            </Circle>


        </div>
    )
}
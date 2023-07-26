
import "./disc.scss";
import Circle from '../../../components/circle';
import Triangle from "../../../components/triangle";
import ResetButton from "./reset-button";
import Button from "./button";

export default function Disc({startAndHold}){

    return(
        <div className="disc">

            <Circle size={540} shape="circle" border="bold">
                <Circle size={520}>
                    <Circle shape="circle" bg="pink"  size={520}>
                        <Button></Button>
                    </Circle>
                </Circle>
            </Circle>
            <ResetButton/>
        </div>
    )
}



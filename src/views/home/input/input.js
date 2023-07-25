import "./input.scss";
import {PlusOutlined} from "@ant-design/icons";

export default function Input
    (){
    return(
        <div className="input">
            <input type="text"
                   placeholder="ADD A NEW MISSION..."
                   className="inputArea"/>

            <PlusOutlined className="inputArea__plusIcon"/>


        </div>
    )
}
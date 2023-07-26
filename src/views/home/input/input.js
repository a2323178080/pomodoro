import "./input.scss";
import {PlusOutlined} from "@ant-design/icons";

export default function Input({className})
{
    return(
        <div className={`input${ className? ' ' +className : ''  }`}>
            <input type="text"
                   placeholder="ADD A NEW MISSION..."
                   className="inputArea"/>

            <PlusOutlined className="inputArea__plusIcon"/>
        </div>
    )
}
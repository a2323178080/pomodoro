import "./title.scss";
import {CartContext} from "../../../store/store";
import {useContext} from "react";


const Title = ({children,area}) => {

    const [state, dispatch] = useContext(CartContext);

    const handleDropdown=()=>{
        dispatch({
            type: 'HANDLE_DROPDOWN',
            payload: state.dropdownCondition==="dropdown"?"collapse":"dropdown"
        })

        // alert(state.dropdownCondition);
    }




    return(

        <div className="title">

            {area==="todo"&&
                <div>
                    <div className="titleBar" >
                        <p>TO-DO</p>
                        <div className="dropdown"></div>
                    </div>
                    {children}
                </div>
            }

            {area==="done"&&
                <div>
                    <div className="titleBar" >
                        <p>DONE</p>
                        <div className="dropdown" onClick={handleDropdown}></div>
                    </div>

                    {children}
                </div>
            }







        </div>
    )

}

export default Title
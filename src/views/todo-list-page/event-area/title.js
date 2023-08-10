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

    }

    return(

        <div className="title">
            {area==="todo"&&
                <div>
                    <div className="titleBar" >
                        <p>TO-DO</p>
                        <div className="dropdownIcon dropdownIcon--dropdown"

                        ></div>
                    </div>
                    {children}
                </div>
            }
            {area==="done"&&
                <div>
                    <div className="titleBar" >
                        <p>DONE</p>
                        <div className={`dropdownIcon dropdownIcon--${state.dropdownCondition}`}


                             onClick={handleDropdown}></div>
                    </div>

                    {children}
                </div>
            }







        </div>
    )

}

export default Title
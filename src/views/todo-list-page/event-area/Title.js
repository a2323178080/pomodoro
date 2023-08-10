import "./title.scss";
const Title = ({children,area}) => {
    return(

        <div className="title">

            {area==="todo"&&
            <div className="titleBar">
                TO-DO
                <div className="dropdown"></div>
                {children}
            </div>
            }


            {area==="done"&&
                <div className="titleBar" >
                    DONE
                    <div className="dropdown"></div>
                    {children}
                </div>
            }







        </div>
    )

}

export default Title
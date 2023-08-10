import "./title.scss";
const Title = ({children,area}) => {
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
                        <div className="dropdown"></div>
                    </div>

                    {children}
                </div>
            }







        </div>
    )

}

export default Title
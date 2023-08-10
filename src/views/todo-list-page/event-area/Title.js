import "./title.scss";
const Title = ({children,area}) => {
    return(

        <div className="title">

            {area==="todo"&&
                <div>
                    <div className="titleBar" >
                        <p>TODO</p>
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
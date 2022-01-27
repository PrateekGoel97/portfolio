import {SocialData} from '../data/social';


const Social = (props) =>{

    const data = SocialData;

    console.log(data[0].icon);
    return(
        <div className="social-contact">
            {
                data.map((item) =>{
                    return (
                        <a href={item.link}>

                            <div className="social-icon-div">
                                
                                <img src={item.icon} className="social-icon" alt="social-icon" ></img>
                            </div>

                        </a>
                    )
                })
            }
        </div>
    )
}

export default Social;
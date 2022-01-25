import Social from './Social';
import coding from '../images/coding.png';

const About = (props) =>{

    return (
        <div className="about">

            <div className="about-top">

                <div className="about-left">

                        Hello there👋, I am 
                        <br /><span className="about-name">Prateek Goel</span>
                        <br/>I love experimenting with the web.

                </div>

                <div className="about-right">

                        < img src={coding} className="about-image"></img>
                </div>

            </div>
                    <Social />
            
        </div>
    )
}

export default About;
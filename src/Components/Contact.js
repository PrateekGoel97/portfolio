import Separator from "./Separator";
import Social from './Social';
import resume from '../resume.pdf';

const Contact = (props) =>{

    return (
        <div className="contact" id="Contact"> 
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of platform</p>
                    <Social />
                </div>

                <div className="download">
                    < a download href={resume}>
                    <i class="fi fi-rr-cloud-download"></i>
                    Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
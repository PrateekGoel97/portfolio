

const Mobile = ({isopen,setOpen}) =>{

    return (
        <div className="mobile">

                <div className="mobile-cross-icon"  onClick={() => setOpen(!isopen)}>
                    <i class="fi fi-rr-cross-circle"></i>
                </div>

                <div className="mobile-options">

                        <div className="mobile-option">
                                <a href="#Projects" onClick={() => setOpen(!isopen)}>
                                <i class="fi fi-rr-edit-alt option-icon"></i>
                                    Projects
                                </a>
                        </div>

                        <div className="mobile-option">
                                <a href="#Skills" onClick={() => setOpen(!isopen)}>
                                <i class="fi fi-rr-laptop option-icon"></i>
                                    Skills
                                </a>
                        </div>
                        
                        <div className="mobile-option">
                                <a href="#Work" onClick={() => setOpen(!isopen)}>
                                <i class="fi fi-rr-briefcase option-icon"></i>
                                    Work
                                </a>
                        </div>

                        <div className="mobile-option">
                                <a href="#Contact"  onClick={() => setOpen(!isopen)}>
                                <i class="fi fi-rr-portrait option-icon"></i>
                                    Contact
                                </a>
                        </div>

                </div>
        </div>
    )
}

export default Mobile;
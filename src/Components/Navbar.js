

import {useState} from 'react';
import Web from './Web';
import Mobile from './Mobile';


const Navbar  = (props) =>{

    let [isopen,setOpen] = useState(false);

    function handleOpen(){
        isopen = !isopen;

        setOpen(isopen);
    }

    return (
        <div className="navigation">
            
            <div className="logo">
                    iamPrateekGoel
            </div>

            <div className="nav-items">

                <div className="web-menu">
                    <Web />
                </div>

                <div className="mobile-menu">
                    
                    <div onClick={handleOpen} className="mobile-img">
                        < img src="https://cdn-icons-png.flaticon.com/512/2948/2948037.png" alt="hamburger-icon"/>
                    </div>

                    {isopen && <Mobile isopen={isopen}  setOpen={setOpen}/>}

                </div>

            </div>





        </div>
    )
}


export default Navbar;
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import Work from './Work';

const Body = (props) =>{

    return (
        <div className='body'>

            <section id="About" >
            < About />
            </section>

            {/* <section className='Projects'>
            <Projects />
            </section>

            <section className='Skills'>
            <Skills />
            </section>

            <section className='Work'>
            <Work />
            </section>

            <section className='Contact'>
            <Contact />
            </section> */}
        </div>
    )

}


export default Body;
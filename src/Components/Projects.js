
import {project} from '../data/projects';
import ProjectCard from './ProjectCard';
import Separator from './Separator';

const Projects = (props) =>{

    const data = project;

    return (
        <div className="projects" id="Projects">

            <Separator />

            <label className="section-title">Projects</label>

            <div>

                {
                    data.map((item) =>{
                        return <ProjectCard project={item}/>
                    })
                }

            </div>
           
        </div>
    )
}

export default Projects;



const ProjectCard = (props) =>{

    const {id,about,title,tags,demo,github,image} = props.project;

    return (
        <div className="project-card">

            <div className="project-info">
                <label className="project-title">{title}</label>

                <div className="project-links">
                        {
                            demo && (<a className="project-link" href={demo}>
                                <div className="link-button">
                                <i class="fi fi-rr-globe"></i>Demo
                                </div>
                            </a>)
                        } 

                        {
                            github&&  (<a className="project-link" href={github}>
                                        <div className="link-button">
                                        <i class="devicon-github-original colored"></i>Github
                                        </div>
                                     </a>)
                        }
                </div>

                <p>{about}</p>

                <div className="project-tags">
                    {
                        tags.map((tag) =>{
                            return (
                                <label className="tag" >{tag}</label>

                            )
                        })
                    }

                </div>

            </div>

            

           <img src={image} className="project-image" alt="project-image"></img>

        
               
        </div>
    )
}

export default ProjectCard;
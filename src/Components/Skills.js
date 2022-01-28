import Separator from './Separator';
import {skill} from '../data/skills';


const Skills = (props) =>{

    const data = skill;

    return (
        <div className="skills">
            <Separator />
            <label className="section-title">Skills</label>

            <div className="skills-container">
                {
                    data.map((item) =>{
                        return (
                            <div className="skills-section">
                                < label className="skills-section-title">{item.type}</label>
                                <div className="skills-list">
                                    {
                                        item.list.map((skill) =>{
                                            return(
                                                <div className="skill-card">
                                                    <div className="skill-icon">{skill.icon} </div>
                                                      <label className="skill-name">{skill.name}</label>  
                                                </div>
                                            )
                                        })
                                    }
                                    

                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Skills;
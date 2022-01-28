import { workData } from "../data/work";
import Separator from "./Separator";
import WorkCard from "./WorkCard";

const Work = (props) =>{

    const data = workData;

    return (
        <div className="work" id="Work">
            <Separator />
            <label className="section-title">Work</label>

            <div className="work-list">
                {
                    data.map((item) =>{
                        return (
        
                                 <WorkCard  item={item}/>
                        )
                    })

                }
            </div>

        </div>
    )
}

export default Work;
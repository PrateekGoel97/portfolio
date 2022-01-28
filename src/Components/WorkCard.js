

const WorkCard = ({item}) =>{

    return (
        <div className="work-card">

            <img src={item.companyLogo} alt="company-logo" className="work-logo"></img>

            <div className="work-info">
                <label className="company-name">{item.designation}</label>
                <div className="work-dates">
                    <small>
                    <label>{item.dateJoining}</label>-
                    <label>{item.dateEnd}</label>
                    </small>
                </div>

                <div className="work-description">
                    <p>{item.work}</p>
                </div>
            </div>

        </div>
    )
}


export default WorkCard;
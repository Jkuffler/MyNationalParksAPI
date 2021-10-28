import ParkList from "./ParkList"
import VisitCard from "./VisitCard"
import {useState} from 'react'


function CardContainer({visits, parks, handleClick, currentUser}) {
    
    const visitCards = visits.map(v => <VisitCard key={v.id} visit={v} />)
    const [formData, setFormData] = useState({
        user_id: currentUser,
        national_park: "",
        date: "",
        description: ""
    })

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(formData.national_park === "" || formData.date === "" || formData.description === "") return;
        const headers = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }

        fetch('/visits', headers)
        .then(resp => resp.json())
        .then(data => {
            setFormData({
                user_id: currentUser,
                national_park: "",
                date: "",
                description: ""
            })
        })
    }
    return(
    <div>
        <ParkList parks={parks} handleClick={handleClick}/>
        {visitCards}
        <form>
            <div className="FormInput">
                <input type="text" placeholder="National Park" onChange={handleOnChange} name="national_park" value={formData.national_park}/>
            </div>
            <div className="FormInput">
                <input type="date" onChange={handleOnChange} placeholder="Date" name="date" value={formData.date}/>                
            </div>
            <div className="FormInput">
                <input type="text" onChange={handleOnChange} placeholder="Description" name="description" value={formData.description}/>                
            </div>
                <button className="SubmitBtn" onClick={handleOnSubmit}>Add Visit</button>
        </form>
    </div>
    
    )
}

export default CardContainer
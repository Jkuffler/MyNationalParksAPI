import ParkList from "./ParkList"
import VisitCard from "./VisitCard"
import {useState} from 'react'


function CardContainer({visits, parks, handleClick, currentUser}) {
    
    const visitCards = visits.map(v => <VisitCard key={v.id} visit={v} />)

    const parkOptions = parks.map(p => <option>{p.name}</option> )

    const [formData, setFormData] = useState({
        national_park: "",
        date: "",
        description: ""
    })

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    // console.log(parks)
  
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const parkVisited = parks.filter(p => formData.national_park === p.name)
        const newVisit = {
            national_park_id: parkVisited[0].id,
            description: formData.description,
            date: formData.date
        }
        const headers = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newVisit)
        }
        fetch('/visits', headers)
        .then(resp => resp.json())
        .then(data => console.log(data))
        // {
        //     setFormData({
        //         national_park: "",
        //         date: "",
        //         description: ""
        // })
        // })
    }
    return(
    <div>
        <ParkList parks={parks} handleClick={handleClick}/>
        {visitCards}
        <form>
            <div className="FormInput">
            <select placeholder="National Park" onChange={handleOnChange} name="national_park" value={formData.national_park}>
                {parkOptions}
            </select>
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
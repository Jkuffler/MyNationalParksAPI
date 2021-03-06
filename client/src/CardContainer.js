import ParkList from "./ParkList"
import VisitCard from "./VisitCard"
import { useState } from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function CardContainer({visits, parks, handleClick, addVisit, deleteVisit, updateVisits, park}) {
    
    const [viewFeatPark, setViewFeatPark] = useState(false)

    const visitCards = visits.map(visit => <VisitCard key={visit.id} visit={visit} deleteVisit={deleteVisit} addVisit={addVisit} updateVisits={updateVisits} />)
    const parkOptions = parks.map(p => <option key={p.id}>{p.name}</option> )


    const [formData, setFormData] = useState({
        national_park: "",  
        date: "",
        description: "",
        // image_url: ""
    })

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    // console.log(parks)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const parkVisited = parks.filter(p => formData.national_park === p.name)
        const newVisit = {
            national_park_id: parkVisited[0] ? parkVisited[0].id : "",
            description: formData.description,
            date: formData.date
        }
        const headers = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newVisit)
        }
        fetch('/visits', headers)
        .then(resp => {
            if (resp.ok) {
                resp.json()
                .then(visit => addVisit(visit))
                setFormData({
                    national_park: "",
                    date: "",
                    description: ""
                })
            } else {
                resp.json()
                    .then(errors => alert(errors.error))
            }
        }
        )}

    function onHandleClick(e){
        handleClick(e)
        setViewFeatPark(true)
        console.log("test")
    }



    return(
    <Row>
        <Col>
        <ParkList parks={parks} handleClick={onHandleClick}/>
        </Col>
        {!viewFeatPark ? 
        <Col>
        <h2 className="text-center">My Passport</h2>
        {visitCards}
        <form>
            <div className="FormInput">
            <select placeholder="National Park" onChange={handleOnChange} name="national_park" value={formData.national_park}>
                <option>
                Choose a park!
                </option>
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
        </Col>
        :
        <Col className="text-center">
            <h2 className="text-center">{park.name}</h2>
            <img src={park.image_url} style={{maxWidth: "400px"}}/>
            <p>{park.description}</p>
            <p><b>Location:</b> {park.location}</p>
            <p><b>Date Established:</b> {park.date_established}</p>
            <p><b>Size:</b> {park.area} acres</p>
            <button onClick={() => setViewFeatPark(false)}>Back to passport</button>
        </Col>
}
    </Row>
    
    )
}

export default CardContainer
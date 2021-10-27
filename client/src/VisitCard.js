import { Button, Card, CardGroup } from 'react-bootstrap'
import {useState} from 'react'

function VisitCard({visit, currentUser}) {
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

    <CardGroup style={{ padding:'10px'}}>
    <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', hover: {color: 'blue'} }} className="gear-card"  >
        <Card.Header>
        <Card.Title>{visit.national_park.name}</Card.Title> 
        </Card.Header>
        <Card.Img variant="top" src={visit.national_park.image_url} style={{maxHeight: '200px', objectFit: 'contain', padding: '10px'}}/>
        <Card.Body>     
        <Card.Text><b>Date visited:</b> {visit.date}</Card.Text>
        </Card.Body>
        <Card.Body>     
        <Card.Text><b>Description:</b> {visit.description}</Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
    //     <form>
        //     <div className="FormInput">
        //         <input type="text" placeholder="National Park" onChange={handleOnChange} name="national park" value={formData.national_park}/>
        //     </div>
        //     <div className="FormInput">
        //         <input type="date" onChange={handleOnChange} placeholder="Date" name="date" value={formData.date}/>                
        //     </div>
    //         <div className="FormInput">
        //         <input type="text" onChange={handleOnChange} placeholder="Description" name="description" value={formData.description}/>                
        //      </div>
        //          <button className="SubmitBtn" onClick={handleOnSubmit}>Add Visit</button>
        // </form>
        // 
        )
    
}

export default VisitCard
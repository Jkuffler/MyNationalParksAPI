import { Button, Card, CardGroup, Row, Col, ButtonGroup } from 'react-bootstrap'
import { useState } from 'react'


function VisitCard({ visit, deleteVisit, updateVisits }) {

    const [formToggle, setFormToggle] = useState(false)
    // const [visit, setVisit] = useState(v)


    const [formData, setFormData] = useState({ 
        date: visit.date,
        description: visit.description,
        // image_url: visit.national_park.image_url
    })


    function handleDelete() {
        fetch(`/visits/${visit.id}`, {method:"DELETE"})
        deleteVisit(visit)
    }

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const headers = {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }
        fetch(`/visits/${visit.id}`, headers)
        .then(resp => {
            if (resp.ok) {
                resp.json()
                .then(visit => {
                    updateVisits(visit)
                    setFormData({
                        date: visit.date,
                        description: visit.description,
                        // image_url: visit.national_park.image_url
                    })
                })
    
                setFormToggle(!formToggle)
        
            } else {
                resp.json()
                    .then(errors => alert(errors.error))
            }
        })
    }

    return(
    <>
    <CardGroup style={{ padding:'10px'}}>
    <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', hover: {color: 'blue'} }} className="gear-card"  >
        <Card.Header>
            <Card.Title>{visit.national_park.name}</Card.Title> 
        </Card.Header>
        <Card.Img variant="top" src={visit.national_park.image_url} style={{maxHeight: '200px', objectFit: 'contain', padding: '10px'}}/>
        <Card.Body>     
        <Card.Text><b>Date visited:</b> {formData.date}</Card.Text>
        </Card.Body>
        <Card.Body>     
        <Card.Text><b>Description:</b> {visit.description}</Card.Text>
        </Card.Body>
        { !formToggle ?
        <Row>
            <ButtonGroup>
                <Button variant="light" onClick={() => setFormToggle(!formToggle)}>✏️</Button>
                <Button variant="light" onClick={handleDelete}>🗑</Button>
            </ButtonGroup>
        </Row>
        :
        <>
        <form onSubmit={handleSubmit}>
            <div className="FormInput">
                <input type="date" onChange={handleOnChange} placeholder="Date" name="date" value={formData.date}/>                
            </div>
            <div className="FormInput">
                <input type="text" onChange={handleOnChange} placeholder="Description" name="description" value={formData.description}/>                
            </div>
            {/* <div className="FormInput">
                <input type="text" onChange={handleOnChange} placeholder={visit.image_url} name="image_url" value={formData.image_url}/>                
            </div> */}
                <button className="SubmitBtn">Submit</button>
        </form>
        <Button onClick={() => setFormToggle(!formToggle)}>Back</Button>
        </>
        }
        </Card>
    </CardGroup>
    </>
        )
    
}

export default VisitCard
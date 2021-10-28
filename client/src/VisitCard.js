import { Button, Card, CardGroup } from 'react-bootstrap'


function VisitCard({visit}) {

    return(
    <>
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
    
    </>
        )
    
}

export default VisitCard
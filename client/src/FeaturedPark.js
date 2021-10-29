import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ParkList from './ParkList'

function FeaturedPark({ park, parks, handleClick }) {
    
    return (

<Row>
    <Col>
        <ParkList parks={parks} handleClick={handleClick}/>
    </Col>
    <Col>
        <h2>{park.name}</h2>
        <img src={park.image_url} style={{maxWidth: "400px"}}/>
        <p>{park.description}</p>
        <p><b>Location:</b> {park.location}</p>
        <p><b>Date Established:</b> {park.date_established}</p>
        <p><b>Size:</b> {park.area} acres</p>
    </Col>
</Row>
    )
}

export default FeaturedPark
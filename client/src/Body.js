import ParkList from './ParkList'
import FeaturedPark from './FeaturedPark'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import { useEffect, useState } from "react";
function Body () {
    const [parks, setParks] = useState([])
    const [park, setPark] = useState({})

    const url = "http://localhost:3000"

    function getParks (){
        fetch(`${url}/national_parks`)
        .then((r) => r.json())
        .then(data => setParks(data))
    }

    function getAPark (){
        fetch(`${url}/national_parks/7`)
        .then((r) => r.json())
        .then(data => setPark(data))
    }

    function handleClick(e) {
        let name = e.target.name
        let newPark = parks.filter(p => p.name === name)
        setPark(newPark[0])
    }

    useEffect(getAPark, [])
    useEffect(getParks, [])

    return(

    <Container>
        <Row>
            <Col>
                <ParkList parks={parks} handleClick={handleClick}/>
            </Col>
            <Col>
                <FeaturedPark park={park}/>
            </Col>
        </Row>
    </Container>

)

}

export default Body
import ParkList from './ParkList'
import FeaturedPark from './FeaturedPark'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardContainer from './CardContainer'
import {Switch, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Body ({currentUser, viewVisitCard}) {
    const [parks, setParks] = useState([])
    const [park, setPark] = useState({})
    const [visits, setVisits] = useState([])


    function getParks (){
        fetch(`/national_parks`)
        .then((r) => r.json())
        .then(data => setParks(data))
    }

    function getAPark (){
        fetch(`/national_parks/7`) //math.random for the featured card?
        .then((r) => r.json())
        .then(data => setPark(data))
    }

    function getVisits() {
        currentUser?
            fetch(`/visits`)
            .then((r) => r.json())
            .then(data => setVisits(data))
        : console.log("Log in required!")
    }
// console.log(visits)
    function handleClick(e) {
        let name = e.target.name
        let newPark = parks.filter(p => p.name === name)
        setPark(newPark[0])
    }

    useEffect(getAPark, [])
    useEffect(getParks, [])
    useEffect(getVisits, [])

    return(

    <Container>
        <Row>
            <Col>
                <ParkList parks={parks} handleClick={handleClick}/>
            </Col>
            <Col>
                { viewVisitCard ? <CardContainer visits={visits}/> : <FeaturedPark park={park}/>}
            </Col>
        </Row>
    </Container>

)

}

export default Body
import ParkList from './ParkList'
import FeaturedPark from './FeaturedPark'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardContainer from './CardContainer'
import {Switch, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import LoginSignup from './LoginSignup'

function Body ({currentUser, setCurrentUser}) {
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
            fetch(`/visits`)
            .then((r) => {
                if (r.ok) {
                    r.json()
                    .then(visits => setVisits(visits))
                }
                else {
                    r.json()
                    .then(errors => console.log(errors.error))
                }
            })
        }

    function handleClick(e) {
        let name = e.target.name
        let newPark = parks.filter(p => p.name === name)
        setPark(newPark[0])
    }

    useEffect(getAPark, [])
    useEffect(getParks, [])
    useEffect(getVisits, [])

    return(
        <Switch>
            <Route exact path="/">
                <FeaturedPark park={park} parks={parks} handleClick={handleClick}/>
            </Route>
            <Route exact path="/account">
                <LoginSignup currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Route>
            <Route exact path="/passport">
                <CardContainer parks={parks} handleClick={handleClick} visits={visits} currentUser={currentUser}/>
            </Route>

        </Switch>
)

}

export default Body
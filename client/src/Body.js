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
    const [fetchToggle, setFetchToggle] = useState(false)


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

    function addVisit(formData){
        setVisits([...visits, formData])
    }

    function updateVisits(visit) {
        let visitsArray = [...visits]
        let updatedVisit = visitsArray.find(v => visit.id === v.id)
        updatedVisit = {...updatedVisit, description: visit.description, date: visit.date}
        let index = visitsArray.findIndex(v => visit.id === v.id)
        visitsArray[index] = updatedVisit
        console.log(updatedVisit)
        setVisits(visitsArray)
    }

    // function refetchVisits(visit){
    //     // setFetchToggle(!fetchToggle)
    //     console.log(visit)
    //     deleteVisit(visit)
    //     }

    function deleteVisit(visit){
        setVisits(visits.filter(v => v.id !== visit.id))
    }

    function handleClick(e) {
        let name = e.target.name
        let newPark = parks.filter(p => p.name === name)
        setPark(newPark[0])
    }

    useEffect(getAPark, [])
    useEffect(getParks, [])
    useEffect(getVisits, [fetchToggle])

    return(
        <Switch>
            <Route exact path="/">
                <FeaturedPark park={park} parks={parks} handleClick={handleClick}/>
            </Route>
            <Route exact path="/account">
                <LoginSignup currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Route>
            <Route exact path="/passport">
                <CardContainer parks={parks} handleClick={handleClick} visits={visits} addVisit={addVisit} deleteVisit={deleteVisit} updateVisits={updateVisits}/>
            </Route>

        </Switch>
)

}

export default Body
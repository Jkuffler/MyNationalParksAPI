import ParkList from './ParkList'
import FeaturedPark from './FeaturedPark'


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
        fetch(`${url}/national_parks/7`) //math.random for the featured card?
        .then((r) => r.json())
        .then(data => setPark(data))
    }
console.log(park)
    useEffect(getAPark, [])
    useEffect(getParks, [])

    return(

    <div>
        <ParkList parks={parks}/>
        <FeaturedPark park={park}/>
    </div>

)

}

export default Body
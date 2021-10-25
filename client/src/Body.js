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
        fetch(`${url}/national_parks/7`)
        .then((r) => r.json())
        .then(data => setPark(data))
    }

    function handleClick(e) {
        let name = e.target.name
        let newPark = parks.filter(p => p.name === name)
        setPark(newPark[0])
    }

    console.log(park)

    useEffect(getAPark, [])
    useEffect(getParks, [])

    return(

    <div>
        <ParkList parks={parks} handleClick={handleClick}/>
        <FeaturedPark park={park}/>
    </div>

)

}

export default Body
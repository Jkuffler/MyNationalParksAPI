import ParkList from './ParkList'
import { useEffect, useState } from "react";
function Body () {
    const [parks, setParks] = useState([])
    const url = "http://localhost:3000"

    function getParks (){
        fetch(`${url}/national_parks`)
        .then((r) => r.json())
        .then(data => setParks(data))
    }
// console.table(parks)

    useEffect(getParks, [])
return(

    <div><ParkList parks={parks}/>
    </div>

)

}

export default Body
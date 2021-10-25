import { useEffect, useState } from "react";
function Body () {
    const [parks, setParks] = useState([])
    const url = "http://localhost:3000"

    function getParks (){
        fetch(`${url}/national_parks`)
        .then((r) => r.json())
        .then(data => console.table(data))
    }

    useEffect(getParks, [])
return(
    <div></div>
)

}

export default Body
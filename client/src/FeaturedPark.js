import {useState} from 'react'

function FeaturedPark({park}) {
    

    // console.log(parkObj)
    
    return (

<div>
    <h2>{park.name}</h2>
    <img src={park.image_url} style={{maxWidth: "400px"}}/>
    <p>{park.description}</p>
    <p>{park.location}</p>
    <p>{park.date_established}</p>
    <p>{park.area}</p>
    {/* <p>{park.rating}</p> */}
</div>


    )
}

export default FeaturedPark
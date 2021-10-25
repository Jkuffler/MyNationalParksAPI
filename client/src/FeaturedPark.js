import {useState} from 'react'

function FeaturedPark({ park }) {
    
    return (

<div>
    <h2>{park.name}</h2>
    <img src={park.image_url} style={{maxWidth: "400px"}}/>
    <p>{park.description}</p>
    <p><b>Location:</b> {park.location}</p>
    <p><b>Date Established:</b> {park.date_established}</p>
    <p><b>Size:</b> {park.area} acres</p>
    {/* <p>{park.rating}</p> */}
</div>

    )
}

export default FeaturedPark
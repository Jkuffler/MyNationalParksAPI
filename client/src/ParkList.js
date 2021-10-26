import Button from "react-bootstrap/Button"

function ParkList ({ parks, handleClick }) {
    
    const listItems = parks.map(park =>
        <li  key={park.id} type="none"> 
            <Button 
                name={park.name}
                variant="outline-success"
                size="sm"
                onClick={handleClick} 
                type="button" 
                className="parkList">
                    {park.name}
            </Button>
        </li>
        )

    return (
    <div>
        <label className="listTitle">National Parks</label>
        <ul>
            {listItems}
        </ul>

    </div>
    )
}

export default ParkList
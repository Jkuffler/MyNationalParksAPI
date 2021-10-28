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
        <h2 className="listTitle">National Parks</h2>
        <ul>
            {listItems}
        </ul>

    </div>
    )
}

export default ParkList
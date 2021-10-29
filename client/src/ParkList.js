import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import Container from "react-bootstrap/Container"

function ParkList ({ parks, handleClick }) {
    
    const listItems = parks.map(park =>
        <ListGroup.Item  key={park.id} type="none"> 
            <Button 
                name={park.name}
                variant="light"
                size="sm"
                onClick={handleClick} 
                type="button" 
                className="parkList">
                    {park.name}
            </Button>
        </ListGroup.Item>
        )

    return (
    <div className={"d-flex flex-column"}>
            <ul>
            <h2>National Parks</h2>
            </ul>
            <div className="overflow-auto" style={{maxWidth: "250px", maxHeight: "600px"}}>
            <ul className="text-left">
                {listItems}
            </ul>
        </div>
    </div>
    )
}

export default ParkList
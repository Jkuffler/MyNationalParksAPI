
function ParkList ({parks}) {

    const listItems = parks.map(park =>
        <li type="none"> 
            <button type="button" className="parkList">{park.name}</button>
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
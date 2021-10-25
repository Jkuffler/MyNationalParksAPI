
function ParkList ({ parks, handleClick }) {
    
    const listItems = parks.map(park =>
        <li  key={park.id} type="none"> 
            <button name={park.name} onClick={handleClick} type="button" className="parkList">{park.name}</button>
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
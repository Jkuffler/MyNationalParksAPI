import ParkList from "./ParkList"
import VisitCard from "./VisitCard"
function CardContainer({visits, parks, handleClick}){

    const visitCards = visits.map(v => <VisitCard key={v.id} visit={v}/>)
    return(
    <div>
        <ParkList parks={parks} handleClick={handleClick}/>
        {visitCards}
    </div>
    )
}

export default CardContainer
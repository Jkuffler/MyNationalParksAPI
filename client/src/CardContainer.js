import VisitCard from "./VisitCard"
function CardContainer({visits}){

    const visitCards = visits.map(v => <VisitCard key={v.id} visit={v}/>)
    return(
    <div>
        {visitCards}
    </div>
    )
}

export default CardContainer
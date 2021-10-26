import VisitCard from "./VisitCard"
function CardContainer({visits}){

    const visitCards = visits.map(v => <VisitCard visit={v}/>)
    return(
    <div>
        {visitCards}
    </div>
    )
}

export default CardContainer
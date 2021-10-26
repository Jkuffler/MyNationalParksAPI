import Card from "./Card"
function CardContainer({visits}){

    const visitCards = visits.map(v => <Card visit={v}/>)
    return(
    <div>
        {visitCards}
    </div>
    )
}

export default CardContainer
const Card = (props) =>{
    return(
        <div className = "card">
            <div className = "cardPhoto" style= {{backgroundImage:`url("${props.photo}")`}}> 
                </div>
            <h4>{props.name}</h4>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Card
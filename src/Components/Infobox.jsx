function InfoBox(props){
    return(
        <div className="container">
            <h2 className="title">{props.title}</h2>
            <p className="text">{message}</p>
            <button>Learn More</button>
        </div>
    )
}
export default InfoBox

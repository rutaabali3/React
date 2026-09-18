// This component demonstrate inline styles
function StyleCard(props){
    // In JSX, the style attribute takes a JS object
    //CSS property we use camelCase: background-color becomes backgroundColor
    // values are strings (or numbers for pixel values)
    const cardStyle = {
        backgroundColor: "#4f2b85",
        border: "2px solid #1c9484",
        borderRadius: "10px",
        padding: "100px",    //Space Inside
        margin: "100px",
        maxWidth: "1000px"
    }

    const titleStyle = {
        color: '#becabe',
        fontSize: '20px'
    }
    return(
        <div style={cardStyle}>
            <h3 style={titleStyle}>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default StyleCard

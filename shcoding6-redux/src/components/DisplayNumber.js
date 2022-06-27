function DisplayNumber(props) {

    return (
        <div>
            <h1>Display Number</h1>
            <p><b>{props.num}</b> {props.unit}</p>
        </div>
    )
}

export default DisplayNumber
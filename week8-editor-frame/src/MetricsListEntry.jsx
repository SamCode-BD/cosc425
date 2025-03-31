import "./EditorWindow.css"

function MetricsListEntry(props) {
    return(<div className = "metrics-list-entry">
        <p>{props.name}</p>
        <p>{props.landmarks}</p>
        <p>{props.abbv}</p>
        <div></div>
        <input></input>
    </div>)
}
export default MetricsListEntry
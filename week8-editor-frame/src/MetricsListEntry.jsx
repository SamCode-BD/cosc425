import "./EditorWindow.css"

function MetricsListEntry(props) {
    return(<div className = "metrics-list-entry">
        <p>{props.name}</p>
        <input></input>
    </div>)
}
export default MetricsListEntry
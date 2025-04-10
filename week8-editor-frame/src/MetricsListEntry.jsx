import "./EditorWindow.css"
import InfoModal from "./Modal/InfoModal.jsx"
function MetricsListEntry(props) {
    if(props.type == "cranium") {
        return(<div className = "metrics-list-entry">
            <p>{props.name}</p>
            <p>{props.landmarks}</p>
            <p>{props.abbv}</p>
            <div></div>
            <input></input>
        </div>)
    }
    else if(props.type == "postcranium") {
        return(<div className = "metrics-list-entry postcranial">
            <p>{props.bone}</p>
            <p>{props.metric}</p>
            <div></div>
            <input></input>
            <InfoModal title={props.bone} text={props.text}/>
            </div>);
    }
}
export default MetricsListEntry
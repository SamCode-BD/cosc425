import "/src/Right/Editor Window/EditorWindow.css"
import InfoModal from "/src/Modal/InfoModal.jsx"
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
    else if(props.type == "cranial-nonmetrics") {
        return(<div className = "metrics-list-entry cranial-nonmetrics">
            <p>{props.name}</p>
            {console.log(props.dropdown)}
            <select>
                <option></option>
                {props.dropdown.map((item, i) => 
                    <option key={i} value={item}>{item}</option>
                )}
            </select>
        </div>)
    }
}
export default MetricsListEntry
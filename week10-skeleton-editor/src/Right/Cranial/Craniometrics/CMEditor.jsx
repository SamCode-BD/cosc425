import "/src/Right/Editor Window/EditorWindow.css"
import CMCranium from "./CMCranium.jsx"
import CMMandible from "./CMMandible.jsx"
import React, {useState} from 'react'

function CMEditor(){

    let [metricsType, setMetricsType] = useState("cranium");

    const setWindow = () => {
        if(metricsType== "cranium") {
            return (<CMCranium/>);
        }
        else if(metricsType == "mandible") {
            return (<CMMandible/>);
        }
        else {
            return(<></>);
        }
    }

    return(<div className="editor-window">
        <p className = "editor-title">Craniometrics</p>
        <div className = "editor-context-buttons">
            <button onClick={() => setMetricsType("cranium")}>Cranium</button>
            <button onClick={() => setMetricsType("mandible")}>Mandible</button>
        </div>
        <>{setWindow()}</>
    </div>)
}
export default CMEditor
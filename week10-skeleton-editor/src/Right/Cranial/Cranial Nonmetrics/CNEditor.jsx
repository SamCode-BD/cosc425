import "/src/Right/Editor Window/EditorWindow.css"
import CNContents from "./CNContents";
import Macromorphoscopics from "./Macromorphoscopics";
import React, {useState} from 'react'


function CNEditor() {

    const [context, setContext] = useState("facial");

    let setWindow = () => {
        if(context == "macromorphoscopics") {
            return (<Macromorphoscopics/>)
        }
        else {
            return(<CNContents menu={context}/>);
        }
    }

    return(<div className = "editor-window">
        <p className = "editor-title">Cranial Nonmetrics</p>
        <div className = "editor-context-buttons">
            <button onClick={() => setContext("facial")}>Facial</button>
            <button onClick={() => setContext("lateral")}>Lateral</button>
            <button onClick={() => setContext("basilar")}>Basilar</button>
            <button onClick={() => setContext("mandibular")}>Mandibular</button>
            <button onClick={() => setContext("macromorphoscopics")}>Macromorphoscopics</button>
        </div>
        {setWindow()}
        </div>)
}
export default CNEditor
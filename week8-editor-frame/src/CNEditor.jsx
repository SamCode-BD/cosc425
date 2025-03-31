import "./EditorWindow.css"
import React, {useState} from 'react'


function CNEditor() {

    const [context, setContext] = useState("facial");

    let setWindow = () => {
        if(context == "facial") {
            //return(<CNFacial/>);
            return(<div>facial</div>);
        }
        else if(context == "lateral") {
            //return(<CNLateral/>);
            return(<div>lateral</div>);
        }
        else if(context == "basilar") {
            //return(<CNBasilar/>);
            return(<div>basilar</div>);
        }
        else if(context == "mandibular") {
            //return(<CNMandibular/>);
            return(<div>mandibular</div>);
        }
        else if(context == "macromorphoscopics") {
            return<div>macromorphoscopics</div>
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
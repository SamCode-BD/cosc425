import Toolbar from "./Toolbar/Toolbar.jsx"
import EditorContainer from "/src/Right/Editor Window/EditorContainer.jsx"
import "./Right.css"
import "./Toolbar/Toolbar.css"
import React, {useState} from 'react'

function Right() {
    let editorWindowContext = useState("");

    let taphonomyState = useState(false);
    let setTaphonomyActive = taphonomyState[1];

    return(<div className = "right">
        <Toolbar editorWindowContext={editorWindowContext} setTaphonomyActive={setTaphonomyActive}/>
        <EditorContainer editorWindowContext={editorWindowContext} taphonomyState={taphonomyState}/>
    </div>);
}
export default Right
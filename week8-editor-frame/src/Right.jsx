import Toolbar from "./Toolbar.jsx"
import EditorContainer from "./EditorContainer.jsx"
import "./Right.css"
import "./Toolbar.css"
import React, {useState} from 'react'

function Right() {
    let toolbarSubContext = useState("");

    let taphonomyState = useState(false);
    let setTaphonomyActive = taphonomyState[1];

    return(<div className = "right">
        <Toolbar toolbarSubContext={toolbarSubContext} setTaphonomyActive={setTaphonomyActive}/>
        <EditorContainer toolbarSubContext={toolbarSubContext} taphonomyState={taphonomyState}/>
    </div>);
}
export default Right
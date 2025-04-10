import "./Toolbar.css"
import React, {useState} from 'react'

function ButtonContainer(props) {

    let [editorWindowContext, setEditorWindowContext] = props.editorWindowContext;
    let [toolbarContext, setToolbarContext] = useState("main");

    if(toolbarContext == "main") {
        return(<div className = "button-container">
                <div className = "toolbar-button">
                    <button onClick={() => setToolbarContext("cranium")}>Cranium</button>
                </div>
                <div className = "toolbar-button">
                    <button onClick={() => setToolbarContext("postcranial")}>Postcranial</button>
                </div>
                <div className = "toolbar-button">
                    <button onClick={() => setToolbarContext("dental")}>Dental</button>
                </div>
        </div>)
    }
    else if(toolbarContext == "cranium") {
        return(<div className = "button-container">
            <div className = "toolbar-button">
                <button onClick={() => {setToolbarContext("main"); 
                                        setEditorWindowContext("");
                                        props.setTaphonomyActive(false)}}>Back</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setEditorWindowContext("craniometrics")}>Craniometrics</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setEditorWindowContext("cranial nonmetrics")}>Cranial Nonmetrics</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setEditorWindowContext("cranial inventory")}>Inventory</button>
            </div>
    </div>)
    }
    else if(toolbarContext == "postcranial") {
        return(<div className = "button-container">
            <div className = "toolbar-button">
                <button onClick={() => {setToolbarContext("main"); 
                                        setEditorWindowContext("");
                                        props.setTaphonomyActive(false)}}>Back</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setEditorWindowContext("postcranial-metrics")}>Postcranial Metrics</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setToolbarContext("postcranial-inventory")}>Postcranial Inventory</button>
            </div>
        </div>)
    }
    else if(toolbarContext == "postcranial-inventory") {
        return(<div className = "button-container">
            <div className = "toolbar-button">
                <button onClick={() => {setToolbarContext("postcranial"); 
                                        setEditorWindowContext("");
                                        props.setTaphonomyActive(false)}}>Back</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setEditorWindowContext("axial")}>Axial</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setEditorWindowContext("appendicular")}>Appendicular</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setEditorWindowContext("hands and feet")}>Hands and Feet</button>
            </div>
        </div>)
    }
    else if(toolbarContext == "dental") {
        return <div className = "button-container">
            <div className = "toolbar-button">
                <button onClick={() => {setToolbarContext("main"); 
                                        setEditorWindowContext("");
                                        props.setTaphonomyActive(false)}}>Back</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setEditorWindowContext("dental-inventory")}>Dental Inventory</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setEditorWindowContext("morphology")}>Morphology</button>
            </div>
        </div>
    }
    else {
        return(<></>)
    }
}
export default ButtonContainer
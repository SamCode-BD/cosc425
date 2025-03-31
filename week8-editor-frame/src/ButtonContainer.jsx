import "./Toolbar.css"
import React, {useState} from 'react'

function ButtonContainer(props) {

    let [toolbarSubContext, setToolbarSubContext] = props.toolbarSubContext;
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
                    <button>Dental</button>
                </div>
        </div>)
    }
    else if(toolbarContext == "cranium") {
        return(<div className = "button-container">
            <div className = "toolbar-button">
                <button onClick={() => {setToolbarContext("main"); 
                                        setToolbarSubContext("");
                                        props.setTaphonomyActive(false)}}>Back</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setToolbarSubContext("craniometrics")}>Craniometrics</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setToolbarSubContext("cranial nonmetrics")}>Cranial Nonmetrics</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setToolbarSubContext("cranial inventory")}>Inventory</button>
            </div>
    </div>)
    }
    else if(toolbarContext == "postcranial") {
        return(<div className = "button-container">
            <div className = "toolbar-button">
                <button onClick={() => {setToolbarContext("main"); 
                                        setToolbarSubContext("");
                                        props.setTaphonomyActive(false)}}>Back</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setToolbarSubContext("axial")}>Axial</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setToolbarSubContext("appendicular")}>Appendicular</button>
            </div>
            <div className = "toolbar-button">
                <button onClick={() => setToolbarSubContext("hands and feet")}>Hands and Feet</button>
            </div>
        </div>)
    }
    else {
        return(<></>)
    }
}
export default ButtonContainer
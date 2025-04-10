import "./EditorContainer.css"
import CMEditor from "./CMEditor.jsx"
import CNEditor from "./CNEditor.jsx"
import CInventory from "./CInventory.jsx"
import PostcranialMetrics from "./PostcranialMetrics.jsx"
import AxialInventory from "./AxialInventory.jsx"
import AppendicularInventory from "./AppendicularInventory.jsx"
import HandsFeetInventory from "./HandsFeetInventory.jsx"
import Taphonomy from "./Taphonomy.jsx"
import React, {useState, createContext} from 'react'

export const InventoryContext = createContext();


function EditorContainer(props){
    let [editorWindowContext, _] = props.editorWindowContext;


    let [taphonomyActive, setTaphonomyActive] = props.taphonomyState;
    let [submenuOfActiveBone, setSubmenuOfActiveBone] = useState("");
    let [activeBone, setActiveBone] = useState("");

    const inventoryContext = {
        taphonomyActive: taphonomyActive,
        setTaphonomyActive: setTaphonomyActive,
        submenuOfActiveBone: submenuOfActiveBone,
        setSubmenuOfActiveBone: setSubmenuOfActiveBone,
        activeBone: activeBone,
        setActiveBone: setActiveBone
    }

    if(editorWindowContext == "craniometrics") {
        return(<div className = "editor-container">
            <CMEditor/>
        </div>);
    }
    else if(editorWindowContext == "cranial nonmetrics") {
        return(<div className = "editor-container">
            <CNEditor/>
        </div>)
    }
    else if(editorWindowContext == "cranial inventory") {
        
        return(<div className = "editor-container">
                <div className = "editor-window inv-taph">
                    <InventoryContext.Provider value={inventoryContext}>
                        <CInventory/>
                        <Taphonomy
                                activeCategory = "cranium"/>
                    </InventoryContext.Provider>
                </div>
            
        </div>)
    }
    else if(editorWindowContext == "postcranial-metrics") {
        return(<div className="editor-container">
            <PostcranialMetrics/>
        </div>)
    }
    else if(editorWindowContext == "axial") {
        return(<div className = "editor-container">
                <div className = "editor-window inv-taph">
                    <InventoryContext.Provider value={inventoryContext}>
                        <AxialInventory/>
                        <Taphonomy 
                                activeCategory = "postcranial"/>
                    </InventoryContext.Provider>
                </div>
        </div>)
    }
    else if(editorWindowContext == "appendicular") {
        return(<div className = "editor-container">
                <div className = "editor-window inv-taph">
                    <InventoryContext.Provider value={inventoryContext}>
                        <AppendicularInventory/>
                        <Taphonomy 
                                activeCategory = "postcranial"/>
                    </InventoryContext.Provider>
                </div>
            </div>
        )
    }
    else if(editorWindowContext == "hands and feet") {
        return(<div className = "editor-container">
                <div className = "editor-window inv-taph">
                    <InventoryContext.Provider value={inventoryContext}>
                        <HandsFeetInventory/>
                        <Taphonomy
                            activeCategory = "postcranial"/>
                    </InventoryContext.Provider>
                </div>
        </div>)
    }
    else {
        return(<div className = "editor-container">

            </div>);
    }
    
}
export default EditorContainer
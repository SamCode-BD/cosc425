import "/src/Right/Editor Window/EditorContainer.css"
import CMEditor from "../Cranial/Craniometrics/CMEditor.jsx"
import CNEditor from "../Cranial/Cranial Nonmetrics/CNEditor.jsx"
import CInventory from "../Cranial/CInventory.jsx"
import PostcranialMetrics from "../Postcranial/PostcranialMetrics.jsx"
import AxialInventory from "../Postcranial/AxialInventory.jsx"
import AppendicularInventory from "../Postcranial/AppendicularInventory.jsx"
import HandsFeetInventory from "../Postcranial/HandsFeetInventory.jsx"
import DentalInventory from "../Dental/DentalInventory.jsx"
import DeciduousInventory from "../Dental/DeciduousInventory.jsx"
import Taphonomy from "../Taphonomy/Taphonomy.jsx"
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
    else if(editorWindowContext =="permanent-inventory") {
        return(<div className = "editor-container">
                <div className = "editor-window">
                    <DentalInventory type="permanent"/>
                </div>
        </div>)
    }
    else if(editorWindowContext == "deciduous-inventory") {
        return(<div className = "editor-container">
            <div className = "editor-window">
               <DentalInventory type="deciduous"/>
            </div>
    </div>)
    }
    else {
        return(<div className = "editor-container">

            </div>);
    }
    
}
export default EditorContainer
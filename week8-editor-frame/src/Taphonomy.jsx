import "./EditorWindow.css"
import TRadioButton from "./TRadioButton.jsx";
import TCheckbox from "./TCheckbox.jsx";
import { InventoryContext } from "./EditorContainer.jsx";
import React, {useState, useContext} from 'react'
import {taphonomy_options} from "./taphonomy-options-list.jsx"

function Taphonomy(props) {

    const inventoryContext = useContext(InventoryContext);
    let [activeSubmenu, setActiveSubmenu] = useState("bone color");

    const getSubtitle = () => {
        let str = "";
        let submenuOfActiveBone = inventoryContext.submenuOfActiveBone[0].toUpperCase() + inventoryContext.submenuOfActiveBone.slice(1);
        if(submenuOfActiveBone == "App-general") {
            submenuOfActiveBone = "Appendicular";
        }
        else if(submenuOfActiveBone == "Axial-general") {
            submenuOfActiveBone = "Axial";
        }
        str += submenuOfActiveBone + " - " + inventoryContext.activeBone;

        return(str);
    }

    const getContents = () => {
        if(activeSubmenu == "bone color") {
            return <div className="taphonomy-contents">
                <div className="tc-list">
                {taphonomy_options.bone_color.map((name, i) => <TRadioButton name={name} key={i}/>)}
                </div>
            </div>
        }
        if(activeSubmenu == "staining") {
            return <div className="taphonomy-contents">
                <div className="tc-list">
                {taphonomy_options.staining.map((name, i) => <TCheckbox name={name} key={i}/>)}
                </div>
            </div>
        }
        if(activeSubmenu == "surface damage") {
            return <div className="taphonomy-contents">
                <div className="tc-list">
                {taphonomy_options.surface_damage.map((name, i) => <TCheckbox name={name} key={i}/>)}
                </div>
            </div>
        }
        if(activeSubmenu == "adherent materials") {
            return (<div className="taphonomy-contents">
                <div className="tc-list">
                {taphonomy_options.adherent_materials.map((name, i) => <TCheckbox name={name} key={i}/>)}
                </div>
            </div>)
        }
        if(activeSubmenu == "modifications") {
            return (<div className="taphonomy-contents">
                <div className="tc-double">
                    <div className="tc-list">
                        <h3>Curation Modifications</h3>
                        {taphonomy_options.curation_modifications.map((name, i) => <TCheckbox name={name} key={i}/>)}
                    </div>
                    
                    <div className="tc-list">
                        <h3>Cultural Modifications</h3>
                        {taphonomy_options.cultural_modifications.map((name, i) => <TCheckbox name={name} key={i}/>)}
                    </div>
                </div>
            </div>)
        }
    }

    if(inventoryContext.taphonomyActive) {
        return(
            <div className = "taphonomy">
                <div className = "taphonomy-title">
                    Taphonomy: {getSubtitle()}
                </div>
                <div className = "condition-exposure">
                    <p className = "condition-exposure-item">Bone Condition: </p>
                    <input className = "condition-exposure-item condition-input"/>
                    <button className = "condition-exposure-item help-button">?</button>
                    <p className = "condition-exposure-item" >Surface Exposure: </p>
                    <input className = "condition-exposure-item" type="checkbox"/>
                </div>
                <div className = "taphonomy-context-buttons">
                    <button onClick={() => setActiveSubmenu("bone color")}>Bone Color</button>
                    <button onClick={() => setActiveSubmenu("staining")}>Staining</button>
                    <button onClick={() => setActiveSubmenu("surface damage")}>Surface Damage</button>
                    <button onClick={() => setActiveSubmenu("adherent materials")}>Adherent Materials</button>
                    <button onClick={() => setActiveSubmenu("modifications")}>Modifications</button>
                </div>
                {getContents()}
            </div>);
    }
    else {
        return(<></>);
    }
    
}
export default Taphonomy